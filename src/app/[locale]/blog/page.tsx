import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { blogPosts } from '@/lib/data';

export const metadata: Metadata = {
  title: "Blog – Escola d'Art Punto Áureo",
  description: "Articles d'inspiració artística, consells de grans mestres i cultura de l'art.",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      {/* HEADER */}
      <section className="pt-40 pb-20 max-w-7xl mx-auto px-8">
        <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--gold)' }}>Inspiració i Cultura</p>
        <h1 className="font-serif text-6xl md:text-8xl" style={{ color: 'var(--ink)' }}>Blog</h1>
      </section>

      {/* ARTICLE DESTACAT */}
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <Link href={`/blog/${featured.id}`} className="group block" style={{ border: '1px solid var(--line)' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-12 flex flex-col justify-center" style={{ background: 'var(--paper)' }}>
              <p className="text-xs tracking-[0.2em] uppercase mb-6" style={{ color: 'var(--gold)' }}>
                Destacat · {featured.category}
              </p>
              <h2 className="font-serif text-4xl mb-6 leading-tight transition-opacity group-hover:opacity-60" style={{ color: 'var(--ink)' }}>
                {featured.title}
              </h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--ink-mid)' }}>
                {featured.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6 text-xs" style={{ color: 'var(--ink-low)' }}>
                  <span>{new Date(featured.date).toLocaleDateString('ca-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  <span>·</span>
                  <span>{featured.readTime} de lectura</span>
                </div>
                <span className="text-xs tracking-widest uppercase border-b pb-0.5 transition-opacity group-hover:opacity-40" style={{ color: 'var(--ink)', borderColor: 'var(--line)' }}>
                  Llegir →
                </span>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* DIVIDER */}
      <div className="max-w-7xl mx-auto px-8 mb-24">
        <div className="h-px" style={{ background: 'var(--line)' }} />
      </div>

      {/* GRID D'ARTICLES */}
      <section className="max-w-7xl mx-auto px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16">
          {rest.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="group block">
              <div className="relative aspect-video overflow-hidden mb-6">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
                {post.category} · {post.readTime}
              </p>
              <h3 className="font-serif text-2xl mb-3 leading-tight transition-opacity group-hover:opacity-60" style={{ color: 'var(--ink)' }}>
                {post.title}
              </h3>
              <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--ink-mid)' }}>
                {post.excerpt.slice(0, 110)}…
              </p>
              <p className="text-xs" style={{ color: 'var(--ink-low)' }}>
                {new Date(post.date).toLocaleDateString('ca-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
