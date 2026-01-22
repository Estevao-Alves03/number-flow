import { TbPlus } from "react-icons/tb";
import { Button } from "../../../components/ui/button";
import { SlCalender } from "react-icons/sl";
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

export default function NewsFeedback() {
  const [feedbacks] = useState<Feedback[]>(mockData);

  if (feedbacks.length === 0) {
    return (
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
    );
  }

  return (
    <div>
      {feedbacks.map((feedback) => {
        return (
          <div 
          key={feedback.id}
          className="w-full mb-4 px-7 py-7 rounded-xl bg-white  border-4 border-violet-600/90 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 shadow-md">
            <div className="text-white flex items-center justify-between px-4 pb-2">
              <h1 className="text-3xl font-bold flex gap-3">
                {feedback.nameGym}
                <span className="rounded-full bg-blue-900/70 px-4 py-1.5 text-lg font-bold text-white">
                  {feedback.state}
                </span>
              </h1>
              <Button
                className="bg-zinc-700 hover:bg-zinc-700 text-xl px-6 py-5"
                disabled
              >
                Coletar feedback
              </Button>
            </div>
            <div className="text-white px-4 grid grid-rows-3 gap-1.5">
              <section className="flex items-center gap-2">
                <h2 className="font-semibold text-lg flex items-center gap-2">
                  <SlCalender />
                  Proximo contato:
                </h2>
                <span className="text-zinc-300 mt-1">{feedback.nextContactAt}</span>
              </section>
              <section className="flex items-center gap-2">
                <h2 className="font-semibold text-lg">Implantador:</h2>
                <span className="text-zinc-300 mt-1">{feedback.implementedBy}</span>
              </section>
              <section className="flex items-center gap-2">
                <h2 className="font-semibold text-lg">Concluído em:</h2>
                <span className="text-zinc-300 mt-1">{feedback.implementationDone}</span>
              </section>
            </div>
          </div>
        );
      })}
    </div>
  );
}
