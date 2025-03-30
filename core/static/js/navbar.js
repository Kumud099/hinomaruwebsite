const servicesBtn = document.getElementById("services-btn");
const dropdownMenu = document.getElementById("dropdown-menu");
const navbar = document.getElementById("navbar");

// Show the dropdown and change navbar background on hover
servicesBtn.addEventListener("mouseenter", () => {
  dropdownMenu.classList.add("show");
  navbar.classList.add("white-bg");
});

// Hide the dropdown and revert navbar background when mouse leaves
servicesBtn.addEventListener("mouseleave", () => {
  dropdownMenu.classList.remove("show");
  navbar.classList.remove("white-bg");
});

// Close the menu when the screen size becomes larger than a specific breakpoint (e.g., 1024px)
window.addEventListener("resize", function () {
  if (window.innerWidth >= 1024) {
    if (!menu.classList.contains("hidden")) {
      menu.classList.add("hidden");
      navbar.classList.remove("bg-white");
    }
  }
});

// Close the menu when clicking outside of it
document.addEventListener("click", function (event) {
  const isClickInsideMenu = menu.contains(event.target);
  const isClickInsideButton = hamburgerButton.contains(event.target);

  if (!isClickInsideMenu && !isClickInsideButton) {
    // Close the menu smoothly
    if (!menu.classList.contains("hidden")) {
      menu.classList.remove("menu-animate");
      menu.classList.add("menu-close");
      navbar.classList.remove("bg-white");
      hamburgerButton.classList.remove("cross");

      // Delay hiding the menu until animation completes
      setTimeout(() => {
        menu.classList.add("hidden");
        navbar.classList.remove("bg-white");
      }, 30); // Wait for animation duration
    }
  }
});

// menu
const hamburgerButton = document.getElementById("hamburger");
const hamburgerIcon = document.getElementById("hamburger-icon");
const menu = document.getElementById("mobile-menu");
// Hamburger menu toggle with smooth transition for navbar background
hamburgerButton.addEventListener("click", function () {
  hamburgerButton.classList.toggle("cross");

  if (menu.classList.contains("hidden")) {
    // Open the menu smoothly
    navbar.classList.add("bg-white");
    menu.classList.remove("hidden", "menu-close");
    menu.classList.add("menu-animate");
  } else {
    // Close the menu smoothly
    menu.classList.remove("menu-animate");
    menu.classList.add("menu-close");
    navbar.classList.remove("bg-white");

    // Delay hiding the menu until animation completes
    setTimeout(() => {
      menu.classList.add("hidden");
      navbar.classList.remove("bg-white");
    }, 0); // Wait for animation duration
  }
});
