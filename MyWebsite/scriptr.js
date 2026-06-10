// =======================================
// Mbulawa Digital Systems - Main JS File
// File: script.js
// =======================================


// ==============================
// MOBILE NAVIGATION TOGGLE
// ==============================

const nav = document.querySelector("nav");

const menuButton = document.createElement("button");

menuButton.innerHTML = "☰";

menuButton.classList.add("menu-btn");

document.body.prepend(menuButton);

menuButton.addEventListener("click", () => {

    nav.classList.toggle("show-nav");

});


// ==============================
// SMOOTH SCROLL EFFECT
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// ==============================
// ACTIVE NAVIGATION LINK
// ==============================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    if(link.href === window.location.href){

        link.classList.add("active");

    }

});


// ==============================
// HEADER SCROLL EFFECT
// ==============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.classList.add("header-scroll");

    }
    else{

        header.classList.remove("header-scroll");

    }

});


// ==============================
// SCROLL REVEAL ANIMATION
// ==============================

const revealElements = document.querySelectorAll(
    ".about, .service"
);

function revealOnScroll(){

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ==============================
// CONTACT FORM VALIDATION
// ==============================

const contactForm =
    document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit", function(event){

        const email =
            document.getElementById("email").value;

        if(!email.includes("@")){

            event.preventDefault();

            alert("Please enter a valid email.");

        }

    });

}


// ==============================
// BUTTON RIPPLE EFFECT
// ==============================

const buttons = document.querySelectorAll(
    "button, .btn"
);

buttons.forEach(button => {

    button.addEventListener("click", function(e){

        const ripple =
            document.createElement("span");

        ripple.classList.add("ripple");

        const rect =
            button.getBoundingClientRect();

        ripple.style.left =
            `${e.clientX - rect.left}px`;

        ripple.style.top =
            `${e.clientY - rect.top}px`;

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


// ==============================
// CURRENT YEAR IN FOOTER
// ==============================

const footerText =
    document.querySelector("footer p");

if(footerText){

    const year = new Date().getFullYear();

    footerText.innerHTML =
        `&copy; ${year} Mbulawa Digital Systems. All rights reserved.`;

}