import { questions } from "./variables.js";

const populateQuestions = (data) => {
  const transformed_data = transformData(data);

  transformed_data.forEach((question) => questions.push(question));

  console.log(questions);
};

const transformData = (data) => {
  return data.map((questionObj) => {
    const { question, correct_answer, incorrect_answers } = questionObj;

    incorrect_answers.push(correct_answer);

    return {
      question,
      correct_answer,
      answers: [...incorrect_answers].sort(() => Math.random() - 0.5),
    };
  });
};

export default populateQuestions;
