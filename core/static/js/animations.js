
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
            repeat: -1
        });
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
