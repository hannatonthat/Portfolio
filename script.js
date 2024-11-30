function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    };

    const handleScroll = () => {
        timelineItems.forEach((item, index) => {
            if (isInViewport(item)) {
                item.style.transitionDelay = `${index * 0.3}s`;
                item.classList.add('visible');
            }
        });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
});
