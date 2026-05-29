// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    if (document.body.getAttribute('data-theme') === 'dark') {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙';
    } else {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️';
    }
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// E = mc² calculator
function calcEnergy() {
    let mass = parseFloat(document.getElementById('mass').value);
    if (isNaN(mass)) {
        document.getElementById('energyResult').innerHTML = '⚠️ Enter a valid mass';
        return;
    }
    const c = 299792458;
    const energy = mass * c * c;
    document.getElementById('energyResult').innerHTML = `⚡ ${energy.toExponential(4)} Joules`;
}

// Ideal Gas Law calculator (find Temperature)
function calcTemp() {
    let P = parseFloat(document.getElementById('pressure').value);
    let V = parseFloat(document.getElementById('volume').value);
    let n = parseFloat(document.getElementById('moles').value);
    const R = 0.0821;
    
    if (isNaN(P) || isNaN(V) || isNaN(n) || n === 0) {
        document.getElementById('tempResult').innerHTML = '⚠️ Fill all fields correctly (n ≠ 0)';
        return;
    }
    let T = (P * V) / (n * R);
    document.getElementById('tempResult').innerHTML = `🌡️ ${T.toFixed(2)} K (${(T - 273.15).toFixed(2)}°C)`;
}

// Ohm's Law calculator
function calcResistance() {
    let V = parseFloat(document.getElementById('voltage').value);
    let I = parseFloat(document.getElementById('current').value);
    
    if (isNaN(V) || isNaN(I) || I === 0) {
        document.getElementById('resistanceResult').innerHTML = '⚠️ Enter valid values (Current ≠ 0)';
        return;
    }
    let R = V / I;
    document.getElementById('resistanceResult').innerHTML = `⚡ ${R.toFixed(2)} Ω`;
}
