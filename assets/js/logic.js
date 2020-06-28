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



var startpageAnswerInvisibleToVisible = document.querySelector(".answer-button")




function createQuestions(){
    
    startGameText.setAttribute("style", "display: none;");
    var questionText = document.createElement("div");
    questionText.className = "quiz-question-test";
    questionText.textContent = questionArray[0];
    questionBox.appendChild(questionText);    

}

function createAnswerButtonsPage1(){
    //remove start button
    startButton.setAttribute("style", "display: none;");

    //make answer buttons appear
    startpageAnswerInvisibleToVisible.setAttribute("style", "display: block;");
    
    answerButtons.setAttribute("style", "display: flex;");
    answerButtons.setAttribute("style", "visibility: visible;");

    
    //make the containers appear
    answerButton1.setAttribute("style", "display: block;");
    answerButton2.setAttribute("style", "display: block;");
    answerButton3.setAttribute("style", "display: block;");
    answerButton4.setAttribute("style", "display: block;");


    
    //target the div that im writing to
    
    var answerButton1Div = document.querySelector("#answer-button-text1")
    var answerButton2Div = document.querySelector("#answer-button-text2")
    var answerButton3Div = document.querySelector("#answer-button-text3")
    var answerButton4Div = document.querySelector("#answer-button-text4")

    //writing the text to the div 
    answerButton1Div.textContent = answerButtonArray1[0];
    answerButton2Div.textContent = answerButtonArray1[1];
    answerButton3Div.textContent = answerButtonArray1[2];
    answerButton4Div.textContent = answerButtonArray1[3];

    
}

function createAnswerButtonsPage2(){
    //this will handle once one of the answers is clicked all the question buttons will

    
    //query which elements we are writing to by their id
    var answerButton1Div = document.querySelector("#answer-button-text1")
    var answerButton2Div = document.querySelector("#answer-button-text2")
    var answerButton3Div = document.querySelector("#answer-button-text3")
    var answerButton4Div = document.querySelector("#answer-button-text4")
    
    var questionText = document.querySelector("#quiz-question-text");
    

    //write the new values in
    answerButton1Div.textContent = answerButtonArray2[0];
    answerButton2Div.textContent = answerButtonArray2[1];
    answerButton3Div.textContent = answerButtonArray2[2];
    answerButton4Div.textContent = answerButtonArray2[3];
    
    //update the question for page 2
    questionText.textContent = questionArray[1];
}




goToQuestions.addEventListener("click", createQuestions);
goToQuestions.addEventListener("click", createAnswerButtonsPage1);

//go to page 2
answerButton1.addEventListener("click", createAnswerButtonsPage2); 
answerButton2.addEventListener("click", createAnswerButtonsPage2); 
answerButton3.addEventListener("click", createAnswerButtonsPage2); 
answerButton4.addEventListener("click", createAnswerButtonsPage2);

//go to page 3

//go to page 4

//go to high scores



console.dir(document);

