import { questions, questionsDifficulty } from "../variables.js";
import { dummyAnswer } from "../dom-manipulation/elements.js"

const populateQuestions = (data) => {
  const transformed_data = transformData(data);

  transformed_data.forEach((question) => questions.push(question));

  questionsDifficulty.shift();
};

const transformData = (data) => {
  return data.map((questionObject) => {
    let { question, correct_answer, incorrect_answers } = questionObject;
    dummyAnswer.innerHTML = correct_answer;
    correct_answer = dummyAnswer.textContent;

    incorrect_answers.forEach((answer) => {
      let currentIncorrectAnswer = incorrect_answers.shift();
      dummyAnswer.innerHTML = currentIncorrectAnswer;
      currentIncorrectAnswer = dummyAnswer.textContent;
      incorrect_answers.push(currentIncorrectAnswer);
    });
    incorrect_answers.push(correct_answer);

    return {
      question,
      correct_answer,
      answers: [...incorrect_answers].sort((a, b) => a - b)

    };
  });
};

export default populateQuestions;
