import { Github, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Contact = () => {
  const [pending, setPending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    setTimeout(() => {
      setPending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message captured", {
        description: "Thanks for reaching out about SpringForge.",
      });
    }, 900);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial-glow opacity-60" />
      <div className="container relative">
        <div className="grid gap-10 rounded-2xl ghost-border surface-low p-6 sm:p-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="label-tech mb-4">// 08_CONTACT</div>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              Open a <span className="text-gradient-primary">research conversation.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Reach out for research collaboration, project demonstrations, publication
              discussions, or questions about the SpringForge plugin ecosystem.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-high text-primary">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                  <div className="font-mono text-sm">springforgeecosystem@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-high text-primary">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Institution</div>
                  <div className="font-mono text-sm">Faculty of Computing, SLIIT, Malabe, Sri Lanka</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-high text-primary">
                  <Github className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Focus</div>
                  <div className="font-mono text-sm">Spring Boot, IntelliJ Plugins, Applied AI Engineering</div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="space-y-5 rounded-xl surface-lowest p-6 sm:p-8 lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="NAME" name="name" placeholder="Your name" />
              <Field label="EMAIL" name="email" type="email" placeholder="you@example.com" />
            </div>
            <Field label="ORGANIZATION" name="org" placeholder="University or company" />
            <div>
              <label className="label-tech mb-2 block">SUBJECT</label>
              <select
                name="subject"
                defaultValue="collab"
                className="w-full border-0 border-b border-outline-variant/40 bg-transparent px-0 py-2 font-mono text-sm transition-colors focus:border-primary focus:outline-none"
              >
                <option value="collab" className="bg-surface">
                  Research Collaboration
                </option>
                <option value="demo" className="bg-surface">
                  Demo Request
                </option>
                <option value="publication" className="bg-surface">
                  Publication Inquiry
                </option>
              </select>
            </div>
            <div>
              <label className="label-tech mb-2 block">MESSAGE</label>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Tell us about your interest in SpringForge..."
                className="w-full resize-none border-0 border-b border-outline-variant/40 bg-transparent px-0 py-2 font-mono text-sm transition-colors placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none"
              />
            </div>
            <Button type="submit" variant="primary" size="lg" disabled={pending} className="w-full sm:w-auto">
              {pending ? "Sending..." : "Send Message"}
              <Send />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Field = ({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) => (
  <div>
    <label className="label-tech mb-2 block">{label}</label>
    <input
      name={name}
      type={type}
      required
      placeholder={placeholder}
      className="w-full border-0 border-b border-outline-variant/40 bg-transparent px-0 py-2 font-mono text-sm transition-colors placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none"
    />
  </div>
);
