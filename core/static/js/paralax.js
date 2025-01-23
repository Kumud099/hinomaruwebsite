
// Clone blog cards
const blogContainer = document.getElementById('blog-container');
const template = document.getElementById('blog-card-template');

for (let i = 0; i < 4; i++) {
    const clone = template.content.cloneNode(true);
    blogContainer.appendChild(clone);
}

// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Create the parallax effect
const blogSection = document.querySelector('.blog-section');
const newsSection = document.querySelector('.news-section');

gsap.to(blogSection, {
    scrollTrigger: {
        trigger: newsSection,
        start: "top bottom", // when the top of the news section hits the bottom of the viewport
        end: "top top", // when the top of the news section hits the top of the viewport
        scrub: true, // smooth scrubbing effect
        markers: false, // set to true for debugging
        pin: true, // pin the blog section
        pinSpacing: false,
    },
    opacity: 0.3, // fade out the blog section slightly
    scale: 0.95, // slight scale effect
    y: '-20%', // move up slightly
    ease: "none"
});

// Optional: Add a reveal animation for the news section
gsap.from(newsSection, {
    scrollTrigger: {
        trigger: newsSection,
        start: "top center",
        end: "top top",
        scrub: true,
    },
    y: 100,
    opacity: 0.8,
    ease: "none"
});

// Handle horizontal scroll in blog container
const scrollButtons = document.querySelectorAll('button');
const scrollDistance = 525 + 12; // card width + gap

scrollButtons[0].addEventListener('click', () => {
    blogContainer.scrollBy({
        left: -scrollDistance,
        behavior: 'smooth'
    });
});

scrollButtons[1].addEventListener('click', () => {
    blogContainer.scrollBy({
        left: scrollDistance,
        behavior: 'smooth'
    });
});