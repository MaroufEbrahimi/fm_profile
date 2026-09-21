/*  __________  Typing Animation __________ */
var typed = new Typed(".typing", {
  strings: ["Sotware Engineer", "Web Developer", "Teacher", "Freelancer"],
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
/* __________ Email Checker __________ */
document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const errorMsg = document.querySelector(".error-message");

  emailInput.addEventListener("input", function () {
    if (!emailInput.checkValidity()) {
      errorMsg.style.display = "block";
      errorMsg.textContent = emailInput.validationMessage;
    } else {
      errorMsg.style.display = "none";
    }
  });
});

/* __________ Form Submission __________ */
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    if (validateForm()) {
      sendMail();
    } else {
      console.log("Form validation failed.");
    }
  });

function validateForm() {
  const emailInput = document.getElementById("email");
  return emailInput.checkValidity();
}

function sendMail() {
  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_djyrova";
  const templateID = "template_gv72xhr";

  const buttonLoading = document.querySelector(".btn_loading");

  buttonLoading.classList.add("show-spinner");

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      buttonLoading.classList.remove("show-spinner");

      console.log("SUCCESS:", res.status, res.text);

      document.getElementById("contactForm").reset();

      const modal = document.getElementById("successModal");

      if (modal) {
        modal.style.display = "flex";

        setTimeout(() => {
          modal.style.display = "none";
        }, 5000);
      }
    })
    .catch((err) => {
      buttonLoading.classList.remove("show-spinner");

      console.error("EmailJS Error:");
      console.error("Status:", err.status);
      console.error("Text:", err.text);
    });
}
