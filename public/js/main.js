document.querySelector("#hamburger-button").onclick = () => {
    document.querySelector("#nav-links").classList.toggle("active");
    document.querySelector("#hamburger-button").classList.toggle("active");
};

document.querySelector(".faq-nav-link").onclick = () => {    
    document.querySelector("#nav-links").classList.remove("active");
    document.querySelector("#hamburger-button").classList.remove("active");
};
