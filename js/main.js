// Change nav style on scroll
// window.addEventListener("scroll", () => {
// document
//   .querySelector("#nav-header")
//   .classList.toggle("window-scrolled", window.scrollY > 0);
//   let value = window.scrollY;
//   console.log(value);

//   let navBar = document.getElementById("nav-header");
//   navBar.classList.toggle("fixed", this.window.scrollY > 0);
// });

window.addEventListener("scroll", function () {
  // let navBar = document.getElementById("navbar");
  let navBar = document.getElementById("nav-header");
  navBar.classList.toggle("scrolledy", this.window.scrollY > 0);
});
