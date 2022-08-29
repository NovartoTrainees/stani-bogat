const [crowd, fiftyfifty, callFriend] = [
  document.getElementById("crowdHint"),
  document.getElementById("fiftyFiftyHint"),
  document.getElementById("callFriendHint"),
];

export const hints = {
  crowd: crowd,
  fiftyfifty: fiftyfifty,
  callFriend: callFriend,
};

export const stagesArray = Array.prototype.slice
  .call(document.querySelectorAll(".sum"))
  .reverse();

const [question, answerArray] = [
  document.querySelector(".main-question"),
  Array.prototype.slice.call(document.querySelectorAll(".answer")),
];

console.log(Array.prototype.slice.call(document.querySelectorAll(".answer")));

export const quiz = {
  question: question,
  answerA: answerArray[0],
  answerD: answerArray[1],
  answerE: answerArray[2],
  answerF: answerArray[3],
};

console.log(quiz);
