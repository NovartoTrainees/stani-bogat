import * as elements from "./elements.js";
import fetchQuestions from "../services/fetchQuestions.js";
import { questions } from "../variables.js";

export function Visualise() {
  MainQuestion();
}

function MainQuestion() {
  const current_question = questions[0];
  console.log("Visualise", current_question);
  elements.mainQuestion.innerHTML = current_question.question;

  current_question.answers.forEach((answer, i) => {
    Answer(answer, elements.answerContainers[i]);
  });
}

function Answer(string, container) {
  container.children[0].innerHTML = string;
}
