import { getQuestionIndex } from "../variables.js";
export const temp = Array.from(document.querySelectorAll(".sum")).reverse();

export function updateStage() {
  temp[getQuestionIndex() - 1].classList.remove("current-sum");
  temp[getQuestionIndex() - 1].style.opacity = 0.3;

  temp[getQuestionIndex()].classList.add("current-sum");
}
