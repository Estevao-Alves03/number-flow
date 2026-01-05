import { Button } from "../../../components/ui/button";
import { SlCalender } from "react-icons/sl";
import { Textarea } from "../../../components/ui/textarea";
import { MdAdd } from "react-icons/md";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { FiChevronsUp } from "react-icons/fi";
import { MdThumbUpOffAlt } from "react-icons/md";
import { MdThumbDownOffAlt } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { Input } from "../../../components/ui/input";
import { LiaStarSolid } from "react-icons/lia";
import { Checkbox } from "../../../components/ui/checkbox";
import { Label } from "../../../components/ui/label";
import { FiCheckCircle } from "react-icons/fi";
import { TbClock } from "react-icons/tb";

export default function PendingFeedback() {
  return (
    <div>
      <div className="rounded-xl border-2 border-violet-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 p-20 text-center text-zinc-400 mb-6">
        <div className="flex flex-col items-center gap-2">
          <TbClock className="text-6xl text-zinc-600" />

          <h1 className="text-2xl font-semibold mt-6">
            Nenhum feedback pendente
          </h1>

          <p className="text-base">
            Os feedbacks aparecerão aqui quando chegar o dia de entrar em
            contato com o cliente
          </p>
        </div>
      </div>

      {/* academia que deve mandar mensagem no dia - card fechado*/}
      <Card className="w-full mb-4 rounded-xl bg-white p-6 border-4 border-violet-600/90 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 shadow-md">
        <div className="text-white flex items-center justify-between px-4 pb-2">
          <h1 className="text-3xl font-bold flex gap-3">
            Acad Acuas Fit
            <span className="rounded-full bg-blue-900/70 px-2.5 py-1.5 font-bold text-lg flex items-center">
              3º dia
            </span>
          </h1>
          <Button className="bg-violet-700 hover:bg-violet-800/50 text-xl px-6 py-5">
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
      </Card>

      {/* card aberto - 3 a 15 dias*/}
      <Card className="w-full rounded-xl border-4 border-violet-600/90 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 px-6 py-5 shadow-md ">
        <div className="flex items-start justify-between">
          <div className="space-y-2 mt-3 p-2">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-semibold text-white">
                Acad Acuas Fit
              </h2>

              <span className="rounded-full bg-blue-900/70 px-4 py-1.5 text-lg font-bold text-white">
                Primeiro contato - 3º dia
              </span>
            </div>

            <div className="flex items-center gap-4 text-lg text-zinc-300">
              <span>Iniciado: 22/12/2025</span>
              <span>•</span>
              <span>Rayck</span>
            </div>
          </div>

          <Button className="mt-4 text-white font-bold rounded-lg text-lg py-5 px-4 flex items-center gap-2 bg-violet-700/90 hover:bg-violet-900/90">
            <FiChevronsUp className="!w-6 !h-6" />
          </Button>
        </div>
        <hr className="border-slate-700/45 mt-7 mb-16" />

        <Card className="rounded-xl border-4 border-violet-600/90 bg-slate-900/500 shador-md">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-3 text-2xl font-bold">
              <MdAdd className="text-3xl text-blue-600" />
              Adicione as informações sobre a satisfacação do cliente
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-3">
              <section>
                <h1 className="flex font-bold items-center gap-2 text-white text-xl mb-4">
                  <MdThumbUpOffAlt className="text-xl w-6 h-6 text-green-700" />
                  Pontos positivos
                </h1>
                <Input className="text-zinc-300 !rounded-lg bg-slate-800/10 !text-lg border-slate-600 !px-3 !py-5" />
              </section>
              <section>
                <h1 className="flex font-bold items-center gap-2 text-white text-xl mb-4">
                  <MdThumbDownOffAlt className="text-xl w-6 h-6 text-red-700" />
                  Pontos negativos
                </h1>
                <Input className="text-zinc-300 !rounded-lg bg-slate-800/10 !text-lg border-slate-600 !px-3 !py-5" />
              </section>
              <section>
                <h1 className="flex font-bold items-center gap-2 text-white text-xl mb-4">
                  <FaRegLightbulb className="text-xl w-6 h-6 text-blue-700" />
                  Sugestões
                </h1>
                <Input className="text-zinc-300 !rounded-lg bg-slate-800/10 !text-lg border-slate-600 !px-3 !py-5" />
              </section>
            </div>
            <div className="mt-16">
              <h1 className="flex items-center font-bold gap-2 text-white text-xl  mb-4 mt-6">
                <FiMessageSquare />
                Comentários Gerais
              </h1>
              <Textarea
                placeholder="Coloque as informações de forma mais detalhada de como foi a conversa com o cliente"
                className="h-[180px] !rounded-lg border border-slate-700 bg-slate-800/10 text-zinc-200 !text-xl !font-bold !placeholder:text-xl px-5 py-5"
              />
            </div>
            <Button className="rounded-xl flex items-center gap-2 mt-6 bg-blue-900/70 py-6 hover:bg-blue-800/70 text-xl !font-bold">
              <MdAdd className="!w-6 !h-6 text-white" />
              Salvar Anotação
            </Button>
          </CardContent>
        </Card>
      </Card>

      <Card className="w-full mt-4 rounded-xl border-4 border-violet-600/90 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 px-6 py-5 shadow-md ">
        <div className="flex items-start justify-between ">
          <div className="space-y-2 mt-3 p-2">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-semibold text-white">
                Acad Acuas Fit
              </h2>

              <span className="rounded-full bg-blue-900/70 px-4 py-1.5 text-lg font-bold text-white">
                Quarto contato - 30º dia
              </span>
            </div>

            <div className="flex items-center gap-4 text-lg text-zinc-300">
              <span>Iniciado: 22/12/2025</span>
              <span>•</span>
              <span>Rayck</span>
            </div>
          </div>

           <Button className="mt-4 text-white font-bold rounded-lg text-lg py-5 px-4 flex items-center gap-2 bg-violet-700/90 hover:bg-violet-900/90">
            <FiChevronsUp className="!w-6 !h-6" />
          </Button>
        </div>
        <hr className="border-slate-700/45 mt-7 mb-16" />

        <Card className="rounded-xl border border-violet-600/90 bg-slate-900/500 shador-md">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-3 text-2xl font-bold">
              <MdAdd className="text-3xl text-blue-600" />
              Adicione as informações sobre a satisfacação do cliente
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-3">
              <section>
                <h1 className="flex font-bold items-center gap-2 text-white text-xl mb-4">
                  <MdThumbUpOffAlt className="text-xl w-6 h-6 text-green-700" />
                  Pontos positivos
                </h1>
                <Input className="text-zinc-300 !rounded-lg bg-slate-800/10 !text-lg border-slate-600 !px-3 !py-5" />
              </section>
              <section>
                <h1 className="flex font-bold items-center gap-2 text-white text-xl mb-4">
                  <MdThumbDownOffAlt className="text-xl w-6 h-6 text-red-700" />
                  Pontos negativos
                </h1>
                <Input className="text-zinc-300 !rounded-lg bg-slate-800/10 !text-lg border-slate-600 !px-3 !py-5" />
              </section>
              <section>
                <h1 className="flex font-bold items-center gap-2 text-white text-xl mb-4">
                  <FaRegLightbulb className="text-xl w-6 h-6 text-blue-700" />
                  Sugestões
                </h1>
                <Input className="text-zinc-300 !rounded-lg bg-slate-800/10 !text-lg border-slate-600 !px-3 !py-5" />
              </section>
            </div>
            <div className="mt-16">
              <h1 className="flex items-center font-bold gap-2 text-white text-xl  mb-4 mt-6">
                <FiMessageSquare />
                Comentários Gerais
              </h1>
              <Textarea
                placeholder="Coloque as informações de forma mais detalhada de como foi a conversa com o cliente"
                className="h-[180px] !rounded-lg border border-slate-700 bg-slate-800/10 text-zinc-200 !text-xl !font-bold !placeholder:text-xl px-5 py-5"
              />
            </div>

            <div className="grid grid-cols-3 gap-3 mt-8">
              <section className="">
                <h1 className="text-xl font-bold text-white">
                  Satisfação com o produto:
                </h1>
                <section className="flex items-center gap-2 text-4xl mt-2 mb-2">
                  <LiaStarSolid className="text-zinc-500" />
                  <LiaStarSolid className="text-zinc-500" />
                  <LiaStarSolid className="text-zinc-500" />
                  <LiaStarSolid className="text-zinc-500" />
                  <LiaStarSolid className="text-zinc-500" />
                </section>
              </section>
              <section className="">
                <h1 className="text-xl font-bold text-white">
                  Satisfação com a implantação:
                </h1>
                <section className="flex items-center gap-2 text-4xl mt-2 mb-2">
                  <LiaStarSolid className="text-zinc-500" />
                  <LiaStarSolid className="text-zinc-500" />
                  <LiaStarSolid className="text-zinc-500" />
                  <LiaStarSolid className="text-zinc-500" />
                  <LiaStarSolid className="text-zinc-500" />
                </section>
              </section>
              <section className="">
                <h1 className="text-xl font-bold text-white">
                  Cliente recomendaria o produto?
                </h1>
                <div className="flex items-center gap-4">
                  <section className="flex items-center gap-2 text-4xl mt-2 mb-2">
                    <Checkbox className="rounded-lg border-zinc-400 w-6 h-6" />
                    <Label className="text-green-500 text-xl font-bold">
                      Sim, Recomendaria!
                    </Label>
                  </section>
                  <section className="flex items-center gap-2 text-4xl mt-2 mb-2">
                    <Checkbox className="rounded-lg border-zinc-400 w-6 h-6" />
                    <Label className="text-red-500 text-xl font-bold">
                      Não Recomendaria.
                    </Label>
                  </section>
                </div>
              </section>
            </div>
            <Button className="rounded-xl flex items-center gap-2 mt-6 bg-green-600/70 py-6 hover:bg-green-800/70 text-xl !font-bold">
              <FiCheckCircle className="!w-6 !h-6 text-white" />
              Concluir acompanhamento
            </Button>
          </CardContent>
        </Card>
      </Card>
    </div>
  );
}
