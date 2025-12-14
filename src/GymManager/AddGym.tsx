import { Button } from "../components/ui/button";
import { IoMdAdd } from "react-icons/io";


export function AddGym() {
    return(
        <div className="px-28">
            <div className="bg-slate-800/50 border border-slate-500 shadow-lg backdrop-blur rounded-lg px-8 py-7">
                <section className="mt-4 mb-8">
                    <span className="font-semibold text-white text-2xl">Adicionar Nova Academia</span>
                </section>

                
            <div className="mt-3">
                <form className="grid grid-cols-2 gap-2">
                    <section className="flex flex-col gap-2">
                        <label className="text-zinc-400 font-serif text-base">Nome da Academia</label>
                        <input 
                        type="text" 
                        name="namegym" 
                        placeholder="Digite o nome da academia" 
                        className="px-2 py-1 rounded-lg bg-slate-800/50 border border-slate-500 shadow-lg backdrop-blur text-zinc-400 "
                        />
                    </section>
                    <section className="flex flex-col gap-2">
                        <label className="text-zinc-400 font-serif text-base">CNPJ</label>
                        <input 
                        type="number"
                        name="cnpj" 
                        placeholder="00.000.000/0000-00"
                        className="px-2 py-1 rounded-lg bg-slate-800/50 border border-slate-500 shadow-lg backdrop-blur text-zinc-400"/>
                    </section>
                </form>
            </div>

            <section className="">
                <Button className="mt-5 bg-blue-800 hover:bg-blue-900">
                    <IoMdAdd/>
                    Academia concluida
                </Button>
            </section>
            </div>
        </div>
    )
}