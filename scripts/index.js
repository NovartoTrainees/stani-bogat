import fetchQuestions from "./services/fetchQuestions.js";
import { askTheAudience } from "./hints.js";
import renderNextQuestionAndAnswers from "./dom-manipulation/visualisation.js";
import { checkTheAnswer } from "./game-logic/checkTheAnswer.js";
import * as elements from "./dom-manipulation/elements.js";
import { onExit } from "./game-logic/exit.js";
import { temp } from "./game-logic/stairwayStages.js";
import * as audio from "./sounds.js";
import { startGame } from "./game-logic/play.js";
import {
  AudienceModal,
  Bronze,
  CallFriend,
  Elite,
  FirstStage,
  GameOver,
  Gold,
  Silver,
} from "./dom-manipulation/modal.js";

await fetchQuestions();

renderNextQuestionAndAnswers();

// document.body.appendChild(new Silver("$10,000"));
// document.body.appendChild(new Bronze("$20,000"));
// document.body.appendChild(new Elite("$30,000"));
// document.body.appendChild(new Gold("$40,000"));
