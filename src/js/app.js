import Choices from "choices.js";

const menuBtn = document.querySelector("[data-menu-btn]");
const dropdownMenu = document.querySelector("[data-dropdown-menu]");
const mainContainer = document.querySelector(".main");

menuBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const isActive = this.classList.toggle("active");
  this.classList.toggle("closed", !isActive);
  dropdownMenu.classList.toggle("active", isActive);
  mainContainer.classList.toggle("no-scroll", isActive);
});

const sections = document.querySelectorAll(".section");
const animationItems = document.querySelectorAll(".animation-item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        sections.forEach((s) => s.classList.remove("active"));
        entry.target.classList.add("active");

        animationItems.forEach((item) => {
          if (!item.classList.contains("animation-active")) {
            item.classList.add("animation-active");
          }
        });
      }
    });
  },
  {
    threshold: 0.6,
  }
);

sections.forEach((section) => observer.observe(section));

const optionButtons = document.querySelectorAll(".presents__option");
const descriptionItems = document.querySelectorAll(
  ".presents__descriptions-item"
);

optionButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    optionButtons.forEach((btn) =>
      btn.classList.remove("presents__option--active")
    );
    descriptionItems.forEach((desc) => desc.classList.remove("active"));

    btn.classList.add("presents__option--active");
    descriptionItems[index].classList.add("active");
  });
});

const element = document.querySelector("[data-choices]");
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: "",
  shouldSort: false,
  placeholder: true,
  placeholderValue: "Gender",
});

particlesJS("snow", {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#fff",
    },
    shape: {
      type: "circle",
      polygon: {
        nb_sides: 5,
      }
    },
    opacity: {
      value: 0.9,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 10,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: "#ffffff",
      opacity: 0.4,
      width: 2,
    },
    move: {
      enable: true,
      speed: 2.5,
      direction: "bottom",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.5,
        },
      },
      bubble: {
        distance: 400,
        size: 4,
        duration: 0.3,
        opacity: 1,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});
