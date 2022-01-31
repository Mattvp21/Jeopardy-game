let data = [];
let player1Score = [];
let player2Score = [];
let questionStoring = {};

let container = document.querySelector('.container')
let question = document.getElementById('question');
let value = document.getElementById('value');
let year = document.getElementById('year');
const nextQuestion = document.querySelector('.next')
let guessedAnswer = document.getElementById('answer__form--text')
const checkAnswerButton = document.getElementById('check-answer')
let score1 = document.getElementById('player1__score')
let score2 = document.getElementById('player2__score')

async function getData()  {
    const apiUrl = 'https://jservice.io/api/clues';
    try {
        const response = await fetch(apiUrl)
        data = await response.json()
        console.log(data)
        grabQuestion()
    } catch (error) {
        console.log(error, "Uh oh!")
    }
}


function grabQuestion() {
    const randomQuestion = data[Math.floor(Math.random() * data.length)];
    question.textContent = randomQuestion.question;
    value.textContent = randomQuestion.value;
    year.textContent = randomQuestion.airdate;
    answer.textContent = randomQuestion.answer;
    !randomQuestion.question || ! randomQuestion.value ? question.textContent= 'No question: Please move on to the next question': questionStoring = {...randomQuestion}
}
    

    

function checkAnswer() {
    let newGuessedAnswer = guessedAnswer.value.toLowerCase();
    let answer = questionStoring.answer.toLowerCase();
    if(newGuessedAnswer === answer) {
        console.log('correct')
    } else {
        console.log('wrong')
    }
}

function calculatePoints(arr) {
    let sum = 0;

    for(let i = 0; i < arr.length;i++) {
        sum += arr[i]
    }
    return sum
}

function addPointsOne()  {
    player1Score.push(questionStoring.value)
    let sum = 0;
    for(let i = 0; i < player1Score.length;i++) {
        sum += player1Score[i]
    }
    

    
    
    score1.textContent = `${sum}`
}

function addPointsTwo()  {
    player2Score.push(questionStoring.value)
    let sum = 0;
    for(let i = 0; i < player2Score.length;i++) {
        sum += player2Score[i]
    }
    score2.textContent = `${sum}`
}


getData();

nextQuestion.addEventListener('click', () => {grabQuestion();})
checkAnswerButton.addEventListener('click', () => {checkAnswer();})
