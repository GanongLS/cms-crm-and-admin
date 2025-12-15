import PublicLayout from '@/layouts/public-layout';
import { Head } from '@inertiajs/react';

function About() {
  return (
    <>
      <Head title="About Us" />

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Ganin</h1>
          <p>
            Ganin is an independent initiative focused on building systems, projects, and practices across technology,
            management, agriculture, and creative work.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="about-section">
        <div className="about-story">
          <h2>Our story</h2>
          <p>
            Ganin was formed from a desire to create practical solutions grounded in clarity, discipline, and long-term
            thinking. Rather than chasing trends, we focus on understanding real problems and designing systems that are
            reliable and adaptable.
          </p>
          <p>
            Our work spans multiple domains, connected by a shared belief that thoughtful design and structured
            execution lead to sustainable outcomes.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-section alt">
        <h2>Core values</h2>

        <div className="about-values-grid">
          <div className="about-value">
            <h3>Clarity</h3>
            <p>We prioritize clear thinking, simple structures, and transparent communication.</p>
          </div>

          <div className="about-value">
            <h3>Discipline</h3>
            <p>Consistent processes and thoughtful execution guide our work.</p>
          </div>

          <div className="about-value">
            <h3>Responsibility</h3>
            <p>We consider long-term impact across social, environmental, and organizational dimensions.</p>
          </div>
        </div>
      </section>

      {/* DOMAINS */}
      <section className="about-section">
        <h2>What we work on</h2>

        <div className="about-domain-grid">
          <div className="about-domain">
            <h4>Management Systems</h4>
            <p>CRM, ERP, and operational tools designed for clarity and control.</p>
          </div>

          <div className="about-domain">
            <h4>Science & Technology</h4>
            <p>Research-driven software and data initiatives.</p>
          </div>

          <div className="about-domain">
            <h4>Homestead</h4>
            <p>Sustainable agriculture and livestock systems.</p>
          </div>

          <div className="about-domain">
            <h4>Creative & Art</h4>
            <p>Visual exploration and experimental creative work.</p>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="about-section alt">
        <h2>Looking forward</h2>
        <p className="about-closing">
          Ganin continues to evolve as a space for building, learning, and collaboration — guided by thoughtful design
          and long-term intent.
        </p>
      </section>
    </>
  );
}

About.layout = (page: React.ReactNode) => <PublicLayout>{page}</PublicLayout>;

export default About;
