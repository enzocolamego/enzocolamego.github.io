document.addEventListener('DOMContentLoaded', async function () {
    const translateButton = document.querySelector('.translate-button');
    const html = document.querySelector('html');
    const json_path = "translations.json";
    let currentLang = html.lang;

    try {
        const response = await fetch(json_path);
        const traducoes = await response.json();
        
        applyTranslations(traducoes[currentLang]);

        updateButtonState();

        translateButton.addEventListener('click', function () {
            currentLang = (currentLang === 'pt-br') ? 'en' : 'pt-br';
            applyTranslations(traducoes[currentLang]);
            html.lang = currentLang;
            updateButtonState();
        });
    } catch (error) {
        console.error("Erro ao carregar traduções:", error);
    }

    function applyTranslations(translations) {
        if (translations.title) document.title = translations.title;
        if (translations.name) document.querySelector('.name h1').textContent = translations.name;
        if (translations.occupation) document.querySelector('.occupation h2').innerHTML = translations.occupation;
        if (translations.about) document.querySelector('.menu-about').textContent = translations.about;
        if (translations.skills) document.querySelector('.menu-skills').textContent = translations.skills;
        if (translations.projects) document.querySelector('.menu-projects').textContent = translations.projects;
        if (translations.contact) document.querySelector('.menu-contact').textContent = translations.contact;
        if (translations.about_section) document.querySelector('#about').textContent = translations.about_section;
        if (translations.description) document.querySelector('#description').textContent = translations.description;
        if (translations.projects_section) document.querySelector('#projects').textContent = translations.projects_section;
        if (translations.skills_section) document.querySelector('#skills').textContent = translations.skills_section;
    }

    function updateButtonState() {
        document.querySelector('.EUA').style.display = (currentLang === 'pt-br') ? 'none' : 'block';
        document.querySelector('.Bra').style.display = (currentLang === 'pt-br') ? 'block' : 'none';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const html = document.querySelector('html');
    const currentLang = html.lang;

    if (currentLang === 'pt-br') {
        document.querySelector('.EUA').style.display = 'block';
        document.querySelector('.Bra').style.display = 'none';
    } else {
        document.querySelector('.EUA').style.display = 'none';
        document.querySelector('.Bra').style.display = 'block';
    }
});
