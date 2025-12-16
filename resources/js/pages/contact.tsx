import PublicLayout from '@/layouts/public-layout';
import { Head } from '@inertiajs/react';

function Contact() {
  return (
    <>
      <Head title="Contact Us" />

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>Reach out for collaboration, inquiries, or further information about our work and initiatives.</p>
        </div>
      </section>

      {/* INFO */}
      <section className="contact-section">
        <div className="contact-info">
          <h2>Get in touch</h2>
          <p>
            Whether you have questions about our projects, want to explore collaboration opportunities, or simply want
            to connect, we’d be glad to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT METHODS */}
      <section className="contact-section alt">
        <h2>Ways to contact</h2>

        <div className="contact-method-grid">
          <div className="contact-method">
            <h3>Email</h3>
            <p>hello@ganin.id</p>
          </div>

          <div className="contact-method">
            <h3>Partnerships</h3>
            <p>partnerships@ganin.id</p>
          </div>

          <div className="contact-method">
            <h3>Careers</h3>
            <p>careers@ganin.id</p>
          </div>
        </div>
      </section>

      {/* NOTE */}
      <section className="contact-section">
        <h2>Response time</h2>
        <p className="contact-note">
          We aim to respond to all inquiries within a reasonable timeframe. Please note that response times may vary
          depending on the nature of the request.
        </p>
      </section>
    </>
  );
}

Contact.layout = (page: React.ReactNode) => <PublicLayout>{page}</PublicLayout>;

export default Contact;
