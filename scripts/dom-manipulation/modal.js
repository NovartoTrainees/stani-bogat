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

export class GameExit extends Modal {
  heading = document.createElement("h3");
  paragraph = document.createElement("p");

  constructor() {
    super();

    this.window.id = "modal-game-over";

    this.heading.textContent = "BETTER LUCK NEXT TIME,";

    this.paragraph.textContent =
      "we hope to see you again, you are leaving empty handed";
    GameOver;
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

export class WinBadge extends Modal {
  badge = document.createElement("img");
  firstParagrpah = document.createElement("p");
  winnings = document.createElement("h3");
  secondParagraph = document.createElement("p");

  constructor(badgeSrcURL, p1Content, winAmmount, p2Content) {
    super();
    this.badge.src = badgeSrcURL;
    this.firstParagrpah.textContent = p1Content;
    this.winnings.textContent = `$${winAmmount}`;
    this.secondParagraph.textContent = p2Content;
    this.window.classList.add("win-modal");

    this.window.appendChild(this.badge);
    this.window.appendChild(this.firstParagrpah);
    this.window.appendChild(this.winnings);
    this.window.appendChild(this.secondParagraph);
  }
}

export class Bronze extends WinBadge {
  constructor(winAmmount) {
    super(
      "../../images/bronze-badge.png",
      "You won the title 'Bronze Player!' You won",
      winAmmount,
      "Congrats! The road ahead is hard, but achivable with solid knowledge"
    );
  }
}

export class Silver extends WinBadge {
  constructor(winAmmount) {
    super(
      "../../images/silver-badge.png",
      "You won the title 'Silver Player!' You won",
      winAmmount,
      "Congrats! Your erudition compels admiration"
    );
  }
}

export class Elite extends WinBadge {
  constructor(winAmmount) {
    super(
      "../../images/elit-badge.png",
      "You won the title 'Elit Player!' You won",
      winAmmount,
      "Congrats! Your erudition compels admiration"
    );
  }
}

export class Gold extends WinBadge {
  constructor(winAmmount) {
    super(
      "../../images/golden-badge.png",
      "You won the title 'Golden Player! and the game' You reached the final level",
      winAmmount,
      "Congrats! Kudos for turning your knowledge into gold"
    );
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

window.customElements.define("bronze-player-modal", Bronze, {
  extends: "div",
});

window.customElements.define("silver-player-modal", Silver, {
  extends: "div",
});

window.customElements.define("elite-player-modal", Elite, {
  extends: "div",
});

window.customElements.define("gold-player-modal", Gold, {
  extends: "div",
});
