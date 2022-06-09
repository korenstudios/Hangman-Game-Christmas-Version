import {
  selectOption,
  controlBox,
  popupInfo,
  gameIntro,
  popupAlert,
} from "./gameIntro.js";

// Game Process
const subOne = document.getElementById("character-sub");
export const subTwo = document.getElementById("food-sub");
export const subThree = document.getElementById("symbol1-sub");
export const subFour = document.getElementById("symbol2-sub");
export const subFive = document.getElementById("equipment-sub");
const backStepBtn = document.getElementById("outset-btn");

export const gameCharacterSub = document.querySelector(".game-character-sub");
export const gameFoodSub = document.querySelector(".game-food-sub");
export const gameSymbol1Sub = document.querySelector(".game-symbol1-sub");
export const gameSymbol2Sub = document.querySelector(".game-symbol2-sub");
export const gameEquipmentSub = document.querySelector(".game-equipment-sub");
export const quitBtn = document.getElementById("quit-btn");
const wordBox1 = document.querySelector(".word-box1");
const wordBox2 = document.querySelector(".word-box2");
const wordBox3 = document.querySelector(".word-box3");
const wordBox4 = document.querySelector(".word-box4");
const wordBox5 = document.querySelector(".word-box5");

export default function startGame() {
  backStepBtn.addEventListener("click", () => {
    selectOption.style.display = "none";
    gameIntro.style.display = "block";
    gameIntro.appendChild(controlBox);
    gameIntro.appendChild(popupAlert);
    gameIntro.appendChild(popupInfo);
  });

  subOne.addEventListener("click", () => {
    selectOption.style.display = "none";
    gameCharacterSub.style.display = "block";
    gameCharacterSub.prepend(quitBtn);
    wordBox1.style.display = "block";
    gameCharacterSub.appendChild(controlBox);
    gameCharacterSub.appendChild(popupAlert);
    gameCharacterSub.appendChild(popupInfo);
  });

  subTwo.addEventListener("click", () => {
    selectOption.style.display = "none";
    gameFoodSub.style.display = "block";
    gameFoodSub.prepend(quitBtn);
    gameFoodSub.appendChild(controlBox);
    gameFoodSub.appendChild(popupAlert);
    gameFoodSub.appendChild(popupInfo);
    wordBox1.style.display = "none";
    wordBox2.style.display = "block";
  });

  subThree.addEventListener("click", () => {
    selectOption.style.display = "none";
    gameSymbol1Sub.style.display = "block";
    gameSymbol1Sub.prepend(quitBtn);
    gameSymbol1Sub.appendChild(controlBox);
    gameSymbol1Sub.appendChild(popupAlert);
    gameSymbol1Sub.appendChild(popupInfo);
    wordBox1.style.display = "none";
    wordBox3.style.display = "block";
  });

  subFour.addEventListener("click", () => {
    selectOption.style.display = "none";
    gameSymbol2Sub.style.display = "block";
    gameSymbol2Sub.prepend(quitBtn);
    gameSymbol2Sub.appendChild(controlBox);
    gameSymbol2Sub.appendChild(popupAlert);
    gameSymbol2Sub.appendChild(popupInfo);
    wordBox1.style.display = "none";
    wordBox4.style.display = "block";
  });

  subFive.addEventListener("click", () => {
    selectOption.style.display = "none";
    gameEquipmentSub.style.display = "block";
    gameEquipmentSub.prepend(quitBtn);
    gameEquipmentSub.appendChild(controlBox);
    gameEquipmentSub.appendChild(popupAlert);
    gameEquipmentSub.appendChild(popupInfo);
    wordBox1.style.display = "none";
    wordBox5.style.display = "block";
  });
}
