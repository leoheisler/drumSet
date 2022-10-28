// Detecting button presses

for (let index = 0; index < document.querySelectorAll("button").length; index++) {
    document.querySelectorAll("button")[index].addEventListener("click", function(){
        make_sound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    })   
}
document.addEventListener("keydown", function(event){
    make_sound(event.key);
    buttonAnimation(event.key);
})

// making the corresponding audios play
function make_sound(key){
    var str;
    switch(key){
        case "w":
            str = "sounds/crash.mp3";
            break;
        case "a":
            str = "sounds/tom-3.mp3";
            break;
        case "s":
            str = "sounds/tom-1.mp3";
            break;
        case "d":
            str = "sounds/kick-bass.mp3";
            break;
        case "j":
            str = "sounds/snare.mp3";
            break;
        case "k":
            str = "sounds/tom-2.mp3";
            break;
        case "l":
            str = "sounds/tom-4.mp3";
            break;
        default:
            console.log(event);
            break;
    }
    var audio = new Audio(str);
    audio.play();
}

function buttonAnimation(key){
   var flashKey = document.querySelector("."+ key);
   
   flashKey.classList.add("pressed");
   setTimeout(function(){
    flashKey.classList.remove("pressed");
   },100);
 
}