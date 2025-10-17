import Container from "../components/layout/Container";
import Projects from "../components/Projects";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <Container>
      <div className="mt-32 mb-12">
        <h1 className="text-4xl font-semibold text-center mb-4">
          Mes Projets
        </h1>
        <p className="text-center text-muted max-w-2xl mx-auto">
          Découvrez l'ensemble de mes réalisations en développement web, 
          du design à l'implémentation technique.
        </p>
      </div>
      <Projects projects={projects} showAll />
    </Container>
  );
}