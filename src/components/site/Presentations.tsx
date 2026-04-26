import { Download, Eye, MonitorPlay, Presentation } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type PresentationItem = {
  title: string;
  deckCode: string;
  slideCount: number;
  duration: string;
  summary: string;
  downloadUrl: string;
  previewUrl?: string;
};

const presentations: PresentationItem[] = [
  {
    title: "Proposal Presentation",
    deckCode: "SFG-PP",
    slideCount: 17,
    duration: "Embedded PDF preview",
    summary:
      "Initial proposal deck introducing the SpringForge research direction, system scope, and planned evaluation path.",
    downloadUrl: "/Proposal Presentation/Proposal Presentation.pptx",
    previewUrl: "/Proposal Presentation/Proposal Presentation.pdf",
  },
  {
    title: "Progress Presentation I",
    deckCode: "SFG-PR1",
    slideCount: 17,
    duration: "Embedded PDF preview",
    summary:
      "First progress update covering early implementation status, milestone outcomes, and the initial research trajectory.",
    downloadUrl: "/2. Progress Presentation - 1/Presentation/SpringForge.pptx",
    previewUrl: "/2. Progress Presentation - 1/Presentation/SpringForge.pdf",
  },
  {
    title: "Progress Presentation II",
    deckCode: "SFG-PR2",
    slideCount: 17,
    duration: "Embedded PDF preview",
    summary:
      "Second progress update presenting the later-stage system progress, refinements, and consolidated project direction.",
    downloadUrl: "/3. Progress Presentation - 2/Presentation/SpringForge.pptx",
    previewUrl: "/3. Progress Presentation - 2/Presentation/SpringForge.pdf",
  },
];

export const Presentations = () => {
  return (
    <section id="presentations" className="relative py-24 sm:py-32">
      <div className="container">
        <div className="mb-14 max-w-3xl">
          <div className="label-tech mb-4">// 06_PRESENTATIONS</div>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Technical <span className="text-gradient-primary">presentations.</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            Each deck keeps the same presentation card structure, with direct download access
            and preview support wherever a browser-friendly export is already available.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-1">
          {presentations.map((presentation) => {
            const hasPdfPreview = Boolean(presentation.previewUrl);

            return (
              <article
                key={presentation.title}
                data-cursor-hover
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-outline-variant/40 bg-surface-low p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-surface-high hover:shadow-neon"
              >
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                        <Presentation className="h-5 w-5" />
                      </div>
                      <div className="text-right">
                        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                          {presentation.deckCode}
                        </div>
                        <div className="mt-1 font-mono text-[10px] text-muted-foreground/70">
                          {presentation.slideCount} slides
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h3 className="font-display text-2xl font-semibold leading-tight">
                        {presentation.title}
                      </h3>
                      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                        {presentation.summary}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-outline-variant/30 bg-background/40 px-4 py-3">
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      Preview Mode
                    </div>
                    <div className="mt-1 text-sm text-foreground">{presentation.duration}</div>
                    <div className="mt-2 inline-flex items-center gap-2 text-xs text-muted-foreground">
                      <MonitorPlay className="h-4 w-4 text-primary" />
                      {hasPdfPreview ? "Embedded PDF" : "Download-only asset"}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="terminal" size="sm">
                        {hasPdfPreview ? "View Slides" : "View Details"} <Eye className="h-3.5 w-3.5" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-h-[90vh] w-[min(1100px,94vw)] max-w-none overflow-hidden border-outline-variant/50 bg-surface-low p-0">
                      <div className="border-b border-outline-variant/40 bg-background/70 px-6 py-5">
                        <DialogHeader className="pr-8 text-left">
                          <DialogTitle className="font-display text-2xl">{presentation.title}</DialogTitle>
                          <DialogDescription className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
                            {presentation.summary}
                          </DialogDescription>
                        </DialogHeader>
                      </div>

                      <div className="grid gap-0 lg:grid-cols-[280px_minmax(0,1fr)]">
                        <aside className="border-b border-outline-variant/30 bg-background/40 p-6 lg:border-b-0 lg:border-r">
                          <div className="rounded-2xl border border-outline-variant/30 bg-surface-high p-5">
                            <div className="label-tech">DECK META</div>
                            <div className="mt-4 space-y-4 text-sm">
                              <div className="flex items-center justify-between gap-4">
                                <span className="text-muted-foreground">Deck code</span>
                                <span className="font-mono text-foreground">{presentation.deckCode}</span>
                              </div>
                              <div className="flex items-center justify-between gap-4">
                                <span className="text-muted-foreground">Slide count</span>
                                <span className="text-foreground">{presentation.slideCount}</span>
                              </div>
                              <div className="flex items-center justify-between gap-4">
                                <span className="text-muted-foreground">Viewer</span>
                                <span className="text-foreground">
                                  {hasPdfPreview ? "Embedded PDF" : "PPTX only"}
                                </span>
                              </div>
                            </div>
                          </div>

                          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                            {hasPdfPreview
                              ? "The preview keeps the deck readable inside the site while the original PowerPoint file remains available for download."
                              : "This deck currently only exists as the original PowerPoint file in the public assets, so the dialog keeps the metadata and download action available until a PDF export is added."}
                          </p>

                          <div className="mt-6 flex flex-wrap gap-3">
                            <Button asChild variant="primary" size="sm">
                              <a href={presentation.downloadUrl} download>
                                Download PPTX <Download className="h-3.5 w-3.5" />
                              </a>
                            </Button>
                            {hasPdfPreview && presentation.previewUrl ? (
                              <Button asChild variant="terminal" size="sm">
                                <a href={presentation.previewUrl} target="_blank" rel="noreferrer">
                                  Open PDF <Eye className="h-3.5 w-3.5" />
                                </a>
                              </Button>
                            ) : null}
                          </div>
                        </aside>

                        <div className="min-h-[65vh] bg-background/60 p-4 sm:p-6">
                          {hasPdfPreview && presentation.previewUrl ? (
                            <div className="h-full overflow-hidden rounded-2xl border border-outline-variant/40 bg-black/20 shadow-[inset_0_1px_0_hsl(var(--foreground)/0.03)]">
                              <iframe
                                title={`${presentation.title} slide preview`}
                                src={`${presentation.previewUrl}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                                className="h-[65vh] w-full"
                              />
                            </div>
                          ) : (
                            <div className="flex h-[65vh] items-center justify-center rounded-2xl border border-dashed border-outline-variant/40 bg-background/50 p-8 text-center">
                              <div className="max-w-md">
                                <div className="font-display text-2xl font-semibold">Preview Not Available Yet</div>
                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                  A browser preview file has not been added for this deck. The original
                                  PowerPoint presentation is ready to download from the action panel.
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Button asChild variant="primary" size="sm">
                    <a href={presentation.downloadUrl} download>
                      Download Deck <Download className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
