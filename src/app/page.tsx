import Link from "next/link";
import Container from "./components/layout/Container";
import HeroSection from "./components/HeroSection";
import Stacks from "./components/Stacks";
import Projects from "./components/Projects";
import { getFeaturedProjects } from "@/data/projects";
import Contact from "./components/ContactForm";
export default function Home() {
  const featuredProjects = getFeaturedProjects(3);

  return (
    <>
      <Container>
        <HeroSection />
        <Stacks />
        <Projects projects={featuredProjects} />
        <div className="flex justify-center mt-6 mb-24">
          <Link 
            href="/projects" 
            className="text-muted hover:text-primary transition-colors"
          >
            Voir tous mes projets →
          </Link>
        </div>

        <Contact />
      </Container>
    </>
  );
}