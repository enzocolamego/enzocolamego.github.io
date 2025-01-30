document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        const offset = 320; // Ajuste esse valor para compensar menus fixos
        smoothScroll(target, offset, 1500); // Tempo da animação em ms (1.5s)
    });
});

function smoothScroll(target, offset, duration) {
    const start = window.scrollY;
    const end = target.offsetTop - offset;
    const distance = end - start;
    let startTime = null;

    function animationStep(timestamp) {
        if (!startTime) startTime = timestamp;
        const timeElapsed = timestamp - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = progress < 0.5 
            ? 2 * progress * progress 
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        window.scrollTo(0, start + distance * ease);

        if (timeElapsed < duration) {
            requestAnimationFrame(animationStep);
        }
    }

    requestAnimationFrame(animationStep);
}
