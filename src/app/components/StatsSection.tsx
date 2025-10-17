import Button from "../components/layout/Button"
import { ChevronRight } from "lucide-react"
export default function Stats() {
    return (
        <>
            <>
                <div className="flex justify-center gap-12 mt-24">
                    <div className="flex flex-col items-center">
                        <h4 className="text-3xl">4 +</h4>
                        <p>Annés d'experiences</p>
                    </div>

                     <div className="flex flex-col items-center">
                        <h4 className="text-3xl">18 +</h4>
                        <p>Clients satisfais</p>
                    </div>

                      <div className="flex flex-col items-center">
                        <h4 className="text-3xl">30 +</h4>
                        <p>Nuits blanches</p>
                    </div>
                </div>
            </>
        </>
    );
}
