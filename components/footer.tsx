export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <img
            src="/images/righttimewordmark.png"
            alt="RightTime"
            className="h-5"
          />
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} RightTime. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
