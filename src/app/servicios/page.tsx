import Link from 'next/link';
import { services, memberships } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serveis i Classes – Escola d\'Art Punto Áureo',
  description: 'Descobreix totes les classes i tallers: Total Art, Plein Air, Art Brunch, Dibuix amb Model i molt més. Lloret de Mar.',
};

export default function ServiciosPage() {
  return (
    <>
      {/* HEADER */}
      <section
        className="pt-32 pb-20 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #FDF6EC 0%, #FAF0E2 100%)' }}
      >
        <div
          className="absolute top-0 right-0 w-72 h-72 blob-2 opacity-15 pointer-events-none"
          style={{ background: 'var(--primary)', transform: 'translate(30%, -20%)' }}
        />
        <div className="relative max-w-3xl mx-auto px-6">
          <div className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--primary)' }}>
            El que oferim
          </div>
          <h1 className="font-serif font-bold text-5xl md:text-6xl mb-6" style={{ color: 'var(--text)' }}>
            Classes i Tallers
          </h1>
          <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
            Vuit modalitats per a tots els nivells i horaris. Flexibles, creatives i accessibles.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20" style={{ background: 'var(--bg)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div
                key={s.id}
                className="rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              >
                <div className="flex items-start gap-5">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)' }}
                  >
                    {s.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h2 className="font-serif font-bold text-xl" style={{ color: 'var(--text)' }}>
                        {s.title}
                      </h2>
                      <span className="font-bold text-xl flex-shrink-0" style={{ color: 'var(--primary)' }}>
                        €{s.price}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                      {s.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span
                        className="text-xs px-3 py-1 rounded-full"
                        style={{ background: 'var(--border)', color: 'var(--text-muted)' }}
                      >
                        📅 {s.schedule}
                      </span>
                      <span
                        className="text-xs px-3 py-1 rounded-full"
                        style={{ background: 'var(--border)', color: 'var(--text-muted)' }}
                      >
                        🎯 {s.level}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIPS */}
      <section className="py-20" style={{ background: 'var(--surface)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--primary)' }}>
              Plans
            </div>
            <h2 className="font-serif font-bold text-4xl md:text-5xl mb-4" style={{ color: 'var(--text)' }}>
              Membresia i Preus
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {memberships.map((m) => (
              <div
                key={m.id}
                className="rounded-3xl p-8 relative overflow-hidden"
                style={{
                  background: m.highlight
                    ? 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)'
                    : 'var(--bg)',
                  border: m.highlight ? 'none' : '2px solid var(--border)',
                }}
              >
                {m.highlight && (
                  <div
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: 'var(--accent)', color: 'var(--text)' }}
                  >
                    Recomanat
                  </div>
                )}
                <h3
                  className="font-serif font-bold text-2xl mb-2"
                  style={{ color: m.highlight ? 'white' : 'var(--text)' }}
                >
                  {m.title}
                </h3>
                <div
                  className="font-bold text-4xl mb-6"
                  style={{ color: m.highlight ? 'var(--accent)' : 'var(--primary)' }}
                >
                  {m.price ? `€${m.price}` : m.priceLabel}
                  {m.price && <span className="text-base font-normal opacity-70"> / classe</span>}
                </div>
                <ul className="space-y-3">
                  {m.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-sm"
                      style={{ color: m.highlight ? 'rgba(255,255,255,0.9)' : 'var(--text-muted)' }}
                    >
                      <span style={{ color: m.highlight ? 'var(--accent)' : 'var(--primary)' }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/reservar"
                  className="mt-8 block text-center px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
                  style={{
                    background: m.highlight ? 'white' : 'var(--primary)',
                    color: m.highlight ? 'var(--primary)' : 'white',
                  }}
                >
                  Reservar ara
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ background: 'var(--bg)' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif font-bold text-3xl mb-4" style={{ color: 'var(--text)' }}>
            Tens dubtes sobre quin servei és per a tu?
          </h2>
          <p className="mb-8" style={{ color: 'var(--text-muted)' }}>
            Escriu-nos i t&apos;ajudarem a trobar la classe perfecta per al teu nivell i disponibilitat.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105"
            style={{ background: 'var(--primary)' }}
          >
            Contacta&apos;ns
          </Link>
        </div>
      </section>
    </>
  );
}
