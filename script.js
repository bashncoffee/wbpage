let currentLang = 'en';
let currentTheme = 'light';

function updateContent() {
    // Aktualizacja zwykłych tekstów
    document.querySelectorAll('[data-en]').forEach(el => {
        el.innerText = el.getAttribute(`data-${currentLang}`);
    });

    // Aktualizacja list (ul)
    document.querySelectorAll('[data-en-list]').forEach(el => {
        const content = el.getAttribute(`data-${currentLang}-list`);
        if (content) {
            const items = content.split(';');
            el.innerHTML = items.map(item => `<li>${item}</li>`).join('');
        }
    });

    // Aktualizacja etykiet przycisków
    document.getElementById('lang-label').innerText = currentLang === 'en' ? 'Switch to PL' : 'Zmień na EN';
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'pl' : 'en';
    document.body.className = `lang-${currentLang}`;
    updateContent();
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    document.getElementById('theme-label').innerText = currentTheme === 'light' ? 'Dark Mode' : 'Light Mode';
}

function generatePDF() {
    window.print();
}

window.onload = updateContent;
