import { home } from '@/routes';
import { Head, Link } from '@inertiajs/react';

export default function Landing() {
  return (
    <>
      <Head title="Start Page" />

      <main className="landing-root">
        {/* Layout */}
        <section className="landing-layout">
          {/* Landing section dijadikan layout aja. Jadi  */}
          <header className="landing-header">
            <div className="landing-logo">ganin</div>
            <nav className="landing-nav">
              <a href="#features">Features</a>
              <a href="#workflow">Workflow</a>
              <a href="#about">About</a>
              <Link href={home()} className="nav-cta">
                Welcome
              </Link>
            </nav>
          </header>
          {/* HERO */}
          <div className="landing-hero-content">
            <h1>
              Your personal start page,
              <br />
              built for focus.
            </h1>

            <p>One place for your links, notes, tools, and daily workflow. Calm by default. Powerful when needed.</p>

            <div className="landing-hero-actions">
              <Link href={home()} className="btn-primary">
                Go to Welcome
              </Link>
              <a href="#features" className="btn-secondary">
                Learn more
              </a>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="landing-section">
          <h2>Everything you need, nothing you don’t</h2>

          <div className="feature-grid">
            <div className="feature-card">
              <h3>Centralized</h3>
              <p>All your important links and resources in one place.</p>
            </div>

            <div className="feature-card">
              <h3>Fast</h3>
              <p>Instant access without distractions or clutter.</p>
            </div>

            <div className="feature-card">
              <h3>Customizable</h3>
              <p>Adapt the page to your workflow, not the other way around.</p>
            </div>
          </div>
        </section>

        {/* WORKFLOW */}
        <section id="workflow" className="landing-section alt">
          <h2>Designed around your workflow</h2>

          <div className="workflow">
            <div className="workflow-step">
              <span>01</span>
              <h4>Open your browser</h4>
              <p>Your start page is always there.</p>
            </div>

            <div className="workflow-step">
              <span>02</span>
              <h4>Access what matters</h4>
              <p>No searching. No noise.</p>
            </div>

            <div className="workflow-step">
              <span>03</span>
              <h4>Stay focused</h4>
              <p>Less context switching, more clarity.</p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="landing-section">
          <h2>Built for people who value clarity</h2>

          <p className="about-text">
            This project is opinionated by design. It values simplicity, speed, and calm interfaces over endless
            customization and noise.
          </p>
        </section>

        {/* FOOTER Ini dipisah aja jadi layout*/}
        <footer className="landing-footer">
          <div>
            <strong>ganin</strong>
            <span>© {new Date().getFullYear()}</span>
          </div>

          <div className="footer-links">
            <Link href={home()}>Welcome</Link>
            <a href="#features">Features</a>
            <a href="#about">About</a>
          </div>
        </footer>
      </main>
    </>
  );
}
