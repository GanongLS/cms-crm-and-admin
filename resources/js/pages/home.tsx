import PublicLayout from '@/layouts/public-layout';
import { Head, Link } from '@inertiajs/react';

function Home() {
  return (
    <>
      <Head title="Home" />

      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero-content">
          <h1>Ganin Enterprise</h1>

          <p>
            Building systems, platforms, and initiatives across management, technology, agriculture, and creative
            industries.
          </p>

          <div className="home-actions">
            <Link href="/solutions" className="btn-primary">
              Explore Our Solutions
            </Link>

            <Link href="/learn-more" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="home-section">
        <h2>What we do</h2>

        <div className="home-grid">
          <div className="home-card">
            <h3>Management Systems</h3>
            <p>CRM, ERP, and operational tools designed for clarity and control.</p>
          </div>

          <div className="home-card">
            <h3>Science & Technology</h3>
            <p>Research-driven projects in software, data, and applied science.</p>
          </div>

          <div className="home-card">
            <h3>Social Impact</h3>
            <p>Initiatives focused on sustainability, education, and community.</p>
          </div>
        </div>
      </section>
    </>
  );
}

Home.layout = (page: React.ReactNode) => <PublicLayout>{page}</PublicLayout>;

export default Home;
