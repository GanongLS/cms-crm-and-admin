// resources/js/layouts/public-layout.tsx
import { home, login, register } from '@/routes';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function PublicLayout({ children }: PropsWithChildren) {
  return (
    <div className="public-root">
      <header className="public-header">
        <Link href={home()} className="public-logo">
          Ganin
        </Link>

        <nav className="public-nav">
          <Link href="/solutions">Our Solutions</Link>
          <Link href="/management">Management</Link>
          <Link href="/homestead">Homestead</Link>
          <Link href="/team-building">Team Building</Link>
          <Link href="/science-tech">Science & Technology</Link>
          <Link href="/art-gallery">Art Gallery</Link>
          <Link href="/about">About Us</Link>
          <Link href="/social-impact">Social Impact</Link>
          <Link href="/blog">Blog Post</Link>
          <div className="nav-divider"></div>
          <>
            <Link href={login()} className="public-nav-link">
              Log in
            </Link>

            <Link href={register()} className="public-nav-cta">
              Register
            </Link>
          </>
        </nav>
      </header>

      <main className="public-content">{children}</main>

      <footer className="public-footer">
        <div>
          <strong>Ganin</strong>
          <span>© {new Date().getFullYear()}</span>
        </div>

        <div className="public-footer-links">
          <Link href={home()}>Welcome</Link>
          <Link href="/solutions">Our Solutions</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/laravel">Laravel</Link>
        </div>
      </footer>
    </div>
  );
}
