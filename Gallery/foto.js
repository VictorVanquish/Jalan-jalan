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

// Foto-Foto olaa
        const galleryContainer = document.getElementById('Gallery-Foto');
        const photos = [
            {tanggal: "10 Agustus 2025", foto: "Gallery\foto-foto\foto1.jpeg", alternate: "", judul: "asrhjfksugfsjf",deskripsi: ""},
            {tanggal: "", foto: ".jpg", alternate: "", judul: "",deskripsi: ""},
            {tanggal: "", foto: ".jpg", alternate: "", judul: "",deskripsi: ""},
            {tanggal: "", foto: ".jpg", alternate: "", judul: "",deskripsi: ""},
            {tanggal: "", foto: ".jpg", alternate: "", judul: "",deskripsi: ""},
            {tanggal: "", foto: ".jpg", alternate: "", judul: "",deskripsi: ""},
            {tanggal: "", foto: ".jpg", alternate: "", judul: "",deskripsi: ""},
            {tanggal: "", foto: ".jpg", alternate: "", judul: "",deskripsi: ""},
            {tanggal: "", foto: ".jpg", alternate: "", judul: "",deskripsi: ""},
            {tanggal: "", foto: ".jpg", alternate: "", judul: "",deskripsi: ""},
            {tanggal: "", foto: ".jpg", alternate: "", judul: "",deskripsi: ""},
          ];
          
          photos.forEach((data, i) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.animationDelay = `${(i * 0.1) + 0.3}s`;
            card.innerHTML = `
                <div class="image-wrapper">
                  <p>${data.tanggal}</p>
                  <img src="${data.foto}" alt="${data.alternate}">
                </div>
                <details class="caption-box">
                  <summary><h3>${data.judul}</h3></summary>
                  <p>${data.deskripsi}</p>
                </details>
              </div>
            `;
            galleryContainer.appendChild(card);
        });