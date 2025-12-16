import { home, login, register } from '@/routes';
import { Link } from '@inertiajs/react';
import { PropsWithChildren, useState } from 'react';

export default function PublicLayout({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false);

  const NAV_ITEMS = [
    { label: 'Our Solutions', href: '/solutions' },
    { label: 'Management', href: '/management' },
    { label: 'Homestead', href: '/homestead' },
    { label: 'Team Building', href: '/team-building' },
    { label: 'Science & Technology', href: '/science-tech' },
    { label: 'Art Gallery', href: '/art-gallery' },
    { label: 'About Us', href: '/about' },
    { label: 'Social Impact', href: '/social-impact' },
    { label: 'Blog', href: '/blog' },
  ];

  

  return (
    <div className="public-root">
      <header className="public-header">
        <Link href={home()} className="public-logo">
          Ganin
        </Link>

        {/* DESKTOP + TABLET NAV */}
        <nav className="public-nav">
          <div className="nav-main">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className="public-nav-link">
                {item.label}
              </Link>
            ))}
          </div>

          {/* HAMBURGER */}
          <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            ☰
          </button>

          <div className="nav-auth">
            <Link href={login()} className="public-nav-link">
              Log in
            </Link>

            <Link href={register()} className="public-nav-cta">
              Register
            </Link>
          </div>
        </nav>
      </header>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="mobile-nav">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="public-nav-link">
              {item.label}
            </Link>
          ))}

          <div className="mobile-divider"></div>

          <Link href={login()} className="public-nav-link">
            Log in
          </Link>

          <Link href={register()} className="public-nav-cta">
            Register
          </Link>
        </div>
      )}

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
