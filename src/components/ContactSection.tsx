import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Since no backend, show success message
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-mono text-sm text-primary mb-4">
            {'// CONTACTO'}
          </span>
          <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Hagamos realidad tu <span className="text-primary text-glow">proyecto</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            ¿Tienes una idea en mente? Estoy listo para ayudarte a convertirla en una experiencia digital increíble.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card-glow p-8">
              <h3 className="font-mono text-xl font-semibold text-foreground mb-6">
                Envíame un mensaje
              </h3>
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 bg-primary/10 border border-primary/30 rounded-lg text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-mono font-semibold text-foreground mb-2">
                    ¡Mensaje enviado!
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Gracias por contactarme. Te responderé lo antes posible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-mono text-sm text-muted-foreground mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-mono text-sm text-muted-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block font-mono text-sm text-muted-foreground mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                      placeholder="Cuéntame sobre tu proyecto..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full btn-neon-solid flex items-center justify-center gap-2"
                  >
                    Enviar mensaje
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-mono text-xl font-semibold text-foreground mb-6">
                O contáctame directamente
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Prefiero la comunicación directa y rápida. No dudes en escribirme por WhatsApp o email para una respuesta inmediata.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <a
                href="https://wa.me/542617737367"
                target="_blank"
                rel="noopener noreferrer"
                className="card-glow p-6 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-mono font-semibold text-foreground">WhatsApp</h4>
                  <p className="text-sm text-muted-foreground">+54 261 773 7367</p>
                </div>
              </a>

              <a
                href="mailto:tomasbasabe.utn@gmail.com"
                className="card-glow p-6 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-mono font-semibold text-foreground">Email</h4>
                  <p className="text-sm text-muted-foreground">tomasbasabe.utn@gmail.com</p>
                </div>
              </a>

              <div className="card-glow p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-mono font-semibold text-foreground">Ubicación</h4>
                  <p className="text-sm text-muted-foreground">Mendoza, Argentina</p>
                </div>
              </div>
            </div>

            {/* Terminal decoration */}
            <div className="p-4 bg-secondary/50 rounded-lg border border-border font-mono text-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-destructive" />
                <span className="w-3 h-3 rounded-full bg-accent" />
                <span className="w-3 h-3 rounded-full bg-accent" />
              </div>
              <p className="text-muted-foreground">
                <span className="text-primary">$</span> echo "¡Trabajemos juntos!"
              </p>
              <p className="text-foreground mt-1 animate-pulse">
                {'>'} Respuesta en menos de 24 horas_
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
