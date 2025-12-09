import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Mail, MapPin, Send, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { sendContactEmail } from '../services/resendService';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      await sendContactEmail(formData.name, formData.email, formData.message);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error: any) {
      console.error(error);
      setStatus('error');
      setErrorMessage('Falha ao enviar. Verifique sua conexão ou tente novamente mais tarde.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-darker relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-panel max-w-4xl mx-auto rounded-3xl p-8 md:p-12 overflow-hidden relative">
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Vamos criar algo incrível juntos?</h2>
              <p className="text-slate-400 mb-8">
                Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades para ser parte de suas visões.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-slate-300">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">
                    <Mail size={20} />
                  </div>
                  <span>crorioli81@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4 text-slate-300">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-secondary">
                    <MapPin size={20} />
                  </div>
                  <span>Florianópolis, SC</span>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Redes Sociais</h4>
                <div className="flex space-x-4">
                  {SOCIAL_LINKS.map((link) => (
                    <a 
                      key={link.platform}
                      href={link.url}
                      className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all hover:-translate-y-1"
                      aria-label={link.platform}
                    >
                      <link.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Nome</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full bg-darker/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all disabled:opacity-50"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full bg-darker/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all disabled:opacity-50"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Mensagem</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full bg-darker/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none disabled:opacity-50"
                  placeholder="Olá Carlos, gostaria de falar sobre..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`w-full font-semibold py-3 rounded-lg shadow-lg transition-all transform flex items-center justify-center gap-2
                  ${status === 'success' 
                    ? 'bg-green-600 text-white cursor-default' 
                    : status === 'error'
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-primary/25 hover:-translate-y-1'
                  }
                `}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Enviando...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle size={20} />
                    Mensagem Enviada!
                  </>
                ) : status === 'error' ? (
                  <>
                    <XCircle size={20} />
                    Erro ao Enviar
                  </>
                ) : (
                  <>
                    Enviar Mensagem
                    <Send size={18} />
                  </>
                )}
              </button>
              
              {status === 'error' && (
                <p className="text-red-400 text-sm text-center mt-2 animate-pulse">
                  {errorMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;