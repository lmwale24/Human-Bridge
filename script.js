document.addEventListener('DOMContentLoaded', function() {
    const langOptions = document.querySelectorAll('.dropdown-item');

    langOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const selectedLanguage = this.classList[1]; // Get the language class
            document.querySelector('.dropdown-toggle').textContent = this.textContent; // Update selected language text

            // Perform language-specific actions here (if needed)
            // You can fetch translations, update content, etc.
        });
    });
});
