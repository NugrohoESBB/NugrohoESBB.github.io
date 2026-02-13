// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
});

// Initialize Year's
document.getElementById("year").textContent = new Date().getFullYear();

// Initialize Particles after page load
window.addEventListener("load", function () {
    // Particles.js Configuration for About Section
    particlesJS("particles-about", {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            color: {
                value: "#c9a96e",
            },
            shape: {
                type: "circle",
            },
            opacity: {
                value: 1,
                random: false,
            },
            size: {
                value: 3,
                random: true,
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#c9a96e",
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    // mode: 'repulse'
                    mode: "grap",
                },
                onclick: {
                    enable: true,
                    mode: "push",
                },
                resize: true,
            },
        },
        retina_detect: true,
    });

    // Particles.js for Services Section
    particlesJS("particles-services", {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            color: {
                value: "#c9a96e",
            },
            shape: {
                type: "circle",
            },
            opacity: {
                value: 1,
                random: false,
            },
            size: {
                value: 3,
                random: true,
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#c9a96e",
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grap",
                },
                onclick: {
                    enable: true,
                    mode: "push",
                },
                resize: true,
            },
        },
        retina_detect: true,
    });

    // Particles.js for Testimonials
    particlesJS("particles-testimonials", {
        particles: {
            number: {
                value: 70,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            color: {
                value: "#c9a96e",
            },
            shape: {
                type: "circle",
            },
            opacity: {
                value: 1,
                random: false,
            },
            size: {
                value: 3,
                random: true,
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#c9a96e",
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "bubble",
                },
                onclick: {
                    enable: true,
                    mode: "push",
                },
                resize: true,
            },
            modes: {
                bubble: {
                    distance: 100,
                    size: 6,
                    duration: 2,
                    opacity: 0.8,
                },
            },
        },
        retina_detect: true,
    });
}); // End of window.addEventListener('load')

// Hero Swiper
const heroSwiper = new Swiper(".hero-swiper", {
    direction: "horizontal",
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    effect: "slide",
    speed: 1200,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Testimonial Swiper
const testimonialSwiper = new Swiper(".testimonial-swiper", {
    direction: "horizontal",
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
        },
    },
});

// Leaflet Map
const map = L.map("map").setView([-6.1667033435294485, 106.87250731702541], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const customIcon = L.divIcon({
    className: "custom-marker",
    // html: '<div style="background-color: #c9a96e; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 10px rgba(0,0,0,0.3);"></div>',
    html: '<div style="background-color: #ff0000; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 10px rgba(0,0,0,0.3);"></div>',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
});

// L.marker([-6.2088, 106.8456], { icon: customIcon })
L.marker([-6.1667033435294485, 106.87250731702541], { icon: customIcon })
    .addTo(map)
    .bindPopup("<b>Pudina Studio Office</b><br>Sumur Batu, Central Jakarta 10640, Indonesia")
    .openPopup();

// Navbar scroll effect
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
            // Close mobile menu if open
            const navbarCollapse = document.querySelector(".navbar-collapse");
            if (navbarCollapse.classList.contains("show")) {
                navbarCollapse.classList.remove("show");
            }
        }
    });
});

// Loading screen - hide after particles are ready
window.addEventListener("load", function () {
    setTimeout(function () {
        document.querySelector(".loading-screen").classList.add("hide");
    }, 1500);
});

// Hero button scroll to projects
document.querySelectorAll(".hero-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
        document.querySelector("#projects").scrollIntoView({
            behavior: "smooth",
        });
    });
});
