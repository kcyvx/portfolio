'use client';

import { useState } from 'react';
import Button from "./layout/Button"
import { Linkedin, Github, Check, Loader2 } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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
    setShowSuccess(false);

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
        setShowSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Cacher l'animation après 3 secondes
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
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
    <section className="w-full" id='contact'>
      <div className='flex flex-col justify-center md:flex-row'>
        <span className="p-1 px-3 rounded-full border border-dark text-muted text-sm text-center max-w-max m-auto">Me contacter</span>
      </div>

      <div className='flex flex-col md:flex-row gap-8 md:gap-3'>
        <div className='w-full md:w-1/2'>
          <h2 className='text-4xl mt-18'>Me contacter</h2>
          <p className='mt-6 text-muted'>Brisez le plafond de verre qui vous empêche de vous démarquer, vous avez envie de me présenter un projet, ou simplement de dire bonjour ?, contactez moi via le formulaire de contact ou via mes différentes réseaux sociaux.</p>

          <div className='flex gap-3 mt-4'>
            <a href='https://www.linkedin.com/in/thomas-galabert-55626a2a6' target='_blank' className='p-2 bg-background-light border border-color rounded-full text-secondary'><Linkedin size={15}/></a>
            <a href='https://github.com/kcyvx' target='_blank' className='p-2 bg-background-light border border-color rounded-full text-secondary'><Github size={15}/></a>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 relative">
          <form onSubmit={handleSubmit} className="space-y-6 mt-6 relative md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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

            <Button
              type="submit"
              disabled={loading}
              className="rounded-lg w-full flex items-center justify-center gap-2"
            >
              {loading && <Loader2 className="animate-spin" size={20} />}
              {loading ? 'Envoi en cours...' : 'Envoyer le message'}
            </Button>

            {status === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 rounded-lg">
                ✗ Une erreur s&apos;est produite. Veuillez réessayer ou me contacter directement.
              </div>
            )}
          </form>


          {showSuccess && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-lg z-10 animate-[fadeIn_0.2s_ease-out]">
              <div className="relative flex flex-col items-center" >
                {/* Cercle animé avec check */}
                <div className="w-24 h-24 rounded-full bg-green-500/20 border-2 border-primary flex items-center justify-center animate-[scaleIn_0.3s_ease-out]">
                  <Check 
                    className="primary animate-[checkDraw_0.5s_ease-out_0.2s_forwards] opacity-0" 
                    size={48} 
                    strokeWidth={3} 
                  />
                </div>
                
                {/* Texte de confirmation */}
                <p className="primary text-center mt-4 font-medium animate-[fadeInUp_0.3s_ease-out_0.4s_forwards] opacity-0">
                  Message envoyé avec succès !
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes scaleIn {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes checkDraw {
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}