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
import { updateStage } from "./stairwayStages.js"

elements.quiz.answerA.addEventListener("click", checkTheAnswer);
elements.quiz.answerB.addEventListener("click", checkTheAnswer);
elements.quiz.answerC.addEventListener("click", checkTheAnswer);
elements.quiz.answerD.addEventListener("click", checkTheAnswer);

function checkTheAnswer(event) {
    elements.answerArray.forEach((button) => {
        button.classList.add("disabled");
        button.parentElement.classList.add("disabled")
        console.log(button.parentElement)
    });


    const current_question = questions[0];
    const isCorrectAnswer =
        current_question.correct_answer === event.target.textContent;
    event.target.classList.add("selected");

    setTimeout(() => {
        if (isCorrectAnswer) {
            event.target.classList.add("correct");

            questions.shift();

            if (questions.length === 0) {
                fetchQuestions(questionsDifficulty[0]);
            }
            updateStage();
            incrementQuestionIndex();



            // manipulate stage
            // get last sum
            // check for sigurna suma

            setTimeout(() => {
                // sounds
                renderNextQuestionAndAnswers();
            }, 1000);

        } else {
            elements.answerArray.forEach((button) => {
                if (current_question.correct_answer === button.textContent) {
                    button.classList.add("correct")
                }
            });
            if (getQuestionIndex() > 5 && getQuestionIndex() <= 10) {
                replaceCertainSum(500);
            } else if (getQuestionIndex() > 10 && getQuestionIndex() < 15) {
                replaceCertainSum(5000);
            }

            console.log(getCertainSum());
        }
    }, 1000);
}

export { checkTheAnswer };
