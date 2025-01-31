document.addEventListener('DOMContentLoaded', function () {
  const translateButton = document.querySelector('.translate-button');
  const html = document.querySelector('html');
  const json_path = "translations.json";
  let currentLang = html.lang;
  
  translateButton.addEventListener('click', async function () {
      try {
          const response = await fetch(json_path);
          const traducoes = await response.json();
          
          if (currentLang === 'pt-br') {
              currentLang = 'en';
              applyTranslations(traducoes['en']);
              html.lang = 'en';
          } else {
              currentLang = 'pt-br';
              applyTranslations(traducoes['pt-br']);
              html.lang = 'pt-br';
          }

      } catch (error) {
          console.error("Erro ao carregar traduções:", error);
      }
  });

  function applyTranslations(translations) {
      if (translations.title) document.title = translations.title;
      if (translations.name) document.querySelector('.name h1').textContent = translations.name;
      if (translations.occupation) document.querySelector('.occupation h2').innerHTML = translations.occupation;
      if (translations.about) document.querySelector('.menu-about').textContent = translations.about;
      if (translations.projects) document.querySelector('.menu-projects').textContent = translations.projects;
      if (translations.contact) document.querySelector('.menu-contact').textContent = translations.contact;
      if (translations.about_section) document.querySelector('#about').textContent = translations.about_section;
      if (translations.description) document.querySelector('#description').textContent = translations.description;
      
      document.querySelector('.EUA').style.display = currentLang === 'pt-br' ? 'none' : 'block';
      document.querySelector('.Bra').style.display = currentLang === 'pt-br' ? 'block' : 'none';
  }
});


