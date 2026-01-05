import { TbPlus } from "react-icons/tb";
import { Button } from "../../../components/ui/button";
import { SlCalender } from "react-icons/sl";

export default function NewsFeedback() {
  return (
    <div>
      <div className="rounded-xl border border-violet-700/40 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 p-20 text-center text-zinc-400 mb-6">
        <div className="flex flex-col items-center gap-2">
          <TbPlus className="text-6xl text-zinc-600" />

          <h1 className="text-2xl font-semibold mt-6">Nenhum feedback novo</h1>

          <p className="text-base">
            Novos feedbacks aparecerão aqui quando implementações forem
            concluídas
          </p>
        </div>
      </div>

      <div className="w-full mb-4 rounded-xl bg-white p-6 border-4 border-violet-600/90 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 shadow-md">
        <div className="text-white flex items-center justify-between px-4 pb-2">
          <h1 className="text-3xl font-bold flex gap-3">
            Acad Acuas Fit
            <span className="rounded-full bg-blue-900/70 px-2.5 py-1.5 text-lg flex items-center font-bold">
              Novo
            </span>
          </h1>
          <Button className="bg-zinc-700 hover:bg-zinc-700 text-xl px-6 py-5" disabled>
            Coletar feedback
          </Button>
        </div>
        <div className="text-white px-4 grid grid-rows-3 gap-1">
          <section className="flex items-center gap-2">
            <h2 className="font-semibold text-lg flex items-center gap-2">
              <SlCalender />
              Proximo contato:
            </h2>
            <span className="text-zinc-300 mt-1">22/12/2025</span>
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
      </div>
    </div>
  );
}
