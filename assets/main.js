
const menuToggle = document.querySelector('[data-menu-toggle]');
const navLinks = document.querySelector('[data-nav-links]');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('open');
  });
}

const contactForm = document.querySelector('[data-contact-form]');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const name = data.get('name') || '';
    const email = data.get('email') || '';
    const topic = data.get('topic') || 'Portfolio inquiry';
    const message = data.get('message') || '';
    const body = `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\nMessage:\n${message}`;
    const mailto = `mailto:brianwilson0625@gmail.com?subject=${encodeURIComponent(topic)}&body=${encodeURIComponent(body)}`;
    const status = contactForm.querySelector('[data-status]');
    if (status) status.textContent = 'Opening your email app now.';
    window.location.href = mailto;
  });
}
