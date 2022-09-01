import { getQuestionIndex } from "../variables.js";
import * as sounds from "../sounds.js";
export const stages = Array.from(document.querySelectorAll(".sum")).reverse();

export function updateStage() {
  backgroundSounds();
  stages[getQuestionIndex() - 1].classList.remove("current-sum");
  stages[getQuestionIndex() - 1].style.opacity = 0.3;
  stages[getQuestionIndex()].classList.add("current-sum");
}
let bgSound100to1000 = sounds.PlayHundredToThousand();
let bgSound1000to50000 = sounds.PlayThousandToFiftyThousand();
const bgSound50000 = sounds.PlayFiftyThousand();
const bgSound100000 = sounds.PlayOneHundredThousand();
const hintAudio = sounds.PlayLetsPlaySound();

export function backgroundAtStart() {
  bgSound100to1000.play();
}

export function backgroundSounds() {
  if (getQuestionIndex() < 13 && getQuestionIndex() > 4) {
    bgSound100to1000.pause();
    bgSound1000to50000.play();
  }
  if (getQuestionIndex === 13) {
    bgSound1000to50000.pause();
    bgSound50000.play();
  }
  if (getQuestionIndex() === 14) {
    bgSound1000to50000.pause();
    bgSound100000.play();
  }
}
// to be tested and discuss with the others
export function hintSound() {
  setTimeout(function () {
    hintAudio.play();

    setTimeout(function () {
      hintAudio.pause();
      hintAudio.currentTime = 0;
    }, 5000);
  }, 10);
}
