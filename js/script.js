const weapons = document.querySelectorAll(".rpsButton");
weapons.forEach(weapon => {
    let id = weapon.id;
    document.getElementById(id).style.backgroundImage = `url('img/${id}.png')`;
    weapon.addEventListener('click', playRound)}
);

function getComputerChoice()
{
    var choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            return "Error";
    }
}

function playRound(e)
{
    console.log(e.currentTarget.id);

    /*
    if(playerSelection.toLowerCase() === "rock")
    {
        if(computerSelection === "Paper")
        {
            return 0;
        } else if(computerSelection === "Scissors")
        {
            return 1;
        } else {
            return 2;
        }
    }

    if(playerSelection.toLowerCase() === "paper")
    {
        if(computerSelection === "Scissors")
        {
            return 0;
        } else if(computerSelection === "Rock")
        {
            return 1;
        } else {
            return 2;
        }
    }

    if(playerSelection.toLowerCase() === "scissors")
    {
        if(computerSelection === "Rock")
        {
            return 0;
        } else if(computerSelection === "Paper")
        {
            return 1;
        } else {
            return 2
        }
    }*/
}
/*
function game() {
    let userScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose your weapon:");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if(result === 0)
            computerScore++;
        else if(result === 1)
            userScore++;
        console.log(userScore + " " + playerSelection + " : " + computerScore + " " + computerSelection);
    }
    if(user > computer)
        return "You win!";
    else if (computer > user)
        return "Computer wins!";
    else
        return "it's a tie!";
}*/

