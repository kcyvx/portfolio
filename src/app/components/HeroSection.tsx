import Button from "../components/layout/Button"
import {ChevronRight} from "lucide-react"
export default function HeroSection() {
  return (
    <>
        <>
          <div className="flex flex-col text-center mt-56 justify-center">

            <h1 className="text-4xl font-semibold text-center max-w-3xl m-auto md:text-7xl">
              Développeur web full-stack & UI/UX designer
            </h1>
            <p className="mt-4 text-muted max-w-lg m-auto">
              À 18 ans, je conçois des sites et applications web modernes, alliant design intuitif et technologies de pointe pour offrir des expériences numériques uniques.
            </p>
            <a className="btn-primary max-w-max m-auto mt-6 rounded-lg items-center" href="#contact">Me contacter <ChevronRight size={15} /></a>

          </div>
        </>
    </>
  );
}
