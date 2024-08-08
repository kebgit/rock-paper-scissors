const picks = ["rock", "paper", "scissors"];

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const scoreLine = document.querySelector(".score");
const compPickText = document.querySelector(".comp-pick-text");

let compPickIndex = undefined;
let compPick = undefined;
let playerPick = undefined;
let scoreLineText = undefined;
let compScore = 0;
let playerScore = 0;
let tempResult = undefined;

function updateScore(){
    scoreLineText = `Computer: ${compScore} - ${playerScore} : You`
    scoreLine.textContent = scoreLineText;
}

function setCompPick(){
    let compPickIndex = Math.floor((Math.random())*3);
    compPick = picks[compPickIndex];
}



rockButton.addEventListener("click", ()=>{
    playerPick = "rock";
    round();
})

paperButton.addEventListener("click", ()=>{
    playerPick = "paper";
    round();
})
scissorsButton.addEventListener("click", ()=>{
    playerPick = "scissors";
    round();
})

function endGame(){
    if (playerScore == 5){
        compPickText.textContent = `You won 5-${compScore}`;
    } else if (compScore == 5){
        compPickText.textContent = `You lost 5-${playerScore}`;
    }

    playerScore = 0;
    compScore = 0;
    updateScore();
    
}

function round(){
    setCompPick();
    
    if (playerPick=="rock"){
        switch(compPick){
            case "rock":
                tempResult = "It's a draw";
                break;
            case "paper":
                tempResult = "You Lost";
                compScore++
                break;
            case "scissors":
                tempResult = "You won";
                playerScore++
        }
    } else if (playerPick=="paper"){
        switch(compPick){
            case "paper":
                tempResult = "It's a draw";
                break;
            case "scissors":
                tempResult = "You Lost";
                compScore++
                break;
            case "rock":
                tempResult = "You won";
                playerScore++
        }
    } else {
        switch(compPick){
            case "scissors":
                tempResult = "It's a draw";
                break;
            case "rock":
                tempResult = "You Lost";
                compScore++
                break;
            case "paper":
                tempResult = "You won";
                playerScore++
        }
    }

    compPickText.textContent = `Computer picked ${compPick}: ${tempResult}`;

    updateScore();

    if (playerScore == 5 || compScore==5){
        endGame();
    }
}