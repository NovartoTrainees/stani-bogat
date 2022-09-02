import { backgroundAtStart } from "./stairwayStages.js";
import { playButton, displayGame, hideStartPage } from "../dom-manipulation/elements.js"

playButton.addEventListener("click", startGame);

export function startGame() {
  backgroundAtStart();
  displayGame.style.display = "block";
  hideStartPage.style.display = "none";
}