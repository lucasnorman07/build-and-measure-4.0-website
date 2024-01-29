const intersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
    });
});

document.querySelectorAll(".fade-in").forEach(hiddenElement => {
    intersectionObserver.observe(hiddenElement);
});

const slidingImages = document.querySelectorAll("#sliding-examples > img");
document.addEventListener("click", e => {
    slidingImages.forEach(image => {
        if (image === e.target) e.target.classList.toggle("fullscreen");
    });
});
