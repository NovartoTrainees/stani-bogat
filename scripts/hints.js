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
  let result;
  const quotes = [
    "Hi, my old friend this is a tought questions but I think that the correct answer is",
    "I will need more time to think about it but I'm pretty sure that you have to mark",
    "Please go and push",
    "Hi, I believe the correct one is",
  ];

  if (rndGuess < 0.5) {
    return `${quotes[rndIndex]}${current_question.correct_answer}`;
  } else if (rndGuess >= 0.5 && rndGuess <= 0.9) {
    return `${quotes[rndIndex]}${current_question.answers[rndIndex]}`;
  } else {
    return "I really don't know the answer";
  }
};

const askTheAudience = () => {
  const current_question = questions[0];
  let rndIndex = Math.floor(Math.random() * current_question.answers.length);

  let audiencePercentage = {};
  audiencePercentage = current_question.answers.reduce((accumulator, value) => {
    return { ...accumulator, [value]: 0 };
  }, {});

  audiencePercentage[current_question.correct_answer] = 50;

  for (let i = 0; i < 50; i++) {
    rndIndex = Math.floor(Math.random() * current_question.answers.length);
    audiencePercentage[current_question.answers[rndIndex]] += 1;
  }
  return audiencePercentage;
};

export { fiftyFiftyHint, callAFriend, askTheAudience };
