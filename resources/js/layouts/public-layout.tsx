// resources/js/layouts/PublicLayout.tsx
import { home } from '@/routes';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function PublicLayout({ children }: PropsWithChildren) {
  return (
    <div className="public-root">
      <header className="public-header">
        <div className="public-logo">ganin</div>

        <nav className="public-nav">
          <Link href="/solutions">Our Solutions</Link>
          <a href="#workflow">Workflow</a>
          <a href="#about">About</a>

          <Link href={home()} className="public-nav-cta">
            Welcome
          </Link>
        </nav>
      </header>

      <main className="public-content">{children}</main>

      <footer className="public-footer">
        <div>
          <strong>ganin</strong>
          <span>© {new Date().getFullYear()}</span>
        </div>

        <div className="public-footer-links">
          <Link href={home()}>Welcome</Link>
          <Link href="/solutions">Our Solutions</Link>
          <a href="#about">About</a>
        </div>
      </footer>
    </div>
  );
}
