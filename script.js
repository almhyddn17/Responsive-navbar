document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.navbar-links');

    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
        toggleButton.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!navbarLinks.contains(event.target) && !toggleButton.contains(event.target)) {
            navbarLinks.classList.remove('active');
            toggleButton.classList.remove('active');
        }
    });
});
