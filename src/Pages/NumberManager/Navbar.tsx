// import { Button } from "../components/ui/button";
// import { GiStripedSun } from "react-icons/gi";

export function Navbar() {
  return (
    <div className="px-28 py-7">
      {/* titulo e subtitulo */}
      <div className="pb-7 flex justify-between">
        <section>
          <h1 className="text-4xl font-extrabold font-serif text-zinc-100">
            Gerenciador de Números
          </h1>
          <p className="text-base font-sans text-zinc-400">
            Gerencie números de teste e suas vinculações com empresas.
          </p>
        </section>
        {/* <section className="">
          <Button>
      
          </Button>
        </section> */}
      </div>

      {/* Cards principais - passando as informaçoes em tempo real */}
      <div className="grid grid-cols-3 gap-4 pb-2">
        <div className="p-4 rounded-xl bg-slate-800/50 border-slate-700 border shadow-lg backdrop-blur">
          <h2 className="text-3xl font-bold pl-3 pt-6 text-blue-400">50</h2>
          <p className="ps-3 font-serif text-zinc-400">Total de numeros</p>
        </div>

        <div className="p-4 rounded-xl bg-slate-800/50 border-slate-700 border shadow-lg backdrop-blur">
          <h2 className="text-3xl font-bold pl-3 pt-6 text-green-400">2</h2>
          <p className="ps-3 font-serif text-zinc-400">Numeros em uso</p>
        </div>

        <div className="p-4 rounded-xl bg-slate-800/50 border-slate-700 border shadow-lg backdrop-blur">
          <h2 className="text-3xl font-bold pl-3 pt-6 text-zinc-300">48</h2>
          <p className="ps-3 font-serif text-zinc-400">Numeros Livres</p>
        </div>
      </div>
    </div>
  );
}
