const questions = [];

const sumStairway = [100, 200, 300, 400, 500, 1000, 1500, 2000, 2500, 3000, 5000, 10000, 20000, 30000, 50000, 100000];

let certainSum = 0;

const getCertainSum = () => certainSum;

const replaceCertainSum = (sum) => {
    certainSum = sum;
}

let questionIndex = 1;

const getQuestionIndex = () => questionIndex;

const incrementQuestionIndex = () => {
    questionIndex += 1;
}

const questionsDifficulty = ["easy", "medium", "hard"];

export { questions, questionsDifficulty, sumStairway, getQuestionIndex, incrementQuestionIndex, getCertainSum, replaceCertainSum };