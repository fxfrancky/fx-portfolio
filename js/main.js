/* Refresh a div */
function updateDiv() {
  $("#section-skills").load(window.location.href + " #section-skills");
}

// When we scroll down we want to have an opacity on the navbar menu
//but no when its on top
window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    document.querySelector(".navbar").style.opacity = 0.95;
  } else {
    document.querySelector(".navbar").style.opacity = 1;
  }
});

// JQuery Smooth Scroll
$(".navbar a").on("click", function (e) {
  if (this.hash != "") {
    e.preventDefault();

    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800
    );
  }
});
