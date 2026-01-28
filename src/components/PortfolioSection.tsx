import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Moderno',
    category: 'Tienda Online',
    description: 'Plataforma de comercio electrónico con diseño minimalista, carrito de compras y pasarela de pagos integrada.',
    tech: ['React', 'TypeScript', 'Stripe', 'Tailwind'],
    image: 'linear-gradient(135deg, hsl(180 100% 50% / 0.3), hsl(220 50% 20%))',
  },
  {
    title: 'Dashboard Analytics',
    category: 'Aplicación Web',
    description: 'Panel de control con visualización de datos en tiempo real, gráficos interactivos y reportes automatizados.',
    tech: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    image: 'linear-gradient(135deg, hsl(160 100% 45% / 0.3), hsl(220 50% 15%))',
  },
  {
    title: 'Portfolio Creativo',
    category: 'Sitio Web',
    description: 'Sitio web portfolio para artista digital con animaciones fluidas y galería interactiva de trabajos.',
    tech: ['React', 'Framer Motion', 'Three.js'],
    image: 'linear-gradient(135deg, hsl(280 100% 50% / 0.3), hsl(220 50% 20%))',
  },
  {
    title: 'App de Reservas',
    category: 'Aplicación Web',
    description: 'Sistema de reservas online para restaurante con calendario integrado y notificaciones automáticas.',
    tech: ['Next.js', 'PostgreSQL', 'Prisma'],
    image: 'linear-gradient(135deg, hsl(30 100% 50% / 0.3), hsl(220 50% 15%))',
  },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="portfolio" className="py-24 md:py-32 relative">
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
            {'// PORTFOLIO'}
          </span>
          <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Proyectos <span className="text-primary text-glow">destacados</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Una selección de trabajos que demuestran mi enfoque en calidad, diseño y resultados.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-glow group overflow-hidden"
            >
              {/* Project Image */}
              <div
                className="h-48 relative overflow-hidden"
                style={{ background: project.image }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="font-mono text-xs text-primary bg-primary/20 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button className="p-3 bg-background/80 rounded-full hover:bg-background transition-colors">
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </button>
                  <button className="p-3 bg-background/80 rounded-full hover:bg-background transition-colors">
                    <Github className="w-5 h-5 text-primary" />
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="font-mono text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs text-muted-foreground bg-secondary px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="card-glow overflow-hidden"
          >
            {/* Project Image */}
            <div
              className="h-48 relative overflow-hidden"
              style={{ background: projects[activeIndex].image }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              <div className="absolute bottom-4 left-6">
                <span className="font-mono text-xs text-primary bg-primary/20 px-3 py-1 rounded-full">
                  {projects[activeIndex].category}
                </span>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="font-mono text-xl font-semibold text-foreground mb-2">
                {projects[activeIndex].title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {projects[activeIndex].description}
              </p>
              <div className="flex flex-wrap gap-2">
                {projects[activeIndex].tech.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs text-muted-foreground bg-secondary px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevProject}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextProject}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default PortfolioSection;
