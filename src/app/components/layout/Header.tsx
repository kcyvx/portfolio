"use client"
import { Moon, Sun } from "lucide-react"
import Link from "next/link"
import Container from "./Container"
import { useToggleDarkMode, useIsDarkMode } from 'chromatic-ui-themes';

export default function Header() {
  const toggleDarkMode = useToggleDarkMode();
  const isDark = useIsDarkMode();
  
  return (
    <>
      <header className="fixed top-0 w-full bg-background z-10">
        <Container>
          <div className="flex items-center justify-between p-6 px-0">
            <h1>Thomas Galabert</h1>
            <div className="flex gap-3">
              <nav className="flex gap-2">
                <Link href="/">Accueil</Link>
                <Link href="/projects">Projet</Link>
              </nav>
              <span className="bg-background-light block w-[1px]"></span>
              <button
                onClick={toggleDarkMode}
                className="bg-background-ligh p-2 rounded-full border border-dark"
                aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              >
                {isDark ? <Sun size={10} /> : <Moon size={10} />}
              </button>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}