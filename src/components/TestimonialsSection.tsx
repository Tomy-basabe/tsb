import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'María García',
    role: 'CEO, StartupTech',
    content: 'Tomas superó todas nuestras expectativas. El sitio web que creó no solo es visualmente impresionante, sino que también aumentó nuestras conversiones en un 40%. Su profesionalismo y atención al detalle son excepcionales.',
    rating: 5,
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Fundador, EcoStore',
    content: 'Trabajar con Tomas fue una experiencia increíble. Entendió nuestra visión desde el primer momento y la llevó a la realidad de manera perfecta. El diseño moderno y la velocidad del sitio son exactamente lo que necesitábamos.',
    rating: 5,
  },
  {
    name: 'Ana Martínez',
    role: 'Directora de Marketing, AgenciaPro',
    content: 'La landing page que desarrolló para nuestra campaña generó el doble de leads de lo esperado. Su conocimiento técnico combinado con su ojo para el diseño lo hacen un profesional excepcional.',
    rating: 5,
  },
  {
    name: 'Lucas Fernández',
    role: 'Emprendedor',
    content: 'Mi nuevo sitio web transmite exactamente la imagen profesional que buscaba para mi negocio. Tomas no solo es talentoso, sino que también es muy fácil trabajar con él. 100% recomendado.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 relative bg-secondary/20">
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
            {'// TESTIMONIOS'}
          </span>
          <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Lo que dicen mis <span className="text-primary text-glow">clientes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            La satisfacción del cliente es mi mayor prioridad. Esto es lo que opinan quienes han trabajado conmigo.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="card-glow p-8 md:p-12">
              {/* Quote icon */}
              <Quote className="w-12 h-12 text-primary/30 mb-6" />
              
              {/* Content */}
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                  "{testimonials[activeIndex].content}"
                </p>
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Author */}
                <div>
                  <h4 className="font-mono font-semibold text-foreground">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === activeIndex 
                        ? 'bg-primary w-8' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default TestimonialsSection;
