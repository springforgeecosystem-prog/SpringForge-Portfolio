import { useMemo, useState } from "react";
import { Download, FileCheck2, FileSpreadsheet, FileText, GitBranch } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type StaticDoc = {
  title: string;
  type: string;
  size: string;
  desc: string;
  href?: string;
  icon: typeof FileText;
};

type ReportVariant = {
  label: string;
  value: string;
  href: string;
};

const proposalReports: ReportVariant[] = [
  { label: "IT22056320", value: "IT22056320", href: "/Propoal Report/IT22056320.pdf" },
  { label: "IT22060662", value: "IT22060662", href: "/Propoal Report/IT22060662.pdf" },
  { label: "IT22076052", value: "IT22076052", href: "/Propoal Report/IT22076052.pdf" },
  { label: "IT22562524", value: "IT22562524", href: "/Propoal Report/IT22562524.pdf" },
];

const finalReports: ReportVariant[] = [
  { label: "25-26J-451 (Group)", value: "group", href: "/Final Reports/Group/25-26J-451.pdf" },
  { label: "IT22056320", value: "IT22056320", href: "/Final Reports/Individual/IT22056320.pdf" },
  { label: "IT22060662", value: "IT22060662", href: "/Final Reports/Individual/IT22060662.pdf" },
  { label: "IT22076052", value: "IT22076052", href: "/Final Reports/Individual/IT22076052.pdf" },
  { label: "IT22562524", value: "IT22562524", href: "/Final Reports/Individual/IT22562524.pdf" },
];

const tafDoc: StaticDoc = {
  title: "TAF Report",
  type: "PDF",
  size: "TAF",
  icon: FileText,
  desc: "Topic Approval Form (TAF) for the project, confirming the research topic and scope accepted by the department.",
  href: "/TAF/TAF_25-26J-451.pdf",
};

const staticDocs: StaticDoc[] = [
  {
    title: "Checklist I",
    type: "PDF",
    size: "Checklist",
    icon: FileCheck2,
    desc: "Formal checklist submission for milestone I.",
    href: "/Checklist/25-26J-451_Checklist 01.pdf",
  },
  {
    title: "Checklist II",
    type: "PDF",
    size: "Checklist",
    icon: FileCheck2,
    desc: "Formal checklist submission for milestone II.",
    href: "/Checklist/25-26J-451_Checklist 02.pdf",
  },
  {
    title: "Checklist III",
    type: "PDF",
    size: "Checklist",
    icon: FileCheck2,
    desc: "Formal checklist submission for milestone III.",
    href: "/Checklist/25-26J-451_Checklist 03.pdf",
  },
];

