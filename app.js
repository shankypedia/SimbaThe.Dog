document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const darkModeToggle = document.getElementById('darkModeToggle');

    // Check if the user prefers dark mode
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set the initial dark mode state based on user preference
    body.classList.toggle('dark-mode', prefersDarkMode);
    darkModeToggle.checked = prefersDarkMode;

    // Toggle dark mode on user interaction
    darkModeToggle.addEventListener('change', function () {
        body.classList.toggle('dark-mode', darkModeToggle.checked);
    });
});
