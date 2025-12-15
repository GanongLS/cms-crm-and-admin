
import PublicLayout from "@/layouts/public-layout";
import { Head } from '@inertiajs/react';

function LearnMore() {
  return (
    <>
      <Head title="Start Page" />

      {/* HERO */}
      <section className="learn-more-hero">
        <div className="learn-more-hero-content">
          <h1>
            Your personal start page,
            <br />
            built for focus.
          </h1>

          <p>One place for your links, notes, tools, and daily workflow. Calm by default. Powerful when needed.</p>

          <div className="learn-more-hero-actions">
            <a href="#features" className="learn-more-btn-primary">
              Deep Dive
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="learn-more-section">
        <h2>Everything you need, nothing you don’t</h2>

        <div className="learn-more-feature-grid">
          <div className="learn-more-feature-card">
            <h3>Centralized</h3>
            <p>All your important links and resources in one place.</p>
          </div>

          <div className="learn-more-feature-card">
            <h3>Fast</h3>
            <p>Instant access without distractions or clutter.</p>
          </div>

          <div className="learn-more-feature-card">
            <h3>Customizable</h3>
            <p>Adapt the page to your workflow, not the other way around.</p>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section id="workflow" className="learn-more-section learn-more-section--alt">
        <h2>Designed around your workflow</h2>

        <div className="learn-more-workflow">
          <div className="learn-more-workflow-step">
            <span>01</span>
            <h4>Open your browser</h4>
            <p>Your start page is always there.</p>
          </div>

          <div className="learn-more-workflow-step">
            <span>02</span>
            <h4>Access what matters</h4>
            <p>No searching. No noise.</p>
          </div>

          <div className="learn-more-workflow-step">
            <span>03</span>
            <h4>Stay focused</h4>
            <p>Less context switching, more clarity.</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="learn-more-section">
        <h2>Built for people who value clarity</h2>

        <p className="learn-more-about-text">
          This project is opinionated by design. It values simplicity, speed, and calm interfaces over endless
          customization and noise.
        </p>
      </section>
    </>
  );
}

LearnMore.layout = (page: React.ReactNode) => <PublicLayout>{page}</PublicLayout>;

export default LearnMore;
