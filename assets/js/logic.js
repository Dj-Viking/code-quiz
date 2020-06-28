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
    
    //create divs to append to the container
    var answerButton1Div = document.createElement("div");
    var answerButton2Div = document.createElement("div");
    var answerButton3Div = document.createElement("div");
    var answerButton4Div = document.createElement("div");

    //assigning classnames to the divs
    answerButton1Div.id = "answer-button-text1";
    answerButton2Div.id = "answer-button-text2";
    answerButton3Div.id = "answer-button-text3";
    answerButton4Div.id = "answer-button-text4";

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
    //this will handle once one of the answers is clicked all the question buttons will

    
    //hide the first set of divs with page 1 questions
    var answerButton1Div = document.querySelector("#answer-button-text1")
    var answerButton2Div = document.querySelector("#answer-button-text2")
    var answerButton3Div = document.querySelector("#answer-button-text3")
    var answerButton4Div = document.querySelector("#answer-button-text4")
    
    answerButton1Div.setAttribute("style", "display: none;");
    answerButton2Div.setAttribute("style", "display: none;");
    answerButton3Div.setAttribute("style", "display: none;");
    answerButton4Div.setAttribute("style", "display: none;");
    
    //create new divs to append to the container
    var answer2Button1Div = document.createElement("div");
    var answer2Button2Div = document.createElement("div");
    var answer2Button3Div = document.createElement("div");
    var answer2Button4Div = document.createElement("div");
    
    //assigning classnames to the divs
    answer2Button1Div.id = "#answer-button-text4";
    answer2Button2Div.id = "#answer-button-text5";
    answer2Button3Div.id = "#answer-button-text6";
    answer2Button4Div.id = "#answer-button-text7";

    answer2Button1Div.textContent = answerButtonArray2[0];
    answer2Button2Div.textContent = answerButtonArray2[1];
    answer2Button3Div.textContent = answerButtonArray2[2];
    answer2Button4Div.textContent = answerButtonArray2[3];

    answerButton1.appendChild(answer2Button1Div);
    answerButton2.appendChild(answer2Button2Div);
    answerButton3.appendChild(answer2Button3Div);
    answerButton4.appendChild(answer2Button4Div);
    
    //repopulate from the questionButtonArray 2
    var questionText = document.querySelector("#quiz-question-text");


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

