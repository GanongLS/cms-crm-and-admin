import PublicLayout from '@/layouts/public-layout';
import { Head } from '@inertiajs/react';

function ScienceTech() {
  return (
    <>
      <Head title="Science & Technology" />

      {/* HERO */}
      <section className="science-hero">
        <div className="science-hero-content">
          <h1>Science & Technology</h1>
          <p>
            Research-driven initiatives combining software engineering, data, and applied science to build reliable,
            scalable systems.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="science-section">
        <div className="science-overview">
          <h2>Built on research, shipped with discipline</h2>
          <p>
            Our science and technology efforts focus on long-term value creation through careful experimentation, strong
            engineering practices, and measurable outcomes.
          </p>
        </div>
      </section>

      {/* DOMAINS */}
      <section className="science-section alt">
        <h2>Core Domains</h2>

        <div className="science-domain-grid">
          <div className="science-domain-card">
            <h3>Software Engineering</h3>
            <p>Designing and building maintainable systems with clear architecture and predictable behavior.</p>
          </div>

          <div className="science-domain-card">
            <h3>Data & Analytics</h3>
            <p>Turning raw data into insights through analysis, visualization, and decision-support tools.</p>
          </div>

          <div className="science-domain-card">
            <h3>Applied Research</h3>
            <p>Experimentation and prototyping to validate ideas before production-scale investment.</p>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="science-section">
        <h2>Guiding principles</h2>

        <div className="science-principle-grid">
          <div className="science-principle">
            <h4>Evidence over hype</h4>
            <p>Decisions are driven by data, experiments, and real-world constraints.</p>
          </div>

          <div className="science-principle">
            <h4>Engineering rigor</h4>
            <p>Clean code, clear boundaries, and systems that are easy to reason about.</p>
          </div>

          <div className="science-principle">
            <h4>Long-term thinking</h4>
            <p>We optimize for sustainability and adaptability, not quick wins.</p>
          </div>
        </div>
      </section>
    </>
  );
}

ScienceTech.layout = (page: React.ReactNode) => <PublicLayout>{page}</PublicLayout>;

export default ScienceTech;
