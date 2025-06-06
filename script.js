// Alterna entre tema claro e escuro
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark-mode');
}

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleDarkMode);
    }
})