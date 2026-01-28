import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Cpu, Zap, Target } from 'lucide-react';

const skills = [
  { icon: Code2, label: 'Código Limpio', desc: 'Desarrollo con las mejores prácticas' },
  { icon: Cpu, label: 'Tech Stack Moderno', desc: 'React, TypeScript, Tailwind' },
  { icon: Zap, label: 'Alto Rendimiento', desc: 'Sitios rápidos y optimizados' },
  { icon: Target, label: 'Enfoque en Resultados', desc: 'Diseño centrado en conversión' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block font-mono text-sm text-primary mb-4">
              {'// SOBRE MÍ'}
            </span>
            <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Hola, soy{' '}
              <span className="text-primary text-glow">Tomas Basabe</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Soy un desarrollador web apasionado por crear soluciones digitales que no solo se ven increíbles, sino que también funcionan a la perfección. Mi enfoque combina diseño moderno con código de alta calidad.
              </p>
              <p>
                Con experiencia en las tecnologías más actuales del mercado, transformo ideas complejas en sitios web intuitivos y atractivos. Mi objetivo es ayudar a negocios y emprendedores a destacar en el mundo digital.
              </p>
              <p>
                Cada proyecto es una oportunidad para superar expectativas y entregar resultados que realmente impactan.
              </p>
            </div>

            {/* Terminal-style info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 p-4 bg-secondary/50 rounded-lg border border-border font-mono text-sm"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-destructive" />
                <span className="w-3 h-3 rounded-full bg-accent" />
                <span className="w-3 h-3 rounded-full bg-accent" />
              </div>
              <p className="text-muted-foreground">
                <span className="text-primary">$</span> whoami
              </p>
              <p className="text-foreground mt-1">
                {'>'} Desarrollador Web | Mendoza, Argentina
              </p>
              <p className="text-muted-foreground mt-2">
                <span className="text-primary">$</span> cat skills.txt
              </p>
              <p className="text-foreground mt-1">
                {'>'} React, TypeScript, Tailwind, Node.js, UI/UX
              </p>
            </motion.div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="card-glow p-6 group"
              >
                <skill.icon className="w-10 h-10 text-primary mb-4 group-hover:text-glow transition-all" />
                <h3 className="font-mono font-semibold text-foreground mb-2">{skill.label}</h3>
                <p className="text-sm text-muted-foreground">{skill.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default AboutSection;
