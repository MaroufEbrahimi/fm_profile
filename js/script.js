/*  __________  Typing Animation __________ */
var typed = new Typed(".typing", {
  strings: ["", "Full Stack Developer", "Web Developer", "Teacher"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

/*  __________ Asid Links Navigate __________ */
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    for (let j = 0; j < totalNavList; j++) {
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
  });
}

function showSection(ele) {
  for (let a = 0; a < totalSection; a++) {
    allSection[a].classList.remove("active");
  }
  const target = ele.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}
