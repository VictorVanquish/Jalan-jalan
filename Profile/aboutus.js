/* Responsive nav toggle */
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.querySelector('header nav');

  if (!navToggle || !nav) return;

  navToggle.addEventListener('click', function () {
    const open = nav.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
  });

  // close when clicking a link
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  }); 

  // optional: close when clicking outside nav
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('open') && !nav.contains(e.target) && !navToggle.contains(e.target)) {
      nav.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.profile-section');
    
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // 1. Tentukan Tanggal Target (Tahun, Bulan-1, Tanggal)
    const targetDate = new Date(2026, 3, 12).getTime(); 

    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Kalkulasi waktu
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update ke HTML
        document.getElementById("days").innerText = days.toString().padStart(2, '0');
        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

        // 2. Jika Waktunya Tiba
        if (distance < 0) {
            clearInterval(countdownInterval);
            const card = document.querySelector(".countdown-card");
            card.innerHTML = `<h2 style="font-size: 1.2rem; animation: bday-pop 0.5s ease-out;">Happy Birthday Ola! 🎂✨</h2>`;
            
            // Jalankan Kembang Api
            runConfetti();
        }
    }, 1000);
});

function runConfetti() {
    var end = Date.now() + (5 * 1000); // Kembang api selama 5 detik

    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#ff6fae', '#ffbad6']
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#ff6fae', '#ffbad6']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}