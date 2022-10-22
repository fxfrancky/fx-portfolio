// Mobile Menu
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

// Mobile Menu Event
btn.addEventListener("click", navToggle);

// END JAVASCRIPT FORM VALIDATION
// Toggle Mobile Menu
function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

// (function ($) {
//   "use strict";

//   if (matchMedia("only screen and (max-width: 1024px)").matches) {
//     $(".menu li a").on("click", function () {
//       $(".sydney-offcanvas-menu").removeClass("toggled");
//     });
//   }
// })(jQuery);
