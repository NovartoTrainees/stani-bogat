const data = {
  question: "Which of the following is NOT an official game in Nintendo&#039;s Super Smash Bros. series?",
  correct_answer: "Super Smash & Bros. Crusade",
  answers: [
    "Super Smash &lt; Bros. Crusade",
    "Super Smash Bros. Melee",
    "Super Smash Bros. Brawl",
    "Super Smash Bros. for Nintendo 3DS and Wii U"
  ]
};

let correctAnswer = document.getElementById('dog');
correctAnswer.innerHTML = data.answers[0];
data.correct_answer = correctAnswer.textContent;