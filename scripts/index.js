import fetchQuestions from "./services/fetchQuestions.js";
import { askTheAudience } from "./hints.js";
import { Visualise } from "./dom-manipulation/visualisation.js";

await fetchQuestions();

Visualise();
