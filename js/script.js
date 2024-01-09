/*  __________  Typing Animation __________ */
var typed = new Typed(".typing", {
  strings: ["Full Stack Developer", "Web Developer", "Teacher", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

document.getElementById("downloadLink").click();

/*  __________ Asid Links Navigate __________ */
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBut();
    }
  });
}

function showSection(ele) {
  for (let a = 0; a < totalSection; a++) {
    allSection[a].classList.remove("active");
  }
  const target = ele.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function removeBackSection() {
  for (let a = 0; a < totalSection; a++) {
    allSection[a].classList.remove("back-section");
  }
}

function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

/*  __________ Hire Me __________ */
document.querySelector(".hire_me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

/*  __________ Redirect to Home when click the logo __________ */
document.querySelector(".logo_link").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

function updateNav(ele) {
  for (let a = 0; a < totalNavList; a++) {
    navList[a].querySelector("a").classList.remove("active");
    const target = ele.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[a].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[a].querySelector("a").classList.add("active");
    }
  }
}

/*  __________ Nav Toggle __________ */
const navTogglerBtn = document.querySelector(".nav_toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBut();
});

function asideSectionTogglerBut() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let a = 0; a < totalSection; a++) {
    allSection[a].classList.toggle("open");
  }
}
