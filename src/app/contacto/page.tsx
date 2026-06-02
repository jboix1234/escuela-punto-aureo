import Image from 'next/image';
import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { contact } from '@/lib/data';

export const metadata: Metadata = {
  title: "Contacte – Escola d'Art Punto Áureo",
  description: "Contacta amb l'Escola d'Art Punto Áureo a Lloret de Mar.",
};

export default function ContactoPage() {
  return (
    <>
      {/* HEADER */}
      <section className="pt-40 pb-20 max-w-7xl mx-auto px-8">
        <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--gold)' }}>Parla amb nosaltres</p>
        <h1 className="font-serif text-6xl md:text-8xl" style={{ color: 'var(--ink)' }}>Contacte</h1>
      </section>

      <section className="max-w-7xl mx-auto px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* INFO */}
          <div>
            {/* dades */}
            <div className="space-y-8 mb-12">
              {[
                { label: 'Adreça', value: contact.address, href: undefined },
                { label: 'Telèfon', value: contact.phone, href: `tel:${contact.phone}` },
                { label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
              ].map(({ label, value, href }) => (
                <div key={label} className="flex gap-8 items-start pb-8" style={{ borderBottom: '1px solid var(--line)' }}>
                  <span className="text-xs tracking-[0.2em] uppercase w-20 flex-shrink-0 mt-0.5" style={{ color: 'var(--ink-low)' }}>
                    {label}
                  </span>
                  {href ? (
                    <a href={href} className="text-sm font-medium transition-opacity hover:opacity-60" style={{ color: 'var(--ink)' }}>
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm" style={{ color: 'var(--ink)' }}>{value}</p>
                  )}
                </div>
              ))}

              <div className="flex gap-8 items-start pb-8" style={{ borderBottom: '1px solid var(--line)' }}>
                <span className="text-xs tracking-[0.2em] uppercase w-20 flex-shrink-0 mt-0.5" style={{ color: 'var(--ink-low)' }}>Xarxes</span>
                <div className="flex gap-6">
                  <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="text-sm tracking-widest uppercase transition-opacity hover:opacity-60" style={{ color: 'var(--ink)' }}>Instagram</a>
                  <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="text-sm tracking-widest uppercase transition-opacity hover:opacity-60" style={{ color: 'var(--ink)' }}>Facebook</a>
                </div>
              </div>
            </div>

            {/* horaris */}
            <p className="text-xs tracking-[0.2em] uppercase mb-6" style={{ color: 'var(--gold)' }}>Horaris</p>
            <table className="w-full text-sm mb-12">
              <tbody>
                {[
                  ['Dimarts – Dimecres', '10:00 – 12:00 · 17:00 – 19:00'],
                  ['Divendres', 'Consultar'],
                  ['Dissabte', '09:00 – 12:00 (Art Brunch)'],
                  ['Diumenge – Dilluns', 'Tancat'],
                ].map(([day, hours]) => (
                  <tr key={day} style={{ borderBottom: '1px solid var(--line)' }}>
                    <td className="py-3 font-medium" style={{ color: 'var(--ink)' }}>{day}</td>
                    <td className="py-3 text-right" style={{ color: 'var(--ink-mid)' }}>{hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* foto */}
            <div className="relative aspect-video overflow-hidden">
              <Image src="/images/about.jpg" alt="Taller d'art" fill className="object-cover" />
            </div>
          </div>

          {/* FORMULARI */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* MAPA */}
      <section className="relative h-64 overflow-hidden" style={{ background: 'var(--paper)' }}>
        <div className="h-full flex flex-col items-center justify-center gap-4">
          <p className="font-serif text-2xl" style={{ color: 'var(--ink)' }}>Escola d&apos;Art Punto Áureo</p>
          <p className="text-sm" style={{ color: 'var(--ink-mid)' }}>{contact.address}</p>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(contact.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-xs tracking-[0.2em] uppercase border-b pb-0.5 transition-opacity hover:opacity-60"
            style={{ color: 'var(--ink)', borderColor: 'var(--line)' }}
          >
            Obrir a Google Maps
          </a>
        </div>
      </section>
    </>
  );
}
