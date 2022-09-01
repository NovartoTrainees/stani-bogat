import { questions } from "./variables.js";
import * as elements from "./dom-manipulation/elements.js";

elements.hints.fiftyFifty.addEventListener('click', fiftyFiftyHint);

function fiftyFiftyHint() {
  const current_question = questions[0];

  while (current_question.answers.length > 2) {
    const correct_answer_index = current_question.answers.indexOf(
      current_question.correct_answer
    );

    const randomIndex = Math.floor(Math.random() * 4);

    if (randomIndex !== correct_answer_index) {
      current_question.answers.splice(randomIndex, 1);
    }
  }

  elements.answerArray.forEach((button) => {
    if (!current_question.answers.includes(button.textContent)) {
      button.textContent = '';
      button.classList.add('disabled');
    }
  });

  elements.hints.fiftyFifty.setAttribute("id", "disabled-hint-fifty");
};

const callAFriend = () => {
  const randomGuess = Math.random();
  const current_question = questions[0];
  const randomIndex = Math.floor(Math.random() * 4);
  let result;
  const quotes = [
    "Hi, my old friend this is a tought questions but I think that the correct answer is",
    "I will need more time to think about it but I'm pretty sure that you have to mark",
    "Please go and push",
    "Hi, I believe the correct one is",
  ];

  if (randomGuess < 0.5) {
    return `${quotes[randomIndex]}${current_question.correct_answer}`;
  } else if (randomGuess >= 0.5 && randomGuess <= 0.9) {
    return `${quotes[randomIndex]}${current_question.answers[randomIndex]}`;
  } else {
    return "I really don't know the answer";
  }
};

const askTheAudience = () => {
  const current_question = questions[0];
  let randomIndex = Math.floor(Math.random() * current_question.answers.length);

  let audiencePercentage = {};
  audiencePercentage = current_question.answers.reduce((accumulator, value) => {
    return { ...accumulator, [value]: 0 };
  }, {});

  audiencePercentage[current_question.correct_answer] = 50;

  for (let i = 0; i < 50; i++) {
    randomIndex = Math.floor(Math.random() * current_question.answers.length);
    audiencePercentage[current_question.answers[randomIndex]] += 1;
  }

  const audiencePercentageValues = Object.keys(audiencePercentage)
    .map(function (key) {
      return audiencePercentage[key];
    });

  return audiencePercentageValues;
};

export { fiftyFiftyHint, callAFriend, askTheAudience };
