import type { LucideIcon } from "lucide-react";
import type { PointerEvent as ReactPointerEvent } from "react";
import {
  Binary,
  Blocks,
  Bot,
  Box,
  Braces,
  Bug,
  CloudCog,
  Code2,
  DatabaseZap,
  GitBranch,
  Layers3,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stack = [
  { name: "Java", category: "Core Language", glyph: "JV", icon: Code2 },
  { name: "Spring Boot", category: "Framework", glyph: "SB", icon: Layers3 },
  { name: "IntelliJ IDEA", category: "Plugin Host", glyph: "IJ", icon: Braces },
  { name: "PSI Analysis", category: "Static Context", glyph: "PS", icon: Binary },
  { name: "Random Forest", category: "Classification", glyph: "RF", icon: GitBranch },
  { name: "XGBoost", category: "Regression", glyph: "XG", icon: Blocks },
  { name: "Gemini", category: "LLM Generation", glyph: "GM", icon: Bot },
  { name: "Claude Sonnet 4", category: "CI/CD LLM", glyph: "CS", icon: Box },
  { name: "AWS Bedrock", category: "Model Runtime", glyph: "AW", icon: CloudCog },
  { name: "MCP", category: "Context Injection", glyph: "MC", icon: DatabaseZap },
  { name: "RAG + Vectors", category: "Runtime Debug", glyph: "RG", icon: Bug },
  { name: "Hadolint", category: "Validation", glyph: "HD", icon: ShieldCheck },
] satisfies { name: string; category: string; glyph: string; icon: LucideIcon }[];

export const TechStack = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), {
      threshold: 0.15,
    });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const rotateY = ((offsetX / rect.width) - 0.5) * 16;
    const rotateX = (0.5 - offsetY / rect.height) * 16;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  };

  const handlePointerLeave = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
  };

  return (
    <section id="stack" ref={sectionRef} className="relative py-24 sm:py-32 surface-lowest">
      <div className="container">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="label-tech mb-4">// 03_TECH_STACK</div>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
              Built on the <span className="text-gradient-primary">SpringForge stack.</span>
            </h2>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              The implementation spans IntelliJ plugin engineering, machine learning,
              large language models, DevSecOps validation, and retrieval-augmented
              debugging for Spring Boot.
            </p>
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="pulse-dot" /> 12 ACTIVE COMPONENTS
            </div>
            <div className="mt-1">research stack // plugin ecosystem</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {stack.map((tech, i) => (
            <div
              key={tech.name}
              className={`relative transition-all duration-700 ${
                visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div
                data-cursor-hover
                onPointerMove={handlePointerMove}
                onPointerLeave={handlePointerLeave}
                className="group relative aspect-square overflow-hidden rounded-xl ghost-border surface-low p-4 transition-[transform,background-color,box-shadow,border-color] duration-300 ease-out hover:bg-surface-high hover:shadow-neon"
                style={{ transformStyle: "preserve-3d", willChange: "transform" }}
              >
                <div className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.18),transparent_38%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-[1px] rounded-[calc(theme(borderRadius.xl)-1px)] bg-gradient-to-br from-white/[0.04] via-transparent to-transparent opacity-70" />

                <div className="relative flex h-full flex-col justify-between" style={{ transform: "translateZ(18px)" }}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/16">
                      <tech.icon className="h-5 w-5" />
                    </div>
                    <div className="font-display text-xl font-bold text-muted-foreground transition-colors group-hover:text-primary">
                      {tech.glyph}
                    </div>
                  </div>

                  <div>
                    <div className="font-display text-sm font-semibold text-foreground">{tech.name}</div>
                    <div className="label-tech mt-1 transition-colors group-hover:text-primary/80">
                      {tech.category}
                    </div>
                  </div>
                </div>

                <div
                  className="pointer-events-none absolute inset-x-6 bottom-4 h-8 rounded-full bg-primary/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                  style={{ transform: "translateZ(-20px)" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
