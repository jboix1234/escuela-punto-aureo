'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/servicios', label: 'Serveis' },
  { href: '/galeria', label: 'Galeria' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacte' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || !isHome || open;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: solid ? 'rgba(255,255,255,0.97)' : 'transparent',
        borderBottom: solid ? '1px solid var(--line)' : 'none',
        backdropFilter: solid ? 'blur(16px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-none group">
          <span
            className="font-serif text-xl tracking-wide transition-colors"
            style={{ color: solid ? 'var(--ink)' : 'white' }}
          >
            Punto Áureo
          </span>
          <span
            className="text-[10px] tracking-[0.25em] uppercase transition-colors"
            style={{ color: solid ? 'var(--ink-low)' : 'rgba(255,255,255,0.7)' }}
          >
            Escola d'Art
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[13px] tracking-[0.12em] uppercase transition-all duration-300 relative"
              style={{
                color: solid
                  ? (pathname === href ? 'var(--green)' : 'var(--ink-mid)')
                  : 'rgba(255,255,255,0.85)',
                fontWeight: pathname === href ? 500 : 300,
              }}
            >
              {label}
              {pathname === href && (
                <span
                  className="absolute -bottom-0.5 left-0 right-0 h-px"
                  style={{ background: 'var(--green)' }}
                />
              )}
            </Link>
          ))}
          <Link
            href="/reservar"
            className="text-[12px] tracking-[0.15em] uppercase px-6 py-2.5 transition-all duration-300 hover:opacity-80"
            style={{
              background: solid ? 'var(--green)' : 'rgba(255,255,255,0.15)',
              color: 'white',
              border: solid ? 'none' : '1px solid rgba(255,255,255,0.4)',
            }}
          >
            Reservar
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menú"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-px w-6 transition-all duration-300"
              style={{
                background: solid ? 'var(--ink)' : 'white',
                transform: open && i === 0 ? 'rotate(45deg) translateY(8px)' : open && i === 2 ? 'rotate(-45deg) translateY(-8px)' : 'none',
                opacity: open && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-8 pb-8 pt-4 flex flex-col gap-6 bg-white border-t" style={{ borderColor: 'var(--line)' }}>
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className="text-sm tracking-widest uppercase" style={{ color: 'var(--ink-mid)' }}>
              {label}
            </Link>
          ))}
          <Link href="/reservar" className="text-sm tracking-widest uppercase text-white text-center py-3" style={{ background: 'var(--green)' }}>
            Reservar
          </Link>
        </div>
      )}
    </header>
  );
}
