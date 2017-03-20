//Plays the Imperial March from the Star Wars soundtrack. Use 
//<script src="https://player.vimeo.com/api/player.js"></script> and <div id="video-player"></div> in the HTML.

function starWarsP(){
    var options = {
        id: 84832755,
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

starWarsP();