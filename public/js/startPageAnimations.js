const intersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
    });
});

document
    .querySelectorAll(".fade-in-left, .fade-in-right, .sliding-fade-in")
    .forEach(hiddenElement => {
        intersectionObserver.observe(hiddenElement);
    });

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

let shift = 0;
let shiftCapacity;

function updateShiftCapacity() {
    let newShiftCapacity;
    if (window.matchMedia("(max-width: 430px)").matches) newShiftCapacity = 7;
    else if (window.matchMedia("(max-width: 800px)").matches) newShiftCapacity = 3;
    else newShiftCapacity = 1;
    // if the shift capacity doesn't change, then do nothing
    if (shiftCapacity === newShiftCapacity) return;
    shiftCapacity = newShiftCapacity;
    shift = 0;
    applyShift();
    updateButtonStatus();
}

function updateButtonStatus() {
    leftSlidingButton.classList.toggle("disabled", shift <= 0);
    rightSlidingButton.classList.toggle("disabled", shift >= shiftCapacity);
}

function applyShift() {
    slidingImages.forEach(image => {
        image.style.left = `${-shift * 105}%`;
    });
}

// update the shift capacity from the start or when the screen size changes
updateShiftCapacity();
window.onresize = updateShiftCapacity;

leftSlidingButton.onclick = () => {
    if (shift <= 0) return;
    shift--;
    applyShift();
    updateButtonStatus();
};

rightSlidingButton.onclick = () => {
    if (shift >= shiftCapacity) return;
    shift++;
    applyShift();
    updateButtonStatus();
};
