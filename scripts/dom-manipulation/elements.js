const [crowd, fiftyFifty, callFriend] = [
  document.getElementById("audience"),
  document.getElementById("fifty"),
  document.getElementById("phone-call")
];

export const exitButton = document.getElementById("exit-button");

export const hints = {
  crowd: crowd,
  fiftyFifty: fiftyFifty,
  callFriend: callFriend
};

export const stagesArray = Array.prototype.slice.call(document.querySelectorAll(".sum")).reverse();

export const [question, answerArray] = [
  document.querySelector(".main-question"),
  Array.prototype.slice.call(document.querySelectorAll(".answer-holder"))
];

console.log(Array.prototype.slice.call(document.querySelectorAll(".answer")));

export const quiz = {
  question: question,
  answerA: answerArray[0],
  answerB: answerArray[1],
  answerC: answerArray[2],
  answerD: answerArray[3]
};

console.log(quiz);