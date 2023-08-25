// const apiURL = "https://api.github.com/repos/lucasNormanGitHub/build-and-measure-4.0-website/releases";

// const downloadButton = document.querySelector("#download-button");
// const downloadVersion = document.querySelector("#download-version");

// fetch(apiURL).then(async response => {
//     const json = await response.json();
//     if (!response.ok) {
//         alert(json.message);
//         return;
//     }
//     const latestRelease = json[0];
//     const latestInstallerURL = latestRelease.assets.find(asset => (/\.exe$/i).test(asset.name)).browser_download_url;
//     downloadVersion.textContent = latestRelease.tag_name;
//     downloadButton.href = latestInstallerURL;
// });

document.querySelector("#hamburger").onclick = () => {
    document.querySelector("#nav-links").classList.toggle("active");
}