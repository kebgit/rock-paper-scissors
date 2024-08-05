const options = ["rock", "paper", "scissors"];

let compScore = 0;
let playerScore = 0;
let compPickIndex = undefined;
let compPick = undefined;
let playerPickIndex = undefined;
let playerPick = undefined;

function play(){
    compPickIndex = Math.floor((Math.random()*3)) + 1;
    compPick = options[compPickIndex-1];
    playerPickIndex = +prompt("Type 1 for Rock, 2 for Paper, 3 for Scissors", "1");
    playerPick = options[playerPickIndex-1];

    if (playerPick == "rock"){
        if (compPick == "rock"){
            alert("DRAW")
        } else if (compPick == "paper"){
            alert("YOU LOSE");
            compScore++;
        } else {
            alert("YOU WIN");
            playerScore++;
        }
    } else if (playerPick == "paper"){
        if (compPick == "rock"){
            alert("YOU WIN");
            playerScore++;
        } else if (compPick == "paper"){
            alert("DRAW");
        } else {
            alert("YOU LOSE");
            compScore++;
        }
    } else {
        if (compPick == "rock"){
            alert("YOU LOSE");
            compScore++;
        } else if (compPick == "paper"){
            alert("YOU WIN");
            playerScore++;
        } else {
            alert("DRAW");
        }
    }

    if (compScore == 3){
        alert(`You lose this round 3-${playerScore}`)
        playerScore = 0;
        compScore = 0;
    } else if (playerScore == 3) {
        alert(`You win this round 3-${compScore}`)
        playerScore = 0;
        compScore = 0;
        
    } else {
        alert(`Score: Computer ${compScore}-${playerScore} You`);
        play();
    }
}
    // alert(`Score: Computer ${compScore}-${playerScore} You`);

    // if (compScore >= 3) {
    //     alert(`You lose this round 3-${playerScore}`)
    //     playerScore = 0;
    //     compScore = 0;
    // }

    // if (playerScore >= 3) {
    //     alert(`You win this round 3-${compScore}`)
    //     playerScore = 0;
    //     compScore = 0;
    // }

    // if (compScore > 0 || playerScore > 0){
    //     play();
    // }