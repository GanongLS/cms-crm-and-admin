/* eslint-disable react-hooks/exhaustive-deps */
import { home, login, register } from '@/routes';
import { Link } from '@inertiajs/react';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';

export default function PublicLayout({ children }: PropsWithChildren) {
  const [openDesktop, setOpenDesktop] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  const desktopRef = useRef<HTMLDivElement | null>(null);
  const mobileRef = useRef<HTMLDivElement | null>(null);

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

  const [visibleItems, setVisibleItems] = useState(NAV_ITEMS);
  const [overflowItems, setOverflowItems] = useState<typeof NAV_ITEMS>([]);

  const ITEM_WIDTH = 134; // perkiraan lebar tiap item nav dalam piksel
  const FIXED_ITEMS = 3;

  // Resize useEffect
  useEffect(() => {
    function calculateNav() {
      const maxWidth = window.innerWidth;
      const availableSlots = Math.floor(maxWidth / ITEM_WIDTH) - FIXED_ITEMS;

      if (availableSlots >= NAV_ITEMS.length) {
        setVisibleItems(NAV_ITEMS);
        setOverflowItems([]);
      } else {
        setVisibleItems(NAV_ITEMS.slice(0, availableSlots));
        setOverflowItems(NAV_ITEMS.slice(availableSlots));
      }
    }

    calculateNav();
    window.addEventListener('resize', calculateNav);

    return () => window.removeEventListener('resize', calculateNav);
  }, []);

  // Mouse click outside dekstop more useEffect
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (openDesktop && desktopRef.current && !desktopRef.current.contains(e.target as Node)) {
        setOpenDesktop(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDesktop]);

  // Mouse click outside mobile hamburger useEffect
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (openMobile && mobileRef.current && !mobileRef.current.contains(e.target as Node)) {
        setOpenMobile(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openMobile]);

  return (
    <div className="public-root">
      <header className="public-header">
        <Link href={home()} className="public-logo">
          Ganin
        </Link>

        {/* DESKTOP + TABLET NAV */}
        <nav className="public-nav">
          <div className="nav-main">
            {visibleItems.map((item) => (
              <Link key={item.href} href={item.href} className="public-nav-link">
                {item.label}
              </Link>
            ))}

            {overflowItems.length > 0 && (
              <div className="relative" ref={desktopRef}>
                <button onClick={() => setOpenDesktop(!openDesktop)} className="public-nav-link">
                  More ▾
                </button>

                {openDesktop && (
                  <div className="nav-dropdown">
                    {overflowItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="nav-dropdown-item"
                        onClick={() => setOpenDesktop(!openDesktop)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="nav-mobile">
            <div className="relative" ref={mobileRef}>
              <button className="nav-hamburger" onClick={() => setOpenMobile(!openMobile)} aria-label="Toggle menu">
                ☰
              </button>

              {openMobile && (
                <div className="nav-dropdown">
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="nav-dropdown-item"
                      onClick={() => setOpenMobile((v) => !v)}
                    >
                      {item.label}
                    </Link>
                  ))}

                  <div className="mobile-auth my-2 border-t border-border" />

                  <Link href={login()} className="nav-dropdown-item mobile-auth">
                    Log in
                  </Link>

                  <Link href={register()} className="nav-dropdown-cta mobile-auth">
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>

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
