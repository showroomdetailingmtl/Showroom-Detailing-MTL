// ==========================================
// SHOWROOM DETAILING MTL
// Luxury Website Script
// ==========================================


// ==========================================
// Smooth Scrolling
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ==========================================
// Sticky Navbar Effect
// ==========================================

const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

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

function changeLanguage(language) {

    document.querySelectorAll(".translate").forEach(element => {

        element.classList.remove("language-switch");

        void element.offsetWidth;

        element.textContent = element.dataset[language];

        element.classList.add("language-switch");

    });


    // Translate placeholders

    document.querySelectorAll("[data-placeholder-fr]").forEach(input => {

        input.placeholder =
            input.dataset[
                `placeholder${language.charAt(0).toUpperCase() + language.slice(1)}`
            ];

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

if (savedLanguage) {

    changeLanguage(savedLanguage);

    if (savedLanguage === "fr") {

        frBtn.classList.add("active");
        enBtn.classList.remove("active");

    } else {

        enBtn.classList.add("active");
        frBtn.classList.remove("active");

    }

}


// ==========================================
// QUOTE FORM - AJAX SUBMISSION
// ==========================================

const quoteForm = document.querySelector(".quote-form");
const thankYouPopup = document.getElementById("thank-you-popup");

if (quoteForm && thankYouPopup) {

    quoteForm.addEventListener("submit", async function(e) {

        // STOP the normal FormSubmit page redirect
        e.preventDefault();
        e.stopPropagation();

        const formData = new FormData(quoteForm);

        const formAction = quoteForm.getAttribute("action");

        const ajaxAction = formAction.replace(
            "https://formsubmit.co/",
            "https://formsubmit.co/ajax/"
        );

        try {

            const response = await fetch(ajaxAction, {

                method: "POST",

                headers: {
                    "Accept": "application/json"
                },

                body: formData

            });

            const data = await response.json();

            console.log("FormSubmit response:", data);


            // ==========================================
            // SUCCESS
            // ==========================================

            if (response.ok && (data.success === true || data.success === "true")) {

                quoteForm.reset();

                thankYouPopup.classList.add("show");


                // Fade away after 4 seconds

                setTimeout(() => {

                    thankYouPopup.classList.remove("show");

                }, 4000);


            } else {

                console.error("FormSubmit error:", data);

                alert("Something went wrong. Please try again.");

            }


        } catch (error) {

            console.error("Submission error:", error);

            alert("Something went wrong. Please try again.");

        }

    });

}