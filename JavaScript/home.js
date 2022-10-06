// // SLIDESHOW
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("product-image");
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

document.querySelector(".nav-btn").addEventListener("click", function () {
  const menu = document.querySelector(".black");
  const navIcon = document.querySelector(".nav-btn");
  const invis = document.querySelector(".invisible");
  const marginProp = window
    .getComputedStyle(menu)
    .getPropertyValue("margin-left");

  if (marginProp === "-300px") {
    menu.style.marginLeft = "0px";
    navIcon.style.position = "fixed";
    invis.style.position = "relative";
  } else if (marginProp === "0px") {
    menu.style.marginLeft = "-300px";
    navIcon.style.removeProperty("position");
    invis.style.position = "absolute";
  }
});
