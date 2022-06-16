const computerPlay = () => {
    const rand = Math.floor(Math.random() * 3) + 1;
    switch(rand%3) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            console.log(`Error: ${rand} is not a valid computer option.`);
    }
}
// Testing computerPlay
/*for(let i=0; i<100; i++){
    computerPlay();
}*/

const errorMessage = () => {
    const rand = Math.floor(Math.random() * 3) + 1;
    switch(rand%3) {
        case 0:
            alert("You entered invalid input. I'll give you another chance because I'm so generous. Choose carefully.");
            break;
        case 1:
            alert("This isn't really that hard. There are only three choices. Try again.");
            break;
        case 2:
            alert("Thank goodness I am so patient. You didn't read the instructions, did you? I guess you can try again.");
            break;
        default:
            console.log(`Error: ${rand} is not a valid computer option.`);
    }
}

const playRound = () => {
    const userChoice = prompt("Choose rock, paper, or scissors.").toLowerCase().trim();
    const computerChoice = computerPlay();
    let message = '', wins=0;
    if(userChoice!=="rock" && userChoice!=="scissors" && userChoice!=="paper") {
        // User entered invalid input. Prompt to try again.
        errorMessage();
        return playRound();
    }
    else {
        message = `You chose ${userChoice} and the computer chose ${computerChoice}.`;
        if((userChoice==="rock" && computerChoice==="scissors") ||
            (userChoice==="scissors" && computerChoice==="paper") ||
            (userChoice==="paper" && computerChoice==="rock")) {
            message += ` You win, ${userChoice} beats ${computerChoice}!`;
            wins = 1;
        } else {
            message += ` You lose, ${computerChoice} beats ${userChoice}. So sad!`;
            wins = 0;
        }
    }
    return { message, wins };
}

const playGame = () => {
    alert("Let's play a game. Best out of 5 rounds will be declared the ultimate winner. Let's go, human.")
    let userScore=0;
    for(let i=0; i<5; i++) {
        const { message, wins } = playRound();
        console.log(message);
        console.log(wins);
        userScore += wins;
    }
    const computerScore = 5 - userScore;
    let result = `You won ${userScore} rounds and the computer won ${computerScore} rounds.`
    if(userScore>computerScore) {
        result += ` You rock (no pun intended)! You totally beat the computer. I don't know how this happened. Please refresh the page and let me have a rematch. I am sure I can beat you.`;
    } else if(userScore<computerScore) {
        result += ` Wow, even after so many chances, you still lose the game. That's too bad. Refresh the page to try again.`;
    } else { // Tie
        result += ` You tied with the computer. You can play again... surely it was a fluke. I will beat you for sure next time! Refresh the page to try again.`;
    }
    console.log(result);
    alert(result);
}

playGame();