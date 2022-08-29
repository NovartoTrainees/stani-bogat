import fetchQuestions from "./services/fetchQuestions.js";
import { askTheAudience } from "./hints.js";
import renderNextQuestionAndAnswers from "./dom-manipulation/visualisation.js";
import {checkTheAnswer} from "./game-logic/checkTheAnswer.js";
import * as elements from "./dom-manipulation/elements.js";


await fetchQuestions();

renderNextQuestionAndAnswers();
