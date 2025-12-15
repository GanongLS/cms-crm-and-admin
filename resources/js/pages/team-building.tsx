import PublicLayout from '@/layouts/public-layout';
import { Head } from '@inertiajs/react';

function TeamBuilding() {
  return (
    <>
      <Head title="Team Building" />

      {/* HERO */}
      <section className="team-hero">
        <div className="team-hero-content">
          <h1>Team Building</h1>
          <p>Talent management systems and practices designed to build strong, aligned, and high-performing teams.</p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="team-section">
        <div className="team-overview">
          <h2>People-first management</h2>
          <p>
            Team Building focuses on attracting, developing, and retaining talent through structured processes, clear
            feedback, and intentional culture design.
          </p>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="team-section alt">
        <h2>Core Capabilities</h2>

        <div className="team-capability-grid">
          <div className="team-capability-card">
            <h3>Talent Acquisition</h3>
            <p>Structured hiring pipelines to identify and onboard the right people efficiently.</p>
          </div>

          <div className="team-capability-card">
            <h3>Performance Management</h3>
            <p>Goal setting, reviews, and feedback loops aligned with organizational objectives.</p>
          </div>

          <div className="team-capability-card">
            <h3>Learning & Development</h3>
            <p>Continuous skill development through training, mentoring, and growth pathways.</p>
          </div>

          <div className="team-capability-card">
            <h3>Compensation & Benefits</h3>
            <p>Transparent and fair compensation structures that support motivation and retention.</p>
          </div>

          <div className="team-capability-card">
            <h3>Culture & Engagement</h3>
            <p>Tools and practices to build trust, alignment, and a healthy workplace culture.</p>
          </div>

          <div className="team-capability-card">
            <h3>Workforce Analytics</h3>
            <p>Data-driven insights to understand team dynamics and improve decision-making.</p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="team-section">
        <h2>Our philosophy</h2>

        <div className="team-philosophy-grid">
          <div className="team-philosophy">
            <h4>Clarity</h4>
            <p>Clear roles, expectations, and feedback reduce friction and improve performance.</p>
          </div>

          <div className="team-philosophy">
            <h4>Growth</h4>
            <p>Investing in people creates long-term organizational value.</p>
          </div>

          <div className="team-philosophy">
            <h4>Trust</h4>
            <p>Strong teams are built on transparency and mutual respect.</p>
          </div>
        </div>
      </section>
    </>
  );
}

TeamBuilding.layout = (page: React.ReactNode) => <PublicLayout>{page}</PublicLayout>;

export default TeamBuilding;
