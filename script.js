// ==========================================
// SHOWROOM DETAILING MTL
// Luxury Website Script
// ==========================================

// Smooth scrolling for navigation

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        }

    });

});
// ==========================================
// SHOWROOM DETAILING MTL
// Luxury Website Script
// ==========================================

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        }

    });

});

// ==========================================
// Sticky Navbar Effect
// ==========================================

const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});
// ==========================================
// Scroll Reveal Animation
// ==========================================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach((element) => {

        const rect = element.getBoundingClientRect();

        const triggerPoint = window.innerHeight - 150;

        if (rect.top <= triggerPoint && rect.bottom >= 150) {

            element.classList.add("active");

        } else {

            element.classList.remove("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
// ==========================================
// Language Buttons
// ==========================================

const frBtn = document.getElementById("fr-btn");
const enBtn = document.getElementById("en-btn");

frBtn.addEventListener("click", () => {

    frBtn.classList.add("active");
    enBtn.classList.remove("active");

    changeLanguage("fr");

    localStorage.setItem("language", "fr");

});

enBtn.addEventListener("click", () => {

    enBtn.classList.add("active");
    frBtn.classList.remove("active");

    changeLanguage("en");
    localStorage.setItem("language", "en");

});
// ==========================================
// Change Website Language
// ==========================================

function changeLanguage(language){

    // Translate text
    document.querySelectorAll(".translate").forEach(element => {

        // Remove animation class
        element.classList.remove("language-switch");

        // Force browser to restart the animation
        void element.offsetWidth;

        // Change the language
        element.textContent = element.dataset[language];

        // Play the animation
        element.classList.add("language-switch");

    });

    // Translate placeholders
    document.querySelectorAll("[data-placeholder-fr]").forEach(input => {
        input.placeholder = input.dataset[`placeholder${language.charAt(0).toUpperCase() + language.slice(1)}`];
    });

    // Translate select options
    document.querySelectorAll("option[data-fr]").forEach(option => {
        option.textContent = option.dataset[language];
    });

}
// ==========================================
// Remember Selected Language
// ==========================================

const savedLanguage = localStorage.getItem("language");

if(savedLanguage){

    changeLanguage(savedLanguage);

    if(savedLanguage === "fr"){

        frBtn.classList.add("active");
        enBtn.classList.remove("active");

    }else{

        enBtn.classList.add("active");
        frBtn.classList.remove("active");

    }

}