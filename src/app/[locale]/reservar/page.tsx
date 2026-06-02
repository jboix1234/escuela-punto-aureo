import Image from 'next/image';
import type { Metadata } from 'next';
import BookingForm from '@/components/BookingForm';

export const metadata: Metadata = {
  title: "Reservar Classe – Escola d'Art Punto Áureo",
  description: 'Reserva la teva classe d\'art a Lloret de Mar. Fàcil i sense compromís.',
};

export default function ReservarPage() {
  return (
    <>
      {/* HEADER */}
      <section className="relative h-[45vh] min-h-[320px] flex items-end overflow-hidden">
        <Image src="/images/class-group.jpg" alt="Classe d'art" fill priority className="object-cover object-top" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)' }} />
        <div className="relative max-w-7xl mx-auto px-8 pb-14 w-full">
          <p className="text-xs tracking-[0.3em] uppercase mb-3 text-white opacity-50">Comença avui</p>
          <h1 className="font-serif text-6xl text-white">Reserva la teva<br /><em>Classe</em></h1>
        </div>
      </section>

      {/* FORM */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Sidebar */}
          <div className="space-y-10">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase mb-6" style={{ color: 'var(--gold)' }}>Com funciona</p>
              <ol className="space-y-5">
                {[
                  'Omple el formulari amb les teves dades',
                  'Tria la classe i la data preferida',
                  'Confirmació per email en 24h',
                  'Vine i disfruta creant!',
                ].map((step, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="font-serif text-2xl flex-shrink-0 leading-none mt-0.5" style={{ color: 'var(--gold)' }}>
                      {i + 1}.
                    </span>
                    <span className="text-sm leading-relaxed" style={{ color: 'var(--ink-mid)' }}>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="h-px" style={{ background: 'var(--line)' }} />

            <div>
              <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--gold)' }}>Necessites ajuda?</p>
              <p className="text-sm mb-4" style={{ color: 'var(--ink-mid)' }}>
                Escriu-nos directament i t&apos;assessorem sense compromís.
              </p>
              <a
                href="tel:+34699708055"
                className="block text-sm font-medium mb-2 transition-opacity hover:opacity-60"
                style={{ color: 'var(--ink)' }}
              >
                +34 699 708 055
              </a>
              <a
                href="mailto:escuelapuntoaureo@gmail.com"
                className="block text-sm transition-opacity hover:opacity-60"
                style={{ color: 'var(--ink-mid)' }}
              >
                escuelapuntoaureo@gmail.com
              </a>
            </div>

            <div className="relative aspect-square overflow-hidden">
              <Image src="/images/brushes.jpg" alt="Pinzells" fill className="object-cover" />
            </div>
          </div>

          {/* Formulari */}
          <div className="lg:col-span-2">
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  );
}
