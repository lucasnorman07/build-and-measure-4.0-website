const reportIssueForm = document.querySelector("#report-issue-form");
const reportIssueContent = document.querySelector("#report-issue-content");
const reportIssueRepruduce = document.querySelector("#report-issue-reproduce");

// Uses Emailjs
function sendEmail() {
    const params = {
        description: reportIssueContent.value,
        reproduce: reportIssueRepruduce.value
    };
    reset();
    emailjs
        .send("service_mc2n9pv", "template_o3wh1nc", params)
        .then(_res => {
            showSuccess();
        })
        .catch(err => {
            showError();
            console.error(err);
        });
}

reportIssueForm.onsubmit = e => {
    e.preventDefault();
    sendEmail();
};
function reset() {
    reportIssueContent.value = "";
    reportIssueRepruduce.value = "";
}

function showSuccess() {
    alert("Success");
}
function showError() {
    alert("Error");
}
