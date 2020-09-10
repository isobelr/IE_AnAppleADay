const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {
        question: 'How many times per week do you exercise?',
        choice1: 'Everyday',
        choice2: '4x times a week',
        choice3: '2x times a week',
        choice4: 'I don\'t',
        answer: 1,
    },
    {
        question:
            "Which of the following foods best describe the most of your diet?",
        choice1: "Fruits and vegetables",
        choice2: "Milk, cheese and other alternatives",
        choice3: "Biscuits, cakes and other high sugar products",
        choice4: "Pizza, potato chips and other fast food alternatives",
        answer: 3,
    },
    {
        question: "Have you ever felt dizzy in the last month?",
        choice1: "Yes",
        choice2: "No",
        answer: 1,
    },
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign('/end.html');
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        getNewQuestion();
    });
});

startGame();
