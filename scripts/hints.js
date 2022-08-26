import { questions } from "./variables.js";

const fiftyFiftyHint = () => {
  const current_qestion = questions[0];

  const correct_answer_index = current_qestion.answers.indexOf(
    current_qestion.correct_answer
  );

  while (current_qestion.answers.length > 2) {
    const rndIndex = Math.floor(Math.random() * 4);

    if (rndIndex !== correct_answer_index) {
      current_qestion.answers.splice(rndIndex, 1);
    }
  }
};

export default fiftyFiftyHint;
