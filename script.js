/*const duckFigure = document.querySelector('figure');


function play() {
    var audio = document.getElementById("audio");
    audio.play();
}
document.getElementById("dance-button").addEventListener("click", function() {
    duckFigure.classList.add("dance");
    //playMusic();
    play();
    setTimeout(function () {
        duckFigure.classList.remove("dance");
      }, 15000);
      
});*/

const duckFigure = document.querySelector('figure');

var audio = document.getElementById("audio");

function togglePlay() {
    return audio.paused ? danceAndPlay() : stopAndPause();
};

function play() {
    var audio = document.getElementById("audio");

    audio.currentTime = 0;

    duckFigure.classList.add("dance");
    setTimeout(function () {
        duckFigure.classList.remove("dance");
    }, 15000);
    audio.play();
}



function danceAndPlay() {
    play();

}
function stopAndPause() {
    window.location.reload();
}


