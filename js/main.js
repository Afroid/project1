
jQuery(document).ready(function($) {
    YT.ready(onYouTubePlayerAPIReady);
    var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;

    //open team-member bio
    $('#cd-team').find('ul a').on('click', function(event) {
        event.preventDefault();
        var selected_member = $(this).data('type');
        $('.cd-member-bio.' + selected_member + '').addClass('slide-in');
        $('.cd-member-bio-close').addClass('is-visible');

        // firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
        if (is_firefox) {
            $('main').addClass('slide-out').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
                $('body').addClass('overflow-hidden');
            });
        } else {
            $('main').addClass('slide-out');
            $('body').addClass('overflow-hidden');
        }

    });

    //close team-member bio
    $(document).on('click', '.cd-overlay, .cd-member-bio-close', function(event) {
        event.preventDefault();
        $('.cd-member-bio').removeClass('slide-in');
        $('.cd-member-bio-close').removeClass('is-visible');

        if (is_firefox) {
            $('main').removeClass('slide-out').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
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


});

jQuery(document).ready(function($){
	var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;

	//open team-member bio
	$('#cd-team').find('ul a').on('click', function(event){
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


	function marvelP(){
		var options = {
			id: 181083534,
			width: 640,
			loop: false,
			title: false,
			portrait: false,
			byline: false
		};

		var player = new Vimeo.Player('video-player', options);

		player.setVolume(1);

		player.on('play', function() {
			console.log('video played');
		});

	}

	function listItems(){
		var queryURL = "someQueryURL like the one below for an API";

		/*******Example API URL*******/
		// "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC&limit=10";

		/*******aJax call, to end this call, uncomment the closing of it down below*******/
		// $.ajax({
		// 	url: queryURL,
		// 	method: "GET"
		// }).done(function(response) {

          // Loops over the array six times for now and builds our new list item
          // each time with the respective classes and attributes
          for(var i = 1; i < 7; i++){


          	/****All of these global variables are used below
          		 put API calls in place so they can be used*****/

			var name = "Spider-Man";//put an api call to get the name like, Spider-Man
			console.log("The name is: " + name);

			var nickname = "Peter Benjamin Parker";//put an api call to get the nickname like, Peter Benjamin Parker
			console.log("The nickname is: " + nickname);

			//An example to get image URL
			// var imgURL = data[i].images.fixed_height_still.url;
			var imgURL = "img/Spider-Man.jpg";//put an api call to get the images to fill the DIV's.

			var theFacts = "Some Fact ";//put an api call to get some facts. This may need it's own loop.

            // A new list Item
            var listItem = $("<li>");  

			//flip-container div to append to the list item
			var flipContainerDiv = $("<div class='flip-container' ontouchstart='this.classList.toggle('hover')'>");

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

			//span to append to the anchorDiv with nickname in it in grey
			var spanDiv = $("<span>dfdfd");
			anchorDiv.append(spanDiv);
			$(".cd-member-info span").text("a.k.a. " + nickname);

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
			var figureImg = $("<img alt='Team member " + i + "'>");
			figureImg.attr("src", imgURL);
			anchorFigure.append(figureImg);

			//div to hold member facts with id member1Facts, member2Facts...etc.
			var memberFactsDiv = $("<div id='member" + i + "Facts' class='cd-img-overlay'>");
			anchorFigure.append(memberFactsDiv);

			//Creates the facts on the back of the card with the name from the API call
			//and an incremented number for targeting, if needed
			for(var j=1; j<6; j++){
				var factDiv = $("<div id='" + name + j +"'>").text(theFacts + j);//Replace "Fact" with your fact from the API call here and remove "j".
				memberFactsDiv.append(factDiv);
			}

			//div to append to anchor
			var anchorDiv = $("<div class='cd-member-info'>").text("Click to view " + name + "'s bio");
			anchor.append(anchorDiv);


            //**********An example of putting some text into a variable for the rating
            // var rating = data[i].rating;
			// console.log("Rating: " + rating);

            //**********An example to add text to a paragraph area to hold the rating
            // var pRating = $("<p>").text("Rating: " + rating);

            //**********An example to get the image from the response
            // var imgURL = data[i].images.fixed_height_still.url;
            // console.log("imgURL: " + imgURL);

            //**********An example that creates an element to hold our images with a src attribute
            //src = "someURL to an image" data-state='still', data-value, and an ID
            // var image = $("<img data-state='still' id='imgGiphy'>");
            // image.attr("src", imgURL);
            // image.attr("data-value", i);  

            // Take the entirely new list item that's been created and appending it
            // to the unordered list with id="myList"
            $("#myList").append(listItem);            
          }
		// }); This ends the aJax call.
	}

listItems();
marvelP();
});

