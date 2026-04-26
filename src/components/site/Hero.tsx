import { BrainCircuit, Download, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCore from "@/assets/SpringForge.png";
import { useEffect, useRef } from "react";

const stats = [
  { value: "18,000", label: "SPRING BOOT REPOS" },
  { value: "91.38%", label: "ARCH ACCURACY" },
  { value: "0.9498", label: "QA MACRO F1" },
  { value: "100%", label: "FIX SUCCESS" },
];

export const Hero = () => {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = orbRef.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const rx = ((e.clientY - cy) / cy) * -8;
      const ry = ((e.clientX - cx) / cx) * 8;
      el.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section id="overview" className="relative overflow-hidden pb-24 pt-32 sm:pb-32 sm:pt-40">
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial-glow" />
      <div className="absolute inset-0 pointer-events-none tech-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="container relative">
        <div className="mb-10 flex justify-center animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full bg-surface-high px-3 py-1.5">
            <span className="pulse-dot" />
            <span className="label-tech text-foreground/80">
              RESEARCH PROTOTYPE: SPRINGFORGE ACTIVE
            </span>
          </div>
        </div>

        <h1 className="mx-auto max-w-6xl animate-fade-up text-center font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          SpringForge:
          <br />
          <span className="text-gradient-primary">A Unified AI-Driven</span>
          <br />
          IntelliJ IDEA Plugin Ecosystem.
        </h1>

        <p
          className="mx-auto mt-8 max-w-3xl animate-fade-up text-center text-base text-muted-foreground sm:text-lg"
          style={{ animationDelay: "120ms" }}
        >
          An applied research platform for intelligent Spring Boot development that
          unifies architecture-aware code generation, quality assurance, CI/CD
          automation, and RAG-based runtime debugging inside the IDE workflow.
        </p>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up"
          style={{ animationDelay: "240ms" }}
        >
          <Button asChild variant="primary" size="lg">
            <a href="https://www.springforge.dev/" target="_blank" rel="noreferrer">
              <Download className="opacity-80" />
              Download Plugin
            </a>
          </Button>
          <Button asChild variant="terminal" size="lg">
            <a href="https://github.com/springforgeecosystem-prog" target="_blank" rel="noreferrer">
              View GitHub Repo
              <Github />
            </a>
          </Button>
        </div>

        <div className="mt-20 perspective-1000 animate-fade-up" style={{ animationDelay: "360ms" }}>
          <div
            ref={orbRef}
            className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl ghost-border surface-low preserve-3d transition-transform duration-200 ease-out"
            style={{ boxShadow: "0 40px 80px -40px hsl(153 100% 50% / 0.25)" }}
          >
            <img
              src={heroCore}
              alt="SpringForge IntelliJ plugin ecosystem visual"
              width={1536}
              height={1024}
              className="h-auto w-full opacity-85"
            />
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-70"
                style={{ top: "30%" }}
              />
            </div>
            <div className="absolute left-4 top-4 rounded-md glass-panel px-3 py-2 font-mono text-[10px] text-primary">
              <div className="flex items-center gap-2">
                <BrainCircuit className="h-3 w-3" />
                MODULES_ONLINE
              </div>
              <div className="mt-0.5 text-muted-foreground">plugin.springforge // intellij-active</div>
            </div>
            <div className="absolute bottom-4 right-4 rounded-md glass-panel px-3 py-2 font-mono text-[10px] text-muted-foreground">
              CODEGEN / QA / CI-CD / RAG DEBUG
            </div>
          </div>
        </div>

        <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="animate-fade-up text-center"
              style={{ animationDelay: `${480 + i * 80}ms` }}
            >
              <div className="font-display text-3xl font-semibold text-foreground md:text-4xl">
                {s.value}
              </div>
              <div className="label-tech mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
