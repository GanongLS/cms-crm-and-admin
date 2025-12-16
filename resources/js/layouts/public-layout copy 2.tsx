'use client';

import { useEffect, useRef, useState } from 'react';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const dropdownRef = useRef<HTMLLIElement | null>(null);

  // Tutup dropdown kalau klik di luar
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <>
      <header className="fixed z-50 w-full bg-white shadow-md">
        <nav className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="text-xl font-bold">
            <a href="/">MyApp</a>
          </div>

          {/* Hamburger for Mobile */}
          <button className="text-gray-700 md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            ☰
          </button>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-6 md:flex">
            <li>
              <a href="/" className="hover:text-blue-600">
                Home
              </a>
            </li>

            {/* Products Dropdown */}
            <li ref={dropdownRef} className="relative">
              <button onClick={() => setProductsOpen(!productsOpen)} className="hover:text-blue-600">
                Products ▾
              </button>

              {productsOpen && (
                <ul className="absolute top-full w-40 rounded bg-white py-2 shadow-lg">
                  <li>
                    <a href="/product/a" className="block px-4 py-2 hover:bg-gray-100">
                      Product A
                    </a>
                  </li>
                  <li>
                    <a href="/product/b" className="block px-4 py-2 hover:bg-gray-100">
                      Product B
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <a href="/contacts" className="hover:text-blue-600">
                Contacts
              </a>
            </li>

            <li>
              <a href="/profile" className="hover:text-blue-600">
                Profile
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="bg-white shadow-md md:hidden">
            <ul className="flex flex-col gap-3 p-4">
              <li>
                <a href="/" className="block">
                  Home
                </a>
              </li>

              {/* Mobile Dropdown */}
              <li>
                <button onClick={() => setProductsOpen(!productsOpen)} className="w-full text-left">
                  Products ▾
                </button>
                {productsOpen && (
                  <ul className="pl-4">
                    <li>
                      <a href="/product/a" className="block py-1">
                        Product A
                      </a>
                    </li>
                    <li>
                      <a href="/product/b" className="block py-1">
                        Product B
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <a href="/contacts" className="block">
                  Contacts
                </a>
              </li>
              <li>
                <a href="/profile" className="block">
                  Profile
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main className="pt-20">{children}</main>
    </>
  );
}
