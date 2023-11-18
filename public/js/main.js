document.querySelector("#hamburger-button").onclick = () => {
    document.querySelector("#nav-links").classList.toggle("active");
    document.querySelector("#hamburger-button").classList.toggle("active");
};

document.addEventListener("DOMContentLoaded", () => {
    const app = firebase.app();
    const auth = firebase.auth();
    const analytics = firebase.analytics();

    async function signIn() {
        const res = await auth.signInAnonymously();
        // console.log(res);
    }

    auth.onAuthStateChanged(user => {
        console.log(user);
        user && analytics.setUserId(user.uid);
    });
    signIn();
});
