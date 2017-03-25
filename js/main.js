jQuery(document).ready(function($){
	YT.ready(onYouTubePlayerAPIReady);
	var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;

	//open team-member bio
	$(document).on('click', '.back', function(event){
	// $('#cd-team').find('ul a').on('click', function(event) {
		console.log("Clicked in the first");
		event.preventDefault();
		var selected_member = $(this).data('type');
		$('.cd-member-bio.'+selected_member+'').addClass('slide-in');
		$('.cd-member-bio-close').addClass('is-visible');

		// firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( is_firefox ) {
			$('main').addClass('slide-out').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').addClass('overflow-hidden');
			});
		} else {
			$('main').addClass('slide-out');
			$('body').addClass('overflow-hidden');
		}

	});


	//close team-member bio
	$(document).on('click', '.cd-overlay, .cd-member-bio-close', function(event){
		console.log("Clicked in the second");
		event.preventDefault();
		$('.cd-member-bio').removeClass('slide-in');
		$('.cd-member-bio-close').removeClass('is-visible');

		if( is_firefox ) {
			$('main').removeClass('slide-out').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('main').removeClass('slide-out');
			$('body').removeClass('overflow-hidden');
		}
	});		

    // function for YouTube Player API
    function onYouTubePlayerAPIReady() {
    	console.log("onYouTubePlayerAPIReady");
    	var players = document.querySelectorAll('.video-container div')
    	for (var i = 0; i < players.length; i++) {
    		new YT.Player(players[i], {
    			playerVars: {
    				'autoplay': 0,
    				'modestbranding': 1,
    				'showinfo': 0,
    				'rel': 0
    			},
    			videoId: players[i].dataset.id
    		});
    	}
    }	

function listItems() {

		/*******Example API URL*******/
		// "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC&limit=10";
		for(var i = 1; i < 10; i++){
			var queryURL = "http://swapi.co/api/people/" + i + "/?format=json";

			var count = i;
			console.log("Initial count: " + count);

			var images = ["img/Leia.jpg", "img/Spider-Man.jpg", "img/Leia.jpg", "img/Spider-Man.jpg", "img/Leia.jpg", "img/Spider-Man.jpg", "img/Leia.jpg", "img/Spider-Man.jpg", "img/Leia.jpg", "img/StarWars.jpg", ];

			var imgURL = images[count];//"img/Spider-Man.jpg";//put an api call to get the images to fill the DIV's.
			console.log("Image count: " + count);
			
		/*******aJax call, to end this call, uncomment the closing of it down below*******/
			$.ajax({
				url: queryURL,
				method: "GET"
			}).done(function(response) {
			var theFacts = ["Name: " + response.name, "Height: " + response.height + " cm" , "Mass: " + response.mass + " kg" , 
			"Gender (If applicable): " + response.gender, "Birth Year: " + response.birth_year];


          	/****All of these global variables are used below
          	put API calls in place so they can be used*****/

			var name = theFacts[0];//"Spider-Man";//put an api call to get the name like, Spider-Man
			console.log("The name is: " + name);

			var nickname = "Peter Benjamin Parker";//put an api call to get the nickname like, Peter Benjamin Parker
			console.log("The nickname is: " + nickname);

			//An example to get image URL
			// var imgURL = data[i].images.fixed_height_still.url;
			var counter = i-1;
			console.log("Counter is: " + counter);


			//var theFacts = "Some Fact ";//put an api call to get some facts. This may need it's own loop.

            // A new list Item
            var listItem = $("<li>");  

			//flip-container div to append to the list item
			var flipContainerDiv = $('<div class="flip-container" ontouchstart="this.classList.toggle(' + "'hover'" + ');">');

            //Appending the flip Container Div to the list item
            listItem.append(flipContainerDiv);

			//flipper div to append to the container div
			var flipperDiv = $("<div class='flipper'>");
			flipContainerDiv.append(flipperDiv);

			//front div to append to the flipper div
			var frontDiv = $("<div class='front'>");
			flipperDiv.append(frontDiv);

			//anchor to append to front div with data-type member1 or member 2....etc.
			var anchor = $("<a href='#0' data-type='member-" + i + "'>");
			// var anchor = $("<a href='#0' data-type='member-1'>");			
			frontDiv.append(anchor);

			//figure to append to anchor
			var anchorFigure = $("<figure>");
			anchor.append(anchorFigure);

			//img to append to figure and adds a src attribute with the imgURL from the API call above
			var figureImg = $("<img>");
			figureImg.attr("src", imgURL);
			anchorFigure.append(figureImg);

			//div to append to anchor with the name in it in red
			var anchorDiv = $("<div class='cd-member-info'>").text(name);
			anchor.append(anchorDiv);

			/*********	Didn't use this span  on the front of the card because not 
						everyone had a nickname in Marvel, and no one had a nickname in Star Wars
																		                *******/

			//span to append to the anchorDiv with nickname in it in grey
			// var spanDiv = $("<span>");
			// anchorDiv.append(spanDiv);
			// $(".cd-member-info span").text("a.k.a. " + nickname);

			/********************Separation between Front and Back of the card********************/

			//back div to append to the flipper div
			var backDiv = $("<div class='back'>");
			flipperDiv.append(backDiv);

			//anchor to append to front div
			var anchor = $("<a href='#0' data-type='member-" + i + "'>");
			backDiv.append(anchor);

			//figure to append to anchor
			var anchorFigure = $("<figure>");
			anchor.append(anchorFigure);

			//img to append to figure and adds a src attribute with the imgURL from the API call above 
			var figureImg = $("<img>");
			figureImg.attr("src", imgURL);
			figureImg.attr("alt", "Team member " + i);
			anchorFigure.append(figureImg);

			//div to hold member facts with id member1Facts, member2Facts...etc.
			var memberFactsDiv = $("<div id='member" + i + "Facts' class='cd-img-overlay'>");
			anchorFigure.append(memberFactsDiv);

			//Creates the facts on the back of the card with the name from the API call
			//and an incremented number for targeting, if needed
			for(var j=0; j<5; j++){
				var factDiv = $("<div id='" + name + j +"' class='facts'>").text(theFacts[j]);//Replace "Fact" with your fact from the API call here and remove "j".
				memberFactsDiv.append(factDiv);
			}

			//div to append to anchor
			var anchorDiv = $("<div class='cd-member-info'>").text("Click to view " + name + "'s bio");
			anchor.append(anchorDiv);

            $("#myList").append(listItem);            
    	// }
		}); //This ends the aJax call.
	}
}	    

    listItems();	
});





