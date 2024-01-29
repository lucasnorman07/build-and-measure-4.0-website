document.querySelector("#hamburger-button").onclick = () => {
    document.querySelector("#nav-links").classList.toggle("active");
    document.querySelector("#hamburger-button").classList.toggle("active");
};