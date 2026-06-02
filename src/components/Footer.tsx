'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { contact } from '@/lib/data';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  const hrefs = [
    `/${locale}`,
    `/${locale}/servicios`,
    `/${locale}/galeria`,
    `/${locale}/blog`,
    `/${locale}/reservar`,
    `/${locale}/contacto`,
  ];

  return (
    <footer style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="md:col-span-2">
            <div className="font-serif text-3xl mb-2" style={{ color: 'white' }}>Punto Áureo</div>
            <div className="text-xs tracking-[0.25em] uppercase mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Escola d&apos;Art · {t('since')}
            </div>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{t('tagline')}</p>
            <p className="font-serif italic text-lg mt-6" style={{ color: 'rgba(255,255,255,0.35)' }}>{t('quote')}</p>
          </div>

          <div>
            <div className="text-xs tracking-[0.2em] uppercase mb-6" style={{ color: 'rgba(255,255,255,0.35)' }}>{t('nav')}</div>
            <ul className="space-y-3">
              {(t.raw('links') as string[]).map((label: string, i: number) => (
                <li key={label}>
                  <Link href={hrefs[i]} className="text-sm transition-opacity hover:opacity-100" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs tracking-[0.2em] uppercase mb-6" style={{ color: 'rgba(255,255,255,0.35)' }}>{t('contact')}</div>
            <ul className="space-y-3 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              <li>{contact.address}</li>
              <li><a href={`tel:${contact.phone}`} className="hover:opacity-100 transition-opacity">{contact.phone}</a></li>
              <li><a href={`mailto:${contact.email}`} className="hover:opacity-100 transition-opacity">{contact.email}</a></li>
              <li className="pt-2 flex gap-4">
                <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest uppercase hover:opacity-100 transition-opacity">Instagram</a>
                <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest uppercase hover:opacity-100 transition-opacity">Facebook</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
          <p>© {new Date().getFullYear()} Escola d&apos;Art Punto Áureo. Lidija Podgajni. {t('rights')}</p>
          <p>Lloret de Mar, Girona, España</p>
        </div>
      </div>
    </footer>
  );
}
