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
document.getElementbyId("numGuesses").innerHTML = guessesLeft;
document.getElementbyId("winCounter").innerHTML = winCount;
document.getElementbyId("lossCounter").innerHTML = lossCount;

function checkLetters(letter){
	var isLetterInWord = false;
	for (var i= 0; i< numBlanks; i++){
		if (selectedWord[i] == letter){
			isLetterInWord = true;
		}
		}
if(isLetterInWord){
	for (var i = 0; i<numBlanks; i++){
		if(selectedWord[i]== letter){
			blanksAndSuccesses[i] =letter;
		}
	}

else {
	wrongLetters.push(letter);
	guessesLeft--
}

}

function roundComplete(){
	console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left" + numGuesses);

	document.getElementbyId("numGuesses").innerHTML = guessesLeft;
	document.getElementbyId("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
  document.getElementbyId("wrongGuesses").innerHTML = wrongLetters.join(" ");


	if(lettersInWord.toString() == blanksAndSuccesses.toString()){
		winCount++;
		alert("You got it!");

		document.getElementbyId("winCounter").innerHTML = winCount;
		startGame();
	}
	else if (guessesLeft ==0){
		lossCount++:
		alert("You need to go over the names of your classmates!");

		document.getElementbyId("lossCounter").innerHTML = lossCount;
		startGame();
	}
}

//functions invoked- main processes

startGame();

document.onkeyup = function(event){
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	roundComplete();
}