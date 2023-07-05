const options = ["rock","paper","scissors"]; //computer choices

function getComputerChoice(){
    const choice = options[Math.floor(Math.random()* options.length)]
    return choice;   // para makapili randomly sa tatlong nasa choices ang computer
}

function checkWinner(playerSelection,computerSelection){ //pangcheck kung sino nananalo per round
    if (playerSelection == computerSelection){
        return "Tie";    // para ireturn kung same ng choice ang computer at ang tao
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors")
    || (playerSelection == "scissors" && computerSelection == "paper")
    ||(playerSelection == "paper" && computerSelection == "rock")){
        return "Player";    //para ireturn yung result ng differences ng choices at kung panalo yung player
    }
    else{
        return "Computer";    //vice versa ng result at panalo naman dito yung computer
    }
 
}

function playRound(playerSelection,computerSelection){
    const result = checkWinner(playerSelection,computerSelection); //eto naman per round, ilalagay sa variable na result kung ano naging resulta sa choices between player at computer
    if (result == "Tie"){
        return "It is a Tie!" //dito naman sa first if statement ay, kapag ang result ay equal dun sa tie na galing sa function ng checkWinner if same ang choice. then yung irereturn naman nya ay it is a tie 
    }
    
    else if (result == "Player"){
        return "You Win! " + playerSelection + " beats " + computerSelection + "!"; //dito naman sa first if statement ay, kapag ang result ay kapag panalo ang player sa function ng checkWinner if different ang choice. then yung irereturn naman nya ay panalo yung player
    }
    else{
        return `You Lose! ${computerSelection} beats ${playerSelection} `; //dito naman sa second if statement ay, kapag ang result ay kapag panalo ang player sa function ng checkWinner if different ang choice. then yung irereturn naman nya ay natalo yung player
    }
}


function getPlayerChoice(){ //etong function na to ay for input ng user/player
    let validatedInput = false; // so using boolean value, nagcreate ng variable na validated input = false with let, para pede syang gawin true. ginawa ito para malaman kung may input ang user para sa while loop
    while(validatedInput == false){ //so magloop sya hanggat false yung validated input
        const choice  = prompt("Rock Paper or Scissors"); // ilalagay sa variable na choice ang sagot ng user
        if(validatedInput == null){ // so kapag walang nilagay na input 
            continue; // continue ang pagtatanong
        }
        const choiceInLower = choice.toLowerCase(); // ilalagay sa variable yung choice na galing sa input ng user ng nakalowercase para goods yung sa case-insensitive
        if (options.includes(choiceInLower)){ // condition statement para alamin if kasama or included sa computer choices (nasa line 1) yung input na nakalagay sa variable na choiceInLower(kaya lowercase para same sa nakalagay sa choices sa line 1)
            validatedInput = true; // so kapag may na receive na input na galing from user, pede na gawing true yung validatedInput para magmove na sa next round.
            return choiceInLower; // irereturn yung input na lowercase
        } 
    }
}
//dito ay function ng paghingi ng choice ng player (kung meron silang na input and pagconvert sa lowercase para dun sa case-insensitive)


function game (){ // kung pano tatakbo yung game
    let playerScore = 0; // dito iaadd yung magiging score ng player na hanggang 5 rounds dahil sa for loop
    let computerScore = 0; // dito iaadd yung magiging score ng computer na hanggang 5 rounds dahil sa for loop
    for (i=0; i<5; i++){
        const playerSelection = getPlayerChoice(); //player input
        const computerSelection = getComputerChoice(); //computer input
        console.log(playRound(playerSelection, computerSelection));  //pinalabas dito yung nireturn galing sa playRound function, magrurun yung function na yon per round. hanggang 5 rounds kase naka for loop
        console.log("_____________") // for clarity ng results
        if (checkWinner(playerSelection,computerSelection) == "Player"){ //condition na base sa checkWinner function
            playerScore++ //kapag panalo ang player magdagdagan yung score nya
        }
        else if (checkWinner(playerSelection,computerSelection) == "Computer"){ //condition na base sa checkWinner function
            computerScore++; //kapag panalo ang computer magdagdagan yung score nya
        }
    }
    console.log("Game Over!") // kapag tapos na yung 5 rounds ng laro
    if (playerScore > computerScore){
        console.log("Player is the Winner!") // kapag mas mataas score ni player 
    }
    else if (computerScore > playerScore){
        console.log("Computer is the Winner!") // kapag mas mataas score ni computer
    }
    else{
        console.log("We have a Tie!"); //kapag tie
    }
}

game(); //tatawagin para magstart yung game function
