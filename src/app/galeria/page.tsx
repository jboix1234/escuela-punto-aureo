import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galeria – Escola d\'Art Punto Áureo',
  description: 'Treballs dels nostres alumnes. Pintura, dibuix, mosaics, aquarel·la i molt més.',
};

const artworks = [
  { bg: 'linear-gradient(135deg, #E8A838, #C8782A)', category: 'Pintura al Oli', title: 'Natura morta amb fruites', emoji: '🌻', size: 'large' },
  { bg: 'linear-gradient(135deg, #8B2E1A, #C8782A)', category: 'Dibuix', title: 'Estudi de figura humana', emoji: '✏️', size: 'normal' },
  { bg: 'linear-gradient(135deg, #4A7C59, #A8C5A0)', category: 'Aquarel·la', title: 'Plein Air – Costa Brava', emoji: '🌿', size: 'normal' },
  { bg: 'linear-gradient(135deg, #2C5282, #63B3ED)', category: 'Oli', title: 'Retrat expressiu', emoji: '🎭', size: 'large' },
  { bg: 'linear-gradient(135deg, #744210, #D69E2E)', category: 'Mosaic', title: 'Composició geomètrica', emoji: '🔷', size: 'normal' },
  { bg: 'linear-gradient(135deg, #553C9A, #B794F4)', category: 'Acrílic', title: 'Composició abstracta', emoji: '🎨', size: 'normal' },
  { bg: 'linear-gradient(135deg, #276749, #68D391)', category: 'Aquarel·la', title: 'Jardí botànic', emoji: '🌺', size: 'normal' },
  { bg: 'linear-gradient(135deg, #C05621, #F6AD55)', category: 'Oli', title: 'Posta de sol al mar', emoji: '🌅', size: 'large' },
  { bg: 'linear-gradient(135deg, #1A365D, #4299E1)', category: 'Llapis', title: 'Arquitectura urbana', emoji: '🏛️', size: 'normal' },
  { bg: 'linear-gradient(135deg, #702459, #ED64A6)', category: 'Acrílic', title: 'Flors en bloom', emoji: '🌸', size: 'normal' },
  { bg: 'linear-gradient(135deg, #2D3748, #718096)', category: 'Carbó', title: 'Estudi de llum i ombra', emoji: '🖤', size: 'normal' },
  { bg: 'linear-gradient(135deg, #B7791F, #F6E05E)', category: 'Mosaic', title: 'Mediterrani', emoji: '🌊', size: 'normal' },
];

const categories = ['Tots', 'Pintura al Oli', 'Dibuix', 'Aquarel·la', 'Mosaic', 'Acrílic'];

export default function GaleriaPage() {
  return (
    <>
      {/* HEADER */}
      <section
        className="pt-32 pb-20 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #FDF6EC 0%, #FAF0E2 100%)' }}
      >
        <div
          className="absolute bottom-0 left-0 w-64 h-64 blob-3 opacity-15 pointer-events-none"
          style={{ background: 'var(--accent)', transform: 'translate(-20%, 30%)' }}
        />
        <div className="relative max-w-3xl mx-auto px-6">
          <div className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--primary)' }}>
            Treballs dels alumnes
          </div>
          <h1 className="font-serif font-bold text-5xl md:text-6xl mb-6" style={{ color: 'var(--text)' }}>
            Galeria d&apos;Art
          </h1>
          <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
            Una mostra del talent que floreix cada dia a l&apos;escola. Cada obra explica una història única.
          </p>
        </div>
      </section>

      {/* NOTE */}
      <section className="py-6" style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            📸 Galeria il·lustrativa. Les fotografies reals de les obres dels alumnes s&apos;afegiran próximament.
          </p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-20" style={{ background: 'var(--bg)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {artworks.map((item, i) => (
              <div
                key={i}
                className="break-inside-avoid rounded-2xl overflow-hidden relative group cursor-pointer"
                style={{
                  background: item.bg,
                  aspectRatio: item.size === 'large' ? '4/5' : '1/1',
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center"
                  style={{ fontSize: item.size === 'large' ? '5rem' : '4rem', opacity: 0.3 }}>
                  {item.emoji}
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-xs font-medium text-white opacity-80 mb-1">{item.category}</div>
                  <div className="text-base font-serif font-semibold text-white">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 text-center"
        style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)' }}
      >
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif font-bold text-3xl text-white mb-4">
            Vols que la teva obra aparegui aquí?
          </h2>
          <p className="text-white opacity-80 mb-8">
            Apunta&apos;t a les nostres classes i comença a crear les teves pròpies obres d&apos;art.
          </p>
          <a
            href="/reservar"
            className="inline-block px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105"
            style={{ background: 'white', color: 'var(--primary)' }}
          >
            Reserva la teva classe
          </a>
        </div>
      </section>
    </>
  );
}
