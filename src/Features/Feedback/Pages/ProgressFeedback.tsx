import { Button } from "../../../components/ui/button";
import { SlCalender } from "react-icons/sl";

export function ProgressFeedback() {
  return (
    <div>
      {/* academia que deve entrar em contato mais a frente */}
      <div className="w-full rounded-xl bg-white p-6 border-2 border-violet-600 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 shadow-md">
        {/* nome da academia e botao de interaçao */}
        <div className="text-white flex items-center justify-between px-4 pb-2">
          <h1 className="text-3xl font-bold flex gap-3">
            Acad Acuas Fit
            <span className="rounded-xl bg-blue-900/70 px-2.5 text-lg flex items-center">
              7º dia
            </span>
          </h1>
          <Button className="bg-zinc-700 hover:bg-zinc-700   text-xl px-6 py-5">
            Coletar feedback
          </Button>
        </div>
        {/* Informaçoes sobre o crm */}
        <div className="text-white px-4 grid grid-rows-3 gap-1">
          <section className="flex items-center gap-2">
            <h2 className="font-semibold text-lg flex items-center gap-2">
              <SlCalender />
              Proximo contato:
            </h2>
            <span className="text-zinc-300 mt-1">26/12/2025</span>
          </section>
          <section className="flex items-center gap-2">
            <h2 className="font-semibold text-lg">Implantador:</h2>
            <span className="text-zinc-300 mt-1">Rayck</span>
          </section>
          <section className="flex items-center gap-2">
            <h2 className="font-semibold text-lg">Concluído em:</h2>
            <span className="text-zinc-300 mt-1">19/12/2025</span>
          </section>
        </div>
        <hr className="mt-5 border-slate-800" />
        <h2 className="mt-3 font-semibold text-lg px-4">
          Contatos Realizados:
        </h2>
        <section className="flex flex-cols-4 items-center gap-3 w-[430px] mt-3 px-4">
          <span className="px-3 py-1 bg-violet-900 text-violet-100 rounded-xl">
            3 dias
          </span>
          <span className="px-3 py-1 bg-zinc-700 text-white rounded-xl">
            7 dias
          </span>
          <span className="px-3 py-1 bg-zinc-700 text-white rounded-xl">
            15 dias
          </span>
          <span className="px-3 py-1 bg-zinc-700 text-white rounded-xl">
            30 dias
          </span>
        </section>
      </div>
    </div>
  );
}
