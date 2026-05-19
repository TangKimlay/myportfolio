// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let header = document.querySelector("header");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

// 1. Toggle Navbar Icon
menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
});

// 2. Handle Clicking on Nav Links 
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        // Remove active class from all links
        navLinks.forEach((links) => {
            links.classList.remove("active");
        });
        
        // Add active class to clicked link
        link.classList.add("active");
        
        // Close mobile menu when link is clicked
        menuIcon.classList.remove("fa-xmark");
        navbar.classList.remove("active");
    });
});

// 3. Scroll Section Active & Sticky Navbar
window.addEventListener("scroll", () => {
    let top = window.scrollY;

    // Activate link based on scroll position
    sections.forEach((sec) => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            });
        }
    });

    // Sticky Navbar
    header.classList.toggle("sticky", window.scrollY > 100);

    // Remove toggle icon and navbar on scroll
    menuIcon.classList.remove("fa-xmark");
    navbar.classList.remove("active");
});

// scroll reveal
ScrollReveal({
    distance: "80px",
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal(".home-content, .heading", {origin: "top"});
ScrollReveal().reveal(".home-img, .services-container, .project-box, .contact", {origin: "buttom"});
ScrollReveal().reveal(".home-content h1, .aboutme-img, .education-img", {origin: "left"});
ScrollReveal().reveal(".home-content p, .aboutme-content, .education-content", {origin: "right"});

// typed js
const typed = new Typed(".multiple-text", {
    strings: ["IT", "Web Development"],
    typedSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

// contact us
function sendMail(){
    let parms = {
        subject : document.getElementById("subject").value,
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
        address : document.getElementById("address").value,
        phone : document.getElementById("phone").value,
    }
    
    emailjs.send("service_g8i6dlq", "template_umuim7n", parms).then(alert("Email Sent!!"))
}