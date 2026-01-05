import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";
import { FiChevronsDown, FiChevronsUp, FiClock, FiRefreshCcw } from "react-icons/fi";

export default function StalledDeployments() {
  return (
    <div className="mt-7 pb-24">
      <div className="rounded-xl border-2 border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 p-20 text-center text-zinc-400 mb-6">
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

      <Card className="w-full mb-5 rounded-xl border border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 px-6 py-5 shadow-md">
        <div className="flex items-start justify-between ">
          {/* Lado esquerdo */}
          <div className="space-y-2 mt-3 p-2 ">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-semibold text-white">
                teste de acad
              </h2>

              <span className="rounded-full bg-zinc-500/50 px-4 py-1.5 text-lg font-bold text-white">
                Parado
              </span>
            </div>

            <div className="flex items-center gap-4 text-lg text-zinc-300">
              <span>(34) 24423-4342</span>
              <span>•</span>
              <span>Iniciado: 16/12/2025</span>
              <span>•</span>
              <span>Parado: 19/12/2025</span>
              <span>•</span>
              <span>4 anotações</span>
            </div>
          </div>

          {/* Ícone */}
          <section className="flex gap-3">
            <Button className="mt-4 text-white font-bold rounded-lg text-lg py-5 px-4 flex items-center gap-2 bg-blue-500/40 hover:bg-blue-500/20">
              Retomar implantação
            </Button>
            <Button className="mt-4 text-white font-bold rounded-lg text-lg py-5 px-4 flex items-center gap-2 bg-blue-500/40 hover:bg-blue-500/20">
              <FiChevronsDown className="!w-6 !h-6" />
            </Button>
          </section>
        </div>

        <hr className="border-slate-700/45 mt-7 mb-2" />
      </Card>


       <Card className="w-full rounded-xl border border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 px-6 py-5 shadow-md">
        <div className="flex items-start justify-between">
          {/* Lado esquerdo */}
          <div className="space-y-2 mt-3 p-2">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-semibold text-white">
                teste de acad
              </h2>

              <span className="rounded-full bg-zinc-500/60 px-4 py-1.5 text-lg font-bold text-white">
                Parado
              </span>
            </div>

            <div className="flex items-center gap-4 text-lg text-zinc-300">
              <span>(34) 24423-4342</span>
              <span>•</span>
              <span>Iniciado: 16/12/2025</span>
              <span>•</span>
              <span>Parado: 19/12/2025</span>
              <span>•</span>
              <span>4 anotações</span>
            </div>
          </div>

          {/* Ícone */}
           <Button className="mt-4 text-white font-bold rounded-lg text-lg py-5 px-4 flex items-center gap-2 bg-blue-500/40 hover:bg-blue-500/20">
            <FiChevronsUp className="!w-6 !h-6" />
          </Button>
        </div>
        <hr className="border-slate-700/45 mt-7 mb-5" />
        <div className="max-h-[450px] overflow-y-auto pb-6">
          <div className="text-white text-2xl flex items-center gap-2 px-5 pt-4">
            <FiRefreshCcw className="text-green-600" />
            <h1>Histórico de Anotações</h1>
          </div>
          <Card className="border border-blue-700/30 bg-slate-900/50 shador-md mx-6 mt-5 rounded-lg">
            <div className="px-8 pt-6 pb-4 flex justify-between">
              <span className="text-lg font-bold px-4 py-1.5 bg-blue-700/55 text-white rounded-xl ">
                Treinamento Gymbot
              </span>
              <span className="text-xl text-zinc-200 font-semibold font-sans">
                17/12/2025 - 14:45
              </span>
            </div>
            <p className="px-8 mb-4 text-lg font-semibold text-zinc-300   ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Card>

          <Card className="border border-blue-700/30 bg-slate-900/50 shador-md mx-6 mt-5 rounded-lg">
            <div className="px-8 pt-6 pb-4 flex justify-between">
              <span className="text-lg font-bold px-4 py-1.5 bg-blue-700/55 text-white rounded-xl ">
                Alinhamento de prompt
              </span>
              <span className="text-xl text-zinc-200 font-semibold font-sans">
                19/12/2025 - 15:12
              </span>
            </div>
            <p className="px-8 mb-4 text-lg font-semibold text-zinc-300   ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Card>

          <Card className="border border-blue-700/30 bg-slate-900/50 shador-md mx-6 mt-5 rounded-lg">
            <div className="px-8 pt-6 pb-4 flex justify-between">
              <span className="text-lg font-bold px-4 py-1.5 bg-blue-700/55 text-white rounded-xl ">
                IA em teste
              </span>
              <span className="text-xl text-zinc-200 font-semibold font-sans">
                20/12/2025 - 10:24
              </span>
            </div>
            <p className="px-8 mb-4 text-lg font-semibold text-zinc-300   ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Card>
          <Card className="border border-blue-700/30 bg-slate-900/50 shador-md mx-6 mt-5 rounded-lg">
            <div className="px-8 pt-6 pb-4 flex justify-between">
              <span className="text-lg font-bold px-4 py-1.5 bg-blue-700/55 text-white rounded-xl ">
                Parado
              </span>
              <span className="text-xl text-zinc-200 font-semibold font-sans">
                21/12/2025 - 14:12
              </span>
            </div>
            <p className="px-8 mb-4 text-lg font-semibold text-zinc-300   ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Card>
        </div>
        <hr className="border-slate-700/45 mt-7 mb-2" />
      </Card>
    </div>
  );
}
