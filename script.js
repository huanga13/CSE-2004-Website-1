const foodItems = ["shrimp", "fish", "cabbage", "fishcake", "fishball", "meat"];
let clickedFoods = 0;
var popAudio = new Audio('audio/pop.mp3');
var restoAudio = new Audio('audio/chinese-restaurant.mp3');
var cuteAudio = new Audio('audio/yoshi-nova.mp3');
var blingAudio = new Audio('audio/Bling.mp3');
restoAudio.loop = true;
restoAudio.volume = 0.7;

const audioBtn = document.getElementById("audio");

audioBtn.addEventListener('click', () => {
    restoAudio.play();
    cuteAudio.play();
});

foodItems.forEach(id => {
    const btn = document.getElementById(id);
    btn.addEventListener("click", () => clickFood(id));
});

function clickFood(elementId) {
    const food = document.getElementById(elementId);
    food.style.pointerEvents = "none";

    food.style.transition = "opacity 0.25s ease";
    food.style.transform = "scale(0)";
    food.style.opacity = 0;
    popAudio.play();

    setTimeout(() => {
        food.style.display = "none";

        clickedFoods++;
        if (clickedFoods === foodItems.length) {
            triggerFinalAnimation();
        }
    }, 1000);
}


function triggerFinalAnimation() {
    console.log("finito");
    blingAudio.play();

    const endContainer = document.querySelector('.end-container');

    endContainer.style.display = "flex";
    endContainer.style.top = "-100%";
    endContainer.style.left = "0";
    endContainer.style.transition = "top 1s ease-out";

    void endContainer.offsetWidth;

    endContainer.style.top = "0";
}