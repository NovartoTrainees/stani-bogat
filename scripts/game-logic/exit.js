import { exitButton } from "../dom-manipulation/elements.js";
import { getQuestionIndex, sumStairway } from "../variables.js";

exitButton.addEventListener("click", onExit);

export function onExit() {
  let sumWon = sumStairway[getQuestionIndex() - 1];
  console.log(sumWon);
  return sumWon;
  //gameExit da dobavq
}
