//declare variables at top
var counter = 0;
var wins = 0;
var loses = 0;

var targetScore = 0;

var images = ['./assets/images/ruby.jpeg', './assets/images/emerald.jpg', './assets/images/aquamarine.jpg', './assets/images/citrine.jpeg']


//functions
// Math.floor with Math.random generates a random # for us while also rounding down to the whole #. We multiply by 90 for magnitude.


$( document ).ready(function() {

function setGame() {
	//$("#crystals").empty();
	targetScore = Math.floor(Math.random() * 100 + 19);
	$("#target-number").html(targetScore);
	$("#userScore").html(counter);
	$("#won").html(wins);
	$("#lost").html(loses);
		// grab and append wins and loses - rolling into one for this master function
		// append userScore

//generate crystal images with new values on each of them
//we need to loop over each image, give it a class name, data value attribute, could add styling with time in css part

	for (var i = 0; i < images.length; i++) {

		// use jquery to create an image tag <img>
		var img = $('<img class="stones">');
		// use images[i] to assign an src attribute to the image we just created 
		img.attr('src', images[i]);
		img.attr('height', '100px');
		img.attr('width', '100px');
		img.attr('data-value', Math.floor(Math.random() * 10 + 1));
			// console.log(Math.floor(Math.random() * 10 + 1));
			$("#crystals").append(img);
		// assign the image a classname
		// assign the image a attribute named data-value and give it a random number between 1-12 
		// append images to the html
	} // end of for-loop

} // end of function setGame()

	setGame(); //this starts the game

$("img").on("click", function() {
	console.log("Working");
// store the data value of clicked crystal in variable
var dazzle = $(this).attr('data-value');
counter = parseInt(dazzle) + parseInt(counter);
$("#userScore").text(counter);
console.log(counter);

if (counter === targetScore) {
	wins++;
	$("#results").text("You won! Play again!");

	//setGame();
}
 
else if (counter > targetScore) {
	loses++;
	$("#results").text("You lost! Play again!");
	

}

});

});

//when the images values add up to equal the targetScore, the game is won.
//if the total values exceed the targetScore, the game is lost.
//game proceeds until targetScore is reached or exceeded.
//win or lose, game must restart


