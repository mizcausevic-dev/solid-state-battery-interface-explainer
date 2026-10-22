# The solid-state battery interface is a contact problem

**A 34-second section of one lithium-metal cell. Ions cross the electrolyte. Electrons do not. Pressure is a load, not a cure.**

A solid-state battery interface is the place where a lithium-metal anode, a solid electrolyte, and a composite cathode have to agree. Pitch decks draw that agreement as a clean stack. The cell is less polite. During discharge, lithium ions move through the solid electrolyte. Electrons leave through metal, carbon, and the external load. They do not swim across an ideal electrolyte. When stripping removes lithium faster than creep can replace it, voids open in the metal and the remaining contacts carry more local current. Stack pressure can close that gap only while the load is held. It does not heal the metal, and it does not make filaments impossible.

That is the whole mechanism. The rest of this piece is how to see it without picking up a false number on the way out.

The film is here: [solid-state battery interface, sectional schematic](https://mizcausevic-dev.github.io/solid-state-battery-interface-explainer/). It runs 34 seconds, 30 frames a second, 1,020 frames. The same frame always draws the same picture. Scrub it. The source sits on the `pages` branch of [mizcausevic-dev/solid-state-battery-interface-explainer](https://github.com/mizcausevic-dev/solid-state-battery-interface-explainer).

## Why the usual picture fails

Most explainers of a solid-state battery do one of three things. They color the entire electrolyte as if it were a wire. They show a dendrite vanishing because a new layer was added. Or they put a current density on the drawing that belonged to one paper, one temperature, and one stack pressure.

Each of those moves teaches the wrong lesson. The electrolyte in an ideal dense separator is an ionic conductor and an electronic insulator. A filament is a local failure at a pore, a crack, a grain boundary, or an electronically leaky path. A number from a Li/Li6PS5Cl cell or a garnet cell is a result from that cell. It is not a property of "solid-state batteries."

The drawing in the film is a schematic on purpose. Binder is omitted. The chemistry is unnamed. Scale changes, slowed motion, and time compression are written on the frame where they apply. If a step cannot be shown faithfully, it is labeled as a schematic instead of being faked.

## The stack, in the order the section cuts it

The film opens on one cell, not an exploded kit. A section plane moves across the stack. The parts stay where they are.

From the positive side down:

1. Aluminum current collector. Electrons arrive here from the external circuit during discharge.
2. Composite cathode. Active particles, solid electrolyte in the gaps, and a carbon network. The carbon is how electrons reach a particle. The solid electrolyte in the gaps is how ions do.
3. Solid electrolyte separator. In the film it is drawn as a polycrystalline ceramic, because grain boundaries are part of the later risk inset. Not every solid electrolyte is polycrystalline. Sulfide glasses, for example, do not look like this. The label says so by refusing a formula.
4. Lithium metal anode.
5. Copper current collector. Electrons leave here toward the load.

The cut is a viewing plane. Nothing is pulled apart to make the labels fit. That matters, because an exploded view quietly tells you the layers are optional. They are not. The interface only exists while they touch.

## Discharge is two paths

From 5 to 10 seconds the film shows discharge. The state chip says so. Cyan is the lithium-ion path. Gold is electrons, and later the mechanical load of stack pressure. Violet is state: discharge, contact loss, pressure on, filament risk. Those colors are labels. They are not light coming off the materials.

Follow one ion. It leaves the lithium surface, crosses the separator, and enters the composite cathode through the electrolyte phase between particles. A violet ring marks the particle where insertion is being discussed. That ring is a state marker, not a hot spot and not a measured reaction front.

Follow one electron the other way. At the anode interface, lithium gives up an electron. That electron moves through the lithium metal to the copper, out through the external load, back to the aluminum, and through the carbon network to the same particle. A slashed gold mark sits in the bulk of the separator: ideal electrolyte does not carry electrons.

If you remember one sentence, remember that split. Ions through the solid electrolyte. Electrons through metal, carbon, and the wire. A picture that runs a single glowing line through the whole stack has merged two different jobs.

The motion is time-compressed. It is not a transport simulation. Hop rates, transference numbers, and tortuosity are not in the file.

## The void is a stripping problem

At 10 seconds the camera moves into the lithium / electrolyte boundary. The scale label changes. The clock says the growth is slowed and time-compressed, and that it is not a measured rate.

What you see is simple. The separator stays flat. It is the rigid side. The lithium surface pulls away in some places and stays in contact in others. The dark gaps are voids in the metal. Cyan contact marks remain only where the metal still touches. Ion paths bend toward those bridges. The local path gets crowded because the area got smaller, not because someone turned the current up in the drawing.

This is the account used by the stripping literature. When lithium is removed at the interface faster than creep can bring more metal forward, voids accumulate. The cell can still be below a plating threshold and still be in trouble, because the next plating step sees a smaller contact and a higher local current. Kasemchainan and coauthors showed that sequence on Li/Li6PS5Cl cells, and showed that the stripping limit moved with stack pressure, which is the signature of creep rather than of diffusion alone (Nature Materials, 2019). Krauskopf and coauthors isolated the same polarization to the stripping electrode on LLZO, and tied it to a current-dependent stack pressure (Joule, 2019).

Those papers report numbers. This film does not. A stripping limit measured on one sulfide cell, at the pressures those authors used, is not a design rule for a garnet, a polymer, or a different temperature. Copying that number onto a schematic is how a figure becomes a specification by accident.

## Pressure maintains contact. It does not heal anything.

From 17 to 25 seconds the camera pulls back. A thumbnail keeps the void stage in the corner, labeled as the preceding state. The same cell then takes a mechanical load from both platens. Gold arrows are the applied stack pressure. Smaller gold arrows inside the lithium are creep toward the interface while that load is held. The voids close in the drawing because the model says the contact returns under pressure. The caption says the quiet part out loud: this is not spontaneous healing.

Take the pressure away, in the logic of this mechanism, and the contact problem is back. The metal did not repair itself. Creep under a held load filled the gap. That is a different sentence from "the interface is self-healing," and the second sentence is the one that should not survive a review.

A thin bronze line appears at the contact once the gap is closed. It is a wetting interlayer. The film does not name it, because gold, aluminum, tin, a polymer, or carbon would each be a different materials choice. The label is "wetting aid only." An interlayer that helps the first contact is not a promise about filaments.

## The filament is drawn partway, on purpose

At 25 seconds a second scale opens. The inset is marked as a schematic, slowed, and not the same magnification as the cell. A dark path runs up from the lithium into the grains: a pore, a crack, or a grain boundary, used here as the example of a defect. Lithium metal advances along that path. A gold dot sits only at the metal front, with the note that electrons are available there. The intact electrolyte beside the defect still blocks electrons. The metal stops before the path ends. The caption says it is not a completed short, and not inevitable.

That restraint is the point. Filaments are a reported failure mode when local conditions allow reduction to run ahead of the planar interface. Whether they grow depends on current, pressure, defects, temperature, and whether the electrolyte leaks electrons. A figure that always finishes the short has decided the outcome in advance. A figure that says "dendrite-proof" because a platen is drawn has decided the opposite, also in advance. This one does neither.

The inset then closes. The last second holds the full cell: discharge paths in place, pressure still on, interlayer still there, and a violet tag that the filament risk remains at defects. The clock stops. Nothing animates its way out of the problem.

## How to watch it without being fooled

Play it once straight through. Then scrub.

- Frames 0 to 149 are the section. If the layers look separated, the drawing has failed. They should read as one stack with a cut face.
- Frames 150 to 299 are the two paths. If you can trace gold through the separator, the drawing has failed.
- Frames 300 to 509 are the void. The separator stays flat. The lithium does not.
- Frames 510 to 749 keep the void in a thumbnail while pressure acts on the same cell. If the thumbnail disappears before you have compared them, you have lost the cause.
- Frames 750 to 1019 are the inset, then the hold. The filament should not be read as the normal end state of the cell.

The player pauses if your system asks for reduced motion. Arrow keys step a frame. Shift plus an arrow steps one second. The frame readout is the clock. There is no other clock hiding in the animation.

## What this will not be used for

This is an explanatory schematic. It is not a certified engineering reference, a purchasing spec, or a safety case. It does not say which electrolyte to buy, what pressure to design to, or how long a cell will last. Those questions need the cell you actually mean, at the temperature and pressure you will actually use, with the papers and the measurements that belong to that cell.

If you teach from the film, say that out loud. If you put it in a paper, have a solid-state electrochemist look at the wording before it ships. The safeguards are on the figure so they travel with the picture: electrons stay out of ideal electrolyte, pressure is not healing, filaments are not ruled out, and no invented specification is on the plate.

## Sources, read as mechanisms

The void-and-creep account used here follows work that was checked at the abstract level on 20 October 2026:

- Kasemchainan et al., "Critical stripping current leads to dendrite formation on plating in lithium anode solid electrolyte cells," Nature Materials, 2019. https://www.nature.com/articles/s41563-019-0438-9
- Krauskopf et al., "Characterizing the Li-Solid-Electrolyte Interface Dynamics as a Function of Stack Pressure and Current Density," Joule, 2019. https://www.cell.com/joule/fulltext/S2542-4351(19)30308-3
- Yan et al., "How Does the Creep Stress Regulate Void Formation at the Lithium-Solid Electrolyte Interface during Stripping?" Advanced Energy Materials, 2021. DOI 10.1002/aenm.202102283

Use those papers for their arguments. Do not lift their milliamp or megapascal values onto a different cell and call it the figure.

## Questions worth answering cleanly

**Do electrons cross the solid electrolyte?**
Not in the ideal separator drawn here. Electrons move in the lithium, the current collectors, the external load, and the carbon in the composite cathode. The slashed mark in the electrolyte is the rule. The filament inset is the exception, and only at a defect where electrons can reach the metal front.

**Does stack pressure fix interfacial voids?**
It can keep lithium in contact by creep while the pressure is applied. That is maintenance, not healing. The film's thumbnail exists so you can still see the void you started from.

**Does a wetting interlayer stop filaments?**
No. The interlayer in the film is a contact aid. Filament risk stays on the final frame.

**Are the speeds and the sizes real?**
No. The cell view, the interface view, and the defect inset are different scales, and the labels say when the scale changes. Ion motion and void growth are slowed and time-compressed. There is no calibration bar, because a fake micron scale would be a specification.

**Who is the film for?**
A materials student, a battery engineer, or an editor who needs the interface story without a performance claim attached. It is a public schematic. Nothing on the page is for sale, and the page does not collect a name or an email.

Watch the hold frame last. If the risk tag is gone and the cell looks solved, the film has started lying. The version on the pages branch does not do that.
