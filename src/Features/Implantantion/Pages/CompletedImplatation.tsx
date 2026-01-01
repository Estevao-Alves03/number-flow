import { FiCheckCircle, FiChevronsDown } from "react-icons/fi";
import { FiChevronsUp } from "react-icons/fi";
import { FiRefreshCcw } from "react-icons/fi";
// // import { GrNotes } from "react-icons/gr";
// import { Button } from "../components/ui/button";

export default function CompletedImplantation() {
  return (
    <div className=" mt-7 pb-16">
      <div className="rounded-xl border-2 border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 p-20 text-center text-zinc-400 mb-6">
        <div className="flex flex-col items-center gap-2">
          <FiCheckCircle className="text-6xl text-zinc-600" />

          <h1 className="text-xl font-semibold mt-6">
            Nenhuma implementação concluída
          </h1>

          <p className="text-sm">
            Suas implantações finalizadas aparecerão aqui
          </p>
        </div>
      </div>

      {/* card fechado */}
      <div className="w-full mb-5 rounded-xl border border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 px-6 py-5 shadow-md">
        <div className="flex items-center justify-between hover:bg-slate-800/20 ">
          {/* Lado esquerdo */}
          <div className="space-y-2 mt-3 p-2 ">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-semibold text-white">
                teste de acad
              </h2>

              <span className="rounded-full bg-green-500/20 px-3 py-1 text-lg font-medium text-green-400">
                Concluída
              </span>
            </div>

            <div className="flex items-center gap-4 text-lg text-zinc-300">
              <span>(34) 24423-4342</span>
              <span>•</span>
              <span>Iniciado: 16/12/2025</span>
              <span>•</span>
              <span>Concluído em: 24/12/2025</span>
              <span>•</span>
              <span>8 anotações</span>
            </div>
          </div>

          {/* Ícone */}
          <FiChevronsDown className="w-8 h-8 text-zinc-400" />
        </div>
        <hr className="border-slate-700/45 mt-7 mb-2" />
      </div>
      {/* card aberto */}
      <div className="w-full rounded-xl border border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 px-6 py-5 shadow-md">
        <div className="flex items-center justify-between hover:bg-slate-800/20">
          {/* Lado esquerdo */}
          <div className="space-y-2 mt-3 p-2">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-semibold text-white">
                teste de acad
              </h2>

              <span className="rounded-full bg-green-500/20 px-3 py-1 text-lg font-medium text-green-400">
                Concluída
              </span>
            </div>

            <div className="flex items-center gap-4 text-lg text-zinc-300">
              <span>(34) 24423-4342</span>
              <span>•</span>
              <span>Iniciado: 16/12/2025</span>
              <span>•</span>
              <span>Concluído em: 24/12/2025</span>
              <span>•</span>
              <span>8 anotações</span>
            </div>
          </div>

          {/* Ícone */}
          <FiChevronsUp className="w-8 h-8 text-zinc-400" />
        </div>
        <hr className="border-slate-700/45 mt-7 mb-5" />
        <div className="max-h-[450px] overflow-y-auto pb-6">
          <div className="text-white text-2xl flex items-center gap-2 px-5 pt-4">
            <FiRefreshCcw className="text-green-600" />
            <h1>Histórico de Anotações</h1>
          </div>
          <div className="border border-blue-700/30 bg-slate-900/50 shador-md mx-6 mt-5 rounded-lg">
            <div className="px-8 pt-6 pb-4 flex justify-between">
              <span className="text-xl font-bold px-2 py-1 bg-blue-700/55 text-white rounded-lg ">
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
          </div>

          <div className="border border-blue-700/30 bg-slate-900/50 shador-md mx-6 mt-5 rounded-lg">
            <div className="px-8 pt-6 pb-4 flex justify-between">
              <span className="text-xl font-bold px-2 py-1 bg-blue-700/55 text-white rounded-lg ">
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
          </div>

          <div className="border border-blue-700/30 bg-slate-900/50 shador-md mx-6 mt-5 rounded-lg">
            <div className="px-8 pt-6 pb-4 flex justify-between">
              <span className="text-xl font-bold px-2 py-1 bg-blue-700/55 text-white rounded-lg ">
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
          </div>
          <div className="border border-blue-700/30 bg-slate-900/50 shador-md mx-6 mt-5 rounded-lg">
            <div className="px-8 pt-6 pb-4 flex justify-between">
              <span className="text-xl font-bold px-2 py-1 bg-blue-700/55 text-white rounded-lg ">
                Conclusao
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
          </div>
        </div>
        <hr className="border-slate-700/45 mt-7 mb-2" />
      </div>
    </div>
  );
}
