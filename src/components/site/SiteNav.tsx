import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "Overview", href: "#overview" },
  { label: "Research", href: "#research" },
  { label: "Stack", href: "#stack" },
  { label: "Timeline", href: "#timeline" },
  { label: "Papers", href: "#docs" },
  { label: "Slides", href: "#presentations" },
  { label: "Team", href: "#team" },
];

export const SiteNav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className={cn(
        "mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 transition-all duration-500",
        scrolled && "glass-panel w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] rounded-full px-4"
      )}>
        <a href="#" className="flex items-center gap-2 group py-2">
          <div className="relative h-7 w-7">
            <div className="absolute inset-0 rounded-sm bg-gradient-primary opacity-90 group-hover:opacity-100 transition" />
            <div className="absolute inset-1 rounded-sm bg-background flex items-center justify-center">
              <div className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
            </div>
          </div>
          <span className="font-display font-bold tracking-tight text-foreground">
           <span className="text-primary">Spring</span>Forge<span className="text-primary">.</span>
          </span>
          <span className="hidden md:inline label-tech ml-3 border-l border-outline-variant/40 pl-3">
            ROOT / PORTFOLIO
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* <div className="hidden md:block">
          <Button asChild variant="primary" size="sm">
            <a href="#contact">Initiate Contact</a>
          </Button>
        </div> */}

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mx-3 mt-2 glass-panel rounded-2xl p-4 animate-fade-in">
          <nav className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm uppercase tracking-widest text-muted-foreground hover:text-primary py-1"
              >
                {l.label}
              </a>
            ))}
            <Button asChild variant="primary" size="sm" className="mt-2">
              <a href="#contact" onClick={() => setOpen(false)}>Initiate Contact</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
