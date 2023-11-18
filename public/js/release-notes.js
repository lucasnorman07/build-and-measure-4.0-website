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