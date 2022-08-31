class Modal extends HTMLDivElement {
  window = document.createElement("div");
  continueButtonWrapper = document.createElement("div");
  continueButton = document.createElement("button");

  constructor() {
    super();

    this.classList.add("modal-back");
    this.continueButtonWrapper.classList.add("continue-button-wrapper");
    this.continueButton.classList.add("continue-button");
    this.continueButton.textContent = "CONTINUE";

    this.continueButton.addEventListener("click", () => {
      this.remove();
    });

    this.continueButtonWrapper.appendChild(this.continueButton);
    this.appendChild(this.window);
    this.appendChild(this.continueButtonWrapper);
  }
}

export class AudienceModal extends Modal {
  constructor(percentages) {
    super();
    this.window.id = "modal-audience";
  }
}

export class CallFriend extends Modal {
  container = document.createElement("div");
  heading = document.createElement("h3");
  hint = document.createElement("p");

  constructor(answer) {
    super();
    this.window.id = "modal-friend";

    this.hint.textContent = answer;
    this.heading.textContent = "Your friend says";

    this.container.appendChild(this.heading);
    this.container.appendChild(this.hint);
    this.window.appendChild(this.container);
  }
}

export class GameOver extends Modal {
  heading = document.createElement("h3");
  paragraph = document.createElement("p");

  constructor() {
    super();

    this.window.id = "modal-game-over";

    this.heading.textContent = "SORRY,";

    this.paragraph.textContent = "you lost, try again";

    this.window.appendChild(this.heading);
    this.window.appendChild(this.paragraph);
  }
}

export class FirstStage extends Modal {
  heading = document.createElement("h3");
  paragraph = document.createElement("p");

  constructor() {
    super();

    this.window.id = "modal-stage-one";

    this.heading.textContent = "CONGRATULATIONS,";

    this.paragraph.textContent =
      "for your impressive start with first safe cash reward! Knowledge is the skill to move in the right direction";

    this.window.appendChild(this.heading);
    this.window.appendChild(this.paragraph);
  }
}

export class Silver extends Modal {
  badge = document.createElement("img");
  firstParagrpah = document.createElement("p");
  winnings = document.createElement("h3");
  secondParagraph = document.createElement("p");

  constructor(winAmmount) {
    super();
    this.window.classList.add("win-modal");
    this.window.id = "win-silver";

    this.badge.src = "../../images/silver-badge.png";

    this.firstParagrpah.textContent =
      "You won the title 'Silver Player!' You reached level";

    this.winnings.textContent = `$${winAmmount}`;

    this.secondParagraph.textContent =
      "Congrats! Your erudition compels admiration";

    this.window.appendChild(this.badge);
    this.window.appendChild(this.firstParagrpah);
    this.window.appendChild(this.winnings);
    this.window.appendChild(this.secondParagraph);
  }
}

window.customElements.define("audience-modal", AudienceModal, {
  extends: "div",
});

window.customElements.define("friend-modal", CallFriend, {
  extends: "div",
});

window.customElements.define("game-over-modal", GameOver, {
  extends: "div",
});

window.customElements.define("first-stage-modal", FirstStage, {
  extends: "div",
});

window.customElements.define("silver-player-modal", Silver, {
  extends: "div",
});
