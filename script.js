// Dark/Light mode toggle
const toggle = document.getElementById('themeToggle');
const stored = localStorage.getItem('theme');

if (stored === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    toggle.textContent = '☀️';
}

toggle.addEventListener('click', () => {
    if (document.body.getAttribute('data-theme') === 'dark') {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        toggle.textContent = '🌙';
    } else {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggle.textContent = '☀️';
    }
});

// E = mc²
function calcEnergy() {
    let m = parseFloat(document.getElementById('mass')?.value);
    if (isNaN(m)) {
        document.getElementById('energyResult').innerHTML = '⚠️ Enter a valid mass';
        return;
    }
    let c = 299792458;
    let E = m * c * c;
    document.getElementById('energyResult').innerHTML = `⚡ ${E.toExponential(4)} Joules`;
}

// Ideal Gas Law
function calcTemp() {
    let P = parseFloat(document.getElementById('pressure')?.value);
    let V = parseFloat(document.getElementById('volume')?.value);
    let n = parseFloat(document.getElementById('moles')?.value);
    if (isNaN(P) || isNaN(V) || isNaN(n) || n === 0) {
        document.getElementById('tempResult').innerHTML = '⚠️ Fill all fields (n ≠ 0)';
        return;
    }
    let T = (P * V) / (n * 0.0821);
    document.getElementById('tempResult').innerHTML = `🌡️ ${T.toFixed(2)} K (${(T - 273.15).toFixed(2)}°C)`;
}

// Ohm's Law
function calcResistance() {
    let V = parseFloat(document.getElementById('voltage')?.value);
    let I = parseFloat(document.getElementById('current')?.value);
    if (isNaN(V) || isNaN(I) || I === 0) {
        document.getElementById('resistanceResult').innerHTML = '⚠️ Valid V and I (I ≠ 0)';
        return;
    }
    let R = V / I;
    document.getElementById('resistanceResult').innerHTML = `⚡ ${R.toFixed(2)} Ω`;
}
