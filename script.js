function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

function observerCallback(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);
const itemsToObserve = document.querySelectorAll('.timeline-item, .projects-item, .skills-box, .contact-container, .about-container');
itemsToObserve.forEach((item) => observer.observe(item));

var typed = new Typed(".auto-type", {
    strings: ["Software Developer", "Robotics Engineer", "AI/ML Engineer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
    cursorChar: "|",
    cursorBlinking: true,
});

document.addEventListener("DOMContentLoaded", function() {
    const cursor = document.querySelector(".cursor");

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    const speed = 0.1;
    document.addEventListener("mousemove", function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    function animateCursor() {
        cursorX += (mouseX - cursorX) * speed;
        cursorY += (mouseY - cursorY) * speed;
        cursor.style.left = `${cursorX - cursor.offsetWidth / 2}px`;
        cursor.style.top = `${cursorY - cursor.offsetHeight / 2}px`;
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
});

document.getElementById('copy-email-icon').addEventListener('click', function() {
    const email = "htonthat@uwaterloo.ca";
    navigator.clipboard.writeText(email)
        .then(function() {
            alert('Email copied to clipboard!');
        })
        .catch(function(error) {
            console.error('Error copying email: ', error);
        });
});