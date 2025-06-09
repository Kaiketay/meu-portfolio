// Alterna entre tema claro e escuro
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark-mode');
}

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleDarkMode);
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            try {
                const response = await fetch('/submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    alert('Mensagem enviada com sucesso!');
                    contactForm.reset();
                } else {
                    alert('Ocorreu um erro ao enviar.');
                }
            } catch (err) {
                alert('Ocorreu um erro ao enviar.');
            }
        });
    }
});
