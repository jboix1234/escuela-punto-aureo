import type { Metadata } from 'next';
import BookingForm from '@/components/BookingForm';

export const metadata: Metadata = {
  title: 'Reservar Classe – Escola d\'Art Punto Áureo',
  description: 'Reserva la teva classe d\'art a Lloret de Mar. Fàcil i sense compromís.',
};

export default function ReservarPage() {
  return (
    <>
      {/* HEADER */}
      <section
        className="pt-32 pb-20 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #FDF6EC 0%, #FAF0E2 100%)' }}
      >
        <div
          className="absolute top-0 right-0 w-64 h-64 blob-2 opacity-15 pointer-events-none"
          style={{ background: 'var(--primary)', transform: 'translate(20%, -20%)' }}
        />
        <div className="relative max-w-3xl mx-auto px-6">
          <div className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--primary)' }}>
            Comença avui
          </div>
          <h1 className="font-serif font-bold text-5xl md:text-6xl mb-6" style={{ color: 'var(--text)' }}>
            Reserva la teva Classe
          </h1>
          <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
            Omple el formulari i et confirmarem la reserva per correu electrònic en menys de 24h.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-16" style={{ background: 'var(--bg)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Info sidebar */}
            <div className="space-y-8">
              <div
                className="rounded-2xl p-6"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              >
                <h3 className="font-serif font-semibold text-lg mb-4" style={{ color: 'var(--text)' }}>
                  Com funciona?
                </h3>
                <ol className="space-y-4">
                  {[
                    'Omple el formulari amb les teves dades',
                    'Tria la classe i la data preferida',
                    'Rebràs confirmació per email en 24h',
                    'Vine i disfruta creant!',
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 mt-0.5"
                        style={{ background: 'var(--primary)' }}
                      >
                        {i + 1}
                      </span>
                      <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div
                className="rounded-2xl p-6"
                style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)' }}
              >
                <h3 className="font-serif font-semibold text-lg mb-4 text-white">
                  Necessites ajuda?
                </h3>
                <p className="text-sm text-white opacity-80 mb-4">
                  Escriu-nos directament i t&apos;assessorem sense compromís.
                </p>
                <a
                  href="tel:+34699708055"
                  className="block text-center px-4 py-2 rounded-full text-sm font-semibold transition-all"
                  style={{ background: 'white', color: 'var(--primary)' }}
                >
                  📞 +34 699 708 055
                </a>
                <a
                  href="mailto:escuelapuntoaureo@gmail.com"
                  className="block text-center mt-2 text-xs text-white opacity-70"
                >
                  escuelapuntoaureo@gmail.com
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
