import tharinduPhoto from "@/assets/Tharindu.png";
import udulaPhoto from "@/assets/Udula.png";
import jameellaPhoto from "@/assets/Jameela.png";
import madhiniPhoto from "@/assets/Madhini.png";

const team = [
  {
    name: "Tharindu Mahindarathna",
    role: "Architecture-Aware Generation Lead",
    bio: "Led the unified SpringForge paper and the architecture-aware code generation module for Spring Boot.",
    initials: "TM",
    photo: tharinduPhoto,
  },
  {
    name: "Udula Thathsaridu",
    role: "CI/CD Automation Researcher",
    bio: "Focused on context-aware CI/CD artifact generation, validation pipelines, and explainable DevSecOps support.",
    initials: "UT",
    photo: udulaPhoto,
  },
  {
    name: "Jameela M.J.F",
    role: "Quality Assurance Researcher",
    bio: "Developed the anti-pattern classification and quality score regression approach for Spring Boot assurance.",
    initials: "JM",
    photo: jameellaPhoto,
  },
  {
    name: "Madhini Ariyasena",
    role: "RAG Debugging Researcher",
    bio: "Designed the retrieval-augmented runtime debugging workflow for Spring Boot error diagnosis and resolution.",
    initials: "MA",
    photo: madhiniPhoto,
  },
];

export const Team = () => {
  return (
    <section id="team" className="relative py-24 sm:py-32">
      <div className="container">
        <div className="mb-14 max-w-3xl">
          <div className="label-tech mb-4">// 07_RESEARCH_TEAM</div>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
            The researchers <span className="text-gradient-primary">behind SpringForge.</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            The project brings together four connected research tracks under one
            IntelliJ IDEA plugin ecosystem for intelligent Spring Boot development.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {team.map((m) => (
            <div
              key={m.name}
              data-cursor-hover
              className="group rounded-xl ghost-border surface-low p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-surface-high"
            >
              <div className="relative h-20 w-20 overflow-hidden rounded-xl bg-gradient-primary p-px">
                <img
                  src={m.photo}
                  alt={m.name}
                  className="h-full w-full rounded-xl object-cover object-top"
                />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{m.name}</h3>
              <div className="mt-1 label-tech text-primary/90">{m.role}</div>
              <p className="mt-3 text-sm text-muted-foreground">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
