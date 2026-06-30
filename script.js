
const form = document.querySelector('#contactForm');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = encodeURIComponent(data.get('name') || '');
    const email = encodeURIComponent(data.get('email') || '');
    const message = encodeURIComponent(data.get('message') || '');
    const subject = encodeURIComponent('Portfolio inquiry from ' + (data.get('name') || 'website visitor'));
    const body = encodeURIComponent(`Name: ${data.get('name') || ''}\nEmail: ${data.get('email') || ''}\n\nMessage:\n${data.get('message') || ''}`);
    window.location.href = `mailto:brianwilson0625@gmail.com?subject=${subject}&body=${body}`;
  });
}
