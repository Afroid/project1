//Plays a Marvel song. Use 
//<script src="https://player.vimeo.com/api/player.js"></script> and <div id="video-player"></div> in the HTML.


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

marvelP();