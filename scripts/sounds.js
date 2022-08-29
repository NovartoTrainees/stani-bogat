export function PlayCorrectAnswer() {
  PlayAudioFile("sounds/correct-answer.mp3");
}
export function PlayFinalAnswer() {
  PlayAudioFile("sounds/final-answer.mp3");
}
export function PlayPhoneAFriend() {
  PlayAudioFile("sounds/phone-a-friend.mp3");
}
export function PlayWrongAnswer() {
  PlayAudioFile("sounds/phone-a-friend.mp3");
}
export function PlayHundredToThousand() {
  PlayAudioFile("sounds/soundQuestionFrom100To1000.mp3");
}
export function PlayThousandToFiftyThousand() {
  PlayAudioFile("sounds/soundQuestionFrom1000To50000.mp3");
}
export function PlayFiftyThousand() {
  PlayAudioFile("sounds/soundQuestion50000.mp3");
}
export function PlayOneHundredThousand() {
  PlayAudioFile("sounds/soundQuestion100000.mp3");
}
export function PlayLetsPlaySound() {
  PlayAudioFile("sounds/lets-play.mp3")
}
export function PlayMainTheme() {
  PlayAudioFile("sounds/main-theme.mp3")
}
function PlayAudioFile(audioName) {
  const audio = new Audio(audioName);
  audio.play();
}
