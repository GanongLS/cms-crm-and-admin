import PublicLayout from '@/layouts/public-layout';
import { Head } from '@inertiajs/react';

function Homestead() {
  return (
    <>
      <Head title="Homestead" />

      {/* HERO */}
      <section className="homestead-hero">
        <div className="homestead-hero-content">
          <h1>Homestead</h1>
          <p>
            Sustainable agriculture and livestock systems designed for efficiency, resilience, and long-term impact.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="homestead-section">
        <div className="homestead-overview">
          <h2>Rooted in sustainability</h2>
          <p>
            Homestead initiatives focus on integrating agriculture, livestock, and land management into systems that are
            productive, environmentally responsible, and economically viable.
          </p>
        </div>
      </section>

      {/* DOMAINS */}
      <section className="homestead-section alt">
        <h2>Core Domains</h2>

        <div className="homestead-domain-grid">
          <div className="homestead-domain-card">
            <h3>Agriculture</h3>
            <p>Crop cultivation systems that prioritize soil health, yield stability, and sustainable inputs.</p>
          </div>

          <div className="homestead-domain-card">
            <h3>Livestock</h3>
            <p>Ethical animal husbandry with a focus on health, productivity, and welfare.</p>
          </div>

          <div className="homestead-domain-card">
            <h3>Land Management</h3>
            <p>Strategic land use planning to balance productivity and ecological preservation.</p>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="homestead-section">
        <h2>Our approach</h2>

        <div className="homestead-approach-grid">
          <div className="homestead-approach">
            <h4>System Thinking</h4>
            <p>Every component is designed as part of a connected ecosystem.</p>
          </div>

          <div className="homestead-approach">
            <h4>Local Context</h4>
            <p>Solutions are adapted to climate, geography, and community needs.</p>
          </div>

          <div className="homestead-approach">
            <h4>Long-term Value</h4>
            <p>Focused on sustainability rather than short-term gains.</p>
          </div>
        </div>
      </section>
    </>
  );
}

Homestead.layout = (page: React.ReactNode) => <PublicLayout>{page}</PublicLayout>;

export default Homestead;
