import fetchQuestions from "./services/fetchQuestions.js";
import { askTheAudience } from "./hints.js";
import renderNextQuestionAndAnswers from "./dom-manipulation/visualisation.js";
import { checkTheAnswer } from "./game-logic/checkTheAnswer.js";
import * as elements from "./dom-manipulation/elements.js";
import { onExit } from "./game-logic/exit.js";
import { temp } from "./game-logic/stairwayStages.js";
import * as audio from "./sounds.js";
import {
  AudienceModal,
  CallFriend,
  GameOver,
} from "./dom-manipulation/modal.js";

await fetchQuestions();

renderNextQuestionAndAnswers();

 document.body.appendChild(new AudienceModal([50]));
//document.body.appendChild(new CallFriend("hint"));
// document.body.appendChild(new GameOver());
