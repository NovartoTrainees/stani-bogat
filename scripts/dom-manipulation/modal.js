class Modal extends HTMLDivElement {
  constructor() {
    super();
    this.window = document.createElement("div");
    this.continueButtonWrapper = document.createElement("div");
    this.continueButton = document.createElement("button");

    this.classList.add("modal-back");
    this.window.classList.add("modal-window");
    this.continueButtonWrapper.classList.add("continue-button-wrapper");
    this.continueButton.classList.add("continue-button");
    this.continueButton.textContent = "CONTINUE";

    this.continueButton.addEventListener("click", () => {
      this.remove();
    });

    this.continueButtonWrapper.appendChild(this.continueButton);
    this.window.appendChild(this.continueButtonWrapper);
    this.appendChild(this.window);
  }
}

export class AudienceModal extends Modal {
  constructor(percentages) {
    super();
    this.window.classList.add("audience");
  }
}

export class CallFriend extends Modal {
  constructor(answer) {
    super();
    this.window.classList.add("friend");
  }
}

window.customElements.define("audience-modal", AudienceModal, {
  extends: "div",
});

window.customElements.define("friend-modal", CallFriend, {
  extends: "div",
});
