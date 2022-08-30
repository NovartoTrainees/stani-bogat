import { getQuestionIndex } from "../variables.js";
import * as sounds from "../sounds.js";
export const temp = Array.from(document.querySelectorAll(".sum")).reverse();

export function updateStage() {
  temp[getQuestionIndex() - 1].classList.remove("current-sum");
  temp[getQuestionIndex() - 1].style.opacity = 0.3;

  temp[getQuestionIndex()].classList.add("current-sum");
}

// let [tmp, tmp_stop] = sounds.PlayFiftyThousand;
// console.log(tmp);
// function audio_background_music(){
//     if (getQuestionIndex === 1) {
//         sounds.PlayThousandToFiftyThousand
//     } else if (getQuestionIndex === 6){
//         sounds.PlayThousandToFiftyThousan
//     }
// }
