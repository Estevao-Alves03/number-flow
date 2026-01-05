import { FiCheckCircle, FiChevronsDown, FiMessageSquare } from "react-icons/fi";
import { FiChevronsUp } from "react-icons/fi";
import { MdAdd } from "react-icons/md";
import { FaTag } from "react-icons/fa6";
import { FiRefreshCcw } from "react-icons/fi";
import { GrNotes } from "react-icons/gr";
import { Textarea } from "../../../components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Button } from "../../../components/ui/button";
import { TbClock } from "react-icons/tb";

export default function PendingImplantion() {
  return (
    <div className=" mt-7 pb-24">
      <div className="rounded-xl border-2 border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 p-20 text-center text-zinc-400 mb-6">
        <div className="flex flex-col items-center gap-2">
          <TbClock className="text-6xl text-zinc-600" />

          <h1 className="text-2xl font-semibold mt-6">
            Nenhuma implementação ativa
          </h1>

          <p className="text-base">
            As implantações que estão em andamento aparecerão aqui
          </p>
        </div>
      </div>

      {/* card fechado */}
      <Card className="w-full mb-5 rounded-xl border border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 px-6 py-5 shadow-md">
        <div className="flex items-start justify-between ">
          {/* Lado esquerdo */}
          <div className="space-y-2 mt-3 p-2 ">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-semibold text-white">
                teste de acad
              </h2>

              <span className="rounded-full bg-blue-500/60 px-4 py-1.5 text-lg font-bold text-white">
                Em andamento
              </span>
            </div>

            <div className="flex items-center gap-4 text-lg text-zinc-300">
              <span>(34) 24423-4342</span>
              <span>•</span>
              <span>Iniciado: 16/12/2025</span>
              <span>•</span>
              <span>0 anotações</span>
            </div>
          </div>

          {/* Ícone */}
           <Button className="mt-4 text-white font-bold rounded-lg text-lg py-5 px-4 flex items-center gap-2 bg-blue-500/40 hover:bg-blue-500/20">
            <FiChevronsDown className="!w-6 !h-6" />
          </Button>
        </div>

        <hr className="border-slate-700/45 mt-7 mb-2" />

      </Card>

      {/* card aberto */}
      <Card className="w-full rounded-xl border border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 px-6 py-5 shadow-md ">
        <div className="flex items-start justify-between">
          {/* Lado esquerdo */}
          <div className="space-y-2 mt-3 p-2">
            {/* Linha superior */}
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-semibold text-white">
                teste de acad
              </h2>

              <span className="rounded-full bg-blue-500/60 px-4 py-1.5 text-lg font-bold text-white">
                Em andamento
              </span>
            </div>

            {/* Linha inferior */}
            <div className="flex items-center gap-4 text-lg text-zinc-300">
              <span>(34) 24423-4342</span>
              <span>•</span>
              <span>Iniciado: 16/12/2025</span>
              <span>•</span>
              <span>0 anotações</span>
            </div>
          </div>

          {/* Botão à direita */}
          <Button className="mt-4 text-white font-bold rounded-lg text-lg py-5 px-4 flex items-center gap-2 bg-blue-500/40 hover:bg-blue-500/20">
            <FiChevronsUp className="!w-6 !h-6" />
          </Button>
        </div>

        <hr className="border-slate-700/45 mt-7 mb-16" />

        <Card className="rounded-xl border border-blue-700/30 bg-slate-900/500 shador-md">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-3 text-2xl font-bold">
              <MdAdd className="text-3xl text-blue-600" />
              Adicionar Nova Anotação
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <h1 className="flex font-bold items-center gap-2 text-white text-xl mb-4">
                <FaTag className="text-xl" />
                Categoria
              </h1>
              <Select>
                <SelectTrigger className="w-[280px] h-[45px] bg-slate-900/500 border border-blue-700/40 text-zinc-100 rounded-lg font-bold text-base">
                  <SelectValue
                    placeholder="Escolha uma etapa"
                    className="placeholder:text-white"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    value="GymbotTraining"
                    className="cursor-pointer data-[highlighted]:bg-blue-600 data-[highlighted]:text-white font-bold text-base"
                  >
                    Treinamento Gymbot
                  </SelectItem>
                  <SelectItem
                    value="PromptAlignment"
                    className="cursor-pointer data-[highlighted]:bg-blue-600 data-[highlighted]:text-white font-bold text-base"
                  >
                    Alinhamento de prompt
                  </SelectItem>
                  <SelectItem
                    value="AiUnderTest"
                    className="cursor-pointer data-[highlighted]:bg-blue-600 data-[highlighted]:text-white font-bold text-base"
                  >
                    IA em teste
                  </SelectItem>
                  <SelectItem
                    value="Validation"
                    className="cursor-pointer data-[highlighted]:bg-blue-600 data-[highlighted]:text-white font-bold text-base"
                  >
                    1º Validação
                  </SelectItem>
                  <SelectItem
                    value="Stopped"
                    className="cursor-pointer data-[highlighted]:bg-blue-600 data-[highlighted]:text-white font-bold text-base"
                  >
                    Parado
                  </SelectItem>
                  <SelectItem
                    value="Conclusion"
                    className="cursor-pointer data-[highlighted]:bg-blue-600 data-[highlighted]:text-white font-bold text-base"
                  >
                    Conclusão
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <h1 className="flex font-bold items-center gap-2 text-white text-xl  mb-4 mt-6">
                <FiMessageSquare />
                Descrição
              </h1>
              <Textarea
                placeholder="Descreva em detalhes o que foi feito, discutido ou observado"
                className="h-[180px] border border-blue-700/40 bg-slate-950/10 text-zinc-200 !text-xl !font-bold !placeholder:text-xlda px-5 py-5"
              />
            </div>
            <Button className="flex items-center gap-2 mt-6 bg-blue-900 py-6 hover:bg-blue-800/70 font-bold text-xl">
              <MdAdd className="!w-6 !h-6 text-white" />
              Salvar Anotação
            </Button>
          </CardContent>
        </Card>
        <div className="text-white text-2xl flex items-center gap-2 px-5 pt-7">
          <FiRefreshCcw className="text-green-600" />
          <h1>Histórico de Anotações</h1>
        </div>
        <div className="flex flex-col items-center gap-2 text-white mt-10 mb-14">
          <GrNotes className="text-6xl text-zinc-700" />
          <h1 className="text-center text-2xl text-zinc-700 mt-2">
            Nenhuma anotação registrada ainda.
          </h1>
        </div>
        <hr className="border-slate-700/45 mt-7 mb-2" />
        <Button className="flex items-center gap-2 mt-6 ml-2 bg-green-900 py-6 hover:bg-green-800/70 text-xl font-bold">
          <FiCheckCircle className="!w-6 !h-6 text-white" />
          Concluír Implantação
        </Button>
      </Card>
    </div>
  );
}
