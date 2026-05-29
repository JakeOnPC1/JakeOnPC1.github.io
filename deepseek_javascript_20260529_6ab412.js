// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙';
    } else {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️';
    }
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Active link highlighting on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// E = mc² calculator
function calculateEnergy() {
    const mass = parseFloat(document.getElementById('mass').value);
    if (isNaN(mass)) {
        document.getElementById('energyResult').innerHTML = '⚠️ Please enter a valid mass';
        return;
    }
    const c = 299792458; // speed of light in m/s
    const energy = mass * Math.pow(c, 2);
    document.getElementById('energyResult').innerHTML = 
        `⚡ Energy = ${energy.toExponential(4)} Joules`;
}

// Ideal Gas Law calculator
function calculateTemp() {
    const P = parseFloat(document.getElementById('pressure').value);
    const V = parseFloat(document.getElementById('volume').value);
    const n = parseFloat(document.getElementById('moles').value);
    const R = 0.0821; // gas constant
    
    if (isNaN(P) || isNaN(V) || isNaN(n) || n === 0) {
        document.getElementById('tempResult').innerHTML = '⚠️ Please fill all fields correctly';
        return;
    }
    
    const T = (P * V) / (n * R);
    document.getElementById('tempResult').innerHTML = 
        `🌡️ Temperature = ${T.toFixed(2)} K (${(T - 273.15).toFixed(2)}°C)`;
}

// Ohm's Law calculator
function calculateResistance() {
    const V = parseFloat(document.getElementById('voltage').value);
    const I = parseFloat(document.getElementById('current').value);
    
    if (isNaN(V) || isNaN(I) || I === 0) {
        document.getElementById('resistanceResult').innerHTML = '⚠️ Please enter valid values (Current ≠ 0)';
        return;
    }
    
    const R = V / I;
    document.getElementById('resistanceResult').innerHTML = 
        `⚡ Resistance = ${R.toFixed(2)} Ω`;
}

// Add some animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .calculator-card, .resource-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Dynamic background effect for hero section
const hero = document.querySelector('.hero');
window.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    if (hero) {
        hero.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, var(--bg-primary) 0%, var(--bg-secondary) 100%)`;
    }
});