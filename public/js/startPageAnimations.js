document.querySelectorAll("#logo-svg path").forEach(path => {
    path.setAttribute("fill", "#000000");
    path.setAttribute("pathLength", 1);
    path.setAttribute("stroke-width", 20);
    path.setAttribute("fill-opacity", 0);

    let percentage = 0;
    const pathInterval = setInterval(() => {
        const extra = 1.4;
        path.setAttribute("stroke-dasharray", `${percentage}, ${1 - percentage}`);
        if (percentage > extra) {
            path.setAttribute("fill-opacity", percentage - extra);
            percentage += 0.05;
        } else {
            percentage += 0.005;
        }

        if (percentage > 1 + extra) clearInterval(pathInterval);
    }, 10);
});

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
