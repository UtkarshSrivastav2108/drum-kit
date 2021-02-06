var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        // var audio= new Audio('./sounds/tom-1.mp3');
        // audio.play();


        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);

        addAnimation(buttonInnerHTML)
    });
}



document.addEventListener("keypress", function(event){
makesound(event.key);
addAnimation(event.key)
});



function makesound(key){


    switch (key) {
        case "w":
            var tom1 = new Audio('./tom-1.mp3');
            tom1.play();
            break;


        case "a":
            var tom1 = new Audio('./tom-2.mp3');
            tom1.play();
            break;


        case "s":
            var tom1 = new Audio('./tom-3.mp3');
            tom1.play();
            break;


        case "d":
            var tom1 = new Audio('./tom-4.mp3');
            tom1.play();
            break;

        case "j":
            var tom1 = new Audio('./crash.mp3');
            tom1.play();
            break;


        case "k":
            var tom1 = new Audio('./kick-bass.mp3');
            tom1.play();
            break;


        case "l":
            var tom1 = new Audio('./snare.mp3');
            tom1.play();
            break;

        default:console.log(buttonInnerHTML);
            break;
    }


}


function addAnimation(currentKey){

var addclass= document.querySelector("."+currentKey);
addclass.classList.add("pressed");

setTimeout(function(){
addclass.classList.remove("pressed");
},100)

}