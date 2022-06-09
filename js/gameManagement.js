import {
  gameCharacterSub,
  gameFoodSub,
  gameSymbol1Sub,
  gameSymbol2Sub,
  gameEquipmentSub,
  quitBtn,
  subTwo,
  subThree,
  subFour,
  subFive,
} from "./gameProcess.js";

import {
  selectOption,
  controlBox,
  popupInfo,
  popupAlert,
} from "./gameIntro.js";

const lettersBox1 = document.querySelector(".letters-box1");
const lettersBox2 = document.querySelector(".letters-box2");
const lettersBox3 = document.querySelector(".letters-box3");
const lettersBox4 = document.querySelector(".letters-box4");
const lettersBox5 = document.querySelector(".letters-box5");

const msg1 = document.querySelector(".note1 .msg1");
const msg2 = document.querySelector(".note2 .msg2");
const msg3 = document.querySelector(".note3 .msg3");
const msg4 = document.querySelector(".note4 .msg4");
const msg5 = document.querySelector(".note5 .msg5");
const resBtn1 = document.querySelector(".note1 .btn-shadow-drop");
const resBtn2 = document.querySelector(".note2 .btn-shadow-drop");
const resBtn3 = document.querySelector(".note3 .btn-shadow-drop");
const resBtn4 = document.querySelector(".note4 .btn-shadow-drop");
const resBtn5 = document.querySelector(".note5 .btn-shadow-drop");

const letter = Array.from(Array(26)).map((elem, index) => index + 65);
const letters = letter.map((elem) => String.fromCharCode(elem));

letters.forEach((letter) => {
  lettersBox1.innerHTML += `<button class="letter-show">${letter}</button>`;
  lettersBox2.innerHTML += `<button class="letter-show">${letter}</button>`;
  lettersBox3.innerHTML += `<button class="letter-show">${letter}</button>`;
  lettersBox4.innerHTML += `<button class="letter-show">${letter}</button>`;
  lettersBox5.innerHTML += `<button class="letter-show">${letter}</button>`;
});

let partNum1 = 0;
let partNum2 = 0;
let partNum3 = 0;
let partNum4 = 0;
let partNum5 = 0;

const letterBtns1 = document.querySelectorAll(".letters-box1 .letter-show");
const hangman1Parts = document.querySelectorAll(".hangman1 .part");
const wordParts = document.querySelectorAll(".word-box1 span");

const letterBtns2 = document.querySelectorAll(".letters-box2 .letter-show");
const hangman2Parts = document.querySelectorAll(".hangman2 .part");
const wordParts2 = document.querySelectorAll(".word-box2 span");

const letterBtns3 = document.querySelectorAll(".letters-box3 .letter-show");
const hangman3Parts = document.querySelectorAll(".hangman3 .part");
const wordParts3 = document.querySelectorAll(".word-box3 span");

const letterBtns4 = document.querySelectorAll(".letters-box4 .letter-show");
const hangman4Parts = document.querySelectorAll(".hangman4 .part");
const wordParts4 = document.querySelectorAll(".word-box4 span");

const letterBtns5 = document.querySelectorAll(".letters-box5 .letter-show");
const hangman5Parts = document.querySelectorAll(".hangman5 .part");
const wordParts5 = document.querySelectorAll(".word-box5 span");

