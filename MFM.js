// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        burger.classList.toggle('toggle');
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Image Gallery Modal
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    const body = document.body;

    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.classList.add('modal');
            const modalImg = document.createElement('img');
            modalImg.src = img.src;
            modal.appendChild(modalImg);
            body.appendChild(modal);

            modal.addEventListener('click', () => {
                modal.remove();
            });
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });

    // Newsletter Subscription
    const newsletterForm = document.getElementById('newsletter-form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the email to a server for subscription
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    });

    // Animated Scroll Reveal
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);

    // Countdown Timer for Next Event
    const countDownDate = new Date("Aug 15, 2023 00:00:00").getTime();
    const countdownElement = document.getElementById("countdown");

    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

       if (distance < 0) {
        clearInterval(x);
        countdownElement.innerHTML = "Event has started!";
    }
}, 1000);

const testimonials = [
    { name: "John Doe", text: "MFM Agbede Youth has been a life-changing experience for me." },
    { name: "Jane Smith", text: "I've grown so much in my faith since joining this community." },
    { name: "Mike Johnson", text: "The support and love here are unmatched. Truly blessed!" }
];

let currentTestimonial = 0;
const testimonialElement = document.getElementById("testimonial");
const testimonialNameElement = document.getElementById("testimonial-name");

function changeTestimonial() {
    testimonialElement.style.opacity = 0;
    testimonialNameElement.style.opacity = 0;

    setTimeout(() => {
        testimonialElement.textContent = testimonials[currentTestimonial].text;
        testimonialNameElement.textContent = testimonials[currentTestimonial].name;
        testimonialElement.style.opacity = 1;
        testimonialNameElement.style.opacity = 1;
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    }, 500);
}

setInterval(changeTestimonial, 5000);

const eventCards = document.querySelectorAll('.event-card');
eventCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
    });
});

const scrollToTopButton = document.getElementById("scrollToTop");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        themeToggle.textContent = "Light Mode";
    } else {
        themeToggle.textContent = "Dark Mode";
    }
});

const verses = [
    "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future. - Jeremiah 29:11",
    "Trust in the Lord with all your heart and lean not on your own understanding. - Proverbs 3:5",
    "I can do all things through Christ who strengthens me. - Philippians 4:13"
];

const verseElement = document.getElementById("verse");
let currentVerse = 0;

function changeVerse() {
    verseElement.style.opacity = 0;
    setTimeout(() => {
        verseElement.textContent = verses[currentVerse];
        verseElement.style.opacity = 1;
        currentVerse = (currentVerse + 1) % verses.length;
    }, 500);
}

setInterval(changeVerse, 10000);
});
