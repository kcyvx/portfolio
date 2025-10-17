import { ChevronRight } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div className="border border-dark p-4 rounded-lg">
      <h3>{project.title}</h3>
      <small className="text-muted mb-2 block">{project.shortDescription}</small>

      <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex gap-2 flex-wrap">
        {project.technologies.map((tech) => (
          <span 
            key={tech}
            className="text-xs rounded-full border border-dark px-2 py-1 text-muted flex-shrink-0"
          >
            {tech}
          </span>
        ))}
      </div>

      <button 
        onClick={onClick}
        className="link-primary mt-2 text-sm max-w-max flex items-center hover:transition-all"
      >
        Voir plus <ChevronRight size={15} />
      </button>
    </div>
  );
}