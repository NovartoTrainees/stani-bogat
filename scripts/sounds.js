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
function PlayHundredToThousand(){
  PlayAudioFile("sounds/soundQuestionFrom100To1000.mp3");
}
function PlayThousandToFiftyThousand(){
  PlayAudioFile("sounds/soundQuestionFrom1000To50000.mp3");
}
function PlayFiftyThousand(){
  PlayAudioFile("sounds/soundQuestion50000.mp3");
}
function PlayOneHundredThousand(){
  PlayAudioFile("sounds/soundQuestion100000.mp3");
}
function PlayLetsPlaySound(){
  PlayAudioFile("sounds/lets-play.mp3")
}
function PlayMainTheme(){
  PlayAudioFile("sounds/main-theme.mp3")
}
function PlayAudioFile(audioName) {
  const audio = new Audio(audioName);
  audio.play();
}
