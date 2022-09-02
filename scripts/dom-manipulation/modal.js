import fetchQuestions from "../services/fetchQuestions.js";
import populateQuestions from "../services/populateQuestions.js";
import { questions } from "../variables.js";
import renderNextQuestionAndAnswers from "./visualisation.js";

class Modal extends HTMLDivElement {
  window = document.createElement("div");
  continueButtonWrapper = document.createElement("div");
  continueButton = document.createElement("button");
  // sheet = document.createElement('style')

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
  container = document.createElement("div");
  container2 = document.createElement("div");
  container3 = document.createElement("div");
  firstBarElement = document.createElement("div");
  secondBarElement = document.createElement("div");
  thirdBarElement = document.createElement("div");
  fourtBarElement = document.createElement("div");

  a = document.createElement("span");
  b = document.createElement("span");
  c = document.createElement("span");
  d = document.createElement("span");

  aPerc = document.createElement("span");
  bPerc = document.createElement("span");
  cPerc = document.createElement("span");
  dPerc = document.createElement("span");

  constructor(percentages) {
    super();
    this.window.id = "modal-audience";

    this.firstBarElement.classList.add("first-bar");
    this.secondBarElement.classList.add("second-bar");
    this.thirdBarElement.classList.add("third-bar");
    this.fourtBarElement.classList.add("fourt-bar");
    this.container.id = "modal-container-1";
    this.container2.id = "modal-container-2";
    this.container3.id = "modal-container-3";

    this.container.appendChild(this.firstBarElement);
    this.container.appendChild(this.secondBarElement);
    this.container.appendChild(this.thirdBarElement);
    this.container.appendChild(this.fourtBarElement);

    this.container2.appendChild(this.a);
    this.container2.appendChild(this.b);
    this.container2.appendChild(this.c);
    this.container2.appendChild(this.d);

    this.container3.appendChild(this.aPerc);
    this.container3.appendChild(this.bPerc);
    this.container3.appendChild(this.cPerc);
    this.container3.appendChild(this.dPerc);

    this.a.textContent = "A";
    this.b.textContent = "B";
    this.c.textContent = "C";
    this.d.textContent = "D";

    this.aPerc.textContent = `${percentages[0]}%`;
    this.bPerc.textContent = `${percentages[1]}%`;
    this.cPerc.textContent = `${percentages[2]}%`;
    this.dPerc.textContent = `${percentages[3]}%`;

    this.window.appendChild(this.container);
    this.window.appendChild(this.container2);
    this.window.appendChild(this.container3);

    this.firstBarElement.classList.add("activate-animation-first-bar");
    this.firstBarElement.style.maxHeight = `${percentages[0]}` + "px";

    console.log(percentages[0]);

    this.secondBarElement.classList.add("activate-animation-second-bar");
    this.secondBarElement.style.maxHeight = `${percentages[1]}` + "px";

    console.log(percentages[1]);

    this.thirdBarElement.classList.add("activate-animation-third-bar");
    this.thirdBarElement.style.maxHeight = `${percentages[2]}` + "px";

    console.log(percentages[2]);

    this.fourtBarElement.classList.add("activate-animation-fourt-bar");
    this.fourtBarElement.style.maxHeight = `${percentages[3]}` + "px";

    console.log(percentages[3]);

    console.log("test", this.container.childNodes);
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

  constructor(money) {
    super();

    this.window.id = "modal-game-over";

    this.heading.textContent = "SORRY,";

    this.paragraph.innerHTML = `you lost but you are <br/> leaving with $${money}`;

    this.window.appendChild(this.heading);
    this.window.appendChild(this.paragraph);

    this.continueButton.addEventListener("click", () => {
      location.reload();
    });
  }
}

export class GameExit extends Modal {
  heading = document.createElement("h3");
  paragraph = document.createElement("p");

  constructor(money) {
    super();

    this.window.id = "modal-game-over";

    this.heading.textContent = "Better luck next time,";

    this.paragraph.innerHTML = `you are leaving with:<br/> $${money}`;

    this.window.appendChild(this.heading);
    this.window.appendChild(this.paragraph);

    this.continueButton.addEventListener("click", () => {
      location.reload();
    });
  }
}

export class NoResponseModal extends Modal {
  heading = document.createElement("h3");
  paragraph = document.createElement("p");

  constructor() {
    super();

    this.window.id = "modal-game-over";

    this.heading.textContent = "Couldn't load question";

    this.paragraph.innerHTML = `please try again`;

    this.window.appendChild(this.heading);
    this.window.appendChild(this.paragraph);

    this.continueButton.addEventListener("click", async () => {
      questions.splice(0);
      await fetchQuestions();
      this.remove();
      try {
        renderNextQuestionAndAnswers();
      } catch (error) {
        document.body.appendChild(new NoResponseModal());
      }
    });
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
      "You reached the title 'Bronze Player!'",
      winAmmount,
      "Congrats! The road ahead is hard, but achivable with solid knowledge"
    );
  }
}

export class Silver extends WinBadge {
  constructor(winAmmount) {
    super(
      "../../images/silver-badge.png",
      "You reached the title 'Silver Player!'",
      winAmmount,
      "Congrats! Your erudition compels admiration"
    );
  }
}

export class Elite extends WinBadge {
  constructor(winAmmount) {
    super(
      "../../images/elit-badge.png",
      "You reached the title 'Elite Player!'",
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

    this.continueButton.addEventListener(() => {
      location.reload();
    });
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

window.customElements.define("game-exit-modal", GameExit, {
  extends: "div",
});

window.customElements.define("no-response-modal", NoResponseModal, {
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
