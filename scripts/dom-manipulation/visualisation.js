import * as elements from "./elements.js";
import fetchQuestions from "../services/fetchQuestions.js";
import { questions } from "../variables.js";

export function Visualise() {
  const current_question = questions[0];
  
  MainQuestion();

  Answer(current_question.answers[0], elements.quiz.answerA);
  Answer(current_question.answers[1], elements.quiz.answerB);
  Answer(current_question.answers[2], elements.quiz.answerC);
  Answer(current_question.answers[3], elements.quiz.answerD);
}

function MainQuestion() {
  const current_question = questions[0];
  // console.log("Visualise", current_question);
  elements.quiz.question.innerHTML = current_question.question;
}

function Answer(string, container) {
  container.innerHTML = string;
}
