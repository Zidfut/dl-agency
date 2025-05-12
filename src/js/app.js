const menuBtn = document.querySelector('[data-menu-btn]');
const dropdownMenu = document.querySelector('[data-dropdown-menu]');
const mainContainer = document.querySelector('.main');

menuBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const isActive = this.classList.toggle("active");
    this.classList.toggle("closed", !isActive);
    dropdownMenu.classList.toggle("active", isActive);
    mainContainer.classList.toggle("no-scroll", isActive);
});

