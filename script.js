let data = [];
let player1Score = [];
let player2Score = [];
let questionStoring = {};
let question = document.getElementById('question');
let value = document.getElementById('value');
let year = document.getElementById('year');
let answer = document.getElementById('answer');
const nextQuestion = document.querySelector('.next')
const checkAnswerButton = document.getElementById('check-answer')
let score1 = document.getElementById('player1__score')
let score2 = document.getElementById('player2__score')

async function getData()  {
    const apiUrl = 'https://jservice.io/api/clues';
    try {
        const response = await fetch(apiUrl)
        data = await response.json()
        
        grabQuestion()
    } catch (error) {
        
    }
}




function grabQuestion() {
    
    const randomQuestion = data[Math.floor(Math.random() * data.length)];
    question.textContent = randomQuestion.question;
    value.textContent = randomQuestion.value;
    year.textContent = randomQuestion.airdate.split('T')[0];
    answer.textContent = randomQuestion.answer;
    !randomQuestion.question || ! randomQuestion.value ? question.textContent= 'No question: Please move on to the next question': questionStoring = {...randomQuestion}
    checkAnswerButton.checked = false
}

function checkAnswer() {
   checkAnswerButton.checked ? answer.style.display = 'block' : answer.style.display = 'none'
}

function addPointsOne()  {
    player1Score.push(questionStoring.value)
    let sum = 0;
    for(let i = 0; i < player1Score.length;i++) {
        sum += player1Score[i]
    }
    score1.textContent = `${sum}`
    grabQuestion() 
}

function subtractPointsOne()  {
 score1.textContent = Number(score1.textContent) - questionStoring.value;
 
}
function addPointsTwo()  {
    player2Score.push(questionStoring.value)
    let sum = 0;
    for(let i = 0; i < player2Score.length;i++) {
        sum += player2Score[i]
    }
    score2.textContent = `${sum}`
    grabQuestion() 
}
function subtractPointsTwo()  {
    score2.textContent = Number(score2.textContent) - questionStoring.value;
    
}

function restartGame() {
    
   score1.textContent = 0
   score2.textContent = 0
}


getData();

nextQuestion.addEventListener('click', () => {grabQuestion();})
checkAnswerButton.addEventListener('click', () => {checkAnswer();})


