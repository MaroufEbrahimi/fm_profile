/*  __________  Toggle Style Switcher __________ */
const styleSwitcherToggle = document.querySelector(".style_switcher_toggle");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style_switcher").classList.toggle("open");
});

// hide style switcher on scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style_switcher").classList.contains("open")) {
    document.querySelector(".style_switcher").classList.remove("open");
  }
});

/*  __________  Theme Colors __________ */
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}
