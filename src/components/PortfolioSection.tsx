import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard, { type Project } from './portfolio/ProjectCard';
import ProjectGalleryModal from './portfolio/ProjectGalleryModal';

// TABE images
import tabeCover from '@/assets/projects/tabe/cover.jpg';
import tabeDashboard from '@/assets/projects/tabe/dashboard.png';
import tabePlanCarrera from '@/assets/projects/tabe/plan-carrera.png';
import tabeNotion from '@/assets/projects/tabe/notion.png';
import tabeFlashcards from '@/assets/projects/tabe/flashcards.png';
import tabeMarketplace from '@/assets/projects/tabe/marketplace.png';
import tabeBiblioteca from '@/assets/projects/tabe/biblioteca.png';
import tabeCalendario from '@/assets/projects/tabe/calendario.png';
import tabePomodoro from '@/assets/projects/tabe/pomodoro.png';
import tabeMetricas from '@/assets/projects/tabe/metricas.png';
import tabeBosque from '@/assets/projects/tabe/bosque.png';

const projects: Project[] = [
  {
    title: 'TABE – Sistema Académico',
    category: 'Aplicación Web',
    description: 'Plataforma integral para mejorar el rendimiento académico. Dashboard con métricas, plan de carrera, editor tipo Notion, flashcards con marketplace, biblioteca de recursos, calendario académico, método Pomodoro, sistema de bosque virtual gamificado, sala de estudio social y asistente IA.',
    tech: ['React', 'TypeScript', 'Supabase', 'Tailwind', 'Framer Motion'],
    coverImage: tabeCover,
    screenshots: [
      tabeDashboard,
      tabePlanCarrera,
      tabeNotion,
      tabeFlashcards,
      tabeMarketplace,
      tabeBiblioteca,
      tabeCalendario,
      tabePomodoro,
      tabeMetricas,
      tabeBosque,
    ],
  },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleViewGallery = (project: Project) => {
    setSelectedProject(project);
    setIsGalleryOpen(true);
  };

  const handleCloseGallery = () => {
    setIsGalleryOpen(false);
    setSelectedProject(null);
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
        <div className="hidden lg:grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
              onViewGallery={handleViewGallery}
            />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative">
          <ProjectCard
            project={projects[activeIndex]}
            index={0}
            isInView={isInView}
            onViewGallery={handleViewGallery}
          />

          {/* Navigation - only show if more than 1 project */}
          {projects.length > 1 && (
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
          )}
        </div>
      </div>

      {/* Gallery Modal */}
      <ProjectGalleryModal
        project={selectedProject}
        isOpen={isGalleryOpen}
        onClose={handleCloseGallery}
      />

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default PortfolioSection;
