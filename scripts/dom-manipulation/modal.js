/**
 *
 * @param {[float, float, float, float]} percentages
 * @output Modal Element
 */
export function CreateCrowdHelpModal(percentages) {
  const modal = document.createElement("div");
  const canvas = document.createElement("canvas");

  const context = canvas.getContext("2d");

  modal.appendChild(canvas);
  modal.classList.add("modal-back");

  return modal;
}
