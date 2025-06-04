const questionAnswer = [
    {
        question: "Which scientist is known for developing the theory of relativity?",
        options: ['Newton', 'Einstein', 'Faraday', 'Raman'],
        answer: "Einstein"
    },
    {
        question: "What is known as Black Gold?",
        options: ['Rusted Gold', 'Petroleum', 'Coal', 'None of these'],
        answer: "Petroleum"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ['Go', 'Ag', 'Au', 'Gd'],
        answer: "Au"
    }
];

let score = 0;
let CurrentquestionNo = 0;

const Currentquestion = document.querySelector(".question");
const Current_options = document.querySelector(".options");
const Current_score = document.getElementById("score");
const restartQuiz = document.querySelector('.restartQuiz');

function nextQuestion() {
    if (CurrentquestionNo >= questionAnswer.length) {
        alert("Quiz Over!");
        return;
    }
    const CurrentquestionAnswer = questionAnswer[CurrentquestionNo];
    Currentquestion.textContent = CurrentquestionAnswer.question;
    Current_options.innerHTML = '';

    CurrentquestionAnswer.options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('option');
        button.textContent = option;
        button.onclick = () => checkCorrect(option);
        Current_options.appendChild(button);
    });
}

function checkCorrect(selectedOption) {
    if (selectedOption === questionAnswer[CurrentquestionNo].answer) {
        score++;
        Current_score.textContent = score;
    }
    CurrentquestionNo++;
    nextQuestion();
}

restartQuiz.addEventListener('click', () => {
    CurrentquestionNo = 0;
    score = 0;
    Current_score.textContent = score;
    nextQuestion();
});

window.onload = () => {
    Current_score.textContent = score;
    nextQuestion();
};
