function PlayCorrectAnswer() {
  PlayAudioFile("sounds/correct-answer.mp3");
}

function PlayAudioFile(audioName) {
  const audio = new Audio(audioName);
  audio.play();
}
