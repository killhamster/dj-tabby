// injects the API script into the page
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// global variable for the player
var player;

// creates the player and loads a default video
function onYouTubeIframeAPIReady() {
  player = new YT.Player('video', {
    height: '3',
    width: '4',
    videoId: 'hHW1oY26kxQ',
    events: {
      'onReady': onPlayerReady,
    }
  });
}


function onPlayerReady(event) {

  // bind channels to play buttons
  var playStudy = document.getElementById("study-play");
  playStudy.addEventListener("click", function() {
    player.loadVideoById("hHW1oY26kxQ");
    player.playVideo();
  });

  var playChill = document.getElementById("sleep-play");
  playChill.addEventListener("click", function() {
    player.loadVideoById("EcEMX-63PKY");
    player.playVideo();
  });

  var playJazz = document.getElementById("jazz-play");
  playJazz.addEventListener("click", function() {
    player.loadVideoById("DSGyEsJ17cI");
    player.playVideo();
  });

  var playBossa = document.getElementById("piano-play");
  playBossa.addEventListener("click", function() {
    player.loadVideoById("eZaQf0Wb7iI");
    player.playVideo();
  });

  var playAmbient = document.getElementById("ambient-play");
  playAmbient.addEventListener("click", function() {
    player.loadVideoById("ql4S8z1jW8I");
    player.playVideo();
  });

  // Any pause button pauses the player
  var pauseBtn = document.querySelectorAll('.pause-btn');
  Array.from(pauseBtn).forEach(btn => {
    btn.addEventListener('click', function() {
      player.pauseVideo();
    });
  });

}
