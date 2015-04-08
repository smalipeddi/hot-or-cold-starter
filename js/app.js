
$(document).ready(function(e){

//--- Display information modal box ---
	$(".what").click(function(){
	$(".overlay").fadeIn(1000);
	});

	//--- Hide information modal box ---
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});

	 //---Load new window on clicking newGame button --
	 $('a.new').click(function(){
		location.reload();
	 });

    // -- Generate secret random number  --
    //---Generate a random number ----

	  	var minNumber = 1;
	    var maxNumber = 100;
	    var count = 0;
	    function randomNumberFromRange(min,max)
	    {
		     var random_number = Math.floor(Math.random()*(max-min+1)+min);
		     console.log("random_number = " + random_number);
		     return random_number;
		    }
	    var randomnumber = randomNumberFromRange(minNumber, maxNumber);
        
        //--- validate input to accept only numbers ---//
         $('#userGuess').jStepper({minValue:0, maxValue:999, minLength:3});
       

         $( "#guessButton" ).click(function(eve) {
	     	 eve.preventDefault();
	         var user_input = $('#userGuess').val();
	         console.log("user_input  "+user_input);
	         count = count +1 ;
	         $("#count").replaceWith('<span id="count">'+count+'</span>');
	            if(Math.abs(user_input/randomnumber) == 1){
	         	   	$('#feedback').replaceWith('<h2 id="feedback">You Won !!! </h2>');
	            }
		  	    if(Math.abs(user_input-randomnumber) >= 50){
	  	 			$('#feedback').replaceWith('<h2 id="feedback">Too Cold </h2>');
				}
				else if(Math.abs(user_input-randomnumber) >=30 && Math.abs(user_input- randomnumber) < 50){
					$('#feedback').replaceWith('<h2 id="feedback"> Cold </h2>');
				}
		 		else if (Math.abs(user_input - randomnumber) >= 20 && Math.abs(user_input - randomnumber) < 30){
					 $('#feedback').replaceWith('<h2 id="feedback">Warm </h2>');
			 	}
				else if (Math.abs(user_input -randomnumber) >=10 && Math.abs(user_input - randomnumber) < 20){
					$('#feedback').replaceWith('<h2 id="feedback">Hot </h2>');
			 	}
				else if (Math.abs(user_input - randomnumber) >= 1 && Math.abs(user_input - randomnumber) <10){	
					$('#feedback').replaceWith('<h2 id="feedback">Very Hot </h2>');
				}

			$("ul#guessList").append('<li>'+user_input+'</li>');
			
	    });

});
	











