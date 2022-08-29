
import { questionsDifficulty,questions } from "../variables.js";
import * as elements from "../dom-manipulation/elements.js";

elements.quiz.answerA.addEventListener("click",checkTheAnswer);
elements.quiz.answerB.addEventListener("click",checkTheAnswer);
elements.quiz.answerC.addEventListener("click",checkTheAnswer);
elements.quiz.answerD.addEventListener("click",checkTheAnswer);

function checkTheAnswer (event){
    const current_question = questions[0];
    const marked_answer = elements;
    console.log(event.target.innerHTML);
    console.log(event.target.Value);
    console.log(current_question.answers);
}

export {checkTheAnswer};



