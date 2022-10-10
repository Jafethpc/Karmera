// NAV SLIDER -- REMOVES / ADDS MARGIN

document.querySelector(".nav-btn").addEventListener("click", function () {
  const menu = document.querySelector(".navigation-slider");
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

document.querySelector("main").addEventListener("click", function () {
  const menu = document.querySelector(".navigation-slider");
  const navIcon = document.querySelector(".nav-btn");
  const invis = document.querySelector(".invisible");
  const marginProp = window
    .getComputedStyle(menu)
    .getPropertyValue("margin-left");

  if (marginProp === "0px") {
    menu.style.marginLeft = "-300px";
    navIcon.style.removeProperty("position");
    invis.style.position = "absolute";
  }
});
