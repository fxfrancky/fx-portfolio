/* Refresh a div */
function updateDiv() {
  $("#section-skills").load(window.location.href + " #section-skills");
  // $("#circular-progress").load(window.location.href + " #circular-progress");
}

// JavaScript animation for link or button
$(".link").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800
    );
  }
});

// When we scroll down we want to have an opacity on the navbar menu
//but no when its on top
window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    document.querySelector(".navbar").style.opacity = 0.95;
  } else {
    document.querySelector(".navbar").style.opacity = 1;
  }
});
