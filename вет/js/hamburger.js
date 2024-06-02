const hamburger = document.querySelector(".navigation_hamburger");
const forhamburger = document.querySelector(".forhamburger");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    forhamburger.classList.toggle("active");
    }
)