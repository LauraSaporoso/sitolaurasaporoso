const duckFigure = document.querySelector('figure');


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
      
});