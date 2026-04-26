import { useEffect, useRef, useState } from "react";

/** Neon dot + eased ring cursor inspired by the Springforge reference. */
export const NeonTrail = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(fine);
    if (!fine) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;
    const body = document.body;

    body.classList.add("cursor-fx-active");
    if (dotRef.current) {
      dotRef.current.style.left = `${mx}px`;
      dotRef.current.style.top = `${my}px`;
    }
    if (ringRef.current) {
      ringRef.current.style.left = `${rx}px`;
      ringRef.current.style.top = `${ry}px`;
    }

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mx}px`;
        dotRef.current.style.top = `${my}px`;
      }
    };

    const onDownEl = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role=button], input, textarea, [data-cursor-hover]")) {
        ringRef.current?.classList.add("is-hover");
        dotRef.current?.classList.add("is-hover");
      }
    };
    const onUpEl = () => {
      ringRef.current?.classList.remove("is-hover");
      dotRef.current?.classList.remove("is-hover");
    };

    const tick = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`;
        ringRef.current.style.top = `${ry}px`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerover", onDownEl);
    document.addEventListener("pointerout", onUpEl);

    return () => {
      cancelAnimationFrame(raf);
      body.classList.remove("cursor-fx-active");
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onDownEl);
      document.removeEventListener("pointerout", onUpEl);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[70] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/90 opacity-50 transition-[width,height,opacity] duration-200 ease-out [&.is-hover]:h-[60px] [&.is-hover]:w-[60px] [&.is-hover]:opacity-30"
        style={{ boxShadow: "0 0 24px hsl(var(--primary) / 0.2)" }}
      />
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[71] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary transition-[width,height] duration-200 ease-out mix-blend-screen [&.is-hover]:h-5 [&.is-hover]:w-5"
        style={{ boxShadow: "0 0 10px hsl(var(--primary) / 0.95)" }}
      />
    </>
  );
};
