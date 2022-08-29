import fetchQuestions from "./services/fetchQuestions.js";
import { askTheAudience } from "./hints.js";
import { Visualise } from "./dom-manipulation/visualisation.js";
import {checkTheAnswer} from "./game-logic/checkTheAnswer.js";
import * as elements from "./dom-manipulation/elements.js";
import {CreateCrowdHelpModal} from "./dom-manipulation/modal.js";

document.getElementById('audience').addEventListener("click",()=>{
  document.body.appendChild(CreateCrowdHelpModal([20,50,30,70]))
})
await fetchQuestions();

Visualise();
