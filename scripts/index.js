import fetchQuestions from "./services/fetchQuestions.js";
import { askTheAudience } from "./hints.js";
import renderNextQuestionAndAnswers from "./dom-manipulation/visualisation.js";
import { checkTheAnswer } from "./game-logic/checkTheAnswer.js";
import * as elements from "./dom-manipulation/elements.js";
import { onExit } from "./game-logic/exit.js";
import { stages } from "./game-logic/stairwayStages.js";
import * as audio from "./sounds.js";
import { startGame } from "./game-logic/play.js";
import * as modals from "./dom-manipulation/modal.js";

await fetchQuestions();

renderNextQuestionAndAnswers();