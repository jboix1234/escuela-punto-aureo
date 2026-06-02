'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = { name: string; email: string; subject: string; message: string };

const inputBase: React.CSSProperties = {
  background: 'transparent',
  borderBottom: '1px solid var(--line)',
  color: 'var(--ink)',
  width: '100%',
  padding: '10px 0',
  fontSize: '14px',
  outline: 'none',
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 700));
    console.log('Contact:', data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-16 text-center">
        <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--gold)' }}>Missatge enviat</p>
        <h3 className="font-serif text-3xl mb-4" style={{ color: 'var(--ink)' }}>Gràcies!</h3>
        <p className="text-sm mb-8" style={{ color: 'var(--ink-mid)' }}>Et respondrem aviat.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-xs tracking-widest uppercase border-b pb-0.5"
          style={{ color: 'var(--ink)', borderColor: 'var(--line)' }}
        >
          Enviar un altre missatge
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
      <p className="text-xs tracking-[0.25em] uppercase mb-2" style={{ color: 'var(--gold)' }}>Formulari de contacte</p>
      <h2 className="font-serif text-3xl mb-8" style={{ color: 'var(--ink)' }}>Envia&apos;ns un missatge</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div>
          <label className="block text-xs tracking-[0.15em] uppercase mb-3" style={{ color: 'var(--ink-low)' }}>Nom *</label>
          <input {...register('name', { required: true })} style={{ ...inputBase, borderColor: errors.name ? '#c0392b' : undefined }} placeholder="El teu nom" />
          {errors.name && <p className="text-xs mt-1" style={{ color: '#c0392b' }}>Camp obligatori</p>}
        </div>
        <div>
          <label className="block text-xs tracking-[0.15em] uppercase mb-3" style={{ color: 'var(--ink-low)' }}>Email *</label>
          <input
            {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
            type="email"
            style={{ ...inputBase, borderColor: errors.email ? '#c0392b' : undefined }}
            placeholder="nom@exemple.com"
          />
          {errors.email && <p className="text-xs mt-1" style={{ color: '#c0392b' }}>Correu no vàlid</p>}
        </div>
      </div>

      <div>
        <label className="block text-xs tracking-[0.15em] uppercase mb-3" style={{ color: 'var(--ink-low)' }}>Assumpte</label>
        <input {...register('subject')} style={inputBase} placeholder="Sobre què vols parlar?" />
      </div>

      <div>
        <label className="block text-xs tracking-[0.15em] uppercase mb-3" style={{ color: 'var(--ink-low)' }}>Missatge *</label>
        <textarea
          {...register('message', { required: true })}
          rows={6}
          style={{ ...inputBase, resize: 'none', borderColor: errors.message ? '#c0392b' : undefined }}
          placeholder="Escriu aquí el teu missatge…"
        />
        {errors.message && <p className="text-xs mt-1" style={{ color: '#c0392b' }}>Camp obligatori</p>}
      </div>

      <div className="pt-4" style={{ borderTop: '1px solid var(--line)' }}>
        <button
          type="submit"
          disabled={isSubmitting}
          className="text-sm tracking-[0.15em] uppercase px-10 py-4 text-white transition-opacity hover:opacity-80 disabled:opacity-50"
          style={{ background: 'var(--green)' }}
        >
          {isSubmitting ? 'Enviant…' : 'Enviar missatge'}
        </button>
      </div>
    </form>
  );
}
