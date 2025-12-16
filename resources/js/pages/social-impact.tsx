import PublicLayout from '@/layouts/public-layout';
import { Head } from '@inertiajs/react';

function SocialImpact() {
  return (
    <>
      <Head title="Social Impact" />

      {/* HERO */}
      <section className="impact-hero">
        <div className="impact-hero-content">
          <h1>Social Impact</h1>
          <p>
            Initiatives focused on education, sustainability, and community development — creating value beyond business
            outcomes.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="impact-section">
        <div className="impact-overview">
          <h2>Why social impact matters</h2>
          <p>
            We believe long-term success is inseparable from social and environmental responsibility. Social impact
            initiatives are integrated into how we think, build, and collaborate.
          </p>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="impact-section alt">
        <h2>Focus areas</h2>

        <div className="impact-focus-grid">
          <div className="impact-focus-card">
            <h3>Education</h3>
            <p>Knowledge sharing, mentorship, and learning initiatives that empower individuals and communities.</p>
          </div>

          <div className="impact-focus-card">
            <h3>Sustainability</h3>
            <p>Practices and projects that promote environmental stewardship and responsible resource use.</p>
          </div>

          <div className="impact-focus-card">
            <h3>Community Development</h3>
            <p>Supporting local initiatives and collaborative efforts that strengthen social ecosystems.</p>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="impact-section">
        <h2>Our approach</h2>

        <div className="impact-approach-grid">
          <div className="impact-approach">
            <h4>Long-term commitment</h4>
            <p>We prioritize sustained engagement over short-term activities.</p>
          </div>

          <div className="impact-approach">
            <h4>Local context</h4>
            <p>Initiatives are designed with respect for cultural and community realities.</p>
          </div>

          <div className="impact-approach">
            <h4>Measurable outcomes</h4>
            <p>Impact is evaluated through clear goals and observable results.</p>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="impact-section alt">
        <h2>Looking ahead</h2>
        <p className="impact-closing">
          Social impact is an ongoing journey — shaped by learning, collaboration, and responsibility toward future
          generations.
        </p>
      </section>
    </>
  );
}

SocialImpact.layout = (page: React.ReactNode) => <PublicLayout>{page}</PublicLayout>;

export default SocialImpact;
