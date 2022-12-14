import { questions } from "./variables.js";
import * as elements from "./dom-manipulation/elements.js";
import * as modals from "./dom-manipulation/modal.js";

elements.hints.fiftyFifty.addEventListener("click", fiftyFiftyHint);

elements.hints.callFriend.addEventListener("click", callAFriend);
elements.hints.crowd.addEventListener("click", askTheAudience);

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
      button.textContent = "";
      button.classList.add("disabled");
    }
  });

  elements.hints.fiftyFifty.setAttribute("id", "disabled-hint-fifty");
}

function callAFriend() {
  const randomGuess = Math.random();
  const current_question = questions[0];
  const randomIndex = Math.floor(
    Math.random() * current_question.answers.length
  );

  const quotes = [
    "I think that the correct answer is",
    "I'm pretty sure that it's",
    "You can go ahead and mark",
    "I believe the correct one is",
  ];

  const answerToLetterReference = {
    0: "A",
    1: "B",
    2: "C",
    3: "D",
  };

  //Converting Node list into an array and linking its index to a letter

  const correctAnswerLetter =
    answerToLetterReference[
      Array.from(elements.answerArray)
        .map((btn) => btn.textContent)
        .indexOf(current_question.correct_answer)
    ];
  const incorrectAnswerLetter =
    answerToLetterReference[
      Array.from(elements.answerArray)
        .map((btn) => btn.textContent)
        .indexOf(current_question.answers[randomIndex])
    ];

  elements.hints.callFriend.setAttribute("id", "disabled-hint-phone");
  if (randomGuess < 0.5) {
    return document.body.appendChild(
      new modals.CallFriend(`${quotes[randomIndex]} ${correctAnswerLetter}`)
    );
  } else if (randomGuess >= 0.5 && randomGuess <= 0.9) {
    return document.body.appendChild(
      new modals.CallFriend(`${quotes[randomIndex]} ${incorrectAnswerLetter}`)
    );
  } else {
    return document.body.appendChild(
      new modals.CallFriend("I don't really know the answer!")
    );
  }
}

function askTheAudience() {
  const current_question = questions[0];
  let randomIndex = Math.floor(Math.random() * current_question.answers.length);
  elements.hints.crowd.setAttribute("id", "disabled-hint-audience");
  let audiencePercentage = {};
  audiencePercentage = current_question.answers.reduce((accumulator, value) => {
    return { ...accumulator, [value]: 0 };
  }, {});

  audiencePercentage[current_question.correct_answer] = 50;

  for (let i = 0; i < 50; i++) {
    randomIndex = Math.floor(Math.random() * current_question.answers.length);
    audiencePercentage[current_question.answers[randomIndex]] += 1;
  }

  const audiencePercentageValues = [];
  const presentAnswers = Array.from(elements.answerArray).map(
    (answer) => answer.textContent
  );

  for (let answer of presentAnswers) {
    if (answer === "") {
      audiencePercentageValues.push(0);
    } else {
      audiencePercentageValues.push(audiencePercentage[answer]);
    }
  }

  document.body.appendChild(
    new modals.AudienceModal(Object.values(audiencePercentageValues))
  );
}

export { fiftyFiftyHint, callAFriend, askTheAudience };
