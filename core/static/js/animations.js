
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin)

const lenis = new Lenis();


gsap.from("#header span", {
    opacity: 0,
    duration: 1,
    delay: 1,
    y: 20,
    stagger: 0.5,
})


gsap.to(".absolute.inset-0", {
    yPercent: 30,
    ease: "none",
    scrollTrigger: {
        trigger: "section",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});


var videoContainer = document.getElementById("videoContainer")
var navbarItems = document.querySelector("nav")
var aboutUsContainer = document.querySelector("#aboutUsContainer")

// our services section animation
if (window.matchMedia("(min-width: 1024px)").matches) { // Only on large screens
    gsap.registerPlugin(ScrollTrigger);

    // Continuous scrolling animation
    gsap.to("#scrollContainer", {
      x: "-100%", // Move left continuously
      duration: 10, // Adjust speed
      repeat: -1, // Infinite loop
      ease: "linear"
    });
  }

    gsap.utils.toArray(".card").forEach((card, index) => {
        timeline.from(card, {
            x: 200,
            opacity: 0,
            duration: 1,
            delay: index * 0.5,
        });
    });




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
    }
});





gsap.from(".about-us", {
    opacity: 0,
    y: 20,
    scrollTrigger: {
        trigger: "#hero",
        start: "bottom 60%",
        stagger: true,
    }
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
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
ScrollTrigger.refresh();
