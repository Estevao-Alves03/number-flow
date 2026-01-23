import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";
import {
  FiChevronsDown,
  FiChevronsUp,
  FiClock,
  FiRefreshCcw,
} from "react-icons/fi";

interface Deployments {
  id: number;
  name: string;
  phone: string;
  state: string;
  startedAt: string;
  finishedAt: string;
  annotation: number;
}

const mockData: Deployments[] = [
  {
    id: 1,
    name: "Teste de academia",
    state: "Parado",
    phone: "62 99999-9999",
    startedAt: "20/01/2026",
    finishedAt: "23/01/2026",
    annotation: 4,
  },
  {
    id: 2,
    name: "Teste de academia",
    state: "Parado",
    phone: "62 99999-9999",
    startedAt: "20/01/2026",
    finishedAt: "23/01/2026",
    annotation: 4,
  },
];

export default function StalledDeployments() {
  const [deployments] = useState<Deployments[]>(mockData);
  const [openId, setOpenId] = useState<number | null>(null);

  function toggleCard(id: number) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  if (deployments.length === 0) {
    return (
      <div className="rounded-xl border-4 border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 p-20 text-center text-zinc-400 mb-6">
        <div className="flex flex-col items-center gap-2">
          <FiClock className="text-6xl text-zinc-600" />
          <h1 className="text-2xl font-semibold mt-6">
            Nenhuma implantação parada
          </h1>
          <p className="text-base">
            As implantações que foram paradas aparecerão aqui, e você poderá dar
            continuidade a qualquer momento
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-7 pb-24 flex flex-col gap-6">
      {deployments.map((item) => {
        const isOpen = openId === item.id;

        return (
          <Card
            key={item.id}
            className="w-full rounded-xl border-4 border-blue-700 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 px-6 py-5 shadow-md"
          >
            <div className="flex items-start justify-between">
              {/* Lado esquerdo */}
              <div className="space-y-2 mt-3 p-2">
                <div className="flex items-center gap-3">
                  <h2 className="text-3xl font-semibold text-white">
                    {item.name}
                  </h2>

                  <span className="rounded-full bg-zinc-500/60 px-4 py-1.5 text-lg font-bold text-white">
                    {item.state}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-lg font-medium text-zinc-300">
                  <span>{item.phone}</span>
                  <span>•</span>
                  <span>Iniciado: {item.startedAt}</span>
                  <span>•</span>
                  <span>Parado: {item.finishedAt}</span>
                  <span>•</span>
                  <span>{item.annotation} anotações</span>
                </div>
              </div>

             <div className="flex items-center justify-center gap-2">
               {!isOpen && (
                <Button
                  className="text-white font-bold rounded-lg mt-4 text-lg py-5 px-4 bg-blue-500/40 hover:bg-blue-500/20"
                >
                  Retomar implantação
                </Button>
              )}

              {/* Ícone */}
              <Button
                onClick={() => toggleCard(item.id)}
                className="mt-4 text-white font-bold rounded-lg text-lg py-5 px-4 flex items-center gap-2 bg-blue-500/40 hover:bg-blue-500/20"
              >
                {isOpen ? (
                  <FiChevronsUp className="!w-6 !h-6" />
                ) : (
                  <FiChevronsDown className="!w-6 !h-6" />
                )}
              </Button>
             </div>
            </div>


            {isOpen && (
              <>
                <hr className="border-slate-700/45 mt-7 mb-5" />

                <div className="max-h-[450px] overflow-y-auto pb-6">
                  <div className="text-white text-2xl flex items-center gap-2 px-5 pt-4">
                    <FiRefreshCcw className="text-green-600" />
                    <h1>Histórico de Anotações</h1>
                  </div>
                  <Card className="border-2 border-blue-700 bg-slate-900/50 shador-md mx-6 mt-5 rounded-lg">
                    <div className="px-8 pt-6 pb-4 flex justify-between">
                      <span className="text-lg font-bold px-4 py-1.5 bg-blue-700/55 text-white rounded-xl ">
                        Treinamento Gymbot
                      </span>
                      <span className="text-xl text-zinc-200 font-semibold font-sans">
                        17/12/2025 - 14:45
                      </span>
                    </div>
                    <p className="px-8 mb-4 text-lg font-semibold text-zinc-300   ">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </Card>

                  <Card className="border-2 border-blue-700 bg-slate-900/50 shador-md mx-6 mt-5 rounded-lg">
                    <div className="px-8 pt-6 pb-4 flex justify-between">
                      <span className="text-lg font-bold px-4 py-1.5 bg-blue-700/55 text-white rounded-xl ">
                        Alinhamento de prompt
                      </span>
                      <span className="text-xl text-zinc-200 font-semibold font-sans">
                        19/12/2025 - 15:12
                      </span>
                    </div>
                    <p className="px-8 mb-4 text-lg font-semibold text-zinc-300   ">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </Card>

                  <Card className="border-2 border-blue-700 bg-slate-900/50 shador-md mx-6 mt-5 rounded-lg">
                    <div className="px-8 pt-6 pb-4 flex justify-between">
                      <span className="text-lg font-bold px-4 py-1.5 bg-blue-700/55 text-white rounded-xl ">
                        IA em teste
                      </span>
                      <span className="text-xl text-zinc-200 font-semibold font-sans">
                        20/12/2025 - 10:24
                      </span>
                    </div>
                    <p className="px-8 mb-4 text-lg font-semibold text-zinc-300   ">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </Card>
                  <Card className="border-2 border-blue-700 bg-slate-900/50 shador-md mx-6 mt-5 rounded-lg">
                    <div className="px-8 pt-6 pb-4 flex justify-between">
                      <span className="text-lg font-bold px-4 py-1.5 bg-blue-700/55 text-white rounded-xl ">
                        Parado
                      </span>
                      <span className="text-xl text-zinc-200 font-semibold font-sans">
                        21/12/2025 - 14:12
                      </span>
                    </div>
                    <p className="px-8 mb-4 text-lg font-semibold text-zinc-300   ">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </Card>
                </div>
                <hr className="border-slate-700/45 mt-7 mb-2" />
              </>
            )}
          </Card>
        );
      })}
    </div>
  );
}
