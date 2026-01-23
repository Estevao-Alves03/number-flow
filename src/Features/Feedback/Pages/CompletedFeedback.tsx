import { FiChevronsDown, FiChevronsUp, FiRefreshCcw } from "react-icons/fi";
import { LiaStarSolid } from "react-icons/lia";
import { FiCheckCircle } from "react-icons/fi";
import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";
import { useState } from "react";


interface Feedback {
  id: number;
  nameGym: string;
  state: string;
  implementedBy: string;
  nextContactAt: string;
  implementationDone: string;
  contactsMade: number;
  contact: string;
  dateNow: string;
  madeIn: string;
  crmCompleted: string;
}

const mockData: Feedback[] = [
  {
    id: 1,
    nameGym: "Acad Acuas Fit",
    state: "novo",
    implementedBy: "rayck",
    nextContactAt: "22/01/2026",
    implementationDone: "19/01/2026",
    dateNow: "23/01/2026",
    contactsMade: 1,
    contact: "3º dia",
    madeIn: "30/02/2026",
    crmCompleted: "20/03/2026",
  },
  // {
  //   id: 1,
  //   nameGym: "Acad Acuas Fit",
  //   state: "novo",
  //   implementedBy: "rayck",
  //   nextContactAt: "22/01/2026",
  //   implementationDone: "19/01/2026",
  //   dateNow: "23/01/2026",
  //   contactsMade: 1,
  //   contact: "3º dia",
  //   madeIn: "30/02/2026",
  //   crmCompleted: "20/03/2026",
  // },
];

export default function CompletedFeedback() {

  const [feedbacks] = useState<Feedback[]>(mockData)
  const [openId, setOpenId] = useState<number | null>(null)

  function toggleCard(id: number){
    setOpenId((prev) => (prev === id ? null : id))
  }

  if(feedbacks.length === 0){
    return(
      <div className="rounded-xl border-2 border-violet-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 p-20 text-center text-zinc-400 mb-6">
        <div className="flex flex-col items-center gap-2">
          <FiCheckCircle className="text-6xl text-zinc-600" />

          <h1 className="text-2xl font-semibold mt-6">
            Nenhum feedback concluído
          </h1>

          <p className="text-base">
            Os feedbacks finalizados aparecerão aqui com todas as informações
            coletadas
          </p>
        </div>
      </div>
    )
  }

  return (
   <div>
    {feedbacks.map((feedback) => {
      const isOpen = openId === feedback.id

      return(
        <>
         {/* card aberto */}
      <div className="w-full mb-4 px-7 py-7 rounded-xl bg-white  border-4 border-violet-600/90 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 shadow-md">
        <div className="flex items-start justify-between">
          <div className="space-y-2 mt-3 p-2">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-semibold text-white">
                {feedback.nameGym}
              </h2>

              <span className="rounded-full bg-green-900/70 px-4 py-1.5 text-lg font-bold text-white">
                {feedback.state}
              </span>
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
      </div>
        </>
      )
    })}
   </div>
  );
}
