import fetchQuestions from "./services/fetchQuestions.js";
import { askTheAudience } from "./hints.js";
import renderNextQuestionAndAnswers from "./dom-manipulation/visualisation.js";
import { checkTheAnswer } from "./game-logic/checkTheAnswer.js";
import * as elements from "./dom-manipulation/elements.js";
import { onExit } from "./game-logic/exit.js";
import { temp } from "./game-logic/stairwayStages.js";
import { startGame } from "./game-logic/play.js"


await fetchQuestions();

renderNextQuestionAndAnswers();
