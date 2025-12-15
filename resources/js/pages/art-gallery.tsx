import PublicLayout from '@/layouts/public-layout';
import { Head } from '@inertiajs/react';

function ArtGallery() {
  return (
    <>
      <Head title="Art Gallery" />

      {/* HERO */}
      <section className="art-hero">
        <div className="art-hero-content">
          <h1>Art Gallery</h1>
          <p>A curated space for visual exploration, creative expression, and experimental works across mediums.</p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="art-section">
        <div className="art-overview">
          <h2>Where ideas take form</h2>
          <p>
            The Art Gallery showcases projects that explore form, color, material, and concept — bridging artistic
            intuition with thoughtful execution.
          </p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="art-section alt">
        <h2>Selected Works</h2>

        <div className="art-grid">
          <div className="art-card">
            <div className="art-thumbnail" />
            <h3>Explorations in Form</h3>
            <p>Mixed media · Conceptual</p>
          </div>

          <div className="art-card">
            <div className="art-thumbnail" />
            <h3>Digital Abstractions</h3>
            <p>Digital · Generative</p>
          </div>

          <div className="art-card">
            <div className="art-thumbnail" />
            <h3>Material Studies</h3>
            <p>Sculpture · Installation</p>
          </div>

          <div className="art-card">
            <div className="art-thumbnail" />
            <h3>Light & Space</h3>
            <p>Photography · Experimental</p>
          </div>

          <div className="art-card">
            <div className="art-thumbnail" />
            <h3>Visual Narratives</h3>
            <p>Illustration · Storytelling</p>
          </div>

          <div className="art-card">
            <div className="art-thumbnail" />
            <h3>Process Studies</h3>
            <p>Sketch · Research</p>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="art-section">
        <h2>Art as inquiry</h2>

        <p className="art-statement">
          Art is treated as a form of research — a way to ask questions, challenge assumptions, and explore new
          perspectives without predefined outcomes.
        </p>
      </section>
    </>
  );
}

ArtGallery.layout = (page: React.ReactNode) => <PublicLayout>{page}</PublicLayout>;

export default ArtGallery;
