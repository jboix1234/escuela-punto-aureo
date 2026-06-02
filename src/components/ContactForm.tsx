'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log('Contact form:', data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="rounded-3xl p-10 text-center"
        style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
      >
        <div className="text-5xl mb-4">✉️</div>
        <h3 className="font-serif font-bold text-2xl mb-3" style={{ color: 'var(--text)' }}>
          Missatge enviat!
        </h3>
        <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
          Gràcies per escriure&apos;ns. Et respondrem aviat.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-6 py-2 rounded-full text-sm font-medium"
          style={{ background: 'var(--primary)', color: 'white' }}
        >
          Enviar un altre missatge
        </button>
      </div>
    );
  }

  const inputStyle = {
    background: 'var(--bg)',
    border: '1px solid var(--border)',
    color: 'var(--text)',
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl p-8"
      style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
    >
      <h2 className="font-serif font-bold text-2xl mb-8" style={{ color: 'var(--text)' }}>
        Envia&apos;ns un missatge
      </h2>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>Nom *</label>
          <input
            {...register('name', { required: 'El nom és obligatori' })}
            className="w-full px-4 py-3 rounded-xl text-sm outline-none"
            style={{ ...inputStyle, borderColor: errors.name ? '#E53E3E' : 'var(--border)' }}
            placeholder="El teu nom"
          />
          {errors.name && <p className="text-xs mt-1" style={{ color: '#E53E3E' }}>{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>Email *</label>
          <input
            {...register('email', {
              required: 'El correu és obligatori',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Correu no vàlid' },
            })}
            type="email"
            className="w-full px-4 py-3 rounded-xl text-sm outline-none"
            style={{ ...inputStyle, borderColor: errors.email ? '#E53E3E' : 'var(--border)' }}
            placeholder="nom@exemple.com"
          />
          {errors.email && <p className="text-xs mt-1" style={{ color: '#E53E3E' }}>{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>Assumpte</label>
          <input
            {...register('subject')}
            className="w-full px-4 py-3 rounded-xl text-sm outline-none"
            style={inputStyle}
            placeholder="Sobre què vols parlar?"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>Missatge *</label>
          <textarea
            {...register('message', { required: 'El missatge és obligatori' })}
            rows={5}
            className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
            style={{ ...inputStyle, borderColor: errors.message ? '#E53E3E' : 'var(--border)' }}
            placeholder="Escriu aquí el teu missatge..."
          />
          {errors.message && <p className="text-xs mt-1" style={{ color: '#E53E3E' }}>{errors.message.message}</p>}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 w-full py-4 rounded-full text-white font-bold text-base transition-all duration-300 hover:scale-105 disabled:opacity-60"
        style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)' }}
      >
        {isSubmitting ? 'Enviant...' : 'Enviar missatge'}
      </button>
    </form>
  );
}
