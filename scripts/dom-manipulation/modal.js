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

export class Modal extends HTMLDivElement {
  constructor(backgroundURL) {
    this.style.backgroundImage = `url(${backgroundURL})`;
    this.style.display = "flex";
  }
}
