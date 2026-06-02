import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Galeria – Escola d'Art Punto Áureo",
  description: 'Obres dels nostres alumnes. Pintura a l\'oli, aquarel·la, mosaic i molt més.',
};

const paintings = [
  { src: '/images/gallery-1.jpg', title: 'Armonia Costera', tech: 'Oli sobre tela', size: 'tall' },
  { src: '/images/gallery-2.jpg', title: 'Llum Daurada', tech: 'Oli sobre tela', size: 'square' },
  { src: '/images/gallery-3.jpg', title: 'Plaça Mediterrània', tech: 'Oli sobre tela', size: 'wide' },
  { src: '/images/gallery-4.jpg', title: 'Tardor al Bosc', tech: 'Oli sobre tela', size: 'square' },
  { src: '/images/gallery-5.jpg', title: 'Riu entre Arbres', tech: 'Oli sobre tela', size: 'tall' },
  { src: '/images/gallery-6.jpg', title: 'Avinguda de Tardor', tech: 'Oli sobre tela', size: 'wide' },
];

const classPhotos = [
  { src: '/images/class-group.jpg', caption: 'Sessió de grup' },
  { src: '/images/class-easel.webp', caption: 'Taller individual' },
  { src: '/images/class-students.jpg', caption: 'Classes acadèmiques' },
  { src: '/images/class-solo.jpg', caption: 'Treball personal' },
];

export default function GaleriaPage() {
  return (
    <>
      {/* HEADER */}
      <section className="pt-40 pb-20 max-w-7xl mx-auto px-8">
        <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--gold)' }}>Treballs dels alumnes</p>
        <h1 className="font-serif text-6xl md:text-8xl" style={{ color: 'var(--ink)' }}>
          Galeria<br /><em>d'Art</em>
        </h1>
      </section>

      {/* NOTA */}
      <div className="max-w-7xl mx-auto px-8 mb-8">
        <p className="text-xs" style={{ color: 'var(--ink-low)' }}>
          Galeria il·lustrativa. Les fotografies reals de les obres dels alumnes s'afegiran aviat.
        </p>
      </div>

      {/* PAINTINGS GRID – editorial asimètric */}
      <section className="max-w-7xl mx-auto px-8 pb-24">
        {/* fila 1: 1 gran + 2 petites */}
        <div className="grid grid-cols-3 gap-3 mb-3">
          <div className="col-span-2 relative aspect-[4/3] overflow-hidden group">
            <Image src={paintings[0].src} alt={paintings[0].title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <PaintingOverlay {...paintings[0]} />
          </div>
          <div className="flex flex-col gap-3">
            {paintings.slice(1, 3).map((p) => (
              <div key={p.src} className="relative flex-1 overflow-hidden group" style={{ minHeight: '180px' }}>
                <Image src={p.src} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <PaintingOverlay {...p} />
              </div>
            ))}
          </div>
        </div>
        {/* fila 2: 3 iguals */}
        <div className="grid grid-cols-3 gap-3">
          {paintings.slice(3).map((p) => (
            <div key={p.src} className="relative aspect-square overflow-hidden group">
              <Image src={p.src} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <PaintingOverlay {...p} />
            </div>
          ))}
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-7xl mx-auto px-8 mb-24">
        <div className="h-px" style={{ background: 'var(--line)' }} />
      </div>

      {/* FOTOS DE CLASSE */}
      <section className="max-w-7xl mx-auto px-8 pb-24">
        <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--gold)' }}>La vida al taller</p>
        <h2 className="font-serif text-4xl md:text-5xl mb-16" style={{ color: 'var(--ink)' }}>
          Al nostre estudi
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {classPhotos.map(({ src, caption }) => (
            <div key={src} className="flex flex-col gap-3">
              <div className="relative aspect-[3/4] overflow-hidden group">
                <Image src={src} alt={caption} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <p className="text-xs" style={{ color: 'var(--ink-low)' }}>{caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative h-72 overflow-hidden flex items-center justify-center">
        <Image src="/images/class-group.jpg" alt="Classe" fill className="object-cover" />
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative text-center">
          <h2 className="font-serif text-4xl text-white mb-6">Crea la teva pròpia obra</h2>
          <Link
            href="/reservar"
            className="text-xs tracking-[0.2em] uppercase px-8 py-3 text-white border transition-opacity hover:opacity-70"
            style={{ borderColor: 'rgba(255,255,255,0.4)' }}
          >
            Reservar classe
          </Link>
        </div>
      </section>
    </>
  );
}

function PaintingOverlay({ title, tech }: { title: string; tech: string }) {
  return (
    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-all duration-500 flex flex-col justify-end p-5">
      <p className="text-white text-sm font-medium translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">{title}</p>
      <p className="text-white text-xs opacity-70 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">{tech}</p>
    </div>
  );
}
