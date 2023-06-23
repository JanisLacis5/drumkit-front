
function makeSound(key) {
    switch (key) {
        case "w":
            let crash = new Audio("./sounds/crash.mp3");
            crash.play();
        break;
        case "a":
            let kickBass = new Audio("./sounds/kick-bass.mp3");
            kickBass.play();
        break;
        case "s":
            let snare = new Audio("./sounds/snare.mp3");
            snare.play();
        break;
        case "d":
            let tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
        break;
        case "j":
            let tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
        break;
        case "k":
            let tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
        break;
        case "l":
            let tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
        break;
        default:
            break;
    }
}

// Animation on press
function animate(key) {
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("." + key).classList.remove("pressed");
    }, 100);
}

// Detecting click
for (let i = 0; i < document.querySelectorAll("button.drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        let key = this.innerHTML;
        makeSound(key);
        animate(key);
    });

    // Detecting keyboard press
    document.addEventListener("keydown", function (event) {
        makeSound(event.key);
        animate(event.key);
    });
}

