import handleError from "./handleFetchErrors.js";
import populateQuestions from "./populateQuestions.js";

const BASE_URL = "https://opentdb.com/api.php";

/**
 * Fetch Questions..
 * @param {string} difficulty - Default: easy. Possible values: easy, medium, hard.
 */
const fetchQuestions = async (difficulty = "easy") => {
  const url = `${BASE_URL}?amount=5&difficulty=${difficulty}&type=multiple`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    populateQuestions(data.results);
  } catch (error) {
    return handleError(error);
  }
};

export default fetchQuestions;
