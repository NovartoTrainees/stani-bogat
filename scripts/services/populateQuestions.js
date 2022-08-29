import { questions } from "../variables.js";

const populateQuestions = (data) => {
  const transformed_data = transformData(data);

  transformed_data.forEach((question) => questions.push(question));

  console.log(questions);
};

const transformData = (data) => {
  return data.map((questionObject) => {
    const { question, correct_answer, incorrect_answers } = questionObject;

    incorrect_answers.push(correct_answer);

    return {
      question,
      correct_answer,
      answers: [...incorrect_answers].sort(() => Math.random() - 0.5),
    };
  });
};

export default populateQuestions;
