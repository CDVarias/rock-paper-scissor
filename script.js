const options = ["rock","paper","scissors"]; //computer choices

function getComputerChoice(){
    const choice = options[Math.floor(Math.random()* options.length)]
    return choice;
    // para makapili randomly sa tatlong nasa choices ang computer
}

function checkWinner(playerSelection,computerSelection){
    if (playerSelection == computerSelection){
        return "Tie";
    }
    // para icheck kung same ng choice ang computer at ang tao
    else if ((playerSelection == "rock" && computerSelection == "scissors")
    || (playerSelection == "scissors" && computerSelection == "paper")
    ||(playerSelection == "paper" && computerSelection == "rock")){
        return "Player";
    }
    //para icheck yung result ng differences ng choices at kung panalo yung player
    else{
        return "Computer";
    }
    // panalo naman dito yung computer
}

function playRound(playerSelection,computerSelection){
    const result = checkWinner(playerSelection,computerSelection);
    //eto naman per round, ilalagay sa variable na result kung ano naging resulta sa choices between player at computer
    if (result == "Tie"){
        return "It is a Tie!"
    }
    //dito naman sa first if statement ay, kapag ang result ay equal dun sa tie na galing sa function ng checkWinner if same ang choice. then yung irereturn naman nya ay it is a tie with console.log
    else if (result == "Player"){
        return "You Win! " + playerSelection + " beats " + computerSelection + "!";
    }
    //dito naman sa first if statement ay, kapag ang result ay kapag panalo ang player sa function ng checkWinner if same ang choice. then yung irereturn naman nya ay it is a tie with console.log
    else{
        return `You Lose! ${computerSelection} beats ${playerSelection} `;
    }
    //dito naman sa first if statement ay, kapag ang result ay kapag panalo ang computer sa function ng checkWinner if same ang choice. then yung irereturn naman nya ay it is a tie with console.log
}


function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice  = prompt("Rock Paper or Scissors");
        if(validatedInput == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        } 
    }
}


function game (){
// console.log(playRound(playerSelection, computerSelection)); //pinalabas dito yung nireturn galing sa playRound function
    let playerScore = 0;
    let computerScore = 0;
    for (i=0; i<5; i++){
        const playerSelection = getPlayerChoice(); //player input
        const computerSelection = getComputerChoice(); //computer input
        console.log(playRound(playerSelection, computerSelection));
        console.log("_____________")
        if (checkWinner(playerSelection,computerSelection) == "Player"){
            playerScore++
        }
        else if (checkWinner(playerSelection,computerSelection) == "Computer"){
            computerScore++;
        }
    }
    console.log("Game Over!")
    if (playerScore > computerScore){
        console.log("Player is the Winner!")
    }
    else if (computerScore > playerScore){
        console.log("Computer is the Winner!")
    }
    else{
        console.log("We have a Tie!");
    }
}

game();
