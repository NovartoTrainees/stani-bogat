export function PlayCorrectAnswer() {
  return PlayAudioFile("sounds/correct-answer.mp3");
}
export function PlayFinalAnswer() {
  return PlayAudioFile("sounds/final-answer.mp3");
}
export function PlayPhoneAFriend() {
  return PlayAudioFile("sounds/phone-a-friend.mp3");
}
export function PlayWrongAnswer() {
  return PlayAudioFile("sounds/phone-a-friend.mp3");
}
export function PlayHundredToThousand() {
  return PlayAudioFile("sounds/soundQuestionFrom100To1000.mp3");
}
export function PlayThousandToFiftyThousand() {
  return PlayAudioFile("sounds/soundQuestionFrom1000To50000.mp3");
}
export function PlayFiftyThousand() {
  return PlayAudioFile("sounds/soundQuestion50000.mp3");
}
export function PlayOneHundredThousand() {
  return PlayAudioFile("sounds/soundQuestion100000.mp3");
}
export function PlayLetsPlaySound() {
  return PlayAudioFile("sounds/lets-play.mp3");
}
export function PlayMainTheme() {
  return PlayAudioFile("sounds/main-theme.mp3");
}
function PlayAudioFile(audioName) {
  const audio = new Audio(audioName);
  audio.play();
  return {
    audio: audio,
    stop: () => {
      this.audio.remove();
    },
  };
}
