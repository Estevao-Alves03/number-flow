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

export default function PendingImplantion() {
  return (
    <div className=" mt-7 pb-16 ">
      <div className="rounded-xl border-2 border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 p-20 text-center text-zinc-400 mb-6">
        <div className="flex flex-col items-center gap-2">
          <GrNotes className="text-6xl text-zinc-600" />

          <h1 className="text-xl font-semibold mt-6">
            Nenhuma implementação ativa
          </h1>

          <p className="text-sm">
            Você será notificado quando receber novas implementações
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

              <span className="rounded-full bg-blue-500/20 px-3 py-1 text-lg font-medium text-blue-400">
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
          <FiChevronsDown className="w-8 h-8 text-zinc-400" />
        </div>
        <hr className="border-slate-700/45 mt-7 mb-2" />
      </div>
      {/* card aberto */}
      <div className="w-full rounded-xl border border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 px-6 py-5 shadow-md ">
        <div className="flex items-center justify-between hover:bg-slate-800/20">
          {/* Lado esquerdo */}
          <div className="space-y-2 mt-3 p-2">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-semibold text-white">
                teste de acad
              </h2>

              <span className="rounded-full bg-blue-500/20 px-3 py-1 text-lg font-medium text-blue-400">
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
          <FiChevronsUp className="w-8 h-8 text-zinc-400" />
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
                <SelectTrigger className="w-[280px] h-[45px] border border-slate-700 bg-slate-800/500 text-zinc-200 text-lg font-medium">
                  <SelectValue placeholder="Escolha uma etapa" />
                </SelectTrigger>
                <SelectContent className="bg-white hover:bg-zinc-400 ">
                  <SelectItem
                    value="GymbotTraining"
                    className="text-zinc-900 text-base !font-semibold"
                  >
                    Treinamento Gymbot
                  </SelectItem>
                  <SelectItem
                    value="PromptAlignment"
                    className="text-zinc-900 text-base font-semibold"
                  >
                    Alinhamento de prompt
                  </SelectItem>
                  <SelectItem
                    value="AiUnderTest"
                    className="text-zinc-900 text-base font-semibold"
                  >
                    IA em teste
                  </SelectItem>
                  <SelectItem
                    value="Validation"
                    className="text-zinc-900 text-base font-semibold"
                  >
                    1º Validação
                  </SelectItem>
                  <SelectItem
                    value="Conclusion"
                    className="text-zinc-900 text-base font-semibold"
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
                className="h-[180px] border border-slate-700 bg-slate-800/10 text-zinc-200 !text-xl !font-bold !placeholder:text-xl px-5 py-5"
              />
            </div>
            <Button className="flex items-center gap-2 mt-6 bg-blue-900 py-6 hover:bg-blue-800/70 text-xl">
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
      </div>
    </div>
  );
}
