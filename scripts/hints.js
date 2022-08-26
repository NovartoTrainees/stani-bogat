import { questions } from "./variables.js";

const fiftyFiftyHint = () => {
  const current_question = questions[0];

  while (current_question.answers.length > 2) {
    const correct_answer_index = current_question.answers.indexOf(
      current_question.correct_answer
    );

    const rndIndex = Math.floor(Math.random() * 4);

    if (rndIndex !== correct_answer_index) {
      current_question.answers.splice(rndIndex, 1);
    }
  }
};

const callAFriend = () => {
  const rndGuess = Math.random();
  const current_question = questions[0];
  const rndIndex = Math.floor(Math.random() * 4);

  if (rndGuess < 0.5) {
    return current_question.correct_answer;
  } else if (rndIndex > 0.5 && rndIndex < 0.9) {
    return current_question.answers[rndIndex];
  } else {
    return "I really don't know what happens";
  }
};

export { fiftyFiftyHint, callAFriend };
