import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { contact } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contacte – Escola d\'Art Punto Áureo',
  description: 'Contacta amb l\'Escola d\'Art Punto Áureo a Lloret de Mar. Telèfon, email i formulari de contacte.',
};

export default function ContactoPage() {
  return (
    <>
      {/* HEADER */}
      <section
        className="pt-32 pb-20 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #FDF6EC 0%, #FAF0E2 100%)' }}
      >
        <div className="relative max-w-3xl mx-auto px-6">
          <div className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--primary)' }}>
            Parla amb nosaltres
          </div>
          <h1 className="font-serif font-bold text-5xl md:text-6xl mb-6" style={{ color: 'var(--text)' }}>
            Contacte
          </h1>
          <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
            Estem aquí per respondre qualsevol dubte. Escriu-nos o truca&apos;ns!
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16" style={{ background: 'var(--bg)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="font-serif font-bold text-3xl mb-8" style={{ color: 'var(--text)' }}>
                On trobar-nos
              </h2>

              <div className="space-y-6">
                {[
                  { icon: '📍', label: 'Adreça', value: contact.address, href: undefined },
                  { icon: '📞', label: 'Telèfon', value: contact.phone, href: `tel:${contact.phone}` },
                  { icon: '✉️', label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
                ].map(({ icon, label, value, href }) => (
                  <div
                    key={label}
                    className="flex gap-4 items-start p-5 rounded-2xl"
                    style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: 'var(--bg)' }}
                    >
                      {icon}
                    </div>
                    <div>
                      <div className="text-xs font-medium tracking-widest uppercase mb-1" style={{ color: 'var(--text-muted)' }}>
                        {label}
                      </div>
                      {href ? (
                        <a href={href} className="font-medium hover:underline" style={{ color: 'var(--primary)' }}>
                          {value}
                        </a>
                      ) : (
                        <p className="font-medium" style={{ color: 'var(--text)' }}>{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="mt-8">
                <h3 className="font-serif font-semibold text-lg mb-4" style={{ color: 'var(--text)' }}>
                  Xarxes Socials
                </h3>
                <div className="flex gap-4">
                  <a
                    href={contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3 rounded-xl font-medium text-sm transition-all hover:-translate-y-0.5"
                    style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}
                  >
                    📷 Instagram
                  </a>
                  <a
                    href={contact.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3 rounded-xl font-medium text-sm transition-all hover:-translate-y-0.5"
                    style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}
                  >
                    👥 Facebook
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div
                className="mt-8 p-6 rounded-2xl"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              >
                <h3 className="font-serif font-semibold text-lg mb-4" style={{ color: 'var(--text)' }}>
                  Horaris
                </h3>
                <table className="w-full text-sm">
                  <tbody className="space-y-2">
                    {[
                      ['Dimarts – Dimecres', '10:00 – 12:00h / 17:00 – 19:00h'],
                      ['Divendres', 'Consultar'],
                      ['Dissabte', '09:00 – 12:00h (Art Brunch)'],
                      ['Diumenge – Dilluns', 'Tancat'],
                    ].map(([day, hours]) => (
                      <tr key={day} className="border-b last:border-0" style={{ borderColor: 'var(--border)' }}>
                        <td className="py-2 font-medium" style={{ color: 'var(--text)' }}>{day}</td>
                        <td className="py-2 text-right" style={{ color: 'var(--text-muted)' }}>{hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-0" style={{ background: 'var(--surface)' }}>
        <div className="w-full h-80 relative" style={{ background: 'var(--border)' }}>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div className="text-4xl">📍</div>
            <div className="text-center">
              <p className="font-serif font-semibold text-lg mb-1" style={{ color: 'var(--text)' }}>
                Escola d&apos;Art Punto Áureo
              </p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{contact.address}</p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(contact.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2 rounded-full text-sm font-semibold text-white"
                style={{ background: 'var(--primary)' }}
              >
                Obrir a Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
