import * as animeObj from "./txtAnime.js";

// Game Intro
export const toggle_audio = document.getElementById("toggle_audio");
const themeAudio = new Audio("./audio/merry_christmas_theme.mp3");
export const popupInfo = document.getElementById("popup-info");
const popupClose = document.getElementById("popup-close");
const infoBtn = document.getElementById("info-btn");
const startBtn = document.getElementById("start-btn");
export const gameIntro = document.querySelector(".hangman-intro");
export const selectOption = document.querySelector(".select-option");
export const controlBox = document.querySelector(".control-btns-box");
const powerBtn = document.getElementById("power-btn");
export const popupAlert = document.getElementById("popup-alert");
const confirmBtn = document.getElementById("confirm-btn");
const rejectBtn = document.getElementById("reject-btn");

function closeGame() {
  window.close();
}

export function gamePowerSettings() {
  powerBtn.addEventListener("click", () => {
    popupAlert.style.display = "block";
  });

  confirmBtn.addEventListener("click", () => {
    popupAlert.style.display = "none";
    document.querySelector(".power-icon").src = "./img/power-off.svg";
    setTimeout(closeGame, 2000, false);
  });

  rejectBtn.addEventListener("click", () => {
    popupAlert.style.display = "none";
  });
}

export function themeAction() {
  const soundActive = toggle_audio.classList.toggle("sound-active");
  if (soundActive) {
    document.querySelector(".audio-icon").src = "./img/audio_on.png";
    themeAudio.autoplay = true;
    themeAudio.loop = true;
    themeAudio.play();
    themeAudio.muted = false;
  } else {
    themeAudio.muted = true;
    document.querySelector(".audio-icon").src = "./img/audio_off.png";
  }
}

export function infoActivision() {
  infoBtn.addEventListener("click", () => {
    popupInfo.style.display = "block";
  });

  popupClose.addEventListener("click", () => {
    popupInfo.style.display = "none";
  });
}

export function gameProcess() {
  // Intro Header Animate
  const introHeader = new TxtAnime();

  introHeader.animate(".game-topic", {
    effect: "tx-an-3",
    delayStart: 0,
    delay: 0.1,
    duration: 1.5,
    loop: false,
    overflow: true,
  });

  startBtn.addEventListener("click", () => {
    gameIntro.style.display = "none";
    selectOption.style.display = "block";
    selectOption.appendChild(controlBox);
    selectOption.appendChild(popupAlert);
    selectOption.appendChild(popupInfo);

    // Choose Subject Header Animate
    const chooseSubjectHeader = new TxtAnime();

    chooseSubjectHeader.animate(".choose-topic", {
      effect: "tx-an-8",
      delayStart: 0,
      delay: 0.1,
      duration: 1.5,
      loop: false,
      overflow: true,
    });
  });
}
