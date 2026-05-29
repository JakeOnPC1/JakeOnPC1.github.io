const themeToggle = document.getElementById('themeToggle');
const current = localStorage.getItem('theme');

if (current === 'light') {
    document.body.setAttribute('data-theme', 'light');
    themeToggle.textContent = '☀️ Light';
} else {
    themeToggle.textContent = '🌙 Dark';
}

themeToggle.addEventListener('click', () => {
    if (document.body.getAttribute('data-theme') === 'light') {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '🌙 Dark';
    } else {
        document.body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '☀️ Light';
    }
});

// If you still want full calculators, you can keep the original functions,
// but the mini-buttons use simple alerts for now. 
// To keep the old interactive calculators, add them back in a modal or under the profile.
