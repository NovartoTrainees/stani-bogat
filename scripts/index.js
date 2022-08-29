import fetchQuestions from "./services/fetchQuestions.js";
import { askTheAudience } from "./hints.js";
import { Visualise } from "./dom-manipulation/visualisation.js";
import * as elements from "./dom-manipulation/elements.js"; 

elements.quiz.answerA.addEventListener("click");
elements.quiz.answerB.addEventListener("click");
elements.quiz.answerC.addEventListener("click");
elements.quiz.answerD.addEventListener("click");



await fetchQuestions();

Visualise();
