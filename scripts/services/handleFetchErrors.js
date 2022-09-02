import { NoResponseModal } from "../dom-manipulation/modal.js";

const handleError = (error) => {
  document.body.appendChild(new NoResponseModal());
};

export default handleError;
