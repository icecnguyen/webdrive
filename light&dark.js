document.addEventListener('DOMContentLoaded', () => {
    const themeChange = document.getElementById('theme-change');

    themeChange.addEventListener('change', (event) => {
        const selectedTheme = event.target.value;
        if (selectedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDarkScheme) {
        document.body.classList.add('dark-mode');
        themeChange.value = 'dark';
    } else {
        document.body.classList.remove('dark-mode');
        themeChange.value = 'light';
    }
});
