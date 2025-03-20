const hamburgerButton = document.getElementById("hamburger");
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const menu = document.getElementById("mobile-menu");
  const navbar = document.querySelector("nav");
  const servicesBtn = document.getElementById("services-btn");
  const dropdownMenu = document.querySelector(
    "#services-btn .group-hover\\:flex"
  ); // Select dropdown menu

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
      }, 500); // Wait for animation duration
    }
  });

  // Smooth hover effects for desktop navigation
  servicesBtn.addEventListener("mouseover", function () {
    document.getElementById("navbar").classList.add("bg-white", "shadow-lg");
  });
  servicesBtn.addEventListener("mouseout", function () {
    document.getElementById("navbar").classList.remove("bg-white", "shadow-lg");
  });