const searchBoxWrapper = document.querySelector("#search-box-wrapper");
const searchBoxOptions = document.querySelector("#search-options");
const searchBox = document.querySelector("#search-box");
const sectionLinks = [...document.querySelectorAll("section[id]")].map(section => ({
    headerText: section.children[0].textContent,
    link: "#" + section.id
}));

function setSearchOptions(sections) {
    searchBoxOptions.innerHTML = "";
    sections.forEach(section => {
        const optionElement = document.createElement("option");
        optionElement.value = section.headerText;
        optionElement.textContent = section.link;
        searchBoxOptions.append(optionElement);
    });
}

searchBox.oninput = () => {
    setSearchOptions(
        sectionLinks.filter(section =>
            section.headerText.toLowerCase().includes(searchBox.value.toLowerCase())
        )
    );
};

searchBoxWrapper.onsubmit = e => {
    e.preventDefault();

    const targetSectionData = sectionLinks.find(section =>
        section.headerText.toLowerCase().includes(searchBox.value.toLowerCase())
    );

    const targetElement = document.querySelector(targetSectionData.link);

    if (!targetElement) return;
    targetElement.scrollIntoView();
    searchBox.value = targetSectionData.headerText;
};
