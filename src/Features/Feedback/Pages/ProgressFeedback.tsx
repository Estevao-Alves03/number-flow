import { TbClock } from "react-icons/tb";
import { Button } from "../../../components/ui/button";
import { SlCalender } from "react-icons/sl";
import { Card } from "../../../components/ui/card";
import { FiChevronsUp, FiRefreshCcw } from "react-icons/fi";

export default function ProgressFeedback() {
  return (
    <div>
      <div className="rounded-xl border-2 border-violet-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 p-20 text-center text-zinc-400 mb-6">
        <div className="flex flex-col items-center gap-2">
          <TbClock className="text-6xl text-zinc-600" />

          <h1 className="text-2xl font-semibold mt-6">
            Nenhum feedback em andamento
          </h1>

          <p className="text-base">
            Os feedbacks em que estão em processo de contato aparecerão aqui
          </p>
        </div>
      </div>

      {/* academia que deve entrar em contato mais a frente */}
      <Card className="w-full mb-6 rounded-xl bg-white p-6 border-2 border-violet-600 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 shadow-md">
        {/* nome da academia e botao de interaçao */}
        <div className="text-white flex items-center justify-between px-4 pb-2">
          <h1 className="text-3xl font-bold flex gap-3">
            Acad Acuas Fit
            <span className="rounded-full bg-blue-900/70 px-2.5 py-1.5 font-bold text-lg flex items-center">
              7º dia
            </span>
          </h1>
          <Button
            className="bg-zinc-700 hover:bg-zinc-700 text-xl px-6 py-5"
            disabled
          >
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
        <h2 className="mt-3 font-semibold text-lg px-4 text-white">
          Contatos Realizados:
        </h2>
        <section className="flex flex-cols-4 items-center gap-3 w-[430px] mt-3 px-4">
          <Button className="px-4 py-2 bg-violet-900 hover:bg-violet-900/70 text-violet-100 rounded-xl text-base font-bold">
            3 dias
          </Button>
          <Button
            className="px-4 py-2 bg-zinc-700 text-white rounded-xl text-base font-bold"
            disabled
          >
            7 dias
          </Button>
          <Button
            className="px-4 py-2 bg-zinc-700 text-white rounded-xl text-base font-bold"
            disabled
          >
            15 dias
          </Button>
          <Button
            className="px-4 py-2 bg-zinc-700 text-white rounded-xl text-base font-bold"
            disabled
          >
            30 dias
          </Button>
        </section>
      </Card>

      <Card className="w-full rounded-xl border border-violet-700 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 px-6 py-5 shadow-md">
        <div className="flex items-start justify-between">
          <div className="space-y-2 mt-3 p-2">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-bold text-white">
                Acad Acuas Fit
              </h2>
              <span className="rounded-full bg-blue-900/70 px-4 py-1.5 text-white font-bold text-lg flex items-center">
               Em progresso
              </span>

            </div>

            <div className="flex items-center gap-4 text-lg text-zinc-300">
              <span>(34) 24423-4342</span>
              <span>•</span>
              <span>Feito em: 16/12/2025</span>
              <span>•</span>
              <span>1 anotações</span>
            </div>
          </div>

          <Button className="mt-4 text-white font-bold rounded-lg text-lg py-5 px-4 flex items-center gap-2 bg-violet-700/90 hover:bg-violet-900/90">
            <FiChevronsUp className="!w-6 !h-6" />
          </Button>
        </div>
        <hr className="border-slate-700/45 mt-7 mb-5" />
        <div className="max-h-[450px] overflow-y-auto pb-6">
          <div className="text-white text-2xl flex items-center gap-2 px-5 pt-4">
            <FiRefreshCcw className="text-green-600" />
            <h1>Histórico de Anotações</h1>
          </div>
          <div className="border border-violet-700/90 bg-slate-900/50 shador-md mx-6 mt-5 rounded-lg">
            <div className="px-8 pt-6 pb-4 flex justify-between">
              <span className="text-xl font-bold px-4 py-1 bg-purple-700/55 text-white rounded-xl ">
                3 dia
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
            <section className="px-8 mb-4 text-base font-medium flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full">
                Respostas rápidas 24h
              </span>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full">
                Redução no tempo de atendimento
              </span>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full">
                Atendimento padronizado e eficiente
              </span>

              <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full">
                Pode falhar em perguntas muito específicas
              </span>
              <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full">
                Depende de um bom treinamento inicial
              </span>
              <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full">
                Não substitui 100% o humano
              </span>

              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                Melhorar compreensão de contexto
              </span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                Adicionar personalização por cliente
              </span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                Integrar com CRM e agenda
              </span>
            </section>
          </div>
        </div>
      </Card>
    </div>
  );
}
