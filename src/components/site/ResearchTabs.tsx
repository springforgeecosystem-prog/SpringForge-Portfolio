import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertTriangle,
  BookOpen,
  GitBranch,
  Lightbulb,
  Microscope,
  Target,
  type LucideIcon,
} from "lucide-react";

type ResearchSection = {
  id: string;
  icon: LucideIcon;
  label: string;
  shortLabel: string;
  title: string;
  summary: string;
  narrativeTitle: string;
  narrative: string[];
  bulletsTitle: string;
  bullets: string[];
  tags?: string[];
  note?: string;
  singleColumn?: boolean;
};

const sections: ResearchSection[] = [
  {
    id: "problem",
    icon: AlertTriangle,
    label: "Research Problem",
    shortLabel: "Problem",
    title: "Spring Boot productivity still breaks across the delivery lifecycle",
    summary:
      "Developers can write code faster than ever, but architecture drift, hidden anti-patterns, manual DevOps setup, and framework-specific runtime failures still slow enterprise Spring Boot delivery.",
    narrativeTitle: "The practical bottleneck",
    narrative: [
      "The project begins from a real software engineering pain point: Spring Boot teams do not struggle with framework adoption, they struggle with preserving quality and consistency as projects grow. Generic AI coding tools generate syntactically valid code, but they often ignore architectural boundaries, project conventions, and lifecycle-specific context.",
      "That gap becomes expensive across the full pipeline. Developers switch between scaffolding tools, static analyzers, terminal-based CI/CD validation, documentation, and generic chat assistants to resolve problems that are deeply connected. SpringForge treats those issues as one integrated workflow rather than four unrelated tasks.",
    ],
    bulletsTitle: "Observed pain points",
    bullets: [
      "Architecture-inconsistent code generation creates tightly coupled Spring components",
      "Architectural anti-patterns accumulate long before conventional tools catch them",
      "Manual Dockerfile and pipeline authoring consumes engineering time and introduces security risk",
      "Runtime debugging is slowed by Spring lifecycle complexity, stack-trace noise, and hallucinated AI fixes",
    ],
    tags: ["Architecture Drift", "Quality Erosion", "DevOps Friction"],
    note:
      "The unified paper frames these as four persistent productivity bottlenecks in enterprise Spring Boot development.",
  },
  {
    id: "gap",
    icon: GitBranch,
    label: "Research Gap",
    shortLabel: "Gap",
    title: "Existing tools solve fragments, not the full developer workflow",
    summary:
      "Template generators, static analyzers, AI code assistants, and debugging tools each address a slice of the problem, but none combine deep Spring Boot context with IDE-native, end-to-end assistance.",
    narrativeTitle: "What current tooling misses",
    narrative: [
      "JHipster and Spring Initializr are useful for bootstrapping, yet they are detached from the structure and conventions of an existing project. General LLM assistants can autocomplete code, but they are not architecture-aware and frequently cross layer boundaries or misuse Spring stereotypes.",
      "Quality tools such as SonarQube, PMD, and FindBugs focus on rules and smells rather than architecture-pattern context. Likewise, CI/CD linters and runtime helpers tend to live outside the IDE, forcing developers to context-switch instead of receiving grounded, actionable guidance inside the same working environment.",
    ],
    bulletsTitle: "The missing intersection",
    bullets: [
      "No single IntelliJ-native solution spans generation, quality assurance, CI/CD, and debugging",
      "Most tools lack project-specific Spring Boot lifecycle awareness",
      "Rule-based analysis struggles to reason about architecture context across layered, MVC, clean, and hexagonal designs",
      "Generic LLMs require grounded retrieval and structured context injection to produce trustworthy fixes",
    ],
    tags: ["IDE-Native", "Context-Aware", "Lifecycle Coverage"],
    note:
      "SpringForge is positioned as a cohesive plugin ecosystem rather than a standalone feature plugin.",
  },
  {
    id: "literature",
    icon: BookOpen,
    label: "Literature Survey",
    shortLabel: "Literature",
    title: "The literature validates the need for a hybrid, architecture-aware approach",
    summary:
      "Prior work supports each building block independently: ML-based architecture recovery, anti-pattern detection, LLM-assisted code generation, validation-coupled IaC generation, and retrieval-augmented debugging.",
    narrativeTitle: "How the research landscape informs SpringForge",
    narrative: [
      "The code generation paper draws from architecture recovery and project-structure analysis research, then shows that a tuned Random Forest model can classify Spring Boot architectural style more effectively than several stronger baseline learners. The quality paper extends this with architecture-aware anti-pattern detection and hybrid scoring, showing why pure rule systems are insufficient.",
      "The CI/CD and debugging papers further support the need for validation and retrieval. Infrastructure generation must be paired with policy-enforcing checks, while framework-specific runtime debugging improves when live stack traces are augmented with curated knowledge from official documentation and validated community sources.",
    ],
    bulletsTitle: "Key research foundations",
    bullets: [
      "Architecture prediction over 18,000 Spring Boot repositories",
      "Balanced anti-pattern classification over 141,228 samples across nine violation classes",
      "Validation-driven CI/CD generation with Hadolint and custom Spring Boot compliance rules",
      "RAG-based debugging grounded in official Spring documentation, migration guides, and vetted Stack Overflow solutions",
    ],
    tags: ["ML + LLM", "Static Analysis", "RAG", "DevSecOps"],
    note:
      "Across the papers, the common design pattern is hybrid intelligence: ML or retrieval narrows the problem before the LLM generates guidance or code.",
  },
  {
    id: "objectives",
    icon: Target,
    label: "Research Objectives",
    shortLabel: "Objectives",
    title: "Build and evaluate an AI-assisted Spring Boot workflow that developers can trust",
    summary:
      "The research objective is not just to generate artifacts, but to improve correctness, explainability, and lifecycle productivity within a single IntelliJ IDEA experience.",
    narrativeTitle: "Project objectives",
    narrative: [
      "SpringForge aims to unify four AI-driven modules so developers can stay inside the IDE while moving from project understanding to code generation, quality assurance, delivery automation, and runtime problem resolution. Each module is evaluated with measurable outcomes rather than anecdotal demos.",
    ],
    bulletsTitle: "Target outcomes",
    bullets: [
      "Predict Spring Boot architecture accurately enough to guide context-aware code generation",
      "Detect architecture-aware anti-patterns and estimate maintainability-oriented quality scores with minimal latency",
      "Generate safer CI/CD artifacts with automated validation, remediation, and explainability",
      "Resolve complex Spring Boot runtime failures using retrieval-augmented, project-grounded fix generation",
      "Deliver the full workflow as an IntelliJ IDEA plugin ecosystem with reduced context switching",
    ],
    tags: ["Accuracy", "Trust", "Workflow Integration"],
    note:
      "The published evaluations emphasize measurable model quality, reduction of violations, and fix-generation effectiveness.",
    singleColumn: true,
  },
  {
    id: "solution",
    icon: Lightbulb,
    label: "Research Solution",
    shortLabel: "Solution",
    title: "SpringForge unifies four AI modules inside IntelliJ IDEA",
    summary:
      "The proposed solution is a plugin ecosystem that combines static analysis, machine learning, large language models, validation tooling, and RAG-based knowledge retrieval.",
    narrativeTitle: "Module architecture",
    narrative: [
      "The Architecture-Aware Code Generation module uses static project signals and a tuned Random Forest classifier to infer architecture style, then injects rich context into Gemini to generate project-consistent Spring Boot components. The Quality Assurance module extracts PSI-based structural features, classifies anti-patterns with Random Forest, predicts quality scores with XGBoost, and uses Gemini to reduce false positives and enrich fixes.",
      "The CI/CD Assistant uses Claude Sonnet 4 through AWS Bedrock with live MCP context from local and remote repositories to generate Dockerfiles and pipeline artifacts, then validates them with Hadolint and custom compliance rules. The Runtime Debugging module captures live stack traces, retrieves grounded knowledge from a curated vector base, and generates Spring-specific root-cause resolutions.",
    ],
    bulletsTitle: "Core modules",
    bullets: [
      "Architecture-aware generation with static analysis, architecture prediction, and Gemini code synthesis",
      "Quality assurance with anti-pattern classification, quality score regression, and hybrid LLM validation",
      "Context-aware CI/CD generation with MCP, Hadolint, auto-fix logic, and explainability",
      "RAG-based runtime debugging with live error capture, semantic retrieval, and grounded fix generation",
    ],
    tags: ["IntelliJ Plugin", "Gemini", "Claude Sonnet 4", "RAG"],
    note:
      "The main paper presents SpringForge as a cohesive ecosystem rather than four unrelated experiments.",
  },
  {
    id: "method",
    icon: Microscope,
    label: "Methodology",
    shortLabel: "Method",
    title: "The evaluation blends datasets, model benchmarking, artifact validation, and debugging trials",
    summary:
      "Each module is validated with its own empirical setup, but the broader methodology consistently compares grounded, context-aware assistance against weaker or generic alternatives.",
    narrativeTitle: "Evaluation design",
    narrative: [
      "The code generation component benchmarks seven candidate models over a curated dataset of 18,000 public Spring Boot repositories. The quality engine builds a balanced 141,228-sample dataset across architecture paradigms and anti-pattern categories. The CI/CD assistant is evaluated on twenty representative Spring Boot projects, while the RAG debugger is tested against twenty-five complex real-world runtime error scenarios.",
      "The metrics focus on practical development outcomes: classification accuracy, macro F1, regression error, validation violations, auto-fix correctness, explainability coverage, and fix-generation success. This makes the site content defensible against the papers instead of sounding like marketing language.",
    ],
    bulletsTitle: "Evidence base",
    bullets: [
      "Architecture classifier: 91.38% accuracy and macro F1 of 0.9148",
      "Anti-pattern classifier: macro F1 of 0.9498 with near-zero IDE latency",
      "Quality regressor: XGBoost selected with RMSE of 7.903",
      "CI/CD module: 78.6% fewer validation violations and 100% auto-fix correctness across evaluated categories",
      "RAG debugger: 100% fix-generation success across 25 complex Spring Boot runtime scenarios",
    ],
    tags: ["Benchmarking", "Comparative Evaluation", "Applied Results"],
    note:
      "These figures come directly from the abstracts and evaluation summaries of the provided papers.",
  },
];

