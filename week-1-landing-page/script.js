// SELECT MENU BUTTON

const menuBtn = document.querySelector(".menu-btn");


// SELECT NAV LINKS

const navLinks = document.querySelector(".nav-links");


// ADD CLICK EVENT

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});