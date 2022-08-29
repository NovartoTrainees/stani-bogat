/**
 *
 * @param {[float, float, float, float]} percentages
 * @output Modal Element
 */
export function CreateCrowdHelpModal(percentages) {
  const modal = document.createElement("div");

  const barContainer = document.createElement("div");

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
