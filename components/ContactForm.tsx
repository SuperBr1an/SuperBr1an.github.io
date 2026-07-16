'use client';

import { FormEvent } from 'react';

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const message = String(data.get('message') || '');
    const subject = encodeURIComponent('Portfolio inquiry from ' + (name || 'website visitor'));
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:brianwilson0625@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form id="contactForm" onSubmit={handleSubmit}>
      <input name="name" placeholder="Your name" required />
      <input type="email" name="email" placeholder="Your email" required />
      <textarea name="message" placeholder="Tell me about the opportunity" required />
      <button className="btn primary" type="submit">
        Prepare Email
      </button>
    </form>
  );
}
