import Container from "../components/layout/Container"
export default function Stacks() {
    return (
        <>
            <Container>
                <section className="mt-36 flex justify-between">
                    <div className="w-1/2 pr-10">
                        <h2>Compétences Back-end</h2>
                        <p className="text-sm text-muted mt-2">
                            J’ai acquis une solide maîtrise des principales technologies back-end me permettant de concevoir et développer des applications web performantes, sécurisées et évolutives.
                        </p>
                        <div className="relative">
                            <div className="bg-background-light p-4 rounded-lg mt-4 w-2/3">
                                <div className="flex items-center gap-3">
                                    <img src="./icons/laravel.svg" className="w-6"></img>
                                    <p>Laravel</p>
                                </div>

                                <div className="flex items-center gap-3 mt-2">
                                    <img src="./icons/next.png" className="w-6"></img>
                                    <p>Next js </p>
                                </div>
                                
                            </div>

                            <div className="bg-surface-light p-4 rounded-lg absolute -bottom-12 right-0 w-2/3">
                                <div className="flex items-center gap-3">
                                    <img src="./icons/node.png" className="w-6"></img>
                                    <p>Node js </p>
                                </div>

                                <div className="flex items-center gap-3 mt-2">
                                    <img src="./icons/firebase.svg" className="w-6"></img>
                                    <p>Firebase</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="h-100vh w-[1px] bg-background-light block"></span>
                    <div className="w-1/2 pl-10">
                        <h2>Compétences Front-end</h2>
                        <p className="text-sm text-muted mt-2">
                            Je conçois des interfaces modernes, réactives et intuitives, en combinant performance, accessibilité et design soigné.
                        </p>
                        <div className="bg-background-light p-4 rounded-lg mt-4">
                            <div className="flex items-center gap-3">
                                <img src="./icons/next.png" className="w-6"></img>
                                <p>Next js</p>
                            </div>

                            <div className="flex items-center gap-3 mt-2">
                                <img src="./icons/react.png" className="w-6"></img>
                                <p>React</p>
                            </div>

                            <div className="flex items-center gap-3 mt-2">
                                <img src="./icons/tailwind.png" className="w-6"></img>
                                <p>Tailwind</p>
                            </div>

                            <div className="flex items-center gap-3 mt-2">
                                <img src="./icons/bootstrap.png" className="w-6"></img>
                                <p>Boostrap</p>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    );
}
