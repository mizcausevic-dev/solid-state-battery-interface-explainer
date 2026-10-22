/**
 * Solid-state battery interface explainer.
 * Pure frame model. Frame 0..1019 at 30 fps. No randomness, no measured specs.
 *
 * Accuracy locks baked into this file:
 * - Ideal electrolyte does not carry electrons.
 * - Stack pressure is creep under an applied load, not spontaneous healing.
 * - A wetting interlayer is not a filament-proof claim.
 * - Filament advance is a condition-dependent risk at a defect, not an inevitable short.
 * - Scale and transport are schematic. This file stores no current, pressure, or conductivity numbers.
 */
(function (root, factory) {
  const api = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.SSB = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  const FRAME_COUNT = 1020;
  const FPS = 30;
  const LAST = 1019;

  const COPY = {
    title: "Solid-state battery interface",
    kicker: "Advanced materials science",
    figure: "Sectional schematic. Same cell throughout.",
    safeguard:
      "Safeguards: electrons stay out of ideal electrolyte. Pressure is not healing. Filaments are not ruled out. No invented specs.",
    disclaimer:
      "Explanatory schematic. Not a certified engineering reference. Scale and transport are schematic.",
    omit: "Binder omitted. Chemistry unspecified. Not to scale.",
    layers: {
      al: "Al current collector",
      cat: "Composite cathode",
      se: "Solid electrolyte",
      li: "Lithium metal anode",
      cu: "Cu current collector",
    },
    ion: "Li+ path",
    electron: "e\u2212 path",
    blocked: "e\u2212 blocked",
    blockedNote: "Ideal electrolyte does not carry electrons.",
    load: "External load",
    void: "Interfacial void",
    crowd: "Ionic current crowds into remaining contact",
    pressure: "Stack pressure",
    creep: "Creep while the load is held",
    interlayer: "Wetting interlayer",
    interlayerNote: "Wetting aid only. Not filament immunity.",
    insetTitle: "Filament-risk inset",
    insetSub: "Scale change. Slowed. Schematic.",
    insetBody:
      "A filament can follow a pore, crack, or grain boundary where electrons reach the metal front. Intact electrolyte beside it still blocks electrons. Drawn partway. Not a completed short.",
    thumbTitle: "Preceding stage",
    thumbSub: "Voids during stripping",
    defect: "Defect watched by the inset",
    riskTag: "Filament risk remains at defects",
    legendHardware: "Hardware",
    legendIon: "Li+ pathway",
    legendElectron: "Electrons or pressure",
    legendState: "State",
    endChip: "Complete system",
  };

  const STAGES = [
    {
      start: 0,
      end: 149,
      id: "reveal",
      clock: "0-5 s",
      title: "Reveal the layers",
      note: "A section plane crosses this cell. The layers stay stacked. This is not an exploded view.",
      state: "View: section",
    },
    {
      start: 150,
      end: 299,
      id: "paths",
      clock: "5-10 s",
      title: "Discharge paths",
      note: "Discharge. Li+ crosses the electrolyte. Electrons use metal, carbon, and the external load. Ideal electrolyte blocks electrons.",
      state: "State: discharge",
    },
    {
      start: 300,
      end: 509,
      id: "void",
      clock: "10-17 s",
      title: "Interfacial void",
      note: "Stripping can outrun creep. Voids open in the lithium. Ionic current crowds into the contacts that remain.",
      state: "State: stripping, contact loss",
    },
    {
      start: 510,
      end: 749,
      id: "contact",
      clock: "17-25 s",
      title: "Improved-contact design",
      note: "Pressure lets lithium creep back into contact while the load is held. Not spontaneous healing. The interlayer is only a wetting aid.",
      state: "State: pressure on",
    },
    {
      start: 750,
      end: 1019,
      id: "filament",
      clock: "25-34 s",
      title: "Filament-risk inset",
      note: "Different scale, slowed. A filament can follow a defect if electrons reach it. Intact electrolyte still blocks electrons. Not inevitable.",
      state: "State: filament risk",
    },
  ];

  const END_NOTE =
    "Hold. Discharge paths, pressure-maintained contact, and filament risk still on the record.";

  const CAM_KEYS = [
    { f: 0, cx: 460, cy: 236, z: 1.02, rot: -0.045 },
    { f: 149, cx: 430, cy: 220, z: 1.18, rot: -0.006 },
    { f: 299, cx: 545, cy: 228, z: 1.0, rot: 0 },
    { f: 509, cx: 470, cy: 322, z: 2.05, rot: 0 },
    { f: 749, cx: 520, cy: 236, z: 0.98, rot: 0 },
    { f: 900, cx: 500, cy: 246, z: 0.98, rot: 0 },
    { f: 990, cx: 520, cy: 232, z: 1.0, rot: 0 },
    { f: LAST, cx: 520, cy: 232, z: 1.0, rot: 0 },
  ];

  function clamp(v, a, b) {
    return Math.max(a, Math.min(b, v));
  }

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function ramp(frame, a, b) {
    if (b === a) return frame >= b ? 1 : 0;
    return clamp((frame - a) / (b - a), 0, 1);
  }

  function ease(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function stageIndex(frame) {
    const f = clamp(Math.round(frame), 0, LAST);
    for (let i = 0; i < STAGES.length; i++) {
      if (f >= STAGES[i].start && f <= STAGES[i].end) return i;
    }
    return 0;
  }

  function camera(frame) {
    const f = clamp(frame, 0, LAST);
    let i = 0;
    while (i < CAM_KEYS.length - 2 && f > CAM_KEYS[i + 1].f) i++;
    const a = CAM_KEYS[i];
    const b = CAM_KEYS[i + 1];
    const span = b.f - a.f;
    const t = span === 0 ? 1 : ease(clamp((f - a.f) / span, 0, 1));
    return {
      cx: lerp(a.cx, b.cx, t),
      cy: lerp(a.cy, b.cy, t),
      z: lerp(a.z, b.z, t),
      rot: lerp(a.rot, b.rot, t),
    };
  }

  function gapAt(u, voidAmt) {
    if (voidAmt <= 0) return 0;
    const centers = [0.22, 0.5, 0.78];
    let nearest = 1;
    for (let i = 0; i < centers.length; i++) {
      nearest = Math.min(nearest, Math.abs(u - centers[i]));
    }
    const radius = 0.055 + (1 - voidAmt) * 0.22;
    if (nearest <= radius) return 0;
    return voidAmt * clamp((nearest - radius) / 0.07, 0, 1);
  }

  function laneTarget(u, voidAmt) {
    if (voidAmt < 0.12) return u;
    const centers = [0.22, 0.5, 0.78];
    let best = centers[0];
    for (let i = 1; i < centers.length; i++) {
      if (Math.abs(centers[i] - u) < Math.abs(best - u)) best = centers[i];
    }
    return lerp(u, best, voidAmt);
  }

  function voidAmount(frame) {
    if (frame < 330) return 0;
    if (frame < 510) return ease(ramp(frame, 330, 470));
    if (frame < 560) return 1;
    return 1 - ease(ramp(frame, 560, 700));
  }

  function scaleText(frame) {
    if (frame < 300) return "Cell-stack scale. Schematic, not to scale.";
    if (frame < 510) return "Scale change: interface. Schematic. Not a measured magnification.";
    if (frame < 750) return "Cell-stack scale. Comparison of the same cell.";
    if (frame < 990) return "Scale change: defect inset. Schematic. Slowed.";
    return "Cell-stack scale. Schematic, not to scale.";
  }

  function timeText(frame) {
    if (frame < 150) return "No process clock. The cut is a camera move.";
    if (frame < 300) return "Time compressed. Motion is not a transport simulation.";
    if (frame < 510) return "Slowed and time-compressed. Not a measured void-growth rate.";
    if (frame < 750) return "Time compressed. Not a measured creep rate.";
    if (frame < 990) return "Slowed inset. Time compressed. Not a measured filament rate.";
    return "Hold. Clock stopped on the complete system.";
  }

  function derive(frame) {
    const f = clamp(Math.round(frame), 0, LAST);
    const index = stageIndex(f);
    const stage = STAGES[index];
    const insetIn = ease(ramp(f, 760, 820));
    const insetOut = ease(ramp(f, 940, 1000));
    const inset = f < 750 ? 0 : insetIn * (1 - insetOut);
    return {
      frame: f,
      fps: FPS,
      stageIndex: index,
      stage: stage,
      reveal: ease(ramp(f, 16, 128)),
      discharge: ease(ramp(f, 156, 198)),
      motion: f < 990 ? 1 : 1 - ease(ramp(f, 990, 1012)),
      phase: f < 990 ? f : 990,
      voidAmt: voidAmount(f),
      pressure: f < 520 ? 0 : ease(ramp(f, 545, 690)),
      interlayer: f < 640 ? 0 : ease(ramp(f, 650, 730)),
      circuit: ease(ramp(f, 156, 214)),
      inset: inset,
      filamentGrowth: f < 800 ? 0 : ease(ramp(f, 820, 910)),
      thumb: f < 510 || f > 820 ? 0 : ease(ramp(f, 520, 570)) * (1 - ease(ramp(f, 760, 820))),
      cam: camera(f),
      scaleText: scaleText(f),
      timeText: timeText(f),
      note: f >= 990 ? END_NOTE : stage.note,
      state: f >= 990 ? COPY.endChip : stage.state,
      seconds: f / FPS,
    };
  }

  function coversEveryFrame() {
    const seen = new Array(FRAME_COUNT).fill(0);
    STAGES.forEach(function (stage) {
      for (let f = stage.start; f <= stage.end; f++) seen[f] += 1;
    });
    for (let i = 0; i < seen.length; i++) {
      if (seen[i] !== 1) return false;
    }
    return seen.length === FRAME_COUNT;
  }

  return {
    FRAME_COUNT: FRAME_COUNT,
    FPS: FPS,
    LAST: LAST,
    COPY: COPY,
    STAGES: STAGES,
    END_NOTE: END_NOTE,
    CAM_KEYS: CAM_KEYS,
    clamp: clamp,
    lerp: lerp,
    ramp: ramp,
    ease: ease,
    stageIndex: stageIndex,
    camera: camera,
    gapAt: gapAt,
    laneTarget: laneTarget,
    derive: derive,
    coversEveryFrame: coversEveryFrame,
  };
});
