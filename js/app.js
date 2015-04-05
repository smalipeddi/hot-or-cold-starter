
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
	    $( "#guessButton" ).click(function(eve) {
	     	 eve.preventDefault();
	         var user_input = $('#userGuess').val();
	         console.log("user_inout  "+user_input);
	         count = count +1 ;
	         $("#count").replaceWith('<span id="count">'+count+'</span>');
	         console.log("count  " + count);
	         if(Math.abs(user_input/randomnumber) == 1){
	         	$('#feedback').replaceWith('<h2 id="feedback">You Won !!! </h2>');
	         }
	  	    if(Math.abs(user_input-randomnumber) >= 50){
	  	    	console.log("diff = " + Math.abs(user_input-randomnumber));
				$('#feedback').replaceWith('<h2 id="feedback">Too Cold </h2>');
				console.log($('#feedback').val());
		    }
			else if(Math.abs(user_input-randomnumber) >=30 && Math.abs(user_input- randomnumber) < 50){
				console.log("diff = " + Math.abs(user_input-randomnumber));
				$('#feedback').replaceWith('<h2 id="feedback"> Cold </h2>');
				console.log($('#feedback').val());
			}
			else if (Math.abs(user_input - randomnumber) >= 20 && Math.abs(user_input - randomnumber) < 30){
				console.log("diff = " + Math.abs(user_input-randomnumber));
			 $('#feedback').replaceWith('<h2 id="feedback">Warm </h2>');
			 console.log($('#feedback').val());
			}
			else if (Math.abs(user_input -randomnumber) >=10 && Math.abs(user_input - randomnumber) < 20){
				console.log("diff = " + Math.abs(user_input-randomnumber));
			 $('#feedback').replaceWith('<h2 id="feedback">Hot </h2>');
			 console.log($('#feedback').val());
			}
			else if (Math.abs(user_input - randomnumber) >= 1 && Math.abs(user_input - randomnumber) <10){
				console.log("diff = " + Math.abs(user_input-randomnumber));
			 $('#feedback').replaceWith('<h2 id="feedback">Very Hot </h2>');
			 console.log($('#feedback').val());
			}

			$("ul#guessList").append('<li>'+user_input+'</li>');
			
	    });
});
	







