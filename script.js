const catSound = document.querySelector("#catSound");
const btn = document.querySelector("#btn");

const openMouthImg = "./images/cat-open.png";
const closeMouthImg = "./images/cat-close.png";

const openMouthSound = new Audio("./sound/cat-meow.mp3");
const closeMouthSound = new Audio("./sound/close-sound.mp3");

btn.addEventListener("mousedown", openMouth);
btn.addEventListener("mouseup", closeMouth);

btn.addEventListener("touchstart", function(e) {
    e.preventDefault();
    openMouth();
})

btn.addEventListener("touchend", function(e) {
    e.preventDefault();
    closeMouth();
})

function openMouth() {
    catSound.src = openMouthImg;
    openMouthSound.play();
}

function closeMouth() {
    catSound.src = closeMouthImg;
    closeMouthSound.play();
}