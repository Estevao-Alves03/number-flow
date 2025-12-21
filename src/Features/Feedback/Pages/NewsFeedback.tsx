import { Button } from "../../../components/ui/button";
import { SlCalender } from "react-icons/sl";

export default function NewsFeedback() {
  return (
    <div>
      <div className="w-full mb-4 rounded-xl bg-white p-6 border-4 border-violet-600/90 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 shadow-md">
        <div className="text-white flex items-center justify-between px-4 pb-2">
          <h1 className="text-3xl font-bold flex gap-3">
            Acad Acuas Fit
            <span className="rounded-xl bg-blue-900/70 px-2.5 text-lg flex items-center">
              Novo
            </span>
          </h1>
          <Button className="bg-zinc-700 hover:bg-zinc-700 text-xl px-6 py-5">
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
