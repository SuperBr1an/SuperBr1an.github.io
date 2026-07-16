import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact | Brian Wilson',
  description: 'Contact Brian Wilson for digital marketing, CRM, analytics, and MarTech opportunities.',
};

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            <span className="pulse" />
            Contact
          </span>
          <h1>Let&rsquo;s connect about marketing, CRM, analytics, or MarTech roles.</h1>
          <p className="lede">
            Available for remote U.S. marketing roles focused on campaign execution, demand generation
            support, CRM workflows, analytics, and marketing technology.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-wrap">
          <aside className="card">
            <h2>Contact details</h2>
            <div className="contact-item">
              <div>📧</div>
              <div>
                <b>Email</b>
                <span>
                  <a href="mailto:brianwilson0625@gmail.com">brianwilson0625@gmail.com</a>
                </span>
              </div>
            </div>
            <div className="contact-item">
              <div>📞</div>
              <div>
                <b>Phone</b>
                <span>
                  <a href="tel:+13526180659">(352) 618-0659</a>
                </span>
              </div>
            </div>
            <div className="contact-item">
              <div>📍</div>
              <div>
                <b>Location</b>
                <span>Omaha, Nebraska • Remote U.S. roles</span>
              </div>
            </div>
            <div className="contact-item">
              <div>🔗</div>
              <div>
                <b>LinkedIn</b>
                <span>
                  <a href="https://www.linkedin.com/in/brian-wilson-a38674280/" target="_blank" rel="noopener">
                    linkedin.com/in/brian-wilson-a38674280
                  </a>
                </span>
              </div>
            </div>
          </aside>
          <section className="card">
            <h2>Send a message</h2>
            <p className="form-note">This static contact form opens your email app with the message prepared.</p>
            <ContactForm />
          </section>
        </div>
      </section>
    </>
  );
}
