const aboutSection = document.getElementById("about");
document.getElementById("readmore").onclick = () => aboutSection.scrollIntoView();

// code for sliding/fading animations
const intersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
    });
});

document.querySelectorAll(".fade-in-left, .fade-in-right").forEach(hiddenElement => {
    intersectionObserver.observe(hiddenElement);
});

// code for fullscreen images
const slidingImages = document.querySelectorAll("#sliding-examples img");
const fullscreenImage = document.getElementById("fullscreen-image");
for (const image of slidingImages) {
    image.onclick = () => {
        fullscreenImage.classList.toggle("active");
        fullscreenImage.src = image.src;
    };
}
fullscreenImage.onclick = () => fullscreenImage.classList.remove("active");

const slidingExamplesWrapper = document.getElementById("sliding-examples-cards");
const leftSlidingButton = document.getElementById("sliding-examples-button-left");
const rightSlidingButton = document.getElementById("sliding-examples-button-right");

// code for sliding examples:
let shift = 0;
let shiftLimit;

function updateShiftLimit() {
    let newShiftLimit;
    if (window.matchMedia("(max-width: 430px)").matches) newShiftLimit = 7;
    else if (window.matchMedia("(max-width: 800px)").matches) newShiftLimit = 3;
    else newShiftLimit = 1;
    // if the shift limit doesn't change, then do nothing
    if (shiftLimit === newShiftLimit) return;
    shiftLimit = newShiftLimit;
    shift = 0;
    applyShift();
}

function applyShift() {
    // update the positions
    slidingImages.forEach(image => {
        image.style.left = `${-shift * 105}%`;
    });
    // update the button states
    leftSlidingButton.classList.toggle("disabled", shift <= 0);
    rightSlidingButton.classList.toggle("disabled", shift >= shiftLimit);
}

// update the shift limit from the start and when the screen size changes
updateShiftLimit();
window.onresize = updateShiftLimit;

// shift to the left when the left button is pressed
leftSlidingButton.onclick = () => {
    if (shift <= 0) return;
    shift--;
    applyShift();
};

// shift to the right when the right button is pressed
rightSlidingButton.onclick = () => {
    if (shift >= shiftLimit) return;
    shift++;
    applyShift();
};

// swaping text animations:
const swappingTextWrapper = document.getElementById("swapping-text-wrapper");
const swappingTextElement = document.getElementById("swapping-text");
const swappingTextElements = [...swappingTextElement.children];
const animationDuration = 800;
const swapDelay = 1500;
let i = 0;
let previousPosition = "0";
function swapTextLoop() {
    swappingTextWrapper.style.width = `${swappingTextElements[i].getBoundingClientRect().width}px`;
    // console.log(performance.now());
    swappingTextElement.animate(
        [{ top: previousPosition }, { top: `calc(${i * -100}% + ${i * -0.5}rem)` }],
        {
            duration: animationDuration,
            fill: "forwards"
        }
    );
    previousPosition = `calc(${i * -100}% + ${i * -0.5}rem)`;
    if (++i >= swappingTextElements.length) {
        i = 1;
        previousPosition = "0";
    }
    setTimeout(swapTextLoop, swapDelay);
}
swapTextLoop();
