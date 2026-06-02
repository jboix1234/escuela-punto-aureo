'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;

  const links = [
    { href: `/${locale}/servicios`, label: t('serveis') },
    { href: `/${locale}/galeria`, label: t('galeria') },
    { href: `/${locale}/blog`, label: t('blog') },
    { href: `/${locale}/contacto`, label: t('contacte') },
  ];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || !isHome || open;

  const switchLocale = () => {
    const newLocale = locale === 'ca' ? 'es' : 'ca';
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

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
        <Link href={`/${locale}`} className="flex flex-col leading-none group">
          <span className="font-serif text-xl tracking-wide transition-colors" style={{ color: solid ? 'var(--ink)' : 'white' }}>
            Punto Áureo
          </span>
          <span className="text-[10px] tracking-[0.25em] uppercase transition-colors" style={{ color: solid ? 'var(--ink-low)' : 'rgba(255,255,255,0.7)' }}>
            {t('escola')}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[13px] tracking-[0.12em] uppercase transition-all duration-300 relative"
              style={{
                color: solid ? (pathname.startsWith(href) ? 'var(--green)' : 'var(--ink-mid)') : 'rgba(255,255,255,0.85)',
                fontWeight: pathname.startsWith(href) ? 500 : 300,
              }}
            >
              {label}
              {pathname.startsWith(href) && (
                <span className="absolute -bottom-0.5 left-0 right-0 h-px" style={{ background: 'var(--green)' }} />
              )}
            </Link>
          ))}

          {/* Language switcher */}
          <button
            onClick={switchLocale}
            className="text-[12px] tracking-[0.15em] uppercase px-3 py-1.5 transition-all duration-300 hover:opacity-70 font-medium"
            style={{
              color: solid ? 'var(--ink-mid)' : 'rgba(255,255,255,0.7)',
              border: solid ? '1px solid var(--line)' : '1px solid rgba(255,255,255,0.3)',
            }}
            title={locale === 'ca' ? 'Cambiar a español' : 'Canviar a català'}
          >
            {locale === 'ca' ? 'ES' : 'CA'}
          </button>

          <Link
            href={`/${locale}/reservar`}
            className="text-[12px] tracking-[0.15em] uppercase px-6 py-2.5 transition-all duration-300 hover:opacity-80"
            style={{
              background: solid ? 'var(--green)' : 'rgba(255,255,255,0.15)',
              color: 'white',
              border: solid ? 'none' : '1px solid rgba(255,255,255,0.4)',
            }}
          >
            {t('reservar')}
          </Link>
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={switchLocale}
            className="text-[11px] tracking-widest uppercase px-2.5 py-1 font-medium"
            style={{
              color: solid ? 'var(--ink-mid)' : 'rgba(255,255,255,0.8)',
              border: solid ? '1px solid var(--line)' : '1px solid rgba(255,255,255,0.3)',
            }}
          >
            {locale === 'ca' ? 'ES' : 'CA'}
          </button>
          <button onClick={() => setOpen(!open)} className="flex flex-col gap-1.5 p-2" aria-label="Menú">
            {[0, 1, 2].map((i) => (
              <span key={i} className="block h-px w-6 transition-all duration-300" style={{
                background: solid ? 'var(--ink)' : 'white',
                transform: open && i === 0 ? 'rotate(45deg) translateY(8px)' : open && i === 2 ? 'rotate(-45deg) translateY(-8px)' : 'none',
                opacity: open && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-8 pb-8 pt-4 flex flex-col gap-6 bg-white border-t" style={{ borderColor: 'var(--line)' }}>
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className="text-sm tracking-widest uppercase" style={{ color: 'var(--ink-mid)' }}>
              {label}
            </Link>
          ))}
          <Link href={`/${locale}/reservar`} className="text-sm tracking-widest uppercase text-white text-center py-3" style={{ background: 'var(--green)' }}>
            {t('reservar')}
          </Link>
        </div>
      )}
    </header>
  );
}
