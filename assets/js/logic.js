// must dynamically generate and append elements that have text in them 
//  into their respective parent elements

//have a starting page with only one button with start game written on it
//button triggers to make the question and the answer buttons appear

//feedback at the bottom of the answer buttons will change according to
//  the answer that matches a correct choice
//  regardless of what answer they give will start dynamically generating the next
//  question and set of answer buttons

//the first page will have the timer but wont begin until the start game button is pushed

//view high scores will link to a separate html page with the scores display
//then have a link to go back to start game page

var questionArray= ["question1", "question2", "question3", "question4"]

var answerButtonArray1 = ["page 1 answer 1", "page 1 answer 2", "page 1 answer 3", " page 1 answer 4"]
var answerButtonArray2 = ["page 2 answer 1", "page 2 answer 2", "page 2 answer 3", " page 2 answer 4"]
var answerButtonArray3 = ["page 3 answer 1", "page 3 answer 2", "page 3 answer 3", " page 3 answer 4"]
var answerButtonArray4 = ["page 4 answer 1", "page 4 answer 2", "page 4 answer 3", " page 4 answer 4"]

var goToQuestions = document.querySelector("#text-link");
var questionBox = document.querySelector("#quiz-question-text");
var startGameText = document.querySelector("#start-game-text");
var startButton = document.querySelector("#start-button-area");
var answerButtons = document.querySelector("#answer-buttons-area");
var answerButton1 = document.querySelector("#submit-answer1");
var answerButton2 = document.querySelector("#submit-answer2");
var answerButton3 = document.querySelector("#submit-answer3");
var answerButton4 = document.querySelector("#submit-answer4");


function createQuestions(){
    
    startGameText.setAttribute("style", "display: none;");
    var questionText = document.createElement("div");
    questionText.className = "quiz-question-test";
    questionText.textContent = questionArray[0];
    questionBox.appendChild(questionText);    

}

function createAnswerButtonsPage1(){
    startButton.setAttribute("style", "display: none;");
    answerButtons.setAttribute("style", "display: block;");
    
    //make the containers appear
    answerButton1.setAttribute("style", "display: block;");
    answerButton2.setAttribute("style", "display: block;");
    answerButton3.setAttribute("style", "display: block;");
    answerButton4.setAttribute("style", "display: block;");
    
    //create divs to append to the container
    var answerButton1Div = document.createElement("div")
    var answerButton2Div = document.createElement("div")
    var answerButton3Div = document.createElement("div")
    var answerButton4Div = document.createElement("div")

    //assigning classnames to the divs
    answerButton1Div.className = "answer-button-text";
    answerButton2Div.className = "answer-button-text";
    answerButton3Div.className = "answer-button-text";
    answerButton4Div.className = "answer-button-text";

    //writing the text to the div 
    answerButton1Div.textContent = answerButtonArray1[0];
    answerButton2Div.textContent = answerButtonArray1[1];
    answerButton3Div.textContent = answerButtonArray1[2];
    answerButton4Div.textContent = answerButtonArray1[3];

    //append the div into the answerbutton containers
    answerButton1.appendChild(answerButton1Div);
    answerButton2.appendChild(answerButton2Div);
    answerButton3.appendChild(answerButton3Div);
    answerButton4.appendChild(answerButton4Div);
    
}

function createAnswerButtonsPage2(){
    
}

goToQuestions.addEventListener("click", createQuestions);
goToQuestions.addEventListener("click", createAnswerButtonsPage1);

console.dir(document);

