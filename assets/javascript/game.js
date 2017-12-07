



var wins = 0;

var losses = 0;

var guessesLeft = 5;

var guessesSoFar = 0;

var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var randomLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.body.addEventListener('keyup', function(e) {
	var keyPressed = e.key;
	
	var guessesSoFar = document.getElementById("guessesSoFar");
	guessesSoFar.textContent += keyPressed;
	console.log(guessesSoFar);

	if(keyPressed === randomLetter){
		wins++;
	} else if(keyPressed != randomLetter){ 
		guessesLeft--;
		document.getElementById("guessesLeft").textContent = guessesLeft;
	} else if(guessesLeft === 0){
		losses++;
	}
});



 