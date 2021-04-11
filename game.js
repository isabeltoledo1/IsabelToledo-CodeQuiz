//variables  to target dom elements
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const scoreText = document.getElementById('score');
const progressText = document.querySelector('#progressText');
const progressBarFull= document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = false
let score = 0
let questionCounter = 0
let availableQuestions = []



let questions = [{
    question: "JavaScript is interpreted by _________",
    choice1: "Client",
    choice2: "Server",
    choice3: "Object",
    answer: 1
},
     
{
    question: "The _______ method of an Array object adds and/or removes elements from an array.",
    choice1: "Reverse",
    choice2: "Delete",
    choice3: "Splice",
    answer: 3
},

{
    question: "Which of the following are capabilities of functions in JavaScript?",
    choice1: "Return a value",
    choice2: "Accept parameters and Return a value",
    choice3: "Accept parameters",
    answer: 3
},


{
    question: "	If we want to wrap a block of text around an image, which css property will we use ?",
    choice1: "Wrap",
    choice2: "Float",
    choice3: "Align", 
    answer: 2
},
 
    
{
    question: "The default value of 'position' attribute is _________.",
    choice1: "Relative",
    choice2: "Absolute",
    choice3: "Fixed",
    answer: 1
},

{
    question: "Original Name of Javascript is",
    choice1: "Mocha",
    choice2: "LiveScript",
    choice3: "Escript",
    answer: 2
},

];
    
     
const SCORE_POINTS = 60
const MAX_QUESTIONS = 6

startGame = () => {
questionCounter = 0;
score = 0;
availableQuestions = [...questions];
getNewQuestion();

}



getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
localStorage.setItem('mostRecentScore', score);

return window.location.assign('end.html');
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 60}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex,1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {

        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];


        let classToApply = 
        selectedAnswer == currentQuestion.answer ? "correct" :"incorrect";


        if(classToApply === 'correct'){
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout (() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000)
        

    })
  
})

incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
}

startGame();