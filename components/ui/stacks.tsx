"use client";

import { RotateCcw } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { techChipsData } from "@/lib/data";

type Chip = {
  label: string;
  slug: string;
  bg: string;
  fg: string;
  iconUrl?: string;
};

const CHIP_RADIUS = 8;
const ICON_RADIUS = 6;
const WALL_PAD = 10;

type ChipState = {
  chip: Chip;
  body: Matter.Body;
  width: number;
  height: number;
};

export default function Stacks(): ReactNode {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const measureRef = useRef<HTMLDivElement | null>(null);
  const chipRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const measure = measureRef.current;
    if (!container || !measure) return;

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    void (async () => {
      const Matter = await import("matter-js");
      if (cancelled) return;

      const { Engine, Runner, World, Bodies, Body, Mouse, MouseConstraint, Events } = Matter;

      const measureChildren = Array.from(measure.children) as HTMLElement[];
      const dims = measureChildren.map((el) => {
        const r = el.getBoundingClientRect();
        return { w: Math.max(60, r.width), h: Math.max(24, r.height) }; 
      });

      // Mengambil ukuran wadah secara presisi
      const rect = container.getBoundingClientRect();
      let width = rect.width;
      let height = rect.height;

      // Safeguard: Kalau entah kenapa ngebaca tinggi 1 layar penuh, paksa ke ukuran Bento Box
      if (height > 500) height = 220; 

      const engine = Engine.create();
      engine.gravity.y = 0.8; // Gravitasi dibikin dikit lebih kalem biar jatuhnya elegan
      const world = engine.world;

      // Temboknya ditebelin jadi 2000px biar chips kaga bisa nembus ke footer lagi
      const wallThickness = 2000;
      const floor = Bodies.rectangle(width / 2, height - WALL_PAD + wallThickness / 2, width * 3, wallThickness, { isStatic: true });
      const leftWall = Bodies.rectangle(WALL_PAD - wallThickness / 2, height / 2, wallThickness, height * 4, { isStatic: true });
      const rightWall = Bodies.rectangle(width - WALL_PAD + wallThickness / 2, height / 2, wallThickness, height * 4, { isStatic: true });
      World.add(world, [floor, leftWall, rightWall]);

      const states: ChipState[] = techChipsData.map((chip, i) => {
        const dim = dims[i] ?? { w: 100, h: 28 };
        const { w, h } = dim;
        const halfW = w / 2;
        const minX = WALL_PAD + halfW + 4;
        const maxX = width - WALL_PAD - halfW - 4;
        
        // Disebar acak posisi X-nya
        const x = minX + Math.random() * Math.max(1, maxX - minX);
        
        // Disebar acak Y-nya (dari -50 sampai -1000px ke atas) biar jatuhnya beruntun kayak hujan
        const y = -50 - (Math.random() * 1000); 

        const body = Bodies.rectangle(x, y, w, h, {
          chamfer: { radius: CHIP_RADIUS },
          restitution: 0.2, // Pantulan dikurangin biar kaga meledak pas tubrukan
          friction: 0.6,
          frictionAir: 0.03, // Tahanan udara dinaikin dikit biar jatuhnya stabil
          density: 0.002,
          angle: (Math.random() - 0.5) * 0.4,
        });
        World.add(world, body);
        return { chip, body, width: w, height: h };
      });

      const mouse = Mouse.create(container);
      const wheelTarget = mouse.element as HTMLElement & { mousewheel?: EventListener };
      if (wheelTarget.mousewheel) {
        wheelTarget.removeEventListener("wheel", wheelTarget.mousewheel);
        wheelTarget.removeEventListener("DOMMouseScroll", wheelTarget.mousewheel);
      }

      const mouseConstraint = MouseConstraint.create(engine, {
        mouse,
        constraint: { stiffness: 0.2, damping: 0.2, render: { visible: false } },
      });
      World.add(world, mouseConstraint);

      Events.on(mouseConstraint, "startdrag", () => { container.style.cursor = "grabbing"; });
      Events.on(mouseConstraint, "enddrag", () => { container.style.cursor = "grab"; });

      const runner = Runner.create();
      Runner.run(runner, engine);

      let raf = 0;
      const tick = (): void => {
        for (let i = 0; i < states.length; i++) {
          const s = states[i];
          const el = chipRefs.current[i];
          if (!s || !el) continue;
          const { x, y } = s.body.position;
          el.style.transform = `translate3d(${x - s.width / 2}px, ${y - s.height / 2}px, 0) rotate(${s.body.angle}rad)`;
        }
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);

      const onResize = (): void => {
        const newRect = container.getBoundingClientRect();
        let newW = newRect.width;
        let newH = newRect.height;
        if (newH > 500) newH = 220; // Safeguard resize

        if (newW === width && newH === height) return;
        Body.setPosition(floor, { x: newW / 2, y: newH - WALL_PAD + wallThickness / 2 });
        Body.setPosition(leftWall, { x: WALL_PAD - wallThickness / 2, y: newH / 2 });
        Body.setPosition(rightWall, { x: newW - WALL_PAD + wallThickness / 2, y: newH / 2 });
        width = newW;
        height = newH;
      };
      const ro = new ResizeObserver(onResize);
      ro.observe(container);

      cleanup = () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        Runner.stop(runner);
        World.clear(world, false);
        Engine.clear(engine);
      };
    })();

    return () => { cancelled = true; cleanup?.(); };
  }, [resetKey]);

  return (
    // Kita paku pakai relative dan overflow-hidden di root komponen ini langsung
    <div className="relative h-full w-full min-h-[220px] overflow-hidden rounded-3xl">
      
      <span className="absolute left-6 top-6 z-10 text-xs font-bold uppercase tracking-widest text-white/20 pointer-events-none">
        Tech Stack
      </span>

      <button
        type="button"
        onClick={() => setResetKey((k) => k + 1)}
        className="absolute right-4 top-4 z-30 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
      >
        <RotateCcw className="h-3 w-3" strokeWidth={2.5} />
      </button>

      <div ref={measureRef} aria-hidden="true" className="pointer-events-none invisible absolute top-0 left-0 flex flex-wrap gap-2">
        {techChipsData.map((chip) => (
          <ChipPill key={`m-${chip.label}`} chip={chip} />
        ))}
      </div>

      <div ref={containerRef} className="absolute inset-0 cursor-grab select-none" style={{ touchAction: "none" }}>
        {techChipsData.map((chip, i) => (
          <div
            key={`${resetKey}-${chip.label}`}
            ref={(el) => { chipRefs.current[i] = el; }}
            data-stack-chip
            className="pointer-events-none absolute top-0 left-0 will-change-transform"
            style={{ transform: "translate3d(-9999px, -9999px, 0)" }}
          >
            <ChipPill chip={chip} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ChipPill({ chip }: { chip: Chip }): ReactNode {
  return (
    <div
      className="inline-flex items-center gap-2 border border-white/10 p-1.5 pr-3 text-xs font-semibold tracking-tight shadow-md"
      style={{ backgroundColor: chip.bg, color: chip.fg, borderRadius: `${CHIP_RADIUS}px` }}
    >
      <span className="inline-flex h-6 w-6 items-center justify-center bg-white/95" style={{ borderRadius: `${ICON_RADIUS}px` }}>
        <img src={chip.iconUrl ?? `https://cdn.simpleicons.org/${chip.slug}`} alt="" width={14} height={14} className="h-3.5 w-3.5" draggable={false} />
      </span>
      <span>{chip.label}</span>
    </div>
  );
}