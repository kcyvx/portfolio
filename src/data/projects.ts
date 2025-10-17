import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "quantum",
    title: "Quantum",
    shortDescription: "Platforme de streaming",
    description: "Quantum est une plateforme de streaming moderne offrant une expérience utilisateur fluide et intuitive. Le projet intègre un système de gestion de contenu complet avec authentification, favoris, et recommandations personnalisées.",
    image: "./projects-img/quantum/img-1.png",
    images: [
      "./projects-img/quantum/img-1.png",
      "./projects-img/quantum/img-2.png",
      "./projects-img/quantum/img-3.png"
    ],
    technologies: ["Laravel", "React", "Tailwind"],
    demo: "https://quantum-demo.com",
    featured: true
  },
  {
    id: "chromatic-ui",
    title: "Chromatic-ui",
    shortDescription: "Librairie de thèmes react",
    description: "Création de Chromatic ui et de son site web, chromatic UI est une librairie de thèmes conçue pour React et Next.js, permettant aux développeurs d'accéder à plus de 30 palettes de couleurs prédéfinies. Elle offre des hooks puissants pour une intégration simplifiée.",
    image: "./projects-img/chromatic-ui/img-1.png",
    images: [
      "./projects-img/chromatic-ui/img-1.png",
      "./projects-img/chromatic-ui/img-2.png",
      "./projects-img/chromatic-ui/img-3.png"
    ],
    technologies: ["React", "Tailwind"],
    demo: "https://chromatic-ui.com",
    featured: true
  },
  {
    id: "corner",
    title: "Corner",
    shortDescription: "Platforme de suivi football",
    description: "Corner est une application de suivi de matchs de football en temps réel. Elle offre des statistiques détaillées, des compositions d'équipes, et des notifications pour ne rien manquer de vos matchs préférés.",
    image: "./projects-img/corner/img-1.png",
    images: [
      "./projects-img/corner/img-1.png"
    ],
    technologies: ["Laravel", "Css ( Scss )"],
    github: "https://github.com/username/corner",
    featured: true
  },
  {
    id: "portfolio",
    title: "Portfolio Personnel",
    shortDescription: "Site portfolio moderne",
    description: "Mon portfolio personnel conçu avec Next.js et Tailwind CSS, mettant en avant mes projets et compétences avec une interface élégante et responsive.",
    image: "./projects-img/portfolio/img-1.png",
    technologies: ["Next.js", "Tailwind", "TypeScript"],
    github: "https://github.com/username/portfolio",
    featured: false
  }
];

export const getFeaturedProjects = (limit?: number): Project[] => {
  const featured = projects.filter(p => p.featured);
  return limit ? featured.slice(0, limit) : featured;
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(p => p.id === id);
};