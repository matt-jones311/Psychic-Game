



var wins = 0;

var losses = 0;

var guessesLeft = 5;

var guessesSoFar = "";

var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var randomLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.body.addEventListener('keyup', function(e) {

	var keyPressed = e.key;
		var guessesSoFar = document.getElementById("guessesSoFar");
	guessesSoFar.textContent += keyPressed;

	if(keyPressed === randomLetter){
		wins++; 
		var winElement = document.getElementById("wins");
		winElement.textContent = wins;

		guessesLeft = 0;
		var guessesLeftElement = document.getElementById("guessesLeft");
		guessesLeftElement.textContent = guessesLeft;

		guessesSoFar = "";
		var guessesSoFarElement = document.getElementById("guessesSoFar");
		guessesSoFarElement.textContent = guessesSoFar;

}else{

		guessesLeft--;
		var guessesLeftElement = document.getElementById("guessesLeft");
		guessesLeftElement.textContent = guessesLeft;

		guessesSoFar += keyPressed

		





}


/*	var keyPressed = e.key;
	
	var guessesSoFar = document.getElementById("guessesSoFar");
	guessesSoFar.textContent += keyPressed;
	console.log(guessesSoFar);

	if(keyPressed === randomLetter){
		wins++;
		document.getElementById("wins").textContent = wins; 
	} else if(keyPressed != randomLetter){ 
		guessesLeft--;
		document.getElementById("guessesLeft").textContent = guessesLeft;
	} else if(guessesLeft === 0){
		losses++;
		document.getElementById("losses").textContent = losses;
	}
*/
});

/* If keyPressed is not = to randomLetter and guessesLeft = 0 then losses increases by 1

   once randomLetter = keyPressed or guesses = 0 , reset randomLetter and reset guessesSoFar

   when guesses = 0 increase losses by 1 

	You're really close. You're getting too much logic mixed together. I'll work you through it when we get a chance to

   */

 