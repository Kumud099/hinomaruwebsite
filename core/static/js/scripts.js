// changing the color of navbar text
const section = document.getElementById("aboutUsContainer");
const navItems = document.getElementById("navbar");
const contactButton = document.getElementById("contact-us-button");

const changeNavTextObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navItems.classList.add("text-black");
                navItems.classList.remove("text-white");
                contactButton.classList.add("bg-yellow-950")
                contactButton.classList.remove("bg-[#B00008]")
                contactButton.classList.add('text-white')
            } else {
                navItems.classList.remove("text-black");
                navItems.classList.add("text-white");
                contactButton.classList.remove("bg-yellow-950")
                contactButton.classList.add("bg-[#B00008]")
                contactButton.classList.remove('text-white')


            }
        });
    },
    {
        root: null,
        threshold: 0.1,
    }
);

const changeButtonColorObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                contactButton.classList.add("bg-hyello-950")
                contactButton.classList.remove("bg-hred-950")
            } else {
                contactButton.classList.remove("bg-hyellow-950");
                contactButton.classList.add("bg-hred-950");

            }
        })
    }
)



// Observe the section
changeNavTextObserver.observe(section);
changeButtonColorObserver.observe(section)



// dropdown
const dropdown = document.getElementById('dropdown');

function showDropdown() {
    gsap.to(dropdown, {
        duration: 0.4,
        opacity: 1,
        y: 10,
        pointerEvents: 'auto',
        display: 'flex',
    });
}

function hideDropdown() {
    gsap.to(dropdown, {
        duration: 0.4,
        opacity: 0,
        y: 0,
        pointerEvents: 'none',
        onComplete: () => {
            dropdown.style.display = 'none';
        }
    });
}


