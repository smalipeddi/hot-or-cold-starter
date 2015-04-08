
$(document).ready(function(e){

/*--- Display information modal box ---*/
	$(".what").click(function(){
	$(".overlay").fadeIn(1000);
	});

	/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});

	 /*---Load new window on clicking newGame button --*/
	 $('a.new').click(function(){
		location.reload();
		console.log("reloaded");
	  });

  /* -- Generate secret random number  --*/
    /*---Generate a random number ----*/

	  	var minNumber = 1;
	    var maxNumber = 100;
	    var count = 0;
	    function randomNumberFromRange(min,max)
	    {
		     var random_number = Math.floor(Math.random()*(max-min+1)+min);
		     console.log(random_number);
		     return random_number;
		    }
	    var randomnumber = randomNumberFromRange(minNumber, maxNumber);
         /*----get user input -----*/
	    var user_input ;
	  
/* ---- validat einput to accept only numbers ---*/
$('#userGuess').jStepper({minValue:0, maxValue:999, minLength:3});
});
	











