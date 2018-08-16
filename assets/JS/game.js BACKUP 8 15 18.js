<div id = "psychic">
<script type = "text/javascript">
const guessedRay = [];
var inputLetter = "";
const AILetterRay = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var answer = "";
var remainingGuessCount =  7;
var winCount = 0;
var lossCount = 0;
var gameDone = false;

let isAlpha = function(ch)
{
    return typeof ch === "string" && ch.length === 1 && (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z");
}

function initializeGame()
{
    remainingGuessCount = 7;
    answer = AILetterRay[Math.floor(Math.random() * AILetterRay.length)];
    guesserFunc();
}

function guesserFunc()
{
    // Input data somehow!
    /*document.onkeyup = function(event)
    {

    // Determines which key was pressed.
    var userGuess = "";
    var ug = event.key;
    ug = ug.toLowerCase();

    if((isAlpha(ug)))
    {
      userGuess = ug;
    }
    */

    //Check input data!
    if(!guessedRay includes inputLetter)
    {
        inray.push(letter);
        remainingGuessCount--;
        
        //Needs a means to display current # of remaining guesses!
        document.getElementById("game").innerHTML = "<h2>GUESSIN' GAME</h2>
        <b>Goal:</b>
        To win, guess the letter the computer generated within the allowed number of guesses.
        <BR><BR>
        To lose, instead fail to win.
        <BR><BR>
        
        <b>Instructions:</b>
        To guess the generated letter, push letters on this device's keyboard until you exhaust all your guesses, you win, or you get bored and quit.
        <BR><BR>
        
        <h3>Remaining Guesses: " + remainingGuessCount + "</h3> 
  
        <BR><BR>
        <h3>Guessed Letters: " + guessedRay + "</h3> 
        <BR><BR>
        
        <h4>Wins: " + winCount + ", Losses: " + lossCount + "</h4> 
        <BR><BR>";

        if(remainingGuessCount <= 0)
        {
            gameLost();
        }
    }

    else
    {
        if(inputLetter.toUpperCase() === answer.toUpperCase())
        {
            gameWon();
        }
    }
}

function gameLost()
{
    alert("You lose!\nThe correct answer was " + answer + "!");
    lossCount++;
    initializeGame();
}

function gameWon()
{
    alert("You win!\nThe correct answer was " + answer + "!");
    wincount++;
    initializeGame();
}

// Start the game loop!
initializeGame();

</script>
</div>