import { TbClock } from "react-icons/tb";
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
    state: "Em progresso",
    implementedBy: "rayck",
    nextContactAt: "22/01/2026",
    implementationDone: "19/01/2026",
    dateNow: "23/01/2026",
    contactsMade: 1,
    contact: "3º dia",
    madeIn: "30/02/2026",
    crmCompleted: "20/03/2026",
  },
  {
    id: 2,
    nameGym: "Acad Acuas Fit",
    state: "Em progresso",
    implementedBy: "rayck",
    nextContactAt: "22/01/2026",
    implementationDone: "19/01/2026",
    dateNow: "23/01/2026",
    contactsMade: 1,
    contact: "3º dia",
    madeIn: "30/02/2026",
    crmCompleted: "20/03/2026",
  },
];

const history = [
  {
    day: 3,
    date: "17/12/2025",
    time: "14:45",
    comment:
      "Primeiro contato com o cliente. Conversa fluiu bem, entendimento rápido do sistema.",
    positives: [
      "Respostas rápidas 24h",
      "Atendimento padronizado e eficiente",
      "Boa aceitação da equipe",
    ],
    negatives: [
      "Pode falhar em perguntas muito específicas",
      "Depende de um bom treinamento inicial",
    ],
    suggestions: [
      "Adicionar personalização por cliente",
      "Integrar com CRM e agenda",
    ],
  },
  {
    day: 7,
    date: "21/12/2025",
    time: "10:20",
    comment:
      "Cliente começou a usar com mais frequência. Alguns ajustes solicitados.",
    positives: ["Uso mais frequente", "Equipe mais confiante"],
    negatives: ["Dúvidas em relatórios"],
    suggestions: ["Criar vídeos rápidos de ajuda"],
  },
  {
    day: 15,
    date: "29/12/2025",
    time: "16:10",
    comment: "Sistema bem integrado ao dia a dia. Poucas reclamações.",
    positives: ["Redução no tempo de atendimento", "Fluxo bem definido"],
    negatives: [],
    suggestions: ["Automatizar lembretes"],
  },
];

export default function ProgressFeedback() {
  const [feedbacks] = useState<Feedback[]>(mockData);
  const [selectDayById, setSelectDayById] = useState<
    Record<number, number | null>
  >({});

  function getHistoryUpToDay(day: number) {
    return history.filter((item) => item.day <= day);
  }

  function hasHistory(day: number) {
    return history.some((item) => item.day === day);
  }

  if (feedbacks.length === 0) {
    return (
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
    );
  }

  return (
    <>
      {feedbacks.map((feedback) => (
        <div
          key={feedback.id}
          className="w-full mb-6 px-7 py-7 rounded-xl border-4 border-violet-600 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 shadow-md"
        >
          {/* Header */}
          <div className="text-white flex justify-between px-4 pb-2">
            <h1 className="text-3xl font-bold flex gap-3">
              {feedback.nameGym}
              <span className="rounded-full bg-blue-900/70 px-3 py-1 text-lg">
                {feedback.contact}
              </span>
            </h1>
          </div>

          {/* Info */}
          <div className="text-white px-4 grid gap-1">
            <section className="flex gap-2">
              <SlCalender /> Próximo contato: {feedback.nextContactAt}
            </section>
            <section>Implantador: {feedback.implementedBy}</section>
            <section>Concluído em: {feedback.implementationDone}</section>
          </div>

          <hr className="my-5 border-slate-800" />

          {/* Botões */}
          <div className="flex justify-between items-center px-4">
            <section className="flex gap-3">
              {[3, 7, 15, 30].map((day) => {
                const available = hasHistory(day);

                return (
                  <Button
                    key={day}
                    onClick={() =>
                      available &&
                      setSelectDayById((prev) => ({
                        ...prev,
                        [feedback.id]: day,
                      }))
                    }
                    disabled={!available}
                    className={
                      available
                        ? "bg-violet-900 hover:bg-violet-900/70"
                        : "bg-zinc-700 opacity-50 cursor-not-allowed"
                    }
                  >
                    {day} dias
                  </Button>
                );
              })}
            </section>

            {selectDayById[feedback.id] && (
              <Button
                onClick={() =>
                  setSelectDayById((prev) => ({
                    ...prev,
                    [feedback.id]: null,
                  }))
                }
                className="bg-violet-600/80 hover:bg-violet-700 text-white font-bold"
              >
                Fechar histórico
              </Button>
            )}
          </div>

          {/* Histórico */}
          {selectDayById[feedback.id] &&
            getHistoryUpToDay(selectDayById[feedback.id]!).map((item) => (
              <div
                key={item.day}
                className="mt-6 rounded-xl border border-violet-700 bg-slate-900/60 px-7 py-7"
              >
                <div className="flex justify-between text-white">
                  <span className="font-bold text-xl">{item.day}º dia</span>
                  <span>
                    {item.date} - {item.time}
                  </span>
                </div>

                <p className="mt-4 text-zinc-300">{item.comment}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {item.positives.map((p, i) => (
                    <span
                      key={i}
                      className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full"
                    >
                      {p}
                    </span>
                  ))}
                  {item.negatives.map((n, i) => (
                    <span
                      key={i}
                      className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full"
                    >
                      {n}
                    </span>
                  ))}
                  {item.suggestions.map((s, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      ))}
    </>
  );
}
