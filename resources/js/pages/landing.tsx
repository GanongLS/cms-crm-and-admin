
import PublicLayout from "@/layouts/public-layout";
import { Head } from '@inertiajs/react';

function Landing() {
  return (
    <>
      <Head title="Start Page" />

      {/* HERO */}
      <section className="landing-hero">
        <div className="landing-hero-content">
          <h1>
            Your personal start page,
            <br />
            built for focus.
          </h1>

          <p>One place for your links, notes, tools, and daily workflow. Calm by default. Powerful when needed.</p>

          <div className="landing-hero-actions">
            <a href="#features" className="landing-btn-primary">
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="landing-section">
        <h2>Everything you need, nothing you don’t</h2>

        <div className="landing-feature-grid">
          <div className="landing-feature-card">
            <h3>Centralized</h3>
            <p>All your important links and resources in one place.</p>
          </div>

          <div className="landing-feature-card">
            <h3>Fast</h3>
            <p>Instant access without distractions or clutter.</p>
          </div>

          <div className="landing-feature-card">
            <h3>Customizable</h3>
            <p>Adapt the page to your workflow, not the other way around.</p>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section id="workflow" className="landing-section landing-section--alt">
        <h2>Designed around your workflow</h2>

        <div className="landing-workflow">
          <div className="landing-workflow-step">
            <span>01</span>
            <h4>Open your browser</h4>
            <p>Your start page is always there.</p>
          </div>

          <div className="landing-workflow-step">
            <span>02</span>
            <h4>Access what matters</h4>
            <p>No searching. No noise.</p>
          </div>

          <div className="landing-workflow-step">
            <span>03</span>
            <h4>Stay focused</h4>
            <p>Less context switching, more clarity.</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="landing-section">
        <h2>Built for people who value clarity</h2>

        <p className="landing-about-text">
          This project is opinionated by design. It values simplicity, speed, and calm interfaces over endless
          customization and noise.
        </p>
      </section>
    </>
  );
}

Landing.layout = (page: React.ReactNode) => <PublicLayout>{page}</PublicLayout>;

export default Landing;
