const options = ["rock","paper","scissors"]; //computer choices

function getComputerChoice(){
    const choice = options[Math.floor(Math.random()* options.length)]
    console.log(choice);
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

const playerSelection = "rock"; //player input
const computerSelection = getComputerChoice(); //computer input
console.log(playRound(playerSelection, computerSelection)); //pinalabas dito yung nireturn galing sa playRound function