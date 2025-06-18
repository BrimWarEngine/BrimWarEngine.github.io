let tick = 0;
const ticker = document.getElementById('ticker');
const log = document.getElementById('log');
const modes = ["SCAN", "MIRROR", "SCRAPE", "RECURSE"];

function logLine(text) {
  log.innerHTML += "<br/>" + text;
  log.scrollTop = log.scrollHeight;
}

function runTick() {
  tick++;
  const mode = modes[tick % modes.length];
  ticker.textContent = 'TICK: ' + tick;
  logLine(`[TICK ${tick}] MODE: ${mode}`);
}

setInterval(runTick, 250);
