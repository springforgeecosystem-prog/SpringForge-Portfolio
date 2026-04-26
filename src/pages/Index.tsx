import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { ResearchTabs } from "@/components/site/ResearchTabs";
import { TechStack } from "@/components/site/TechStack";
import { Timeline } from "@/components/site/Timeline";
import { Docs } from "@/components/site/Docs";
import { Presentations } from "@/components/site/Presentations";
import { Team } from "@/components/site/Team";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { NeonTrail } from "@/components/fx/NeonTrail";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <NeonTrail />
      <SiteNav />
      <main>
        <Hero />
        <ResearchTabs />
        <TechStack />
        <Timeline />
        <Docs />
        <Presentations />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
