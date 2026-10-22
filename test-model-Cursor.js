const SSB = require("./model-Cursor.js");
const assert = require("assert");

assert.strictEqual(SSB.FRAME_COUNT, 1020);
assert.strictEqual(SSB.LAST, 1019);
assert.strictEqual(SSB.FPS, 30);
assert.strictEqual(SSB.coversEveryFrame(), true);

for (let f = 0; f <= 1019; f += 1) {
  const s = SSB.derive(f);
  assert.strictEqual(s.frame, f);
  assert.ok(s.voidAmt >= 0 && s.voidAmt <= 1);
  assert.ok(s.pressure >= 0 && s.pressure <= 1);
  assert.ok(s.reveal >= 0 && s.reveal <= 1);
  assert.ok(s.cam.z > 0);
}

assert.strictEqual(SSB.derive(0).voidAmt, 0);
assert.strictEqual(SSB.derive(149).stage.id, "reveal");
assert.strictEqual(SSB.derive(150).stage.id, "paths");
assert.ok(SSB.derive(220).discharge > 0.95);
assert.strictEqual(SSB.derive(299).stage.id, "paths");
assert.strictEqual(SSB.derive(300).stage.id, "void");
assert.ok(SSB.derive(300).voidAmt === 0);
assert.ok(SSB.derive(509).voidAmt > 0.95);
assert.strictEqual(SSB.derive(510).stage.id, "contact");
assert.ok(SSB.derive(749).voidAmt < 0.02);
assert.ok(SSB.derive(749).pressure > 0.95);
assert.ok(SSB.derive(749).interlayer > 0.95);
assert.strictEqual(SSB.derive(750).stage.id, "filament");
assert.ok(SSB.derive(880).inset > 0.95);
assert.ok(SSB.derive(880).filamentGrowth > 0.5);
assert.ok(SSB.derive(1019).inset < 0.02);
assert.ok(SSB.derive(1019).motion < 0.02);
assert.ok(SSB.derive(1019).pressure > 0.95);
assert.strictEqual(SSB.derive(1019).voidAmt, 0);
assert.strictEqual(SSB.derive(1019).note, SSB.END_NOTE);

const endCam = SSB.derive(1019).cam;
const holdCam = SSB.derive(990).cam;
assert.ok(Math.abs(endCam.cx - holdCam.cx) < 1e-9);
assert.ok(Math.abs(endCam.cy - holdCam.cy) < 1e-9);
assert.ok(Math.abs(endCam.z - holdCam.z) < 1e-9);

assert.strictEqual(SSB.gapAt(0.5, 0), 0);
assert.strictEqual(SSB.gapAt(0.5, 1), 0);
assert.ok(SSB.gapAt(0.36, 1) > 0.5);

assert.ok(SSB.derive(80).scaleText.indexOf("not to scale") !== -1);
assert.ok(SSB.derive(400).scaleText.indexOf("Scale change") !== -1);
assert.ok(SSB.derive(400).timeText.indexOf("Slowed") !== -1);
assert.ok(SSB.derive(400).timeText.indexOf("time-compressed") !== -1);
assert.ok(SSB.derive(220).timeText.indexOf("Time compressed") !== -1);
assert.ok(SSB.derive(860).scaleText.indexOf("Scale change") !== -1);
assert.ok(SSB.derive(860).timeText.indexOf("Slowed") !== -1);

const blob = JSON.stringify(SSB.COPY) + JSON.stringify(SSB.STAGES) + SSB.END_NOTE;
assert.ok(/not spontaneous healing/i.test(blob));
assert.ok(/blocks electrons/i.test(blob));
assert.ok(/not inevitable/i.test(blob));
assert.ok(/not filament immunity/i.test(blob));
assert.ok(!/\b\d+(\.\d+)?\s*(mA|MPa|mS\/cm|Wh)\b/.test(blob));
assert.ok(!/dendrite-proof/i.test(blob));
assert.ok(!/self-healing/i.test(blob));
assert.ok(!/—/.test(blob));

const moved = SSB.camera(0).z !== SSB.camera(149).z || SSB.camera(0).cx !== SSB.camera(149).cx;
assert.strictEqual(moved, true);

console.log("model checks passed");
