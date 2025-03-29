const hamburgerButton = document.getElementById("hamburger");
const hamburgerIcon = document.getElementById("hamburger-icon");
const menu = document.getElementById("mobile-menu");
const navbar = document.querySelector("nav");
const servicesBtn = document.getElementById("services-btn");
// const dropdownMenu = document.querySelector(
//   "#services-btn .group-hover\\:flex"
// );
// Select dropdown menu
const dropdownMenu = document.getElementById("dropdown-menu"); //select dropdown meny

// Hamburger menu toggle with smooth transition for navbar background
hamburgerButton.addEventListener("click", function () {
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
    }, 30); // Wait for animation duration
  }
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

// Smooth hover effects for desktop navigation
servicesBtn.addEventListener("mouseover", function () {
  document.getElementById("navbar").classList.add("bg-white", "shadow-lg");
});
servicesBtn.addEventListener("mouseout", function () {
  document.getElementById("navbar").classList.remove("bg-white", "shadow-lg");
});