const BriefCard = ({
  title,
  children,
  accent,
}: {
  title: string;
  children: React.ReactNode;
  accent?: React.ReactNode;
}) => (
  <article className="rounded-2xl border border-outline-variant/30 surface-low p-6 sm:p-7">
    <div className="flex items-start justify-between gap-4">
      <h3 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
        {title}
      </h3>
      {accent}
    </div>
    <div className="mt-5">{children}</div>
  </article>
);

export const ResearchTabs = () => {
  return (
    <section id="research" className="relative py-24 sm:py-32">
      <div className="container">
        <div className="max-w-3xl">
          <div className="label-tech mb-4">// 02_RESEARCH_BRIEF</div>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Mapping the <span className="text-gradient-primary">research brief.</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            The site now follows the structure of your papers: the problem, the gap,
            the literature support, the objectives, the unified SpringForge solution,
            and the evidence used to validate it.
          </p>
        </div>

        <Tabs defaultValue="problem" className="mt-14">
          <div className="overflow-x-auto pb-1">
            <TabsList className="flex h-auto min-w-max gap-6 rounded-none border-b border-outline-variant/40 bg-transparent p-0">
              {sections.map((section) => (
                <TabsTrigger
                  key={section.id}
                  value={section.id}
                  className="group relative rounded-none border-b-2 border-transparent bg-transparent px-0 pb-4 pt-0 font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground shadow-none transition-colors duration-300 hover:text-foreground data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none"
                >
                  <section.icon className="mr-2 h-3.5 w-3.5 opacity-70 transition-opacity group-data-[state=active]:opacity-100" />
                  {section.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {sections.map((section, index) => (
            <TabsContent
              key={section.id}
              value={section.id}
              className="mt-8 rounded-[28px] border border-outline-variant/30 bg-gradient-to-br from-surface-low to-surface-lowest p-6 shadow-[0_24px_60px_hsl(0_0%_0%_/_0.24)] sm:p-8 lg:p-10"
            >
              <div className="flex flex-col gap-6 border-b border-outline-variant/20 pb-7 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <div className="label-tech text-primary">{`0${index + 1} / ${section.shortLabel.toUpperCase()}`}</div>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <section.icon className="h-5 w-5" />
                    </div>
                    <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
                      {section.label}
                    </p>
                  </div>
                  <h3 className="mt-5 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    {section.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {section.summary}
                  </p>
                </div>

                {section.tags && (
                  <div className="flex flex-wrap gap-2 lg:max-w-sm lg:justify-end">
                    {section.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-primary/25 bg-primary/8 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-primary/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className={section.singleColumn ? "mt-8" : "mt-8 grid gap-6 xl:grid-cols-2"}>
                <BriefCard
                  title={section.narrativeTitle}
                  accent={
                    <span className="rounded-full border border-outline-variant/30 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      Paper Synthesis
                    </span>
                  }
                >
                  <div className="space-y-4">
                    {section.narrative.map((paragraph) => (
                      <p key={paragraph} className="leading-relaxed text-muted-foreground">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </BriefCard>

                <BriefCard
                  title={section.bulletsTitle}
                  accent={<div className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_14px_hsl(var(--primary))]" />}
                >
                  <ul className="space-y-3">
                    {section.bullets.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </BriefCard>
              </div>

              {section.note && (
                <div className="mt-6 rounded-2xl border border-outline-variant/20 bg-surface-lowest/80 px-5 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {section.note}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