export default function gameInit() {
  quitBtn.addEventListener("click", () => {
    gameCharacterSub.style.display = "none";
    gameFoodSub.style.display = "none";
    gameSymbol1Sub.style.display = "none";
    gameSymbol2Sub.style.display = "none";
    gameEquipmentSub.style.display = "none";
    selectOption.style.display = "block";
    selectOption.appendChild(controlBox);
    selectOption.appendChild(popupAlert);
    selectOption.appendChild(popupInfo);
  });

  for (let btnNum = 0; btnNum < letterBtns1.length; btnNum++) {
    letterBtns1[btnNum].addEventListener("click", (e) => {
      const btn = e.target;

      if (btn) {
        btn.style.pointerEvents = "none";
      }

      if (btn === letterBtns1[18]) {
        wordParts[0].innerHTML = "S";
        wordParts[9].innerHTML = "s";
        btn.style.backgroundColor = "#2ecc72";
      } else if (btn === letterBtns1[0]) {
        wordParts[1].innerHTML = "a";
        wordParts[4].innerHTML = "a";
        wordParts[7].innerHTML = "a";
        btn.style.backgroundColor = "#2ecc72";
      } else if (btn === letterBtns1[13]) {
        wordParts[2].innerHTML = "n";
        btn.style.backgroundColor = "#2ecc72";
      } else if (btn === letterBtns1[19]) {
        wordParts[3].innerHTML = "t";
        btn.style.backgroundColor = "#2ecc72";
      } else if (btn === letterBtns1[2]) {
        wordParts[5].innerHTML = "C";
        btn.style.backgroundColor = "#2ecc72";
        btn.style.backgroundColor = "#2ecc72";
      } else if (btn === letterBtns1[11]) {
        wordParts[6].innerHTML = "l";
        btn.style.backgroundColor = "#2ecc72";
      } else if (btn === letterBtns1[20]) {
        wordParts[8].innerHTML = "u";
        btn.style.backgroundColor = "#2ecc72";
      } else {
        hangman1Parts[partNum1++].style.display = "block";
        btn.style.backgroundColor = "#e74e33";
        if (partNum1 === 9) {
          msg1.innerHTML = "You Lose! Try Again.";
          msg1.style.color = "#e74e33";
          resBtn1.style.display = "block";
          lettersBox1.style.pointerEvents = "none";
          quitBtn.style.pointerEvents = "none";
        }
      }

      if (
        wordParts[0].innerHTML === "S" &&
        wordParts[9].innerHTML === "s" &&
        wordParts[1].innerHTML === "a" &&
        wordParts[4].innerHTML === "a" &&
        wordParts[7].innerHTML === "a" &&
        wordParts[2].innerHTML === "n" &&
        wordParts[3].innerHTML === "t" &&
        wordParts[5].innerHTML === "C" &&
        wordParts[6].innerHTML === "l" &&
        wordParts[8].innerHTML === "u"
      ) {
        msg1.innerHTML = "You Win! Continue To The Next Subject.";
        msg1.style.color = "#2ecc72";
        lettersBox1.style.pointerEvents = "none";
        subTwo.style.pointerEvents = "all";
        subTwo.style.opacity = "1";
      }
    });

    resBtn1.addEventListener("click", () => window.location.reload());
  }

  for (let btnNum = 0; btnNum < letterBtns2.length; btnNum++) {
    letterBtns2[btnNum].addEventListener("click", (e) => {
      const btn = e.target;

      if (btn) {
        btn.style.pointerEvents = "none";
      }

      if (btn === letterBtns2[19]) {
        wordParts2[0].innerHTML = "T";
        btn.style.backgroundColor = "#2ecc72";
      } else if (btn === letterBtns2[20]) {
        wordParts2[1].innerHTML = "u";
        btn.style.backgroundColor = "#2ecc72";
      } else if (btn === letterBtns2[17]) {
        wordParts2[2].innerHTML = "r";
        btn.style.backgroundColor = "#2ecc72";
      } else if (btn === letterBtns2[10]) {
        wordParts2[3].innerHTML = "k";
        btn.style.backgroundColor = "#2ecc72";
      } else if (btn === letterBtns2[4]) {
        wordParts2[4].innerHTML = "e";
        btn.style.backgroundColor = "#2ecc72";
      } else if (btn === letterBtns2[24]) {
        wordParts2[5].innerHTML = "y";
        btn.style.backgroundColor = "#2ecc72";
      } else {
        hangman2Parts[partNum2++].style.display = "block";
        btn.style.backgroundColor = "#e74e33";
        if (partNum2 === 9) {
          msg2.innerHTML = "You Lose! Try Again.";
          msg2.style.color = "#e74e33";
          resBtn2.style.display = "block";
          lettersBox2.style.pointerEvents = "none";
          quitBtn.style.pointerEvents = "none";
        }
      }

      if (
        wordParts2[0].innerHTML === "T" &&
        wordParts2[1].innerHTML === "u" &&
        wordParts2[2].innerHTML === "r" &&
        wordParts2[3].innerHTML === "k" &&
        wordParts2[4].innerHTML === "e" &&
        wordParts2[5].innerHTML === "y"
      ) {
        msg2.innerHTML = "You Win! Continue To The Next Subject.";
        msg2.style.color = "#2ecc72";
        lettersBox2.style.pointerEvents = "none";
        subThree.style.pointerEvents = "all";
        subThree.style.opacity = "1";
      }
    });
  }

  resBtn2.addEventListener("click", () => window.location.reload());

  for (let btnNum = 0; btnNum < letterBtns3.length; btnNum++) {
    letterBtns3[btnNum].addEventListener("click", (e) => {
      const btn = e.target;

      if (btn) {
        btn.style.pointerEvents = "none";
      }

      if (btn === letterBtns3[19]) {
        wordParts3[0].innerHTML = "T";
        btn.style.backgroundColor = "#2ecc72";
      } else if (btn === letterBtns3[17]) {
        wordParts3[1].innerHTML = "r";
        btn.style.backgroundColor = "#2ecc72";
      } else if (btn === letterBtns3[4]) {
        wordParts3[2].innerHTML = "e";
        wordParts3[3].innerHTML = "e";
        btn.style.backgroundColor = "#2ecc72";
      } else {
        hangman3Parts[partNum3++].style.display = "block";
        btn.style.backgroundColor = "#e74e33";
        if (partNum3 === 9) {
          msg3.innerHTML = "You Lose! Try Again.";
          msg3.style.color = "#e74e33";
          resBtn3.style.display = "block";
          lettersBox3.style.pointerEvents = "none";
          quitBtn.style.pointerEvents = "none";
        }
      }

      if (
        wordParts3[0].innerHTML === "T" &&
        wordParts3[1].innerHTML === "r" &&
        wordParts3[2].innerHTML === "e" &&
        wordParts3[3].innerHTML === "e"
      ) {
        msg3.innerHTML = "You Win! Continue To The Next Subject.";
        msg3.style.color = "#2ecc72";
        lettersBox3.style.pointerEvents = "none";
        subFour.style.pointerEvents = "all";
        subFour.style.opacity = "1";
      }
    });
  }

  resBtn3.addEventListener("click", () => window.location.reload());

  for (let btnNum = 0; btnNum < letterBtns4.length; btnNum++) {
    letterBtns4[btnNum].addEventListener("click", (e) => {
      const btn = e.target;

      if (btn) {
        btn.style.pointerEvents = "none";
      }

      if (btn === letterBtns4[1]) {
        wordParts4[0].innerHTML = "B";
        btn.style.backgroundColor = "#2ecc72";
      } else if (btn === letterBtns4[4]) {
        wordParts4[1].innerHTML = "e";
        btn.style.backgroundColor = "#2ecc72";
      } else if (btn === letterBtns4[11]) {
        wordParts4[2].innerHTML = "l";
        wordParts4[3].innerHTML = "l";
        btn.style.backgroundColor = "#2ecc72";
      } else if (btn === letterBtns4[18]) {
        wordParts4[4].innerHTML = "s";
        btn.style.backgroundColor = "#2ecc72";
      } else {
        hangman4Parts[partNum4++].style.display = "block";
        btn.style.backgroundColor = "#e74e33";
        if (partNum4 === 9) {
          msg4.innerHTML = "You Lose! Try Again.";
          msg4.style.color = "#e74e33";
          resBtn4.style.display = "block";
          lettersBox4.style.pointerEvents = "none";
          quitBtn.style.pointerEvents = "none";
        }
      }

      if (
        wordParts4[0].innerHTML === "B" &&
        wordParts4[1].innerHTML === "e" &&
        wordParts4[2].innerHTML === "l" &&
        wordParts4[3].innerHTML === "l" &&
        wordParts4[4].innerHTML === "s"
      ) {
        msg4.innerHTML = "You Win! Continue To The Next Subject.";
        msg4.style.color = "#2ecc72";
        lettersBox4.style.pointerEvents = "none";
        subFive.style.pointerEvents = "all";
        subFive.style.opacity = "1";
      }
    });
  }

  resBtn4.addEventListener("click", () => window.location.reload());

  for (let btnNum = 0; btnNum < letterBtns5.length; btnNum++) {
    letterBtns5[btnNum].addEventListener("click", (e) => {
      const btn = e.target;

      if (btn) {
        btn.style.pointerEvents = "none";
      }

      if (btn === letterBtns5[18]) {
        wordParts5[0].innerHTML = "S";
        btn.style.backgroundColor = "#2ecc72";
      } else if (btn === letterBtns5[11]) {
        wordParts5[1].innerHTML = "l";
        btn.style.backgroundColor = "#2ecc72";
      } else if (btn === letterBtns5[4]) {
        wordParts5[2].innerHTML = "e";
        btn.style.backgroundColor = "#2ecc72";
      } else if (btn === letterBtns5[3]) {
        wordParts5[3].innerHTML = "d";
        btn.style.backgroundColor = "#2ecc72";
      } else {
        hangman5Parts[partNum5++].style.display = "block";
        btn.style.backgroundColor = "#e74e33";
        if (partNum5 === 9) {
          msg5.innerHTML = "You Lose! Try Again.";
          msg5.style.color = "#e74e33";
          resBtn5.style.display = "block";
          lettersBox5.style.pointerEvents = "none";
          quitBtn.style.pointerEvents = "none";
        }
      }

      if (
        wordParts5[0].innerHTML === "S" &&
        wordParts5[1].innerHTML === "l" &&
        wordParts5[2].innerHTML === "e" &&
        wordParts5[3].innerHTML === "d"
      ) {
        msg5.innerHTML = "Well Done! You Finished The Game.";
        msg5.style.color = "#2ecc72";
        lettersBox5.style.pointerEvents = "none";
        quitBtn.style.pointerEvents = "none";
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      }
    });
  }

  resBtn5.addEventListener("click", () => window.location.reload());
}
