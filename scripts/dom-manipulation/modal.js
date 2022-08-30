/**
 *
 * @param {[float, float, float, float]} percentages
 * @output Modal Element
 */
export function CreateCrowdHelpModal(percentages) {
  const modal = document.createElement("div");
  const barContainer = document.createElement("div");

  AppendBars(barContainer);

  barContainer.classList.add("bar-container");

  modal.appendChild(barContainer);
  modal.classList.add("modal-back");

  return modal;
}

function AppendBars(barContainer) {
  for (let i = 0; i < 4; i++) {
    const bar = document.createElement("div");
    bar.classList.add("bar");

    const mask = document.createElement("div");
    mask.classList.add("mask");

    bar.appendChild(mask);
    barContainer.appendChild(bar);
  }
}

class Modal extends HTMLDivElement {
  constructor() {
    super();
    this.classList.add("modal-back");
    this.window = document.createElement("div");
    this.window.classList.add("modal-window");
    this.append(this.window);
  }
}

export class AudienceModal extends Modal {
  constructor(percentages) {
    super();
    console.log(this);
    this.window.classList.add("audience");
  }
}

window.customElements.define("custom-modal", Modal, {
  extends: "div",
});

window.customElements.define("audience-modal", AudienceModal, {
  extends: "div",
});
