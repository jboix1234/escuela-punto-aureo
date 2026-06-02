'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/galeria', label: 'Galería' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(253,246,236,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(44,24,16,0.08)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="w-10 h-10 blob-1 flex items-center justify-center text-white font-bold text-sm transition-transform group-hover:scale-110"
            style={{ background: 'var(--primary)' }}
          >
            PA
          </div>
          <div>
            <div className="font-serif font-bold text-base leading-tight" style={{ color: 'var(--text)' }}>
              Punto Áureo
            </div>
            <div className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
              Escola d'Art
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium transition-colors relative group"
              style={{ color: pathname === href ? 'var(--primary)' : 'var(--text)' }}
            >
              {label}
              <span
                className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300"
                style={{
                  background: 'var(--primary)',
                  width: pathname === href ? '100%' : '0%',
                }}
              />
              <span
                className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300 group-hover:w-full"
                style={{
                  background: 'var(--accent)',
                  width: '0%',
                }}
              />
            </Link>
          ))}
          <Link
            href="/reservar"
            className="px-5 py-2 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ background: 'var(--primary)' }}
          >
            Reservar clase
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menú"
        >
          <span
            className="block h-0.5 w-6 transition-all duration-300"
            style={{
              background: 'var(--text)',
              transform: open ? 'rotate(45deg) translateY(8px)' : 'none',
            }}
          />
          <span
            className="block h-0.5 w-6 transition-all duration-300"
            style={{
              background: 'var(--text)',
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block h-0.5 w-6 transition-all duration-300"
            style={{
              background: 'var(--text)',
              transform: open ? 'rotate(-45deg) translateY(-8px)' : 'none',
            }}
          />
        </button>
      </div>

      {open && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ background: 'rgba(253,246,236,0.98)', borderBottom: '1px solid var(--border)' }}
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-base font-medium py-2"
              style={{ color: pathname === href ? 'var(--primary)' : 'var(--text)' }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/reservar"
            className="px-5 py-3 rounded-full text-sm font-semibold text-white text-center"
            style={{ background: 'var(--primary)' }}
          >
            Reservar clase
          </Link>
        </div>
      )}
    </header>
  );
}
