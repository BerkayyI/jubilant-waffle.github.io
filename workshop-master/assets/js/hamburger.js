document.addEventListener("DOMContentLoaded", function () {
    // Event listener to check if dom is loaded

   /*  const hamburger = document.querySelector("#hamburger");
    const nav = document.querySelector(".animenu__nav");  */// Changed from "#nav" to ".animenu__nav"

   /*  hamburger.addEventListener("click", function (event) {
        hamburger.classList.toggle("hamburger--state-opened");
        nav.classList.toggle("animenu__nav--state-opened"); // Changed from "nav--state-opened" to "animenu__nav--state-opened"
    }); */
});

(() => {
    let $ = (el) => document.querySelector(el);

    $(".animenu__btn").addEventListener("click", function () {
        this.classList.toggle("animenu__btn--active");
        $(".animenu__nav").classList.toggle("animenu__nav--active");
        console.log("Clicked");
    });


})();

(() => {
    const searchInput = document.querySelector("#inpt_search");

    searchInput.addEventListener("focus", function () {
        this.parentNode.classList.add("active");
    });

    searchInput.addEventListener("blur", function () {
        if (this.value.length === 0) {
            this.parentNode.classList.remove("active");
        }
    });
})();