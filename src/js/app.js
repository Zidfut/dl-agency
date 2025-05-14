import Choices from 'choices.js';

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

const optionButtons = document.querySelectorAll('.presents__option');
const descriptionItems = document.querySelectorAll('.presents__descriptions-item');

optionButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    optionButtons.forEach(btn => btn.classList.remove('presents__option--active'));
    descriptionItems.forEach(desc => desc.classList.remove('active'));

    btn.classList.add('presents__option--active');
    descriptionItems[index].classList.add('active');
  });
});

const element = document.querySelector('[data-choices]');
const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    placeholder: true,
    placeholderValue: "Gender",
  });