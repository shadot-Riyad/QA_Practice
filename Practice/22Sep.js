let totalQuestions = 20;
let correctAnswers =19.99;

function calculateScore(totalQuestions, correctAnswers) {
    if (totalQuestions <= 0 || correctAnswers < 0 || correctAnswers > totalQuestions) {
        return "Invalid input values.";
    } else {
        let score = (correctAnswers / totalQuestions) * 100;
        return `Your score is ${score.toFixed(2)}%.`;
    }
}
    console.log(calculateScore(totalQuestions, correctAnswers));