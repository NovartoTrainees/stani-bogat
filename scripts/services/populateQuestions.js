import { questions, questionsDifficulty } from "../variables.js";

const populateQuestions = (data) => {
  console.log(data);

  const transformed_data = transformData(data);

  transformed_data.forEach((question) => questions.push(question));

  questionsDifficulty.shift();
};

const transformData = (data) => {
  return data.map((questionObject) => {
    let { question, correct_answer, incorrect_answers } = questionObject;
    let dummyAnswer = document.getElementById('dummyAnswer');
    dummyAnswer.innerHTML = correct_answer;
    correct_answer = dummyAnswer.textContent;
    
    incorrect_answers.forEach(answer => {
      let currentIncorrectAnswer = incorrect_answers.shift();
      dummyAnswer.innerHTML = currentIncorrectAnswer;
      currentIncorrectAnswer = dummyAnswer.textContent;
      incorrect_answers.push(currentIncorrectAnswer);
    })
    incorrect_answers.push(correct_answer);

    return {
      question,
      correct_answer,
      answers: [...incorrect_answers].sort(() => Math.random() - 0.5),
    };
  });
};

export default populateQuestions;
