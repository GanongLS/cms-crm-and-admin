// resources/js/pages/landing.tsx
import { home } from '@/routes';
import { Head, Link } from '@inertiajs/react';

export default function Landing() {
  return (
    <>
      <Head title="Welcome" />

      <main className="landing">
        <section className="landing-hero">
          <h1 className="landing-title">Start your day smarter</h1>

          <p className="landing-subtitle">All your bookmarks, notes, and tools — in one calm place.</p>

          <div className="landing-actions">
            <Link href={home()} className="btn-primary">
              Go to Welcome
            </Link>
          </div>
        </section>

        <section className="landing-section">
          <h2 className="landing-section-title">Stay Organized</h2>
          <p className="landing-section-text">Collect everything you need and access it instantly.</p>
        </section>

        <section className="landing-section alt">
          <h2 className="landing-section-title">Focus Better</h2>
          <p className="landing-section-text">A clean interface that helps you think clearly.</p>
        </section>
      </main>
    </>
  );
}
