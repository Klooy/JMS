// ===== Mobile Menu Toggle =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  navToggle.classList.toggle('active');
});

// Close menu on link click
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.classList.remove('active');
  });
});

// ===== Tabs =====
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;

    tabBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));

    btn.classList.add('active');
    document.getElementById('tab-' + target).classList.add('active');
  });
});

// ===== Navbar scroll effect =====
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,.12)';
  } else {
    navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,.08)';
  }
});

// ===== Scroll animations =====
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.about-card, .service-card, .cliente-card, .respaldo-card, .contacto-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ===== Form handler =====
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const nombre = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const telefono = form.querySelector('input[type="tel"]').value;
  const servicio = form.querySelector('select').value;
  const mensaje = form.querySelector('textarea').value;

  // Build WhatsApp message
  const text = encodeURIComponent(
    `Hola, soy ${nombre}.\n` +
    `Correo: ${email}\n` +
    `Teléfono: ${telefono}\n` +
    `Servicio de interés: ${servicio}\n` +
    `Mensaje: ${mensaje}`
  );

  window.open(`https://wa.me/573143311791?text=${text}`, '_blank');
  form.reset();
}
