import fetchQuestions from "./services/fetchQuestions.js";
import { askTheAudience } from "./hints.js";

await fetchQuestions();

askTheAudience();
