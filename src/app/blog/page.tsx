import type { Metadata } from 'next';
import { blogPosts } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Blog – Escola d\'Art Punto Áureo',
  description: 'Articles d\'inspiració artística, consells de grans mestres i cultura de l\'art.',
};

const allPosts = [
  ...blogPosts,
  {
    id: 'beneficis-art-adults',
    title: 'Per què els Adults Haurien d\'Aprendre a Pintar',
    excerpt: 'Descobreix com la pintura pot transformar la vida quotidiana dels adults: reduïnt l\'estrès, millorant la concentració i obrint noves vies d\'expressió personal.',
    date: '2023-12-05',
    category: 'Benestar',
    readTime: '6 min',
  },
  {
    id: 'plein-air-lloret',
    title: 'Plein Air a la Costa Brava: Els Millors Racons per Pintar',
    excerpt: 'Una guia dels llocs més inspiradors de Lloret de Mar i la Costa Brava per pintar a l\'aire lliure, des de les cales amagades fins als pobles medievals.',
    date: '2023-11-18',
    category: 'Tutorials',
    readTime: '7 min',
  },
  {
    id: 'mosaic-historia',
    title: 'La Fascinant Història del Mosaic Mediterrani',
    excerpt: 'Des dels paviments romans fins als mosaics modernistes de Gaudí, un recorregut per la rica tradició del mosaic a la Mediterrània.',
    date: '2023-10-30',
    category: 'Art & Cultura',
    readTime: '8 min',
  },
];

const categoryColors: Record<string, string> = {
  'Inspiració': '#C8782A',
  'Benestar': '#4A7C59',
  'Tutorials': '#2C5282',
  'Art & Cultura': '#553C9A',
};

const categoryEmoji: Record<string, string> = {
  'Inspiració': '✨',
  'Benestar': '🌿',
  'Tutorials': '📝',
  'Art & Cultura': '🏛️',
};

export default function BlogPage() {
  return (
    <>
      {/* HEADER */}
      <section
        className="pt-32 pb-20 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #FDF6EC 0%, #FAF0E2 100%)' }}
      >
        <div
          className="absolute top-0 left-0 w-72 h-72 blob-1 opacity-10 pointer-events-none"
          style={{ background: 'var(--secondary)', transform: 'translate(-30%, -20%)' }}
        />
        <div className="relative max-w-3xl mx-auto px-6">
          <div className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--primary)' }}>
            Coneixement i Inspiració
          </div>
          <h1 className="font-serif font-bold text-5xl md:text-6xl mb-6" style={{ color: 'var(--text)' }}>
            Blog
          </h1>
          <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
            Articles sobre art, tècniques, grans mestres i els beneficis de la creativitat.
          </p>
        </div>
      </section>

      {/* FEATURED POST */}
      <section className="py-12" style={{ background: 'var(--surface)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
            style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)' }}
          >
            <div className="p-10 md:p-12 flex flex-col justify-center">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
                style={{ background: 'var(--accent)', color: 'var(--text)' }}
              >
                Destacat
              </span>
              <h2 className="font-serif font-bold text-3xl text-white mb-4">
                {allPosts[0].title}
              </h2>
              <p className="text-white opacity-80 text-sm leading-relaxed mb-6">
                {allPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs text-white opacity-60">
                <span>{allPosts[0].date}</span>
                <span>·</span>
                <span>{allPosts[0].readTime} de lectura</span>
              </div>
            </div>
            <div className="flex items-center justify-center p-12 text-9xl opacity-40">
              {categoryEmoji[allPosts[0].category] || '✨'}
            </div>
          </div>
        </div>
      </section>

      {/* ALL POSTS */}
      <section className="py-20" style={{ background: 'var(--bg)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              >
                <div
                  className="h-44 flex items-center justify-center text-6xl"
                  style={{
                    background: `linear-gradient(135deg, ${categoryColors[post.category] || 'var(--primary)'} 0%, var(--secondary) 100%)`,
                  }}
                >
                  <span className="opacity-50">{categoryEmoji[post.category] || '✨'}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{
                        background: `${categoryColors[post.category]}20`,
                        color: categoryColors[post.category] || 'var(--primary)',
                      }}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{post.readTime}</span>
                  </div>
                  <h3 className="font-serif font-semibold text-lg mb-3" style={{ color: 'var(--text)' }}>
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                    {post.excerpt.slice(0, 100)}…
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      {new Date(post.date).toLocaleDateString('ca-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                    <span className="text-sm font-medium" style={{ color: 'var(--primary)' }}>
                      Llegir →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
