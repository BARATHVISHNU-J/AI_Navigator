// dark_mode.js
// Toggles dark mode and saves preference in localStorage

document.addEventListener('DOMContentLoaded', function() {
    // Get the theme toggle icon element
    const themeIcon = document.getElementById('theme-toggle-icon');
    // Check if user prefers dark mode by system setting
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // Get dark mode preference from localStorage
    let darkMode = localStorage.getItem('darkMode');
    if (darkMode === null) {
        darkMode = prefersDark ? 'enabled' : 'disabled';
        localStorage.setItem('darkMode', darkMode);
    }
    // Always sync icon and class
    function applyDarkModeState() {
        // Disable dark mode on database page
        if (document.body.classList.contains('show-db-page')) {
            if (document.body.classList.contains('dark-mode')) {
                document.body.classList.remove('dark-mode');
            }
            if (themeIcon) {
                themeIcon.classList.remove('bi-sun');
                themeIcon.classList.add('bi-moon');
            }
            return;
        }
        // Enable or disable dark mode based on preference
        if (darkMode === 'enabled') {
            if (!document.body.classList.contains('dark-mode')) {
                document.body.classList.add('dark-mode');
            }
            if (themeIcon) {
                themeIcon.classList.remove('bi-moon');
                themeIcon.classList.add('bi-sun');
            }
        } else {
            if (document.body.classList.contains('dark-mode')) {
                document.body.classList.remove('dark-mode');
            }
            if (themeIcon) {
                themeIcon.classList.remove('bi-sun');
                themeIcon.classList.add('bi-moon');
            }
        }
    }
    applyDarkModeState();
    if (themeIcon) {
        themeIcon.addEventListener('click', function() {
            darkMode = (darkMode === 'enabled') ? 'disabled' : 'enabled';
            localStorage.setItem('darkMode', darkMode);
            applyDarkModeState();
        });
    }
    // Ensure grid renders on page load if available
    if (typeof renderGrid === 'function') {
        renderGrid();
    }
});
