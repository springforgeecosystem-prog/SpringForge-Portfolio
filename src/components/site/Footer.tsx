export const Footer = () => {
  return (
    <footer className="relative border-t border-outline-variant/30 surface-lowest">
      <div className="container py-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
            <span className="font-display font-semibold tracking-tight">SpringForge</span>
            <span className="label-tech ml-3 border-l border-outline-variant/40 pl-3">
              © 2026 · RESEARCH PORTFOLIO
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            <a href="#research" className="transition-colors hover:text-primary">
              Research
            </a>
            <a href="#docs" className="transition-colors hover:text-primary">
              Papers
            </a>
            <a href="#presentations" className="transition-colors hover:text-primary">
              Slides
            </a>
            <a href="#team" className="transition-colors hover:text-primary">
              Team
            </a>
            <a href="#contact" className="transition-colors hover:text-primary">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-4 font-mono text-[10px] text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <span className="pulse-dot" /> CODE GENERATION MODULE
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="pulse-dot" /> QUALITY ASSURANCE MODULE
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="pulse-dot" /> CI/CD ASSISTANT MODULE
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="pulse-dot" /> RAG DEBUGGING MODULE
          </span>
        </div>
      </div>
    </footer>
  );
};
