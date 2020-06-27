// must dynamically generate and append elements that have text in them 
//  into their respective parent elements

//have a starting page with only one button with start game written on it
//this button will trigger to link into another html document identical
//  but has the answer buttons updated into the quiz box

//feedback at the bottom of the answer buttons will change according to
//  the answer that matches a correct choice
//  regardless of what answer they give will start dynamically generating the next
//  question and set of answer buttons

//the first page will have the timer but wont begin until the start game button is pushed

//view high scores will link to a separate html page with the scores display
//then have a link to go back to start game page

var question = ["here is a question", "here is a nother question"]

var goToQuestions = document.querySelector("#text-link");
var questionBox = document.querySelector("#quiz-question-text");


function createQuestion(){
    
    listItemEl.className = "task-item";
    listItemEl.setAttribute("data-task-id", taskIdCounter);
    var questionText = document.createElement("div");
}


goToQuestions.addEventListener("click", createQuestion);

