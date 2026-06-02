'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { services } from '@/lib/data';

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  level: string;
  message: string;
};

const timeSlots = ['10:00', '11:00', '12:00', '17:00', '18:00', '19:00'];

const inputBase: React.CSSProperties = {
  background: 'transparent',
  borderBottom: '1px solid var(--line)',
  color: 'var(--ink)',
  width: '100%',
  padding: '10px 0',
  fontSize: '14px',
  outline: 'none',
};

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log('Booking:', data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-20 text-center">
        <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--gold)' }}>Reserva enviada</p>
        <h2 className="font-serif text-4xl mb-4" style={{ color: 'var(--ink)' }}>Gràcies!</h2>
        <p className="text-sm mb-10" style={{ color: 'var(--ink-mid)' }}>
          Et confirmarem la reserva per correu electrònic en menys de 24 hores.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-xs tracking-[0.2em] uppercase border-b pb-0.5 transition-opacity hover:opacity-50"
          style={{ color: 'var(--ink)', borderColor: 'var(--line)' }}
        >
          Fer una altra reserva
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div>
          <label className="block text-xs tracking-[0.15em] uppercase mb-3" style={{ color: 'var(--ink-low)' }}>Nom complet *</label>
          <input {...register('name', { required: true })} style={{ ...inputBase, borderColor: errors.name ? '#c0392b' : undefined }} placeholder="El teu nom" />
          {errors.name && <p className="text-xs mt-1" style={{ color: '#c0392b' }}>Camp obligatori</p>}
        </div>
        <div>
          <label className="block text-xs tracking-[0.15em] uppercase mb-3" style={{ color: 'var(--ink-low)' }}>Telèfon</label>
          <input {...register('phone')} style={inputBase} placeholder="+34 600 000 000" />
        </div>
      </div>

      <div>
        <label className="block text-xs tracking-[0.15em] uppercase mb-3" style={{ color: 'var(--ink-low)' }}>Correu electrònic *</label>
        <input
          {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
          type="email"
          style={{ ...inputBase, borderColor: errors.email ? '#c0392b' : undefined }}
          placeholder="nom@exemple.com"
        />
        {errors.email && <p className="text-xs mt-1" style={{ color: '#c0392b' }}>Correu no vàlid</p>}
      </div>

      <div>
        <label className="block text-xs tracking-[0.15em] uppercase mb-3" style={{ color: 'var(--ink-low)' }}>Classe o taller *</label>
        <select
          {...register('service', { required: true })}
          style={{ ...inputBase, borderColor: errors.service ? '#c0392b' : undefined }}
        >
          <option value="">Selecciona una opció…</option>
          {services.map((s) => (
            <option key={s.id} value={s.id}>{s.title} — €{s.price}</option>
          ))}
        </select>
        {errors.service && <p className="text-xs mt-1" style={{ color: '#c0392b' }}>Selecciona una classe</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div>
          <label className="block text-xs tracking-[0.15em] uppercase mb-3" style={{ color: 'var(--ink-low)' }}>Data preferida *</label>
          <input
            {...register('date', { required: true })}
            type="date"
            min={new Date().toISOString().split('T')[0]}
            style={{ ...inputBase, borderColor: errors.date ? '#c0392b' : undefined }}
          />
          {errors.date && <p className="text-xs mt-1" style={{ color: '#c0392b' }}>Selecciona una data</p>}
        </div>
        <div>
          <label className="block text-xs tracking-[0.15em] uppercase mb-3" style={{ color: 'var(--ink-low)' }}>Hora preferida</label>
          <select {...register('time')} style={inputBase}>
            <option value="">Qualsevol hora</option>
            {timeSlots.map((t) => <option key={t} value={t}>{t}h</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs tracking-[0.15em] uppercase mb-4" style={{ color: 'var(--ink-low)' }}>Nivell artístic</label>
        <div className="flex gap-8">
          {['Principiant', 'Intermedi', 'Avançat'].map((level) => (
            <label key={level} className="flex items-center gap-3 text-sm cursor-pointer" style={{ color: 'var(--ink-mid)' }}>
              <input {...register('level')} type="radio" value={level} className="accent-stone-800" />
              {level}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs tracking-[0.15em] uppercase mb-3" style={{ color: 'var(--ink-low)' }}>Comentaris</label>
        <textarea
          {...register('message')}
          rows={4}
          style={{ ...inputBase, resize: 'none', paddingTop: '10px' }}
          placeholder="Qualsevol cosa que vulguis que sapiguem…"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4" style={{ borderTop: '1px solid var(--line)' }}>
        <button
          type="submit"
          disabled={isSubmitting}
          className="text-sm tracking-[0.15em] uppercase px-10 py-4 text-white transition-opacity hover:opacity-80 disabled:opacity-50"
          style={{ background: 'var(--green)' }}
        >
          {isSubmitting ? 'Enviant…' : 'Enviar reserva'}
        </button>
        <p className="text-xs" style={{ color: 'var(--ink-low)' }}>
          * El pagament es realitzarà el dia de la classe.
        </p>
      </div>
    </form>
  );
}
