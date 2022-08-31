
export const playButton = document.querySelector(".play");
playButton.addEventListener("click", startGame)

export function startGame() {
    const displayGame = document.querySelector(".main-container")
    const hideStartPage = document.querySelector(".start-game-container")
    displayGame.style.display = "block"
    hideStartPage.style.display = "none"
}