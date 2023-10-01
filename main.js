document.querySelector("#hamburger-button").onclick = () => {
    document.querySelector("#nav-links").classList.toggle("active");
    document.querySelector("#hamburger-button").classList.toggle("active");
};

const toggleTableOfContentButton = document.querySelector("#toggle-table-of-content-button");
if (toggleTableOfContentButton) {
    const tableOfContent = document.querySelector("#table-of-content-wrapper");
    toggleTableOfContentButton.onclick = () => {
        tableOfContent.classList.toggle("active");
        toggleTableOfContentButton.classList.toggle("active");
    };
}
const toggleListOfReleaseNotesButton = document.querySelector(
    "#toggle-list-of-release-notes-button"
);
if (toggleListOfReleaseNotesButton) {
    const listOfReleaseNotes = document.querySelector("#list-of-release-notes-wrapper");
    toggleListOfReleaseNotesButton.onclick = () => {
        listOfReleaseNotes.classList.toggle("active");
        toggleListOfReleaseNotesButton.classList.toggle("active");
    };
}
