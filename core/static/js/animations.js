gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const lenis = new Lenis();

gsap.from("#header span", {
  opacity: 0,
  duration: 1,
  delay: 1,
  y: 20,
  stagger: 0.5,
});

gsap.to(".absolute.inset-0", {
  yPercent: 30,
  ease: "none",
  scrollTrigger: {
    trigger: "section",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

var videoContainer = document.getElementById("videoContainer");
var navbarItems = document.querySelector("nav");
var aboutUsContainer = document.querySelector("#aboutUsContainer");

// our services section animation
if (window.matchMedia("(min-width: 1024px)").matches) {
  // Runs only on large screens
  gsap.registerPlugin(ScrollTrigger);

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#services",
      start: "top top",
      end: "+=1000",
      scrub: true,
      pin: true,
    },
  });

  gsap.utils.toArray(".card").forEach((card, index) => {
    timeline.from(card, {
      x: 200,
      opacity: 0,
      duration: 1,
      delay: index * 0.5,
    });
  });
}

//

//

gsap.to("#videoContainer1", {
  width: "40%",
  height: "50%",
  scrollTrigger: {
    trigger: "#videoContainer",
    scrub: true,
    start: "top top",
    end: "bottom top",
  },
});

gsap.from(".about-us", {
  opacity: 0,
  y: 20,
  scrollTrigger: {
    trigger: "#hero",
    start: "bottom 60%",
    stagger: true,
  },
});

let scrollingText = document.getElementById("scrollingText");
let textWidth = scrollingText.offsetWidth;

gsap.to(scrollingText, {
  x: -textWidth, // Moves text to the left by its full width
  duration: 10, // Adjust the speed of the scrolling (larger = slower)
  ease: "linear", // Ensures constant speed
  repeat: -1, // Infinite loop
  onRepeat: () => {
    // On each repeat, reset position for seamless scroll
    scrollingText.style.transition = "none";
    scrollingText.style.transform = "translateX(0)";
    // Re-enable GSAP animation after reset
    gsap.to(scrollingText, {
      x: -textWidth, // Move again
      duration: 10,
      ease: "linear",
      repeat: -1,
    });
  },
});

// ScrollTrigger.create({
//     trigger: '#services',
//     start: "top 50%",
//     end: "bottom 0%",
//     markers: true,

//     onEnter: () => {
//         // Step 1: Expand the red background
//         gsap.to('#reveal-box', {
//             duration: 0.5,
//             width: '100%',
//             ease: "power2.out",
//             onComplete: () => {
//                 // Step 2: Fade in the text
//                 gsap.to('#service-text', {
//                     duration: 0.2,
//                     opacity: 1,
//                     ease: "power2.out",
//                     onComplete: () => {
//                         // Step 3: Fade out the background smoothly
//                         gsap.to('#reveal-box', {
//                             duration: 0.1,
//                             opacity: 0,
//                             ease: "power2.out"
//                         });
//                     }
//                 });
//             }
//         });
//     },

//     onLeaveBack: () => {
//         // Step 4: Reverse effect on scroll back up
//         gsap.to('#reveal-box', {
//             duration: 0.8,
//             opacity: 1, // Bring background back before shrinking
//             ease: "power2.out",
//             onComplete: () => {
//                 gsap.to('#service-text', {
//                     duration: 0.5,
//                     opacity: 0,
//                     ease: "power2.out",
//                     onComplete: () => {
//                         gsap.to('#reveal-box', {
//                             duration: 1.2,
//                             width: '0%',
//                             ease: "power2.out"
//                         });
//                     }
//                 });
//             }
//         });
//     },
// });

// lenis
lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
ScrollTrigger.refresh();

// FORM HOME_PAGE

// About us and after about us click me section
// Ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  var textElement = document.getElementById("header");
  // Set timeout to show text after 3 seconds
  setTimeout(function () {
    // Remove opacity-0 to show text after 3 seconds
    // textElement.classList.remove("opacity-0");
    textElement.classList.add("opacity-100");
  }, 100);
});

document.addEventListener("DOMContentLoaded", function () {
  const blogContainer = document.getElementById("blog-container");
  const scrollLeftButton = document.getElementById("scroll-left");
  const scrollRightButton = document.getElementById("scroll-right");

  // Scroll left
  scrollLeftButton.addEventListener("click", () => {
    blogContainer.scrollBy({
      left: 525,
      behavior: "smooth",
    });
  });

  // Scroll right
  scrollRightButton.addEventListener("click", () => {
    blogContainer.scrollBy({
      left: 525,
      behavior: "smooth",
    });
  });
});

const sections = document.querySelectorAll("section"); // All sections on the page

window.addEventListener("scroll", () => {
  let inHeroSection = false; // This will track if the user is currently in the Hero section

  sections.forEach((section) => {
    const sectionTop = section.offsetTop; // Distance from top of the section to the top of the page
    const sectionHeight = section.clientHeight; // Height of the section

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      if (section.id === "hero") {
        inHeroSection = true; // User is currently within the Hero section
      }
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const aboutUsSection = document.getElementById("aboutUsContainer");
  const animatedCircle = document.querySelector(".animate-circle");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Remove the class and re-add it to restart the animation
          animatedCircle.classList.remove("animate-circle");
          void animatedCircle.offsetWidth; // Force reflow
          animatedCircle.classList.add("animate-circle");
        }
      });
    },
    { threshold: 0.5 } // Adjust threshold if needed
  );

  observer.observe(aboutUsSection);
});
// Create custom cursor
const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

const servicesSection = document.querySelector("#services");

// Show cursor only inside #services
servicesSection.addEventListener("mouseenter", () => {
  cursor.style.display = "block";
});

servicesSection.addEventListener("mouseleave", () => {
  cursor.style.display = "none";
});

// Update cursor position only inside #services
servicesSection.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});
document.querySelectorAll("#services .card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    cursor.textContent = "Click";
    cursor.style.width = "50px";
    cursor.style.height = "50px";
    cursor.style.backgroundColor = "#d32f2f";
    cursor.style.fontSize = "15px";
    cursor.style.display = "flex";
    cursor.style.alignItems = "center";
    cursor.style.justifyContent = "center";
    cursor.style.color = "white";
    cursor.style.fontWeight = "600";
    cursor.style.borderRadius = "50%";
    cursor.style.boxShadow = "0px 0px 5px rgba(0,0,0,0.3)";
  });

  card.addEventListener("mouseleave", () => {
    cursor.textContent = "";
    cursor.style.width = "15px";
    cursor.style.height = "15px";
    cursor.style.backgroundColor = "#d32f2f";
    cursor.style.boxShadow = "none";
  });
});

// for viewing more content in ABOUTUS
document.getElementById("viewMoreBtn").addEventListener("click", function () {
  var extraContent = document.getElementById("extra-content");
  var textSpan = document.getElementById("viewMoreText");

  //Toggle visibility
  if (extraContent.classList.contains("hidden")) {
    extraContent.classList.remove("hidden");
    textSpan.textContent = "View Less";
    this.classList.add("mb-52");
  } else {
    extraContent.classList.add("hidden");
    textSpan.textContent = "View More";
    this.classList.remove("mb-52");
    // this.classList.add("-mt-20");
  }
});
