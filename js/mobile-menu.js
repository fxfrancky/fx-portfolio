// Mobile Menu
let checkBoxTheme = document.getElementById("checkbox-theme");
const mobileMenu = document.getElementById("menu-mobile");

// Mobile Menu Event
checkBoxTheme.addEventListener("click", navToggle);
// END JAVASCRIPT FORM VALIDATION
// Toggle Mobile Menu
function navToggle() {
  mobileMenu.classList.toggle("hidden");
}

// Close mobile menu on each click on a link
let link = document.querySelectorAll("#menu-mobile div a");
link.forEach((li) => {
  li.addEventListener("click", () => {
    navToggle();
    checkBoxTheme.checked = false;
  });
});
