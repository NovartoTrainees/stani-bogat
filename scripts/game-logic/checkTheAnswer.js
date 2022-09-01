import {
  questionsDifficulty,
  questions,
  incrementQuestionIndex,
  getQuestionIndex,
  replaceCertainSum,
  getCertainSum,
} from "../variables.js";
import * as elements from "../dom-manipulation/elements.js";
import renderNextQuestionAndAnswers from "../dom-manipulation/visualisation.js";
import fetchQuestions from "../services/fetchQuestions.js";
import { updateStage } from "./stairwayStages.js";
import * as sounds from "../sounds.js";
import * as modals from "../dom-manipulation/modal.js";

elements.quiz.answerA.addEventListener("click", checkTheAnswer);
elements.quiz.answerB.addEventListener("click", checkTheAnswer);
elements.quiz.answerC.addEventListener("click", checkTheAnswer);
elements.quiz.answerD.addEventListener("click", checkTheAnswer);

function checkTheAnswer(event) {
  elements.answerArray.forEach((button) => {
    button.classList.add("disabled");
    button.parentElement.classList.add("disabled");
    console.log(button.parentElement);
  });

  const current_question = questions[0];
  const isCorrectAnswer =
    current_question.correct_answer === event.target.textContent;
  event.target.classList.add("selected");

  setTimeout(() => {
    if (isCorrectAnswer) {
      event.target.classList.add("correct");
      sounds.PlayCorrectAnswer().play();
      questions.shift();

      if (questions.length === 0) {
        fetchQuestions(questionsDifficulty[0]);
      }
      updateStage();
      incrementQuestionIndex();

      setTimeout(() => {
        // sounds
        renderNextQuestionAndAnswers();
      }, 1000);
      if (getQuestionIndex() === 6) {
        document.body.appendChild(new modals.Bronze(500));
      } else if (getQuestionIndex() === 11) {
        document.body.appendChild(new modals.Silver(5000));
      } else if (getQuestionIndex() === 16) {
        document.body.appendChild(new modals.Gold(100000));
      }
    } else {
      sounds.PlayWrongAnswer().play();
      elements.answerArray.forEach((button) => {
        if (current_question.correct_answer === button.textContent) {
          button.classList.add("correct");
        }
      });
      if (getQuestionIndex() > 5 && getQuestionIndex() <= 10) {
        replaceCertainSum(500);
      } else if (getQuestionIndex() > 10 && getQuestionIndex() < 15) {
        replaceCertainSum(5000);
      }

      // if (getCertainSum() < 500) {
      //   document.body.appendChild(new modals.GameOver());
      // } else if (getCertainSum() === 500) {
      //   document.body.appendChild(new modals.Bronze("$500"));
      // } else if (getCertainSum() === 5000) {
      //   document.body.appendChild(new modals.Silver("$5,000"));
      // }

      console.log(getCertainSum());

      /**
       *
       * KOCETO:
       *
       */
      if (getCertainSum() === 0) {
        document.body.appendChild(new modals.GameOver());
      }
      if (getCertainSum() === 500) {
        document.body.appendChild(new modals.Bronze(replaceCertainSum()));
      } else if (getCertainSum() === 5000) {
        document.body.appendChild(new modals.Silver(replaceCertainSum()));
      }
    }
  }, 1000);
}

export { checkTheAnswer };
