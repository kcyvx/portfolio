"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { Project } from "@/types/project";

interface ProjectsProps {
  projects: Project[];
  showAll?: boolean;
}

export default function Projects({ projects, showAll = false }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      <section className="mt-24 flex items-center flex-col">
        <span className="p-1 px-3 rounded-full border border-dark text-muted text-sm text-center max-w-max m-auto">
          {showAll ? "Tous mes projets" : "Mes projets"}
        </span>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full mt-6 gap-3">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id}
              project={project}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
      </section>

      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}