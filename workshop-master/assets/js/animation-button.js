document.addEventListener("DOMContentLoaded", function () {
    // Event listener to check if dom is loaded
    const loadingButton = document.querySelector(".submit-button");
    const loadingBar = document.querySelector(".loading-bar");
    // Changed from "#nav" to ".animenu__nav"
    loadingButton.addEventListener("click", function (event) {
        event.preventDefault();
        loadingBar.classList.toggle("loading--state-opened");
    });
});
