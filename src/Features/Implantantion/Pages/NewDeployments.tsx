import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";
import { TbPlus } from "react-icons/tb";

interface Deployments {
  id: number;
  name: string;
  state: string;
  phone: string;
  dateNow: string;
}

const mockData: Deployments[] = [
  {
    id: 1,
    name: "Teste de academia",
    state: "Novo",
    phone: "62 99999-9999",
    dateNow: "20/01/2026",
  },
  {
    id: 2,
    name: "Teste de EMPRESA",
    state: "Novo",
    phone: "62 99999-9999",
    dateNow: "20/01/2026",
  },
];

export default function NewDeployments() {
  const [deployments] = useState<Deployments[]>(mockData);

  return (
    <div className="mt-7 pb-24">
      {deployments.length === 0 && (
        <div className="rounded-xl border-2 border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 p-20 text-center text-zinc-400 mb-6">
          <div className="flex flex-col items-center gap-2">
            <TbPlus className="text-6xl text-zinc-600" />
            <h1 className="text-2xl font-semibold mt-6">
              Nenhuma implantação nova
            </h1>
            <p className="text-base">
              Vocẽ será notificado assim que uma academia nova for vinculada a
              você
            </p>
          </div>
        </div>
      )}

      <div className="max-h-[500px] overflow-y-auto space-y-5 pr-2">
        {deployments.map((deployment) => (
          <Card
            key={deployment.id}
            className="w-full mb-5 rounded-xl border border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 px-6 py-5 shadow-md"
          >
            <div className="flex items-start justify-between ">
              {/* Lado esquerdo */}
              <div className="space-y-2 mt-3 p-2 ">
                <div className="flex items-center gap-3">
                  <h2 className="text-3xl font-semibold text-white">
                    {deployment.name}
                  </h2>

                  <span className="rounded-full bg-blue-500/60 px-4 py-1.5 text-lg text-white font-bold">
                    {deployment.state}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-lg text-zinc-300">
                  <span>{deployment.phone}</span>
                  <span>•</span>
                  <span>Vinculado: {deployment.dateNow}</span>
                </div>
              </div>

              {/* Ícone */}
              <Button className="mt-4 text-white font-bold rounded-lg text-lg py-5 px-4 flex items-center gap-2 bg-blue-500/40 hover:bg-blue-500/30">
                Iniciar implantação
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
