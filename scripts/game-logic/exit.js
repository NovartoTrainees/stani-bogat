import { exitButton } from "../dom-manipulation/elements.js";
import { getQuestionIndex, sumStairway } from "../variables.js";
import * as modals from "../dom-manipulation/modal.js";

exitButton.addEventListener("click", onExit);

export function onExit() {
  let sumWon = sumStairway[getQuestionIndex() - 1];
  console.log(sumWon);
  document.body.appendChild(new modals.GameExit(sumWon));
  //gameExit da dobavq
}
