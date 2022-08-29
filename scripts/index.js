import fetchQuestions from "./services/fetchQuestions.js";
import { askTheAudience } from "./hints.js";
import { Visualise } from "./dom-manipulation/visualisation.js";
import * as elements from "./dom-manipulation/elements.js"; 

import {checkTheAnswer} from "./game-logic/checkTheAnswer.js";



await fetchQuestions();

Visualise();
