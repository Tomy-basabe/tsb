import { motion } from 'framer-motion';
import { ExternalLink, Images } from 'lucide-react';

export interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  coverImage: string;
  screenshots?: string[];
  liveUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
  onViewGallery: (project: Project) => void;
}

const ProjectCard = ({ project, index, isInView, onViewGallery }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-glow group overflow-hidden"
    >
      {/* Project Image */}
      <div className="h-48 relative overflow-hidden">
        <img 
          src={project.coverImage} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        <div className="absolute bottom-4 left-6">
          <span className="font-mono text-xs text-primary bg-primary/20 px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          {project.screenshots && project.screenshots.length > 0 && (
            <button 
              onClick={() => onViewGallery(project)}
              className="p-3 bg-background/80 rounded-full hover:bg-background transition-colors"
            >
              <Images className="w-5 h-5 text-primary" />
            </button>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-background/80 rounded-full hover:bg-background transition-colors"
            >
              <ExternalLink className="w-5 h-5 text-primary" />
            </a>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="font-mono text-xl font-semibold text-foreground mb-2">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
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
  );
};

export default ProjectCard;
