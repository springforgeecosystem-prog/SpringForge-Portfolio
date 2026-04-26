import { useEffect, useRef, useState } from "react";

const milestones = [
  {
    date: "June 30, 2025 - July 16, 2025",
    title: "Topic Assessment Form (TAF)",
    body: "Initial topic framing, feasibility alignment, and approval of the SpringForge research direction.",
    status: "complete",
  },
  {
    date: "July 23, 2025",
    title: "Project Charter",
    body: "Project scope, objectives, responsibilities, and research execution plan formally documented.",
    status: "complete",
  },
  {
    date: "August 15, 2025",
    title: "Proposal Reports",
    body: "Submission of the proposal write-up covering the problem statement, literature background, and proposed methodology.",
    status: "complete",
  },
  {
    date: "September 8-12, 2025",
    title: "Proposal Presentation",
    body: "Formal presentation of the proposed SpringForge ecosystem, core modules, and evaluation direction.",
    status: "complete",
  },
  {
    date: "December 15-19, 2025",
    title: "Progress Presentation I",
    body: "Presentation of early implementation progress, model development, and initial validation outcomes.",
    status: "complete",
  },
  {
    date: "March 9-17, 2026",
    title: "Progress Presentation II",
    body: "Second progress review highlighting integrated module maturity and final evaluation readiness.",
    status: "complete",
  },
  {
    date: "April 26, 2026",
    title: "Final Report Submission",
    body: "Submission of the complete research report integrating the unified SpringForge paper and component studies.",
    status: "complete",
  },
  {
    date: "April 27, 2026 - May 6, 2026",
    title: "Final Presentation and Viva",
    body: "Final defense, live project walkthrough, and viva evaluation of the completed research work.",
    status: "planned",
  },
  {
    date: "May 13, 2026",
    title: "Final Thesis Submission",
    body: "Final thesis handover with all corrected deliverables, publications, and supporting materials.",
    status: "planned",
  },
];

const statusStyle: Record<string, string> = {
  complete: "bg-primary text-primary-foreground",
  active: "border border-primary/40 bg-primary/20 text-primary",
  planned: "border border-outline-variant/40 bg-surface-high text-muted-foreground",
};

export const Timeline = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => {
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const start = window.innerHeight * 0.7;
      const end = -rect.height + window.innerHeight * 0.3;
      const total = start - end;
      const scrolled = Math.min(Math.max(start - rect.top, 0), total);
      setProgress(scrolled / total);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        setVisibleIndices((prev) => {
          const next = new Set(prev);
          entries.forEach((e) => {
            if (e.isIntersecting) {
              const idx = Number((e.target as HTMLElement).dataset.index);
              next.add(idx);
            }
          });
          return next;
        });
      },
      { threshold: 0.4 },
    );

    itemRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="timeline" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial-glow opacity-50" />
      <div className="container">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <div className="label-tech mb-4">// 04_RESEARCH_TIMELINE</div>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Tracking the <span className="text-gradient-primary">research journey.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            The timeline below follows the academic milestones you provided, with exact
            dates placed into the 2025-2026 research calendar.
          </p>
        </div>

        <div ref={trackRef} className="relative mx-auto max-w-5xl">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-outline-variant/30 sm:left-1/2" />
          <div
            className="absolute left-4 top-0 w-px bg-gradient-to-b from-primary via-primary to-transparent transition-[height] duration-300 ease-out sm:left-1/2"
            style={{ height: `${progress * 100}%`, boxShadow: "0 0 12px hsl(var(--primary))" }}
          />

          <div className="space-y-16 sm:space-y-24">
            {milestones.map((m, i) => {
              const left = i % 2 === 0;
              const isVisible = visibleIndices.has(i);

              return (
                <div
                  key={m.title}
                  ref={(el) => (itemRefs.current[i] = el)}
                  data-index={i}
                  className={`relative grid items-start gap-6 transition-all duration-700 sm:grid-cols-2 sm:gap-12 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                  }`}
                  style={{
                    transform: isVisible ? `translateY(${(progress - i / milestones.length) * -20}px)` : undefined,
                  }}
                >
                  <div className="absolute left-4 top-2 z-10 -translate-x-1/2 sm:left-1/2">
                    <div
                      className={`h-3 w-3 rounded-full ${
                        m.status === "complete" || m.status === "active"
                          ? "bg-primary shadow-[0_0_12px_hsl(var(--primary))]"
                          : "border border-outline-variant bg-surface-high"
                      }`}
                    />
                  </div>

                  <div className={`pl-12 sm:pl-0 ${left ? "sm:pr-12 sm:text-right" : "sm:col-start-2 sm:pl-12"}`}>
                    <div className="font-mono text-xs uppercase tracking-widest text-primary">{m.date}</div>
                    <h3 className="mt-2 font-display text-2xl font-semibold">{m.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{m.body}</p>
                    <div
                      className={`mt-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-widest ${statusStyle[m.status]}`}
                    >
                      {m.status}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
