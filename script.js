document.addEventListener('DOMContentLoaded', function () {
  const ctaButton = document.getElementById('cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('click', function () {
      alert('Terima kasih telah bergabung di GameVerse!');
    });
  }

  // Scroll-Spy untuk Navigasi
  const navLinks = document.querySelectorAll('header nav ul li a');
  const sections = document.querySelectorAll('main section');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.href.includes(current)) {
        link.classList.add('active');
      }
    });
  });

  // Smooth Scroll saat klik navigasi
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
          behavior: 'smooth'
        });
      }
    });
  });

  // Tambah event untuk tombol pilih paket harga (opsional)
  const pricingButtons = document.querySelectorAll('.pricing-card button');
  pricingButtons.forEach(button => {
    button.addEventListener('click', () => {
      alert(`Kamu memilih paket: ${button.parentElement.querySelector('h4').textContent}`);
    });
  });
});
