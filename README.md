# Solid-state battery interface

Frame-locked 34-second sectional schematic of one lithium-metal solid-state cell. 30 fps, frames 0-1019. The picture is driven by the frame index, not by a random clock.

Open `index.html`. Space plays and pauses. The scrubber and arrow keys step the same timeline.

## What the film shows

1. Frames 0-149. A section plane crosses the stack. The layers stay in place.
2. Frames 150-299. Discharge. Lithium ions cross the solid electrolyte. Electrons use the metal, the cathode carbon, and the external load. An ideal electrolyte does not carry those electrons.
3. Frames 300-509. Scale change, slowed. Stripping opens voids in the lithium where creep does not keep up. Ionic current crowds into the contacts that remain.
4. Frames 510-749. The same cell under stack pressure. Contact returns while the load is held. That is creep, not spontaneous healing. The interlayer is a wetting aid only. A thumbnail keeps the void stage in view.
5. Frames 750-1019. Scale change, slowed. A filament follows a defect partway, only where electrons can reach the metal front. It is not a completed short, and it is not inevitable. The last second holds the complete cell with the risk still labeled.

## Safeguards

- No electron marker crosses the ideal electrolyte.
- Pressure is an applied load. The metal does not heal itself.
- The interlayer is not filament immunity.
- The filament inset is condition-dependent and stops partway.
- Changed scale, slowed motion, and time compression are written on the frames where they apply.
- No current, pressure, conductivity, energy, or cycle-life number is drawn. Those values belong to specific cells.
- Binder is omitted. The chemistry is unnamed on purpose.
- The page loads no third-party script, sets no analytics cookie, and has no form.

This is an explanatory schematic, not a certified engineering reference. Review it against the cell you actually mean before using it in a class or a paper.

## Mechanisms, not a specification

Void formation when stripping outruns creep, and the role of stack pressure, are reported for specific cells by Kasemchainan and others, Nature Materials (2019), https://www.nature.com/articles/s41563-019-0438-9, and by Krauskopf and others, Joule (2019), https://www.cell.com/joule/fulltext/S2542-4351(19)30308-3. A creep-and-contact treatment is in Advanced Energy Materials (2021), DOI 10.1002/aenm.202102283. Abstracts were checked on 20 October 2026. Their thresholds are not general and are not drawn here.

## Files

- `index.html` is the player and the drawing.
- `model-Cursor.js` is the frame model. `node test-model-Cursor.js` checks the timeline, the void and pressure sequence, and the wording locks.

The same frame clock can carry another layered interface. Swap the layer stack and the path functions. Keep field color off the hardware.

## GitHub

About: Frame-locked 34-second sectional schematic of a lithium-metal solid-state battery interface.

Topics: `materials-science` `solid-state-battery` `scientific-visualization` `battery-interface` `explainer` `schematic` `lithium-metal` `education`

Pages serves this repository from the `pages` branch:

https://mizcausevic-dev.github.io/solid-state-battery-interface-explainer/

Repository: https://github.com/mizcausevic-dev/solid-state-battery-interface-explainer

The Medium-length article is `medium-article-Cursor.md`. It uses the same limits as the film. No current, pressure, or cycle-life number from the cited papers is copied into the prose as a general spec.
