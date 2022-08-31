import { questions } from "./variables.js";
import * as elements from "./dom-manipulation/elements.js";

elements.hints.fiftyFifty.addEventListener('click', fiftyFiftyHint);
elements.hints.callFriend.addEventListener('click', callAFriend);
elements.hints.crowd.addEventListener('click', askTheAudience);

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

  elements.hints.fiftyFifty.disabled = true;
};

function callAFriend() {
  const randomGuess = Math.random();
  const current_question = questions[0];
  const randomIndex = Math.floor(Math.random() * current_question.answers.length);
  const answerToLetterReference = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D'
  }

  const quotes = [
    "Hi, my old friend! This is a tough question but I think that the correct answer is",
    "I'm pretty sure that you have to mark",
    "Please go and push",
    "Hi, I believe the correct one is",
  ];

  if (randomGuess < 0.5) {
    return console.log(`${quotes[randomIndex]} ${current_question.correct_answer}`);
  } else if (randomGuess >= 0.5 && randomGuess <= 0.9) {
    return console.log(`${quotes[randomIndex]} ${current_question.answers[randomIndex]}`);
  } else {
    return "I really don't know the answer";
  }
};

function askTheAudience() {
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
