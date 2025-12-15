import PublicLayout from '@/layouts/public-layout';
import { Head } from '@inertiajs/react';

function Solutions() {
  return (
    <>
      <Head title="Our Solutions" />

      {/* HERO */}
      <section className="solutions-hero">
        <div className="solutions-hero-content">
          <h1>Our Solutions</h1>
          <p>
            An ecosystem of solutions built by Ganin Enterprise to support harmony, sustainability, people, art, science, tech and
            innovation.
          </p>
        </div>
      </section>

      {/* SOLUTION LIST */}
      <section className="solutions-section">
        <div className="solutions-grid">
          <div className="solution-card">
            <h3>Management</h3>
            <p>CRM & ERP systems to help organizations operate efficiently.</p>
          </div>

          <div className="solution-card">
            <h3>Homestead</h3>
            <p>Technology-driven solutions for agriculture and livestock.</p>
          </div>

          <div className="solution-card">
            <h3>Team Building</h3>
            <p>Human resource and team management systems.</p>
          </div>

          <div className="solution-card">
            <h3>Science & Technology</h3>
            <p>Research, innovation, and applied technology projects.</p>
          </div>

          <div className="solution-card">
            <h3>Art Gallery</h3>
            <p>Creative works and art projects by Ganin.</p>
          </div>

          <div className="solution-card">
            <h3>Social Impact</h3>
            <p>Initiatives focused on social and environmental impact.</p>
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * Reuse PUBLIC layout
 */
Solutions.layout = (page: React.ReactNode) => <PublicLayout>{page}</PublicLayout>;

export default Solutions;
