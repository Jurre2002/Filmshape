const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".contactCTA");
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            window.location.href = "contact.html";
        });
    });
});