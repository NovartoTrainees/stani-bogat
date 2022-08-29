import handleError from "./handleFetchErrors.js";
import populateQuestions from "./populateQuestions.js";

const BASE_URL = "https://opentdb.com/api.php";

/**
 * Fetch Questions..
 * @param {string} difficulty - Default: easy. Possible values: easy, medium, hard.
 */
const fetchQuestions = (difficulty = "easy") => {
  const url = `${BASE_URL}?amount=5&difficulty=${difficulty}&type=multiple&category=31`;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => populateQuestions(data.results))
    .catch((error) => handleError(error));
};

export default fetchQuestions;
