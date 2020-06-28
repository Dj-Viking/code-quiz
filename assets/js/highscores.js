
highScoreHandler();//runs first when page loads

function highScoreHandler(){
    
    var delayInMilliseconds = 1000; //1 second
    
    setTimeout(function() {
        window.confirm("lets continue with the high scores!");
        console.log("test high score delay");
        //wait to do this stuff after the page is loaded
        
        //highscorehandler function code here
        var highScoreList = document.querySelector("#list-container")
        var highScoreContainer = document.createElement("li");
        highScoreContainer.className = "high-score-text";
        var highScoreName = document.createElement("div");
        highScoreName.className = "score-name";
        var highScoreNumber = document.createElement("div");
        highScoreNumber.className = "score-number";
        
        highScoreName.textContent = window.prompt("Type your name to store into the Scoreboard!");
        highScoreNumber.textContent = userScore;
        
        localStorage.setItem("highScoreName", highScoreName.textContent);
        // localStorage.setItem("highScoreNumber", highScoreNumber.textContent);
        
        var getHighScoreName = localStorage.getItem("highScoreName")
        var getHighScoreNumber = localStorage.getItem("userScore")
        if (!highScoreName || !highScoreNumber) return
        
        highScoreList.appendChild(highScoreContainer);
        highScoreContainer.appendChild(highScoreName);
        highScoreContainer.appendChild(highScoreNumber);
    
        highScoreName.textContent = getHighScoreName;
        highScoreNumber.textContent = getHighScoreNumber;
    }, delayInMilliseconds);
    
    
    
}