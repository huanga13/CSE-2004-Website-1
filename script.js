// For the cha chaan teng scroll
const ctr_scroll_img = document.getElementById('ctr-scroll-img');
const left_scroll_img = document.getElementById('left-scroll-img');
const right_scroll_img = document.getElementById('right-scroll-img');

const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');

const title = document.getElementById('card-title');
const desc = document.getElementById('card-desc');

const scroller_items = [
    {
        img: "assets/macaroni.png",
        title: "MACARONI SOUP",
        desc: "A popular Hong Kong breakfast with savory broth and spam."
    },
    {
        img: "assets/sausage-egg.png",
        title: "BREAKFAST SET",
        desc: "Pan-fried sausage served with scrambled egg."
    },
    {
        img: "assets/eggtoast.png",
        title: "EGG TOAST",
        desc: "Soft scrambled eggs on crispy buttered toast."
    }
];

let ctr_index = 1;  // Start the center image at sausage egg
function updateScroller() {
    let left_index = (ctr_index - 1 + scroller_items.length) % scroller_items.length;
    let right_index = (ctr_index + 1) % scroller_items.length;
    left_scroll_img.src = scroller_items[left_index].img;
    ctr_scroll_img.src = scroller_items[ctr_index].img;
    right_scroll_img.src = scroller_items[right_index].img;

    title.textContent = scroller_items[ctr_index].title;
    desc.textContent = scroller_items[ctr_index].desc;
}

leftBtn.addEventListener("click", () => {
    ctr_index = (ctr_index - 1 + scroller_items.length) % scroller_items.length;
    updateScroller();
});

rightBtn.addEventListener("click", () => {
    ctr_index = (ctr_index + 1) % scroller_items.length;
    updateScroller();
});

updateScroller();