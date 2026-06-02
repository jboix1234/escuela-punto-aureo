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

const timeSlots = [
  '10:00', '11:00', '12:00', '17:00', '18:00', '19:00',
];

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log('Booking data:', data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="rounded-3xl p-12 text-center"
        style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
      >
        <div className="text-6xl mb-6">🎨</div>
        <h2 className="font-serif font-bold text-3xl mb-4" style={{ color: 'var(--text)' }}>
          Reserva enviada!
        </h2>
        <p className="text-lg mb-2" style={{ color: 'var(--text-muted)' }}>
          Gràcies per contactar-nos.
        </p>
        <p className="text-base mb-8" style={{ color: 'var(--text-muted)' }}>
          Et confirmarem la reserva per correu electrònic en menys de 24 hores.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-6 py-3 rounded-full text-sm font-semibold"
          style={{ background: 'var(--primary)', color: 'white' }}
        >
          Fer una altra reserva
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl p-8"
      style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
    >
      <h2 className="font-serif font-bold text-2xl mb-8" style={{ color: 'var(--text)' }}>
        Dades de la reserva
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>
            Nom complet *
          </label>
          <input
            {...register('name', { required: 'El nom és obligatori' })}
            className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
            style={{
              background: 'var(--bg)',
              border: `1px solid ${errors.name ? '#E53E3E' : 'var(--border)'}`,
              color: 'var(--text)',
            }}
            placeholder="El teu nom"
          />
          {errors.name && (
            <p className="text-xs mt-1" style={{ color: '#E53E3E' }}>{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>
            Telèfon
          </label>
          <input
            {...register('phone')}
            className="w-full px-4 py-3 rounded-xl text-sm outline-none"
            style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)' }}
            placeholder="+34 600 000 000"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>
          Correu electrònic *
        </label>
        <input
          {...register('email', {
            required: 'El correu és obligatori',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Correu no vàlid' },
          })}
          type="email"
          className="w-full px-4 py-3 rounded-xl text-sm outline-none"
          style={{
            background: 'var(--bg)',
            border: `1px solid ${errors.email ? '#E53E3E' : 'var(--border)'}`,
            color: 'var(--text)',
          }}
          placeholder="nom@exemple.com"
        />
        {errors.email && (
          <p className="text-xs mt-1" style={{ color: '#E53E3E' }}>{errors.email.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>
          Classe o taller *
        </label>
        <select
          {...register('service', { required: 'Selecciona una classe' })}
          className="w-full px-4 py-3 rounded-xl text-sm outline-none"
          style={{
            background: 'var(--bg)',
            border: `1px solid ${errors.service ? '#E53E3E' : 'var(--border)'}`,
            color: 'var(--text)',
          }}
        >
          <option value="">Selecciona una opció...</option>
          {services.map((s) => (
            <option key={s.id} value={s.id}>
              {s.title} – €{s.price}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="text-xs mt-1" style={{ color: '#E53E3E' }}>{errors.service.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>
            Data preferida *
          </label>
          <input
            {...register('date', { required: 'Selecciona una data' })}
            type="date"
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-3 rounded-xl text-sm outline-none"
            style={{
              background: 'var(--bg)',
              border: `1px solid ${errors.date ? '#E53E3E' : 'var(--border)'}`,
              color: 'var(--text)',
            }}
          />
          {errors.date && (
            <p className="text-xs mt-1" style={{ color: '#E53E3E' }}>{errors.date.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>
            Hora preferida
          </label>
          <select
            {...register('time')}
            className="w-full px-4 py-3 rounded-xl text-sm outline-none"
            style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)' }}
          >
            <option value="">Qualsevol hora</option>
            {timeSlots.map((t) => (
              <option key={t} value={t}>{t}h</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>
          Nivell artístic
        </label>
        <div className="grid grid-cols-3 gap-3">
          {['Principiant', 'Intermedi', 'Avançat'].map((level) => (
            <label
              key={level}
              className="flex items-center gap-2 px-4 py-3 rounded-xl cursor-pointer text-sm transition-all"
              style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)' }}
            >
              <input
                {...register('level')}
                type="radio"
                value={level}
                className="accent-orange-600"
              />
              {level}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>
          Missatge o comentaris
        </label>
        <textarea
          {...register('message')}
          rows={4}
          className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
          style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)' }}
          placeholder="Explica'ns qualsevol cosa que vulguis que sapiguem..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 rounded-full text-white font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)' }}
      >
        {isSubmitting ? 'Enviant...' : 'Enviar reserva'}
      </button>

      <p className="text-center text-xs mt-4" style={{ color: 'var(--text-muted)' }}>
        * El pagament es realitzarà el dia de la classe. Sense despeses d&apos;avançament.
      </p>
    </form>
  );
}
