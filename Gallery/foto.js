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
            {tanggal: "10 Agustus 2025", foto: "foto-foto/foto1.jpeg", alternate: "foto pertama ke perpustakaan", judul: '"Ngumpulin Buku Bareng Yuk!"',deskripsi: "Berawal dari ajakan buat ngumpulin buku dan cerita-cerita si V."},
            {tanggal: "24 Agustus 2025", foto: "/Home/suatuhari.jpg", alternate: "zootopia?", judul: "Bocil",deskripsi: "Aku lupa 😓"},
            {tanggal: "01 Oktober 2025", foto: "foto-foto/platgab.jpeg", styling: "object-position: center top;", alternate: "Platgab", judul: "Platgab (cie jadi ketua 😙)",deskripsi: "Mantap nihh jadi ketua Multimedia, semangat yaa! pasti berat soalnya udah ditinggalin dari sebelum mulai (๑•᎑•๑)"},
            {tanggal: "07 Desember 2025", foto: "foto-foto/foto 3.jpeg", alternate: "Foto eskrim", judul: "Es krim",deskripsi: "Salah satu makanan favorit ola, tiap kali badmood makan eskrim mulu udah tuh bakal sakit. Aneh. <br>Aku ga terlalu suka kalo dia kayak gitu, tapi siapa aku buat ngelarang 😆 walaupun kadang aku melarang,tapi yang penting dia bahagia."},
            {tanggal: "03 Januari 2026", foto: "foto-foto/perpus2.jpeg", alternate: "Di perpustakaan lagi", judul: "Ke Perpustakaan lagii",deskripsi: "Kita ke perpus lagii, tapi sebenernya kita udah sering kesana cuma lupa foto teruss T-T"},
            {tanggal: "Januari-Februari 2026", foto: "foto-foto/syuting amer.jpeg", alternate: "Syuting Amertha", judul: "Syuting Amertha",deskripsi: "Pertama kalinya aku jadi sutradara. Gamau lagi. Mending jadi editor."},
            {tanggal: "15 Februari 2026", foto: "foto-foto/kebon raya bogor.jpeg", alternate: "Kebun Raya Bogor", judul: "Main ke Kebun Raya Bogor!!",deskripsi: "Kita akhirnya nyoba ke Kebun Raya Bogor, dan itu seru banget! kita ujan-ujanan dikit trus kita keliling banyak tempat. Sayangnya Bunga bangkainya udah ilang.."},
            {tanggal: "29 Maret 2026", foto: "foto-foto/gacoan bareng bebey.jpeg", styling: "", alternate: "Gacoan bareng bebey", judul: "Gacoan Bareng Bebey",deskripsi: "Kita ke gacoan & perpus bareng bocill aku jadi harus ngurus 2 bocah dehh, tapi gapapa dua duanya aku sayang kok!"},
            {tanggal: "4 April 2026", foto: "foto-foto/Abang bobo.jpeg", alternate: "Abang bobo", judul: "Abang Bobo", deskripsi: "Abang bobo lagi nihh... kok malah di foto foto sih!! 😤 suka yaa???"},
            {tanggal: "5 April 2026", foto: "foto-foto/Gunung Kencana.jpeg", styling: "object-position: center -120px;", alternate: "Gunung & MIKUUU", judul: "ANAK AKU NAIK GUNUUUNNGG", deskripsi: "Ra.. dapat salam dari gunung kencana. Semoga nanti bisa kamu.. <br> <br> -1.803 MDPL"},
            {tanggal: "10 April 2026", foto: "foto-foto/Abang punya kelincii.jpg", alternate: "Zootopia Trend", judul: "Abang punya kelincii 😆", deskripsi: "Kelincinya lucuuu banget, cantik lagii jadi pengen peluk 👉👈" },
            {tanggal: "12 April 2026", foto: "foto-foto/Ultah bocill.jpg", alternate: "Ultah bocill", judul: "YEEYY BOCILNYA ULTAHHH", deskripsi: " Selamat ulang tahun yaaa olaaa semoga sehat selalu, rezekinya dilancarkan, dan sukses selalu! Maaf ya kadonya telat seminggu" },
            {tanggal: "24 April 2026", foto: "foto-foto/Workshop MM.jpg", styling: "object-position: center top;", alternate: "Workshop MM", judul: "Workshop Multimedia", deskripsi: "Abang jadi kelinci percobaan.. mehh." },
          ];
          
          photos.forEach((data, i) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.animationDelay = `${(i * 0.1) + 0.3}s`;
            card.innerHTML = `
                <div class="image-wrapper">
                  <p>${data.tanggal}</p>
                  <img src="${data.foto}" alt="${data.alternate}" style="${data.styling }">
                </div>
                <details class="caption-box">
                  <summary><h3>${data.judul}</h3></summary>
                  <p>${data.deskripsi}</p>
                </details>
              </div>
            `;
            galleryContainer.appendChild(card);
        });