import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";
import { TbPlus } from "react-icons/tb";

export default function NewDeployments() {
  return (
    <div className="mt-7 pb-24">
      <div className="rounded-xl border-2 border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 p-20 text-center text-zinc-400 mb-6">
        <div className="flex flex-col items-center gap-2">
          <TbPlus className="text-6xl text-zinc-600" />

          <h1 className="text-2xl font-semibold mt-6">
            Nenhuma implantação nova
          </h1>

          <p className="text-base">
            Vocẽ será notificado assim que uma academia nova for vinculada a você
          </p>
        </div>
      </div>

       <Card className="w-full mb-5 rounded-xl border border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 px-6 py-5 shadow-md">
        <div className="flex items-start justify-between ">
          {/* Lado esquerdo */}
          <div className="space-y-2 mt-3 p-2 ">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-semibold text-white">
                teste de acad
              </h2>

              <span className="rounded-full bg-blue-500/60 px-4 py-1.5 text-lg text-white font-bold">
                Novo
              </span>
            </div>

            <div className="flex items-center gap-4 text-lg text-zinc-300">
              <span>(34) 24423-4342</span>
              <span>•</span>
              <span>Vinculado: 15/12/2025</span>
            </div>
          </div>

          {/* Ícone */}
           <Button className="mt-4 text-white font-bold rounded-lg text-lg py-5 px-4 flex items-center gap-2 bg-blue-500/40 hover:bg-blue-500/30">
            Iniciar implantação
          </Button>
        </div>
      </Card>
    </div>
  );
}
