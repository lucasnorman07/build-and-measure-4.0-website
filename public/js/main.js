document.querySelector("#hamburger-button").onclick = () => {
    document.querySelector("#nav-links").classList.toggle("active");
    document.querySelector("#hamburger-button").classList.toggle("active");
};

document.addEventListener("DOMContentLoaded", () => {
    const auth = firebase.auth();
    const analytics = firebase.analytics();

    async function signIn() {
        await auth.signInAnonymously();
    }

    auth.onAuthStateChanged(user => {
        user && analytics.setUserId(user.uid);
    });
    signIn();
});
