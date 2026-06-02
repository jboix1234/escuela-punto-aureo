import Image from 'next/image';
import Link from 'next/link';
import { services, benefits, blogPosts } from '@/lib/data';

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── full-bleed photo amb overlay */}
      <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Pintant al taller"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.25) 55%, transparent 100%)' }} />
        <div className="relative max-w-7xl mx-auto px-8 pb-20 w-full">
          <p className="text-xs tracking-[0.3em] uppercase mb-6 text-white opacity-60">
            Lloret de Mar · Des de 2006
          </p>
          <h1 className="font-serif text-7xl md:text-[100px] text-white leading-none mb-6 max-w-3xl">
            Escola<br />d'Art<br />
            <em>Punto Áureo</em>
          </h1>
          <p className="text-base text-white opacity-70 max-w-md mb-10 font-light leading-relaxed">
            Un espai on la creativitat flueix lliurement. Classes per a tots els nivells,
            de principiants a professionals.
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="/reservar"
              className="text-sm tracking-[0.15em] uppercase px-8 py-4 text-white transition-opacity hover:opacity-80"
              style={{ background: 'var(--green)' }}
            >
              Reservar classe
            </Link>
            <Link
              href="/servicios"
              className="text-sm tracking-[0.15em] uppercase text-white opacity-70 hover:opacity-100 transition-opacity border-b pb-0.5"
              style={{ borderColor: 'rgba(255,255,255,0.4)' }}
            >
              Descobrir serveis
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTRO STRIP ── */}
      <section className="py-10 px-8" style={{ background: 'var(--green)', color: 'white' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {[
            { n: '+18', label: "Anys d'experiència" },
            { n: '8', label: 'Modalitats de classe' },
            { n: '∞', label: 'Creativitat' },
            { n: 'Lloret', label: 'Costa Brava' },
          ].map(({ n, label }) => (
            <div key={label} className="text-center md:text-left">
              <div className="font-serif text-4xl">{n}</div>
              <div className="text-xs tracking-widest uppercase mt-1 opacity-60">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── text + foto estudi */}
      <section className="max-w-7xl mx-auto px-8 py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase mb-6" style={{ color: 'var(--gold)' }}>Qui som</p>
            <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-tight" style={{ color: 'var(--ink)' }}>
              Art que<br /><em>transforma</em>
            </h2>
            <p className="text-sm leading-loose mb-6" style={{ color: 'var(--ink-mid)' }}>
              Fundada el 2006 per <strong className="font-medium" style={{ color: 'var(--ink)' }}>Lidija Podgajni</strong>,
              l'escola Punto Áureo és un referent artístic a la Costa Brava. Oferim formació en
              pintura, dibuix, mosaics, cal·ligrafia i moltes altres disciplines en un ambient
              càlid i familiar.
            </p>
            <p className="text-sm leading-loose mb-10" style={{ color: 'var(--ink-mid)' }}>
              Creiem que tothom té un artista a dins. La nostra missió és ajudar-te a trobar-lo
              i cultivar-lo, siguis principiant o artista amb experiència.
            </p>
            <Link
              href="/servicios"
              className="text-sm tracking-[0.15em] uppercase border-b pb-1 transition-opacity hover:opacity-60"
              style={{ color: 'var(--ink)', borderColor: 'var(--ink)' }}
            >
              Veure serveis
            </Link>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/about.jpg"
              alt="Estudi d'art ple de color"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="h-px w-full" style={{ background: 'var(--line)' }} />
      </div>

      {/* ── CLASSES ── dues fotos + llista */}
      <section className="max-w-7xl mx-auto px-8 py-28">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--gold)' }}>El que oferim</p>
            <h2 className="font-serif text-5xl md:text-6xl" style={{ color: 'var(--ink)' }}>Classes<br /><em>i Tallers</em></h2>
          </div>
          <Link
            href="/servicios"
            className="text-xs tracking-[0.2em] uppercase border-b pb-0.5 transition-opacity hover:opacity-50"
            style={{ color: 'var(--ink-mid)', borderColor: 'var(--line)' }}
          >
            Veure tots els serveis
          </Link>
        </div>

        {/* fotos de classe */}
        <div className="grid grid-cols-2 gap-4 mb-16">
          <div className="relative aspect-[3/2] overflow-hidden">
            <Image src="/images/class-group.jpg" alt="Classe en grup" fill className="object-cover transition-transform duration-700 hover:scale-105" />
          </div>
          <div className="relative aspect-[3/2] overflow-hidden">
            <Image src="/images/class-students.jpg" alt="Estudiants pintant" fill className="object-cover transition-transform duration-700 hover:scale-105" />
          </div>
        </div>

        {/* serveis en grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {services.slice(0, 8).map((s, i) => (
            <div key={s.id} className="group">
              <div className="text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--ink-low)' }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="font-serif text-xl mb-2" style={{ color: 'var(--ink)' }}>{s.title}</h3>
              <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--ink-mid)' }}>
                {s.description.slice(0, 80)}…
              </p>
              <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--line)' }}>
                <span className="text-sm font-medium" style={{ color: 'var(--green)' }}>€{s.price}</span>
                <span className="text-xs" style={{ color: 'var(--ink-low)' }}>{s.level}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── GALERIA PREVIEW ── foto a sang */}
      <section>
        <div className="max-w-7xl mx-auto px-8 flex items-end justify-between mb-10 pt-8">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--gold)' }}>Obres</p>
            <h2 className="font-serif text-5xl md:text-6xl" style={{ color: 'var(--ink)' }}>Galeria</h2>
          </div>
          <Link
            href="/galeria"
            className="text-xs tracking-[0.2em] uppercase border-b pb-0.5 transition-opacity hover:opacity-50"
            style={{ color: 'var(--ink-mid)', borderColor: 'var(--line)' }}
          >
            Galeria completa
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3">
          {[
            { src: '/images/gallery-1.jpg', label: 'Armonia Costera · Oli' },
            { src: '/images/gallery-2.jpg', label: 'Llum Daurada · Oli' },
            { src: '/images/gallery-3.jpg', label: 'Plaça Mediterrània · Oli' },
            { src: '/images/gallery-4.jpg', label: 'Tardor · Oli' },
            { src: '/images/gallery-5.jpg', label: 'Riu · Oli' },
            { src: '/images/gallery-6.jpg', label: 'Avinguda · Oli' },
          ].map(({ src, label }) => (
            <div key={src} className="relative aspect-square overflow-hidden group">
              <Image src={src} alt={label} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <p className="text-xs text-white tracking-widest uppercase">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BENEFITS ── sobre fons verd */}
      <section className="py-28 px-8" style={{ background: 'var(--paper)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-20 items-start">
            <div className="md:w-1/3 flex-shrink-0">
              <p className="text-xs tracking-[0.25em] uppercase mb-6" style={{ color: 'var(--gold)' }}>Per què l'art?</p>
              <h2 className="font-serif text-5xl md:text-6xl mb-8" style={{ color: 'var(--ink)' }}>
                Beneficis<br /><em>reals</em>
              </h2>
              <div className="relative aspect-square overflow-hidden">
                <Image src="/images/palette.jpg" alt="Paleta de colors" fill className="object-cover" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 md:pt-16">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-4 items-start">
                  <span className="text-xl flex-shrink-0 mt-1">{b.icon}</span>
                  <div>
                    <h3 className="font-medium text-sm mb-1" style={{ color: 'var(--ink)' }}>{b.title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--ink-mid)' }}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section className="max-w-7xl mx-auto px-8 py-28">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--gold)' }}>Inspiració</p>
            <h2 className="font-serif text-5xl md:text-6xl" style={{ color: 'var(--ink)' }}>Blog</h2>
          </div>
          <Link href="/blog" className="text-xs tracking-[0.2em] uppercase border-b pb-0.5 transition-opacity hover:opacity-50" style={{ color: 'var(--ink-mid)', borderColor: 'var(--line)' }}>
            Tots els articles
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {blogPosts.map((post, i) => (
            <article key={post.id}>
              <div className="relative aspect-video overflow-hidden mb-6">
                <Image
                  src={i === 0 ? '/images/brushes.jpg' : i === 1 ? '/images/process.jpg' : '/images/class-easel.webp'}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
                {post.category} · {post.readTime}
              </p>
              <h3 className="font-serif text-2xl mb-3 leading-tight" style={{ color: 'var(--ink)' }}>{post.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--ink-mid)' }}>{post.excerpt.slice(0, 100)}…</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA ── foto a sang amb overlay */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image src="/images/class-solo.jpg" alt="Pintar" fill className="object-cover" />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.6)' }} />
        <div className="relative text-center px-8">
          <h2 className="font-serif text-5xl md:text-7xl text-white mb-8">
            Comença avui
          </h2>
          <Link
            href="/reservar"
            className="inline-block text-sm tracking-[0.2em] uppercase px-10 py-4 text-white transition-opacity hover:opacity-80"
            style={{ border: '1px solid rgba(255,255,255,0.5)' }}
          >
            Reservar la primera classe
          </Link>
        </div>
      </section>
    </>
  );
}
