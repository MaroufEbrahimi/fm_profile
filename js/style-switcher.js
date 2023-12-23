/*  __________  Toggle Style Switcher __________ */
const styleSwitcherToggle = document.querySelector(".style_switcher_toggle");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style_switcher").classList.toggle("open");
});


