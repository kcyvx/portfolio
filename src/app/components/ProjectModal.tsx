"use client";
import { X, Github, ExternalLink } from "lucide-react";
import { Project } from "@/types/project";
import { useEffect } from "react";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-lg"
      onClick={onClose}
    >
      <div
        className="bg-background border border-dark rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-background border-b border-dark p-4 flex justify-between items-center z-10">
          <h2 className="text-2xl font-semibold">{project.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-background-light rounded-full transition-colors"
            aria-label="Fermer"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-lg"
            />
          </div>

          {project.images && project.images.length > 1 && (
            <div className="grid grid-cols-2 gap-3 mb-6">
              {project.images.slice(1).map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${project.title} ${idx + 2}`}
                  className="w-full rounded-lg"
                />
              ))}
            </div>
          )}

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-muted max-w-lg">{project.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Technologies utilisées</h3>
            <div className="flex gap-2 flex-wrap">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full border border-dark text-sm text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>


          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary items-center rounded-lg"
          >
            Accéder au site
          </a>

        </div>
      </div>
    </div>
  );
}