import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/data';
import type { Metadata } from 'next';

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);
  if (!post) return {};
  return {
    title: `${post.title} – Escola d'Art Punto Áureo`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);
  if (!post) notFound();

  const others = blogPosts.filter((p) => p.id !== id).slice(0, 2);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <Image src={post.image} alt={post.title} fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }} />
        <div className="relative max-w-4xl mx-auto px-8 pb-16 w-full">
          <div className="flex items-center gap-4 mb-4 text-xs text-white opacity-60 tracking-widest uppercase">
            <Link href="/blog" className="hover:opacity-100 transition-opacity">← Blog</Link>
            <span>·</span>
            <span>{post.category}</span>
            <span>·</span>
            <span>{post.readTime} de lectura</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight max-w-2xl">
            {post.title}
          </h1>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="max-w-3xl mx-auto px-8 py-20">
        {/* meta */}
        <div className="flex items-center gap-6 pb-10 mb-10" style={{ borderBottom: '1px solid var(--line)' }}>
          <span className="text-xs tracking-[0.2em] uppercase" style={{ color: 'var(--gold)' }}>{post.category}</span>
          <span className="text-xs" style={{ color: 'var(--ink-low)' }}>
            {new Date(post.date).toLocaleDateString('ca-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
          </span>
          <span className="text-xs" style={{ color: 'var(--ink-low)' }}>{post.readTime} de lectura</span>
        </div>

        {/* excerpt */}
        <p className="font-serif text-xl md:text-2xl leading-relaxed mb-12" style={{ color: 'var(--ink-mid)' }}>
          {post.excerpt}
        </p>

        {/* content */}
        <div className="space-y-6">
          {post.content.map((block, i) => {
            if (block.type === 'h2') {
              return (
                <h2 key={i} className="font-serif text-3xl pt-8 pb-2" style={{ color: 'var(--ink)' }}>
                  {block.text}
                </h2>
              );
            }
            if (block.type === 'blockquote') {
              return (
                <blockquote
                  key={i}
                  className="py-8 px-10 my-8"
                  style={{ borderLeft: '3px solid var(--gold)', background: 'var(--paper)' }}
                >
                  <p className="font-serif italic text-xl md:text-2xl" style={{ color: 'var(--ink)' }}>
                    {block.text}
                  </p>
                </blockquote>
              );
            }
            return (
              <p key={i} className="text-base leading-loose" style={{ color: 'var(--ink-mid)' }}>
                {block.text}
              </p>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className="mt-20 p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          style={{ background: 'var(--paper)', borderTop: '1px solid var(--line)' }}
        >
          <div>
            <p className="font-serif text-2xl mb-1" style={{ color: 'var(--ink)' }}>Posa-ho en pràctica</p>
            <p className="text-sm" style={{ color: 'var(--ink-mid)' }}>Reserva una classe i experimenta-ho tu mateix.</p>
          </div>
          <Link
            href="/reservar"
            className="flex-shrink-0 text-sm tracking-[0.15em] uppercase px-8 py-3 text-white transition-opacity hover:opacity-80"
            style={{ background: 'var(--green)' }}
          >
            Reservar classe
          </Link>
        </div>
      </article>

      {/* MÉS ARTICLES */}
      {others.length > 0 && (
        <section className="max-w-7xl mx-auto px-8 pb-24">
          <div className="h-px mb-16" style={{ background: 'var(--line)' }} />
          <p className="text-xs tracking-[0.25em] uppercase mb-12" style={{ color: 'var(--gold)' }}>Més articles</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {others.map((p) => (
              <Link key={p.id} href={`/blog/${p.id}`} className="group">
                <div className="relative aspect-video overflow-hidden mb-5">
                  <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--gold)' }}>{p.category}</p>
                <h3 className="font-serif text-2xl leading-tight transition-opacity group-hover:opacity-60" style={{ color: 'var(--ink)' }}>
                  {p.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
