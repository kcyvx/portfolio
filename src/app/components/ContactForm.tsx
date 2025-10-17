'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
    <div className='flex flex-col justify-center md:flex-row'>
      <span className="p-1 px-3 rounded-full border border-dark text-muted text-sm text-center max-w-max m-auto">Me contacter</span>
      </div>

      <div className='flex gap-12'>
        <div className='w-full'>
          <h2 className='text-4xl mt-7'>Me contacter</h2>
          <p className='mt-6 text-muted'>Brisez le plafond de verre qui vous empêche de vous démarquer, vous avez envie de me présenter, ou simplement de dire bonjour ?, contactez moi via le formulaire de contact ou via mes différentes réseaux sociaux.</p>
        </div>
      <form onSubmit={handleSubmit} className="space-y-6 mt-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-muted mb-2">
              Nom complet
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="input rounded-lg w-full"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-muted mb-2">
              Adresse email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@exemple.com"
              className="input rounded-lg w-full"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-muted mb-2">
            Sujet
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Projet de développement web"
            className="input rounded-lg w-full"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            placeholder="Décrivez votre projet..."
            className="input rounded-lg w-full resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-primary rounded-lg w-full"
        >
          {loading ? 'Envoi en cours...' : 'Envoyer le message'}
        </button>

        {status === 'success' && (
          <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 rounded-lg">
            ✓ Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
          </div>
        )}

        {status === 'error' && (
          <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 rounded-lg">
            ✗ Une erreur s&apos;est produite. Veuillez réessayer ou me contacter directement.
          </div>
        )}
      </form>
      </div>
    </div>
  );
}