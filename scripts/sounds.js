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
  const audio = PlayAudioFile("sounds/soundQuestionFrom100To1000.mp3");
  audio.loop = true;
}
export function PlayThousandToFiftyThousand() {
  const audio = PlayAudioFile("sounds/soundQuestionFrom1000To50000.mp3");
  audio.loop = true;
  return audio;
}
export function PlayFiftyThousand() {
  const audio = PlayAudioFile("sounds/soundQuestion50000.mp3");
  audio.loop = true;
  return audio;
}
export function PlayOneHundredThousand() {
  const audio = PlayAudioFile("sounds/soundQuestion100000.mp3");
  audio.loop = true;
  return audio;
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
  return audio;
}
