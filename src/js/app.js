import Choices from "choices.js";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const menuBtn = document.querySelector("[data-menu-btn]");
const dropdownMenu = document.querySelector("[data-dropdown-menu]");
const mainContainer = document.querySelector(".main");

const toggleMenu = (isOpen) => {
  menuBtn.classList.toggle("active", isOpen);
  menuBtn.classList.toggle("closed", !isOpen);
  dropdownMenu.classList.toggle("active", isOpen);
  mainContainer.classList.toggle("no-scroll", isOpen);
};

menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const isOpen = !menuBtn.classList.contains("active");
  toggleMenu(isOpen);
});

document.querySelectorAll("[data-dropdown-link]").forEach((link) => {
  link.addEventListener("click", () => toggleMenu(false));
});


gsap.utils.toArray(".animation--fade-in").forEach((item) => {
  gsap.from(item, {
    opacity: 0,
    delay: 3,
    duration: 0.3,
    y: -20,
    x: 20,
    ease: "power1.out",
    scrollTrigger: {
      trigger: item,
      start: "top 95%",
    },
  });
});

ScrollTrigger.defaults({
  scroller: ".main"
});

gsap.to(".decor__wrap", {
  top: "0",
  y: '-10%',
  duration: 0.5,
  ease: "back.out(1.4)",
  scrollTrigger: {
    trigger: ".presents",
    start: "top 1%",
    scrub: false,
    toggleActions: 'play none none reverse'
  },
});

gsap.to(".decor__wrap", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".contacts",
    start: "top 1%", 
    scrub: false,
    toggleActions: 'play none none reverse',
  },
});

const optionButtons = document.querySelectorAll(".presents__option");
const descriptionItems = document.querySelectorAll(".presents__descriptions-item");

optionButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    optionButtons.forEach((b) => b.classList.remove("presents__option--active"));
    descriptionItems.forEach((desc) => desc.classList.remove("active"));

    btn.classList.add("presents__option--active");
    descriptionItems[index].classList.add("active");
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const targetId = anchor.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", window.location.pathname);
    }
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
