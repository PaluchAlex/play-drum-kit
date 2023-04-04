var buttons = document.querySelectorAll(".drum");

for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", function () {

        var buttonInnerHtml = this.textContent;
        playSounds(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

document.addEventListener("keydown", function (event) {
    playSounds(event.key);
    buttonAnimation(event.key);
})

function playSounds(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();

            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(key)
            break;
    }
}
function buttonAnimation(pressedKey) {
    var activeButton = document.querySelector("."+pressedKey);
    activeButton.classList.add("pressed");
    setTimeout( function () { activeButton.classList.remove("pressed"); }, 100);
}
// function handleClick() {
//     alert("I got clicked!");
// }