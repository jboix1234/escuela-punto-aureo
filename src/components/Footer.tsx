import Link from 'next/link';
import { contact } from '@/lib/data';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--text)', color: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 blob-1 flex items-center justify-center text-white font-bold text-sm"
                style={{ background: 'var(--primary)' }}
              >
                PA
              </div>
              <div>
                <div className="font-serif font-bold text-base" style={{ color: 'var(--bg)' }}>
                  Punto Áureo
                </div>
                <div className="text-xs tracking-widest uppercase opacity-60">Escola d'Art</div>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Un lugar especial donde la creatividad fluye libremente. Desde 2006 formando artistas
              de todos los niveles en Lloret de Mar.
            </p>
            <p className="text-sm opacity-60 mt-4 italic font-serif">
              "Aprende. Crea. Inspira."
            </p>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-4" style={{ color: 'var(--accent)' }}>
              Navegación
            </h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Inicio' },
                { href: '/servicios', label: 'Servicios' },
                { href: '/galeria', label: 'Galería' },
                { href: '/blog', label: 'Blog' },
                { href: '/reservar', label: 'Reservar clase' },
                { href: '/contacto', label: 'Contacto' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                    style={{ color: 'var(--bg)' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-4" style={{ color: 'var(--accent)' }}>
              Contacto
            </h3>
            <ul className="space-y-3 text-sm opacity-70">
              <li>📍 {contact.address}</li>
              <li>
                <a href={`tel:${contact.phone}`} className="hover:opacity-100 transition-opacity">
                  📞 {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="hover:opacity-100 transition-opacity">
                  ✉️ {contact.email}
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:scale-110 transition-transform"
              >
                📷
              </a>
              <a
                href={contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:scale-110 transition-transform"
              >
                👥
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs opacity-50"
          style={{ borderTop: '1px solid rgba(253,246,236,0.15)' }}>
          <p>© {new Date().getFullYear()} Escola d'Art Punto Áureo. Tots els drets reservats.</p>
          <p>Lidija Podgajni · Lloret de Mar, Girona</p>
        </div>
      </div>
    </footer>
  );
}
