import Image from 'next/image';
import Link from 'next/link';
import { services, memberships } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Serveis – Escola d'Art Punto Áureo",
  description: 'Totes les classes i tallers: Total Art, Plein Air, Art Brunch, Model en Viu i més. Lloret de Mar.',
};

export default function ServiciosPage() {
  return (
    <>
      {/* HEADER foto */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <Image src="/images/class-students.jpg" alt="Classes de pintura" fill priority className="object-cover object-top" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)' }} />
        <div className="relative max-w-7xl mx-auto px-8 pb-16 w-full">
          <p className="text-xs tracking-[0.3em] uppercase mb-4 text-white opacity-50">El que oferim</p>
          <h1 className="font-serif text-6xl md:text-8xl text-white">Classes<br /><em>i Tallers</em></h1>
        </div>
      </section>

      {/* LLISTA DE SERVEIS */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {services.map((s, i) => (
            <div
              key={s.id}
              className="flex gap-8 py-10 px-6 transition-colors hover:bg-stone-50"
              style={{
                borderBottom: '1px solid var(--line)',
                borderRight: i % 2 === 0 ? '1px solid var(--line)' : 'none',
              }}
            >
              <div className="text-xs tracking-widest mt-1 flex-shrink-0 w-6" style={{ color: 'var(--ink-low)' }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h2 className="font-serif text-2xl" style={{ color: 'var(--ink)' }}>{s.title}</h2>
                  <span className="font-serif text-2xl flex-shrink-0" style={{ color: 'var(--green)' }}>€{s.price}</span>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--ink-mid)' }}>{s.description}</p>
                <div className="flex gap-6 text-xs" style={{ color: 'var(--ink-low)' }}>
                  <span>{s.schedule}</span>
                  <span>·</span>
                  <span>{s.level}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOTO intermitja */}
      <section className="relative h-[40vh] overflow-hidden">
        <Image src="/images/class-easel.webp" alt="Pintant al cavallet" fill className="object-cover object-center" />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.3)' }} />
        <div className="relative h-full flex items-center justify-center">
          <blockquote className="text-center px-8">
            <p className="font-serif italic text-3xl md:text-5xl text-white max-w-2xl mx-auto leading-tight">
              "Aprende. Crea. Inspira."
            </p>
            <p className="text-xs tracking-widest uppercase mt-6 text-white opacity-50">Lidija Podgajni, fundadora</p>
          </blockquote>
        </div>
      </section>

      {/* MEMBRESIA */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--gold)' }}>Plans</p>
        <h2 className="font-serif text-5xl mb-16" style={{ color: 'var(--ink)' }}>Membresia<br /><em>i Preus</em></h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
          {memberships.map((m) => (
            <div
              key={m.id}
              className="p-10"
              style={{
                background: m.highlight ? 'var(--green)' : 'var(--paper)',
                border: m.highlight ? 'none' : '1px solid var(--line)',
              }}
            >
              {m.highlight && (
                <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>Recomanat</p>
              )}
              <h3 className="font-serif text-2xl mb-2" style={{ color: m.highlight ? 'white' : 'var(--ink)' }}>
                {m.title}
              </h3>
              <p className="font-serif text-5xl mb-8" style={{ color: m.highlight ? 'rgba(255,255,255,0.9)' : 'var(--green)' }}>
                {m.price ? `€${m.price}` : m.priceLabel}
              </p>
              <ul className="space-y-3 mb-8">
                {m.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm" style={{ color: m.highlight ? 'rgba(255,255,255,0.7)' : 'var(--ink-mid)' }}>
                    <span className="flex-shrink-0 mt-0.5" style={{ color: m.highlight ? 'rgba(255,255,255,0.5)' : 'var(--gold)' }}>—</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/reservar"
                className="block text-center text-sm tracking-[0.15em] uppercase py-3 transition-opacity hover:opacity-70"
                style={{
                  background: m.highlight ? 'white' : 'var(--green)',
                  color: m.highlight ? 'var(--green)' : 'white',
                }}
              >
                Reservar ara
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
