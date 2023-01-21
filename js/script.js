const weapons = document.querySelectorAll(".rpsButton");
weapons.forEach(weapon => {
    let id = weapon.id;
    document.getElementById(id).style.backgroundImage = `url('img/${id}.png')`;
    weapon.addEventListener('click', playRound);
    weapon.addEventListener('transitionend', removeTransition);
});

const button = document.querySelector(".restart");
button.addEventListener('click', restartGame);

function getComputerChoice()
{
    var choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "error";
    }
}

function playRound(e)
{
    let playerSelection = e.currentTarget.id;
    let computerSelection = getComputerChoice();

    if(playerSelection === computerSelection)
    {
        updateScore(2);
        showChoices(playerSelection, computerSelection, true);
    }
    else
        showChoices(playerSelection, computerSelection);
    //0 is used to describe a win for the computer, 1 is used to describe a win for the player, 2 is if it is a tie.
    if(playerSelection === 'rock')
    {
        switch(computerSelection)
        {
            case 'paper':
                updateScore(0);
                break;
            case 'scissors':
                updateScore(1);
                break;
        }
    }
    else if(playerSelection === 'paper')
    {
        switch(computerSelection)
        {
            case 'scissors':
                updateScore(0);
                break;
            case 'rock':
                updateScore(1);
                break;
        }
    }
    else if(playerSelection === 'scissors')
    {
        switch(computerSelection)
        {
            case 'rock':
                updateScore(0);
                break;
            case 'paper':
                updateScore(1);
                break;
        }
    }
}

function removeTransition(e)
{
    if(e.propertyName !== 'border-top-width') return;
    this.classList.remove('tie');
    this.classList.remove('computerStyle');
    this.classList.remove('playerStyle');
    document.querySelector(`div#${e.target.id}.text`).textContent = "";
}

function showChoices(playerSelection, computerSelection, tie)
{
    if(tie)
    {
        document.querySelector(`button#${playerSelection}`).classList.add('tie');
        let playerComputer = document.querySelector(`div#${playerSelection}.text`);
        playerComputer.textContent = "Player + Computer";
        playerComputer.style.color = "yellow";
    }
    else
    {
        document.querySelector(`button#${playerSelection}`).classList.add('playerStyle');
        document.querySelector(`button#${computerSelection}`).classList.add('computerStyle');
        let player = document.querySelector(`div#${playerSelection}.text`);
        let computer = document.querySelector(`div#${computerSelection}.text`);
        player.textContent = "Player";
        player.style.color = "green";
        computer.textContent = "Computer";
        computer.style.color = "red";
    }
    //add class to rock, paper or scissors for both selections. Remove after x time.
    //add text to describe which player chose which. Remove after x time.
}

function restartGame() {

    let playerDiv = document.querySelector("div#player.playerScore");
    let computerDiv = document.querySelector("div#computer.playerScore");

    playerDiv.textContent = 0;
    computerDiv.textContent = 0;

    let overlay = document.querySelector("div.overlay");
    overlay.style.display = "none";
}

function updateScore(roundResult) {
    let score = 0;
    let playerDiv = document.querySelector("div#player.playerScore");
    let computerDiv = document.querySelector("div#computer.playerScore");

    switch(roundResult) {
        case 0:
            score = playerDiv.textContent;
            playerDiv.textContent = ++score;
            break;
        case 1:
            score = computerDiv.textContent;
            computerDiv.textContent = ++score;
            break;
        case 2:
            break;
    }
    if(playerDiv.textContent === "5" || computerDiv.textContent === "5")
    {
        if(playerDiv.textContent === "5")
        {
            let result = document.querySelector("div.result");
            result.textContent = "You Win!";
        }
        else if(computerDiv.textContent === "5")
        {
            let result = document.querySelector("div.result");
            result.textContent = "You Lose!"
        }

        let overlay = document.querySelector("div.overlay");
        overlay.style.display = "flex";
    }
}

