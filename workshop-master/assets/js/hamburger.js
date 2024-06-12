document.addEventListener("DOMContentLoaded", function () {
    // Event listener to check if dom is loaded

    const hamburger = document.querySelector("#hamburger");
    const nav = document.querySelector("#nav");
    
    hamburger.addEventListener("click", function (event) {
        hamburger.classList.toggle("hamburger--state-opened");
        nav.classList.toggle("nav--state-closed");
    });
    
});