export const Docs = () => {
  const [selectedProposalReport, setSelectedProposalReport] = useState(proposalReports[0].value);
  const [selectedFinalReport, setSelectedFinalReport] = useState(finalReports[0].value);

  const activeProposalReport = useMemo(
    () => proposalReports.find((report) => report.value === selectedProposalReport) ?? proposalReports[0],
    [selectedProposalReport],
  );

  const activeFinalReport = useMemo(
    () => finalReports.find((report) => report.value === selectedFinalReport) ?? finalReports[0],
    [selectedFinalReport],
  );

  return (
    <section id="docs" className="relative py-24 sm:py-32 surface-lowest">
      <div className="container">
        <div className="mb-14 max-w-3xl">
          <div className="label-tech mb-4">// 05_TECHNICAL_DOCUMENTS</div>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Technical <span className="text-gradient-primary">resources.</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            This section now groups the working submission set for the project:
            proposal reports, milestone checklists, and the placeholder slots for the
            remaining formal documents.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {/* 1 — TAF */}
          <div
            data-cursor-hover
            className="group relative flex flex-col rounded-xl ghost-border surface-low p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-surface-high hover:shadow-neon"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-high text-primary transition-colors group-hover:bg-primary/10">
                <tafDoc.icon className="h-5 w-5" />
              </div>
              <div className="text-right">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{tafDoc.type}</div>
                <div className="mt-0.5 font-mono text-[10px] text-muted-foreground/70">{tafDoc.size}</div>
              </div>
            </div>
            <h3 className="font-display text-lg font-semibold leading-snug">{tafDoc.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{tafDoc.desc}</p>
            <Button asChild variant="terminal" size="sm" className="mt-6 self-start">
              <a href={tafDoc.href} download>
                Download <Download className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>

          {/* 2 — Proposal Report */}
          <div
            data-cursor-hover
            className="group relative flex flex-col rounded-xl ghost-border surface-low p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-surface-high hover:shadow-neon"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-high text-primary transition-colors group-hover:bg-primary/10">
                <GitBranch className="h-5 w-5" />
              </div>
              <div className="text-right">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">PDF</div>
                <div className="mt-0.5 font-mono text-[10px] text-muted-foreground/70">4 variants</div>
              </div>
            </div>
            <h3 className="font-display text-lg font-semibold leading-snug">Proposal Report</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Four individual proposal-report submissions are available here. Use the selector
              to switch to the matching member report before downloading it.
            </p>
            <div className="mt-5">
              <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Select Submission
              </div>
              <Select value={selectedProposalReport} onValueChange={setSelectedProposalReport}>
                <SelectTrigger className="border-outline-variant/40 bg-background/70">
                  <SelectValue placeholder="Choose a report" />
                </SelectTrigger>
                <SelectContent>
                  {proposalReports.map((report) => (
                    <SelectItem key={report.value} value={report.value}>
                      {report.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
              <FileSpreadsheet className="h-3.5 w-3.5 text-primary" />
              Current selection: {activeProposalReport.label}
            </div>
            <Button asChild variant="terminal" size="sm" className="mt-6 self-start">
              <a href={activeProposalReport.href} download>
                Download <Download className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>

          {/* 3, 4, 5 — Checklists */}
          {staticDocs.map((doc) => (
            <div
              key={doc.title}
              data-cursor-hover
              className="group relative flex flex-col rounded-xl ghost-border surface-low p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-surface-high hover:shadow-neon"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-high text-primary transition-colors group-hover:bg-primary/10">
                  <doc.icon className="h-5 w-5" />
                </div>
                <div className="text-right">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {doc.type}
                  </div>
                  <div className="mt-0.5 font-mono text-[10px] text-muted-foreground/70">{doc.size}</div>
                </div>
              </div>
              <h3 className="font-display text-lg font-semibold leading-snug">{doc.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{doc.desc}</p>
              <Button asChild variant="terminal" size="sm" className="mt-6 self-start">
                <a href={doc.href} download>
                  Download <Download className="h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
          ))}

          {/* 6 — Final Report */}
          <div
            data-cursor-hover
            className="group relative flex flex-col rounded-xl ghost-border surface-low p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-surface-high hover:shadow-neon"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-high text-primary transition-colors group-hover:bg-primary/10">
                <GitBranch className="h-5 w-5" />
              </div>
              <div className="text-right">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">PDF</div>
                <div className="mt-0.5 font-mono text-[10px] text-muted-foreground/70">5 variants</div>
              </div>
            </div>
            <h3 className="font-display text-lg font-semibold leading-snug">Final Report</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              The group final report and four individual submissions are available here. Use the
              selector to switch between the group report and each member's report before downloading.
            </p>
            <div className="mt-5">
              <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Select Submission
              </div>
              <Select value={selectedFinalReport} onValueChange={setSelectedFinalReport}>
                <SelectTrigger className="border-outline-variant/40 bg-background/70">
                  <SelectValue placeholder="Choose a report" />
                </SelectTrigger>
                <SelectContent>
                  {finalReports.map((report) => (
                    <SelectItem key={report.value} value={report.value}>
                      {report.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
              <FileSpreadsheet className="h-3.5 w-3.5 text-primary" />
              Current selection: {activeFinalReport.label}
            </div>
            <Button asChild variant="terminal" size="sm" className="mt-6 self-start">
              <a href={activeFinalReport.href} download>
                Download <Download className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
