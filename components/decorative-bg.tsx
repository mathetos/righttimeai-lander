"use client";

/**
 * Subtle dotted-line background with small outline icons at nodes (reference design).
 * Renders as a fixed layer behind page content; lines go in different directions.
 */
export function DecorativeBg() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="dotted-lines"
            width="400"
            height="400"
            patternUnits="userSpaceOnUse"
          >
            {/* Dotted line segments at various angles */}
            <line
              x1="0"
              y1="80"
              x2="120"
              y2="40"
              stroke="hsl(220 25% 85% / 0.5)"
              strokeWidth="0.5"
              strokeDasharray="3 6"
            />
            <line
              x1="150"
              y1="0"
              x2="200"
              y2="100"
              stroke="hsl(220 25% 85% / 0.45)"
              strokeWidth="0.5"
              strokeDasharray="3 6"
            />
            <line
              x1="280"
              y1="60"
              x2="380"
              y2="120"
              stroke="hsl(220 25% 85% / 0.4)"
              strokeWidth="0.5"
              strokeDasharray="3 6"
            />
            <line
              x1="50"
              y1="180"
              x2="180"
              y2="220"
              stroke="hsl(220 25% 85% / 0.5)"
              strokeWidth="0.5"
              strokeDasharray="3 6"
            />
            <line
              x1="220"
              y1="150"
              x2="320"
              y2="80"
              stroke="hsl(220 25% 85% / 0.4)"
              strokeWidth="0.5"
              strokeDasharray="3 6"
            />
            <line
              x1="0"
              y1="280"
              x2="100"
              y2="320"
              stroke="hsl(220 25% 85% / 0.45)"
              strokeWidth="0.5"
              strokeDasharray="3 6"
            />
            <line
              x1="250"
              y1="250"
              x2="350"
              y2="180"
              stroke="hsl(220 25% 85% / 0.4)"
              strokeWidth="0.5"
              strokeDasharray="3 6"
            />
            <line
              x1="80"
              y1="350"
              x2="200"
              y2="380"
              stroke="hsl(220 25% 85% / 0.45)"
              strokeWidth="0.5"
              strokeDasharray="3 6"
            />
            <line
              x1="300"
              y1="320"
              x2="380"
              y2="280"
              stroke="hsl(220 25% 85% / 0.4)"
              strokeWidth="0.5"
              strokeDasharray="3 6"
            />
            {/* Small outline nodes at line endpoints */}
            <circle cx="0" cy="80" r="2.5" fill="none" stroke="hsl(220 25% 82% / 0.5)" strokeWidth="0.8" />
            <circle cx="120" cy="40" r="2.5" fill="none" stroke="hsl(220 25% 82% / 0.5)" strokeWidth="0.8" />
            <circle cx="150" cy="0" r="2.5" fill="none" stroke="hsl(220 25% 82% / 0.45)" strokeWidth="0.8" />
            <circle cx="280" cy="60" r="2.5" fill="none" stroke="hsl(220 25% 82% / 0.45)" strokeWidth="0.8" />
            <circle cx="50" cy="180" r="2.5" fill="none" stroke="hsl(220 25% 82% / 0.5)" strokeWidth="0.8" />
            <circle cx="250" cy="250" r="2.5" fill="none" stroke="hsl(220 25% 82% / 0.45)" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotted-lines)" />
      </svg>
      {/* Second offset pattern for more organic coverage */}
      <svg
        className="absolute inset-0 h-full w-full"
        style={{ transform: "translate(200px, 150px)" }}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="dotted-lines-2"
            width="350"
            height="350"
            patternUnits="userSpaceOnUse"
          >
            <line
              x1="20"
              y1="0"
              x2="120"
              y2="90"
              stroke="hsl(220 25% 88% / 0.4)"
              strokeWidth="0.5"
              strokeDasharray="2 5"
            />
            <line
              x1="200"
              y1="50"
              x2="280"
              y2="140"
              stroke="hsl(220 25% 88% / 0.35)"
              strokeWidth="0.5"
              strokeDasharray="2 5"
            />
            <line
              x1="50"
              y1="200"
              x2="150"
              y2="280"
              stroke="hsl(220 25% 88% / 0.4)"
              strokeWidth="0.5"
              strokeDasharray="2 5"
            />
            <line
              x1="250"
              y1="220"
              x2="320"
              y2="300"
              stroke="hsl(220 25% 88% / 0.35)"
              strokeWidth="0.5"
              strokeDasharray="2 5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotted-lines-2)" />
      </svg>
    </div>
  );
}
