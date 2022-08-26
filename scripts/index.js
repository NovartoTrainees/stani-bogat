import fetchQuestions from "./services/fetchQuestions.js";
import { callAFriend } from "./hints.js";

await fetchQuestions();

callAFriend();
