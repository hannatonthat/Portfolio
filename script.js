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

const itemsToObserve = document.querySelectorAll('.timeline-item, .projects-item, .skills-box, .contact-container');

itemsToObserve.forEach((item) => observer.observe(item));

var typed = new Typed(".auto-type", {
    strings: ["Software Developer", "AR/VR Developer", "AI Engineer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
    cursorChar: "|",
    cursorBlinking: true,
});

const cursor = document.getElementById('custom-cursor');

document.addEventListener('mousemove', (e) => {
    const cursorSize = cursor.offsetWidth / 2;
    cursor.style.left = `${e.clientX - cursorSize}px`;
    cursor.style.top = `${e.clientY - cursorSize}px`;
});
