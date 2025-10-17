import Container from "../components/layout/Container"

export default function Stacks() {
  return (
    <>
      <Container>
        <section className="mt-36 flex flex-col md:flex-row md:justify-between gap-8 md:gap-0">
          <div className="w-full md:w-1/2 md:pr-10">
            <h2>Compétences Back-end</h2>
            <p className="text-sm text-muted mt-2">
              J'ai acquis une solide maîtrise des principales technologies back-end me permettant de concevoir et développer des applications web performantes, sécurisées et évolutives.
            </p>
            <div className="relative">
              <div className="bg-background-light p-4 rounded-lg mt-4 w-2/3">
                <div className="flex items-center gap-3">
                  <img src="./icons/laravel.svg" className="w-6" alt="Laravel"></img>
                  <p>Laravel</p>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <img src="./icons/next.png" className="w-6" alt="Next.js"></img>
                  <p>Next js</p>
                </div>
              </div>
              <div className="bg-surface-light p-4 rounded-lg absolute -bottom-12 right-0 w-2/3">
                <div className="flex items-center gap-3">
                  <img src="./icons/node.png" className="w-6" alt="Node.js"></img>
                  <p>Node js</p>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <img src="./icons/firebase.svg" className="w-6" alt="Firebase"></img>
                  <p>Firebase</p>
                </div>
              </div>
            </div>
          </div>
          
          <span className="hidden md:block h-100vh w-[1px] bg-background-light"></span>
          
          <div className="w-full md:w-1/2 md:pl-10 mt-20 md:mt-0">
            <h2>Compétences Front-end</h2>
            <p className="text-sm text-muted mt-2">
              Je conçois des interfaces modernes, réactives et intuitives, en combinant performance, accessibilité et design soigné.
            </p>
            <div className="bg-background-light p-4 rounded-lg mt-4">
              <div className="flex items-center gap-3">
                <img src="./icons/next.png" className="w-6" alt="Next.js"></img>
                <p>Next js</p>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <img src="./icons/react.png" className="w-6" alt="React"></img>
                <p>React</p>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <img src="./icons/tailwind.png" className="w-6" alt="Tailwind"></img>
                <p>Tailwind</p>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <img src="./icons/bootstrap.png" className="w-6" alt="Bootstrap"></img>
                <p>Boostrap</p>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}