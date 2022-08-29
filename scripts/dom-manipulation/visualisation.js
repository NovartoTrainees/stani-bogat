import * as elements from "./elements.js";
import { questions } from "../variables.js";

function renderNextQuestionAndAnswers() {

  console.log(questions[0]);
  renderQuestion();

  elements.answerArray.forEach((answerButton, index) => {
    answerButton.innerHTML = questions[0].answers[index];

    answerButton.removeAttribute("disabled");
    answerButton.classList.remove("correct");
    answerButton.classList.remove("selected");

  });
}

function renderQuestion() {
  const current_question = questions[0];

  elements.quiz.question.innerHTML = current_question.question;
}

export default renderNextQuestionAndAnswers;
