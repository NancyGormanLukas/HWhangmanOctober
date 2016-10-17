//global variables
var wordOptions= ["jen", "rangy", "arnold", "nick", "julian", "stephen", "josie", "cristal", "amanda", "whitley", "karina", "travis", "frank", "todd", "yana", "kristin", "seth", "tom", "eli", "richard", "chen", "steven", "joshua", "tyler", "nancy", "sal", "hira"];

var selectedWord= "";
var lettersInWord= [];
var numBlanks= 0;
var blanksAndSuccesses= [];
var wrongLetters= [];

var winCount= 0;
var lossCount= 0;
var guessesLeft= 9;


//functions

function startGame(){
	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	lettersInWord = selectedWord.split("");
	numBlanks = lettersInWord.length;

		//reset

	guessesLeft = 9;
	wrongLetters = [];
	blanksAndSuccesses = [];

	for (var i= 0; i< numBlanks; i++){
		blanksAndSuccesses.push(" ");
		}

document.getElementbyId("wordToGuess").innerHTML = blanksAndSuccesses.join("  ");
}
//functions invoked- main processes

startGame();