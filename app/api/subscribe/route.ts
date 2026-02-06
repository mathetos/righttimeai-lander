import { NextResponse } from "next/server";

const MAILERLITE_BASE_URL = "https://connect.mailerlite.com/api";
const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const GROUP_NAME = "RightTime";

function getApiKey(): string | null {
  return process.env.MAILERLITE_API_KEY?.trim() || null;
}

function getTurnstileSecret(): string | null {
  return process.env.TURNSTILE_SECRET_KEY?.trim() || null;
}

async function verifyTurnstileToken(token: string): Promise<boolean> {
  const secret = getTurnstileSecret();
  if (!secret) return true; // Skip verification when not configured
  const res = await fetch(TURNSTILE_VERIFY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  });
  if (!res.ok) return false;
  const data = (await res.json()) as { success?: boolean };
  return data.success === true;
}

async function getOrCreateGroup(): Promise<string> {
  const MAILERLITE_API_KEY = getApiKey();
  if (!MAILERLITE_API_KEY) {
    throw new Error("MAILERLITE_API_KEY not configured");
  }
  // List groups and find "RightTime"
  const listRes = await fetch(`${MAILERLITE_BASE_URL}/groups?filter[name]=${encodeURIComponent(GROUP_NAME)}&limit=100`, {
    headers: {
      Authorization: `Bearer ${MAILERLITE_API_KEY}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  if (!listRes.ok) {
    throw new Error(`Failed to list groups: ${listRes.status}`);
  }

  const listData = await listRes.json();
  const existingGroup = listData.data?.find(
    (g: { name: string }) => g.name === GROUP_NAME
  );

  if (existingGroup) {
    return existingGroup.id;
  }

  // Group doesn't exist, create it
  const createRes = await fetch(`${MAILERLITE_BASE_URL}/groups`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${MAILERLITE_API_KEY}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ name: GROUP_NAME }),
  });

  if (!createRes.ok) {
    throw new Error(`Failed to create group: ${createRes.status}`);
  }

  const createData = await createRes.json();
  return createData.data.id;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = typeof body?.email === "string" ? body.email : null;
    const turnstileToken = typeof body?.turnstileToken === "string" ? body.turnstileToken : null;

    if (!email) {
      return NextResponse.json(
        { error: "A valid email is required." },
        { status: 400 }
      );
    }

    const secret = getTurnstileSecret();
    if (secret) {
      if (!turnstileToken) {
        return NextResponse.json(
          { error: "Verification required. Please complete the challenge." },
          { status: 400 }
        );
      }
      const valid = await verifyTurnstileToken(turnstileToken);
      if (!valid) {
        return NextResponse.json(
          { error: "Verification failed. Please try again." },
          { status: 400 }
        );
      }
    }

    const apiKey = getApiKey();
    if (!apiKey) {
      return NextResponse.json(
        { error: "Newsletter signup is not configured. Set MAILERLITE_API_KEY." },
        { status: 503 }
      );
    }

    const groupId = await getOrCreateGroup();

    // Add subscriber to the group
    const subscriberRes = await fetch(
      `${MAILERLITE_BASE_URL}/subscribers`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          groups: [groupId],
        }),
      }
    );

    if (!subscriberRes.ok) {
      const errorData = await subscriberRes.json().catch(() => null);
      const message =
        errorData?.message || `MailerLite error: ${subscriberRes.status}`;
      return NextResponse.json({ error: message }, { status: subscriberRes.status });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
