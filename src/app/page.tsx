import Link from 'next/link';
import { services, benefits, blogPosts } from '@/lib/data';

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #FDF6EC 0%, #FAF0E2 40%, #F5E6D0 100%)' }}
      >
        <div
          className="absolute top-20 right-0 w-96 h-96 blob-2 opacity-20 pointer-events-none"
          style={{ background: 'var(--primary)', transform: 'translateX(30%)' }}
        />
        <div
          className="absolute bottom-10 left-0 w-64 h-64 blob-3 opacity-15 pointer-events-none"
          style={{ background: 'var(--accent)', transform: 'translateX(-20%)' }}
        />

        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 text-center">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-8 tracking-widest uppercase"
            style={{ background: 'var(--surface)', color: 'var(--primary)', border: '1px solid var(--border)' }}
          >
            Lloret de Mar · Fundada el 2006
          </div>

          <h1 className="font-serif font-bold text-6xl md:text-8xl mb-6 leading-none tracking-tight" style={{ color: 'var(--text)' }}>
            Escola d&apos;Art
            <br />
            <span style={{ color: 'var(--primary)' }}>Punto Áureo</span>
          </h1>

          <p className="text-xl md:text-2xl font-serif italic mb-4" style={{ color: 'var(--text-muted)' }}>
            &ldquo;Aprende. Crea. Inspira.&rdquo;
          </p>

          <p className="max-w-xl mx-auto text-base md:text-lg mb-12 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Un lloc especial on la creativitat flueix lliurement. Formació artística per a tots els
            nivells, de principiants a professionals, en un ambient càlid i sense competicions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservar"
              className="px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ background: 'var(--primary)' }}
            >
              Reserva la teva classe
            </Link>
            <Link
              href="/servicios"
              className="px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
              style={{ color: 'var(--text)', border: '2px solid var(--border)', background: 'transparent' }}
            >
              Veure serveis
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[
              { value: '+18', label: "Anys d'experiència" },
              { value: '8', label: 'Modalitats de classe' },
              { value: '∞', label: 'Creativitat' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="font-serif font-bold text-3xl md:text-4xl" style={{ color: 'var(--primary)' }}>
                  {value}
                </div>
                <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <div className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>Descobreix</div>
          <div className="w-px h-8 animate-bounce" style={{ background: 'var(--primary)' }} />
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24" style={{ background: 'var(--surface)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--primary)' }}>
                Qui som
              </div>
              <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6" style={{ color: 'var(--text)' }}>
                Un espai on l&apos;art
                <br />
                <span style={{ color: 'var(--primary)' }}>transforma vides</span>
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                Fundada el 2006 per <strong style={{ color: 'var(--text)' }}>Lidija Podgajni</strong>, l&apos;escola Punto Áureo
                és un referent artístic a la Costa Brava. Oferim formació en pintura, dibuix, mosaics,
                cal·ligrafia i moltes altres disciplines en un ambient càlid i familiar.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
                Creiem que tothom té un artista a dins. La nostra missió és ajudar-te a trobar-lo
                i cultivar-lo, siguis principiant o un artista amb experiència.
              </p>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 font-semibold text-sm"
                style={{ color: 'var(--primary)' }}
              >
                Veure tots els serveis →
              </Link>
            </div>

            <div className="relative">
              <div
                className="absolute -top-6 -right-6 w-48 h-48 blob-2 opacity-30"
                style={{ background: 'var(--accent)' }}
              />
              <div
                className="relative rounded-3xl overflow-hidden aspect-square flex items-center justify-center text-8xl"
                style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)' }}
              >
                <span>🎨</span>
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 30% 70%, var(--accent) 0%, transparent 50%), radial-gradient(circle at 70% 30%, white 0%, transparent 40%)',
                  }}
                />
              </div>
              <div
                className="absolute -bottom-4 -left-4 px-4 py-3 rounded-2xl shadow-lg"
                style={{ background: 'white', border: '1px solid var(--border)' }}
              >
                <div className="font-serif font-semibold" style={{ color: 'var(--text)' }}>Lidija Podgajni</div>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Fundadora & Professora</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24" style={{ background: 'var(--bg)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--primary)' }}>
              El que oferim
            </div>
            <h2 className="font-serif font-bold text-4xl md:text-5xl mb-4" style={{ color: 'var(--text)' }}>
              Classes i Tallers
            </h2>
            <p className="max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Des de dibuix acadèmic fins a art brunch al matí. Troba la modalitat que s&apos;adapta al teu ritme.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((s) => (
              <div
                key={s.id}
                className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-serif font-semibold text-lg mb-2" style={{ color: 'var(--text)' }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                  {s.description.length > 100 ? s.description.slice(0, 100) + '…' : s.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg" style={{ color: 'var(--primary)' }}>
                    €{s.price}
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full" style={{ background: 'var(--border)', color: 'var(--text-muted)' }}>
                    {s.level}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/servicios"
              className="inline-block px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
              style={{ border: '2px solid var(--primary)', color: 'var(--primary)', background: 'transparent' }}
            >
              Veure tots els serveis
            </Link>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-sm font-medium tracking-widest uppercase mb-4 opacity-80" style={{ color: 'var(--accent)' }}>
              Per què aprendre art?
            </div>
            <h2 className="font-serif font-bold text-4xl md:text-5xl mb-4 text-white">
              Beneficis de la Pintura
            </h2>
            <p className="max-w-xl mx-auto text-white opacity-80">
              L&apos;art no és sols una habilitat. És una eina poderosa per al benestar físic i emocional.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}
              >
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="font-serif font-semibold text-sm text-white mb-2">{b.title}</h3>
                <p className="text-xs text-white opacity-70">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-24" style={{ background: 'var(--surface)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--primary)' }}>
              Treballs dels alumnes
            </div>
            <h2 className="font-serif font-bold text-4xl md:text-5xl mb-4" style={{ color: 'var(--text)' }}>
              La nostra Galeria
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { bg: 'linear-gradient(135deg, #E8A838, #C8782A)', label: 'Natura morta · Oli', emoji: '🌻' },
              { bg: 'linear-gradient(135deg, #8B2E1A, #C8782A)', label: 'Figura humana · Llapis', emoji: '✏️' },
              { bg: 'linear-gradient(135deg, #4A7C59, #A8C5A0)', label: 'Plein Air · Aquarel·la', emoji: '🌿' },
              { bg: 'linear-gradient(135deg, #2C5282, #63B3ED)', label: 'Retrat · Oli', emoji: '🎭' },
              { bg: 'linear-gradient(135deg, #744210, #D69E2E)', label: 'Mosaic · Tècnica directa', emoji: '🔷' },
              { bg: 'linear-gradient(135deg, #553C9A, #B794F4)', label: 'Abstract · Acrílic', emoji: '🎨' },
            ].map((item, i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl overflow-hidden relative group cursor-pointer"
                style={{ background: item.bg }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30 group-hover:opacity-50 transition-opacity">
                  {item.emoji}
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity rounded-2xl" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs text-white font-medium bg-black bg-opacity-50 px-3 py-1 rounded-full">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/galeria"
              className="inline-block px-8 py-4 rounded-full font-semibold text-base text-white transition-all duration-300 hover:scale-105"
              style={{ background: 'var(--primary)' }}
            >
              Veure galeria completa
            </Link>
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-24" style={{ background: 'var(--bg)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--primary)' }}>
              Inspiració
            </div>
            <h2 className="font-serif font-bold text-4xl md:text-5xl" style={{ color: 'var(--text)' }}>
              Blog
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              >
                <div
                  className="h-40 flex items-center justify-center text-6xl"
                  style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)' }}
                >
                  {post.category === 'Inspiració' ? '✨' : '🏛️'}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{ background: 'var(--border)', color: 'var(--text-muted)' }}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{post.readTime} de lectura</span>
                  </div>
                  <h3 className="font-serif font-semibold text-lg mb-3" style={{ color: 'var(--text)' }}>
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {post.excerpt.slice(0, 90)}…
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-semibold"
              style={{ color: 'var(--primary)' }}
            >
              Veure tots els articles →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        className="py-32 text-center relative overflow-hidden"
        style={{ background: 'var(--text)' }}
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 blob-1 opacity-10 pointer-events-none"
          style={{ background: 'var(--accent)', transform: 'translate(30%, -30%)' }}
        />
        <div className="relative max-w-3xl mx-auto px-6">
          <div className="text-4xl mb-6">🎨</div>
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-white mb-6">
            Comença el teu camí artístic avui
          </h2>
          <p className="text-lg mb-10 opacity-70 text-white">
            Reserva la teva primera classe sense compromís. Et esperem a Lloret de Mar!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservar"
              className="px-10 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ background: 'var(--primary)' }}
            >
              Reserva ara
            </Link>
            <Link
              href="/contacto"
              className="px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
              style={{ color: 'white', border: '2px solid rgba(255,255,255,0.3)' }}
            >
              Contacta&apos;ns
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
