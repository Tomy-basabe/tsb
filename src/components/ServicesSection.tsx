import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Smartphone, Rocket, Palette, ShieldCheck, HeadphonesIcon } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Sitios Web Corporativos',
    description: 'Páginas profesionales que transmiten confianza y credibilidad para tu empresa o negocio.',
    features: ['Diseño personalizado', 'SEO optimizado', 'Alta velocidad de carga'],
  },
  {
    icon: Smartphone,
    title: 'Diseño Responsive',
    description: 'Tu sitio se verá perfecto en cualquier dispositivo: móvil, tablet o escritorio.',
    features: ['Mobile-first', 'Adaptable a todas las pantallas', 'UX optimizada'],
  },
  {
    icon: Rocket,
    title: 'Landing Pages',
    description: 'Páginas de aterrizaje diseñadas para convertir visitantes en clientes.',
    features: ['Alta conversión', 'CTAs estratégicos', 'Diseño persuasivo'],
  },
  {
    icon: Palette,
    title: 'Diseño UI/UX',
    description: 'Interfaces modernas y experiencias de usuario que cautivan y retienen.',
    features: ['Diseño intuitivo', 'Estética moderna', 'Flujos optimizados'],
  },
  {
    icon: ShieldCheck,
    title: 'Mantenimiento Web',
    description: 'Mantén tu sitio actualizado, seguro y funcionando al máximo rendimiento.',
    features: ['Actualizaciones regulares', 'Copias de seguridad', 'Soporte técnico'],
  },
  {
    icon: HeadphonesIcon,
    title: 'Consultoría Digital',
    description: 'Asesoramiento experto para llevar tu presencia digital al siguiente nivel.',
    features: ['Estrategia digital', 'Análisis de competencia', 'Recomendaciones técnicas'],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 md:py-32 relative bg-secondary/20">
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
            {'// SERVICIOS'}
          </span>
          <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Soluciones <span className="text-primary text-glow">digitales</span> a tu medida
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Desarrollo web profesional con tecnología de vanguardia para impulsar tu presencia online.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-glow p-8 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="font-mono text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            ¿Listo para comenzar tu proyecto?
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-neon-solid"
          >
            Solicitar Presupuesto
          </button>
        </motion.div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default ServicesSection;
