const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 80);
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const navEl = document.querySelector('nav');
window.addEventListener('scroll', () => {
    navEl.style.background = window.scrollY > 60
        ? 'rgba(13,27,42,0.95)'
        : 'rgba(13,27,42,0.72)';
});