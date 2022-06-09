import {
  snowflakes_count,
  spawn_snow,
  spawnSnowCSS,
  toggle_snow,
  snow_btn,
} from "./pureSnow.js";

import {
  toggle_audio,
  themeAction,
  infoActivision,
  gameProcess,
  gamePowerSettings,
} from "./gameIntro.js";

import startGame from "./gameProcess.js";

import gameInit from "./gameManagement.js";

// Load the rules and execute after the DOM loads
window.addEventListener("load", () => {
  spawnSnowCSS(snowflakes_count);
  spawn_snow(snowflakes_count);
});

// Game run/exit game
gamePowerSettings();

// Snow active/disabled
snow_btn.addEventListener("click", toggle_snow);

// Theme audio active/muted
toggle_audio.addEventListener("click", themeAction);

// Game info active/disabled
infoActivision();

// Step 2: Intro & The Subjects
gameProcess();

// The choosen subject & start game
startGame();

// Game initialization
gameInit();
