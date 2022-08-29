import * as elements from "./elements.js";
import fetchQuestions from "../services/fetchQuestions.js";
import { questions } from "../variables.js";

export function Visualise() {
  const current_question = questions[0];
  
  MainQuestion();
  console.log(questions[0]);
  Answer(questions[0].answers[0], elements.quiz.answerA, "a");
  Answer(questions[0].answers[1], elements.quiz.answerB, "b");
  Answer(questions[0].answers[2], elements.quiz.answerC, "c");
  Answer(questions[0].answers[3], elements.quiz.answerD, "d");
}

function MainQuestion() {
  const current_question = questions[0];
  // console.log("Visualise", current_question);
  elements.quiz.question.innerHTML = current_question.question;
}

function Answer(string, container, alphabetIndex) {
  container.innerHTML = string;
  container.dataset.index = alphabetIndex;
}
