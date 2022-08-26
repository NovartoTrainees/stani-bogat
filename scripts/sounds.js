function PlayCorrectAnswer() {
  PlayAudioFile("sounds/correct-answer.mp3");
}

function PlayFinalAnswer() {
  PlayAudioFile("sounds/final-answer.mp3");
}

function PlayPhoneAFriend() {
  PlayAudioFile("sounds/phone-a-friend.mp3");
}

function PlayWrongAnswer() {
  PlayAudioFile("sounds/phone-a-friend.mp3");
}

function PlayAudioFile(audioName) {
  const audio = new Audio(audioName);
  audio.play();
}
