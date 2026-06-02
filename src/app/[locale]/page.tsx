import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { services, benefits, blogPosts } from '@/lib/data';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <>
      <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
        <Image src="/images/hero.jpg" alt="Pintant al taller" fill priority className="object-cover object-center" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.25) 55%, transparent 100%)' }} />
        <div className="relative max-w-7xl mx-auto px-8 pb-20 w-full">
          <p className="text-xs tracking-[0.3em] uppercase mb-6 text-white opacity-60">{t('badge')}</p>
          <h1 className="font-serif text-7xl md:text-[100px] text-white leading-none mb-6 max-w-3xl">
            Escola<br />d&apos;Art<br /><em>Punto Áureo</em>
          </h1>
          <p className="text-base text-white opacity-70 max-w-md mb-10 font-light leading-relaxed">{t('heroSub')}</p>
          <div className="flex items-center gap-8">
            <Link href="reservar" className="text-sm tracking-[0.15em] uppercase px-8 py-4 text-white transition-opacity hover:opacity-80" style={{ background: 'var(--green)' }}>
              {t('ctaReservar')}
            </Link>
            <Link href="servicios" className="text-sm tracking-[0.15em] uppercase text-white opacity-70 hover:opacity-100 transition-opacity border-b pb-0.5" style={{ borderColor: 'rgba(255,255,255,0.4)' }}>
              {t('ctaServeis')}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 px-8" style={{ background: 'var(--green)', color: 'white' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {[
            { n: '+18', label: t('stat1') },
            { n: '8', label: t('stat2') },
            { n: '∞', label: t('stat3') },
            { n: 'Lloret', label: t('stat4') },
          ].map(({ n, label }) => (
            <div key={label} className="text-center md:text-left">
              <div className="font-serif text-4xl">{n}</div>
              <div className="text-xs tracking-widest uppercase mt-1 opacity-60">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase mb-6" style={{ color: 'var(--gold)' }}>{t('aboutLabel')}</p>
            <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-tight" style={{ color: 'var(--ink)' }}>
              {t('aboutTitle')}<br /><em>{t('aboutTitleEm')}</em>
            </h2>
            <p className="text-sm leading-loose mb-6" style={{ color: 'var(--ink-mid)' }}>{t('aboutP1')}</p>
            <p className="text-sm leading-loose mb-10" style={{ color: 'var(--ink-mid)' }}>{t('aboutP2')}</p>
            <Link href="servicios" className="text-sm tracking-[0.15em] uppercase border-b pb-1 transition-opacity hover:opacity-60" style={{ color: 'var(--ink)', borderColor: 'var(--ink)' }}>
              {t('aboutLink')}
            </Link>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image src="/images/about.jpg" alt="Estudi d'art" fill className="object-cover" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8"><div className="h-px" style={{ background: 'var(--line)' }} /></div>

      <section className="max-w-7xl mx-auto px-8 py-28">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--gold)' }}>{t('classesLabel')}</p>
            <h2 className="font-serif text-5xl md:text-6xl" style={{ color: 'var(--ink)' }}>{t('classesTitle')}<br /><em>{t('classesTitleEm')}</em></h2>
          </div>
          <Link href="servicios" className="text-xs tracking-[0.2em] uppercase border-b pb-0.5 transition-opacity hover:opacity-50" style={{ color: 'var(--ink-mid)', borderColor: 'var(--line)' }}>
            {t('classesLink')}
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-16">
          <div className="relative aspect-[3/2] overflow-hidden">
            <Image src="/images/class-group.jpg" alt="Classe en grup" fill className="object-cover transition-transform duration-700 hover:scale-105" />
          </div>
          <div className="relative aspect-[3/2] overflow-hidden">
            <Image src="/images/class-students.jpg" alt="Estudiants" fill className="object-cover transition-transform duration-700 hover:scale-105" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {services.slice(0, 8).map((s, i) => (
            <div key={s.id}>
              <div className="text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--ink-low)' }}>{String(i + 1).padStart(2, '0')}</div>
              <h3 className="font-serif text-xl mb-2" style={{ color: 'var(--ink)' }}>{s.title}</h3>
              <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--ink-mid)' }}>{s.description.slice(0, 80)}…</p>
              <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--line)' }}>
                <span className="text-sm font-medium" style={{ color: 'var(--green)' }}>€{s.price}</span>
                <span className="text-xs" style={{ color: 'var(--ink-low)' }}>{s.level}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-8 flex items-end justify-between mb-10 pt-8">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--gold)' }}>{t('galleryLabel')}</p>
            <h2 className="font-serif text-5xl md:text-6xl" style={{ color: 'var(--ink)' }}>{t('galleryTitle')}</h2>
          </div>
          <Link href="galeria" className="text-xs tracking-[0.2em] uppercase border-b pb-0.5 transition-opacity hover:opacity-50" style={{ color: 'var(--ink-mid)', borderColor: 'var(--line)' }}>
            {t('galleryLink')}
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3">
          {['/images/gallery-1.jpg','/images/gallery-2.jpg','/images/gallery-3.jpg','/images/gallery-4.jpg','/images/gallery-5.jpg','/images/gallery-6.jpg'].map((src) => (
            <div key={src} className="relative aspect-square overflow-hidden group">
              <Image src={src} alt="Obra" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-28 px-8" style={{ background: 'var(--paper)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-20 items-start">
            <div className="md:w-1/3 flex-shrink-0">
              <p className="text-xs tracking-[0.25em] uppercase mb-6" style={{ color: 'var(--gold)' }}>{t('benefitsLabel')}</p>
              <h2 className="font-serif text-5xl md:text-6xl mb-8" style={{ color: 'var(--ink)' }}>{t('benefitsTitle')}<br /><em>{t('benefitsTitleEm')}</em></h2>
              <div className="relative aspect-square overflow-hidden">
                <Image src="/images/palette.jpg" alt="Paleta" fill className="object-cover" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-0 md:pt-16">
              {benefits.map((b, i) => (
                <div key={b.title} className="py-6" style={{ borderBottom: '1px solid var(--line)' }}>
                  <div className="flex items-baseline gap-4 mb-1">
                    <span className="font-serif text-xs" style={{ color: 'var(--gold)' }}>{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="font-medium text-sm" style={{ color: 'var(--ink)' }}>{b.title}</h3>
                  </div>
                  <p className="text-xs leading-relaxed pl-8" style={{ color: 'var(--ink-mid)' }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-28">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--gold)' }}>{t('blogLabel')}</p>
            <h2 className="font-serif text-5xl md:text-6xl" style={{ color: 'var(--ink)' }}>{t('blogTitle')}</h2>
          </div>
          <Link href="blog" className="text-xs tracking-[0.2em] uppercase border-b pb-0.5 transition-opacity hover:opacity-50" style={{ color: 'var(--ink-mid)', borderColor: 'var(--line)' }}>
            {t('blogLink')}
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {blogPosts.slice(0, 3).map((post) => (
            <Link key={post.id} href={`blog/${post.id}`} className="group block">
              <div className="relative aspect-video overflow-hidden mb-6">
                <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--gold)' }}>{post.category}</p>
              <h3 className="font-serif text-2xl mb-3 leading-tight transition-opacity group-hover:opacity-60" style={{ color: 'var(--ink)' }}>{post.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--ink-mid)' }}>{post.excerpt.slice(0, 100)}…</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image src="/images/class-solo.jpg" alt="Pintar" fill className="object-cover" />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.6)' }} />
        <div className="relative text-center px-8">
          <h2 className="font-serif text-5xl md:text-7xl text-white mb-8">{t('ctaTitle')}</h2>
          <Link href="reservar" className="inline-block text-sm tracking-[0.2em] uppercase px-10 py-4 text-white transition-opacity hover:opacity-80" style={{ border: '1px solid rgba(255,255,255,0.5)' }}>
            {t('ctaBtn')}
          </Link>
        </div>
      </section>
    </>
  );
}
