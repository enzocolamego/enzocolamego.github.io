document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const offset = getCustomOffset(targetId);
            scrollToTarget(targetElement, offset, 1500);
        }
    });
});

function getCustomOffset(targetId) {
    switch (targetId) {
        case "#about": return 270;  // Ajuste ideal para "About me"
        case "#skills": return 420; // Ajuste ideal para "Skills"
        case "#projects": return 200; // Ajuste ideal para "Projects"
        default: return 50; // Fallback padrão
    }
}

function scrollToTarget(target, offset, duration) {
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animationStep(currentTime) {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easeInOut = progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        window.scrollTo(0, startPosition + distance * easeInOut);

        if (elapsed < duration) {
            requestAnimationFrame(animationStep);
        }
    }

    requestAnimationFrame(animationStep);
}
