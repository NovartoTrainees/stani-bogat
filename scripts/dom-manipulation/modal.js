class Modal extends HTMLDivElement {
  constructor() {
    super();
    this.window = document.createElement("div");
    this.continueButtonWrapper = document.createElement("div");
    this.continueButton = document.createElement("button");

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
  constructor(answer) {
    super();
    this.window.id = "modal-friend";
    this.container = document.createElement("div");
    this.heading = document.createElement("h3");
    this.hint = document.createElement("p");
    this.hint.textContent = answer;
    this.heading.textContent = "Your friend says";

    this.container.appendChild(this.heading);
    this.container.appendChild(this.hint);
    this.window.appendChild(this.container);
  }
}

export class GameOver extends Modal {
  constructor() {
    super();
    this.window.id = "modal-game-over";

    const heading = document.createElement("h3");
    heading.textContent = "SORRY,";

    const paragraph = document.createElement("p");
    paragraph.textContent = "you lost, try again";

    this.window.appendChild(heading);
    this.window.appendChild(paragraph);
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
