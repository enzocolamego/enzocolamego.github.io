let darkmode = localStorage.getItem('darkmode');
const button = document.querySelector('.light-dark-mode-button');

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    document.body.classList.remove('lightmode');
    localStorage.setItem('darkmode', 'active');
};

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    document.body.classList.add('lightmode');
    localStorage.setItem('darkmode', null);
};

if (darkmode === "active") {
    enableDarkmode();
} else {
    disableDarkmode();
}

button.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});
