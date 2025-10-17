export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  images?: string[];
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}