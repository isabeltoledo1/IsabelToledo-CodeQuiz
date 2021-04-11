const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];



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
    
     
