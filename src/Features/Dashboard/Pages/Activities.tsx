import { TbActivityHeartbeat } from "react-icons/tb";
import { FiCheckCircle } from "react-icons/fi";
import { TfiTime } from "react-icons/tfi";
import { IoAlertCircleOutline, IoSearch } from "react-icons/io5";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { BiFilterAlt } from "react-icons/bi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

export default function Activities() {
  return (
    <div className="px-44 pb-24">
      <Card className="border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950">
        <CardHeader>
          <CardTitle className="text-3xl text-white flex items-center gap-3">
            <TbActivityHeartbeat className="text-blue-700 text-4xl" />
            Atividades Recentes
          </CardTitle>
          <CardDescription className="text-xl text-zinc-100">
            Monitore as atividades atualizadas de cada colaborador
          </CardDescription>

          <div className="grid grid-cols-4 gap-6">
            {/* pesquisa */}
            <section className="relative mt-6 mb-4 col-span-2">
              <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600" />
              <input
                placeholder="Buscar Empresa, CNPJ ou implantador"
                className="w-full rounded-lg py-4 pl-10 pr-3 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 border border-blue-700/40 text-zinc-100 placeholder:text-zinc-300 placeholder:text-base
                focus:outline-none focus:ring-0 focus:border-blue-700/40"
              />
            </section>

            {/* filtro por categoria */}
            <section className="mt-6 mb-4 flex items-center gap-2">
              <BiFilterAlt className="text-white text-4xl mr-3" />
              <Select defaultValue="all">
                <SelectTrigger className="h-[60px] bg-slate-900/500 border border-blue-700/40 text-zinc-100 rounded-lg text-base">
                  <SelectValue />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem
                    value="all"
                    className="cursor-pointer data-[highlighted]:bg-blue-600 data-[highlighted]:text-white font-bold text-base"
                  >
                    Todas as situações
                  </SelectItem>
                  <SelectItem
                    value="implantation"
                    className="cursor-pointer data-[highlighted]:bg-blue-600 data-[highlighted]:text-white font-bold text-base"
                  >
                    Em Implantação
                  </SelectItem>
                  <SelectItem
                    value="completed"
                    className="cursor-pointer data-[highlighted]:bg-blue-600 data-[highlighted]:text-white font-bold text-base"
                  >
                    Concluídas
                  </SelectItem>
                  <SelectItem
                    value="collecting_feedback"
                    className="cursor-pointer data-[highlighted]:bg-blue-600 data-[highlighted]:text-white font-bold text-base"
                  >
                    Coletando feedback
                  </SelectItem>
                </SelectContent>
              </Select>
            </section>
          </div>

          <div>
            <span className="text-white font-semibold text-lg">
              8 treinamento(s) encontrado(s)
            </span>
          </div>
        </CardHeader>

        <hr className="mb-4 border-blue-700/30" />

        <CardContent>
          <div className="max-h-[450px] overflow-y-auto">
            <Card className="px-4 py-5 mt-4 border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 mr-6 ">
              <div className="flex items-center gap-4 ">
                {/* Ícone */}
                <div className="inline-flex items-center justify-center p-3 rounded-xl bg-violet-900/40">
                  <IoAlertCircleOutline className="w-6 h-6 text-violet-400" />
                </div>

                {/* Texto */}
                <div className="flex flex-col text-white">
                  <h1 className="text-2xl font-bold">
                    Feedback Atribuido:{" "}
                    <span className="font-semibold text-xl text-zinc-300">
                      Acad Cross Experience
                    </span>
                  </h1>

                  <div className="flex items-center gap-2 text-base text-zinc-300 mt-2">
                    <span>Cassia</span>
                    <span>•</span>
                    <span>18/12 - 14:20</span>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="px-4 py-5 mt-4 border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 mr-6">
              <div className="flex items-center gap-4">
                {/* Ícone */}
                <div className="inline-flex items-center justify-center p-3 rounded-xl bg-green-900/40">
                  <FiCheckCircle className="w-6 h-6 text-green-400" />
                </div>

                {/* Texto */}
                <div className="flex flex-col text-white">
                  <h1 className="text-2xl font-bold">
                    Implantação concluída:{" "}
                    <span className="font-semibold text-xl text-zinc-300">
                      Acad Cross Experience
                    </span>
                  </h1>

                  <div className="flex items-center gap-2 text-base text-zinc-300 mt-2">
                    <span>Ellias</span>
                    <span>•</span>
                    <span>18/12 - 14:20</span>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="px-4 py-5 mt-4 border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 mr-6">
              <div className="flex items-center gap-4">
                {/* Ícone */}
                <div className="inline-flex items-center justify-center p-3 rounded-xl bg-orange-900/40">
                  <TfiTime className="w-6 h-6 text-orange-400" />
                </div>

                {/* Texto */}
                <div className="flex flex-col text-white">
                  <h1 className="text-2xl font-bold">
                    Implantação atribuida:{" "}
                    <span className="font-semibold text-xl text-zinc-300">
                      Acad Evolvition
                    </span>
                  </h1>

                  <div className="flex items-center gap-2 text-base text-zinc-300 mt-2">
                    <span>Rayck</span>
                    <span>•</span>
                    <span>15/12 - 14:20</span>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="px-4 py-5 mt-4 border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 mr-6">
              <div className="flex items-center gap-4">
                {/* Ícone */}
                <div className="inline-flex items-center justify-center p-3 rounded-xl bg-orange-900/40">
                  <TfiTime className="w-6 h-6 text-orange-400" />
                </div>

                {/* Texto */}
                <div className="flex flex-col text-white">
                  <h1 className="text-2xl font-bold">
                    Implantação atribuida:{" "}
                    <span className="font-semibold text-xl text-zinc-300">
                      Acad Evolvition
                    </span>
                  </h1>

                  <div className="flex items-center gap-2 text-base text-zinc-300 mt-2">
                    <span>Rayck</span>
                    <span>•</span>
                    <span>15/12 - 14:20</span>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="px-4 py-5 mt-4 border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 mr-6">
              <div className="flex items-center gap-4">
                {/* Ícone */}
                <div className="inline-flex items-center justify-center p-3 rounded-xl bg-orange-900/40">
                  <TfiTime className="w-6 h-6 text-orange-400" />
                </div>

                {/* Texto */}
                <div className="flex flex-col text-white">
                  <h1 className="text-2xl font-bold">
                    Implantação atribuida:{" "}
                    <span className="font-semibold text-xl text-zinc-300">
                      Acad Evolvition
                    </span>
                  </h1>

                  <div className="flex items-center gap-2 text-base text-zinc-300 mt-2">
                    <span>Rayck</span>
                    <span>•</span>
                    <span>15/12 - 14:20</span>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="px-4 py-5 mt-4 border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 mr-6">
              <div className="flex items-center gap-4">
                {/* Ícone */}
                <div className="inline-flex items-center justify-center p-3 rounded-xl bg-orange-900/40">
                  <TfiTime className="w-6 h-6 text-orange-400" />
                </div>

                {/* Texto */}
                <div className="flex flex-col text-white">
                  <h1 className="text-2xl font-bold">
                    Implantação atribuida:{" "}
                    <span className="font-semibold text-xl text-zinc-300">
                      Acad Evolvition
                    </span>
                  </h1>

                  <div className="flex items-center gap-2 text-base text-zinc-300 mt-2">
                    <span>Rayck</span>
                    <span>•</span>
                    <span>15/12 - 14:20</span>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="px-4 py-5 mt-4 border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 mr-6">
              <div className="flex items-center gap-4">
                {/* Ícone */}
                <div className="inline-flex items-center justify-center p-3 rounded-xl bg-orange-900/40">
                  <TfiTime className="w-6 h-6 text-orange-400" />
                </div>

                {/* Texto */}
                <div className="flex flex-col text-white">
                  <h1 className="text-2xl font-bold">
                    Implantação atribuida:{" "}
                    <span className="font-semibold text-xl text-zinc-300">
                      Acad Evolvition
                    </span>
                  </h1>

                  <div className="flex items-center gap-2 text-base text-zinc-300 mt-2">
                    <span>Rayck</span>
                    <span>•</span>
                    <span>15/12 - 14:20</span>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="px-4 py-5 mt-4 border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 mr-6">
              <div className="flex items-center gap-4">
                {/* Ícone */}
                <div className="inline-flex items-center justify-center p-3 rounded-xl bg-orange-900/40">
                  <TfiTime className="w-6 h-6 text-orange-400" />
                </div>

                {/* Texto */}
                <div className="flex flex-col text-white">
                  <h1 className="text-2xl font-bold">
                    Implantação atribuida:{" "}
                    <span className="font-semibold text-xl text-zinc-300">
                      Acad Evolvition
                    </span>
                  </h1>

                  <div className="flex items-center gap-2 text-base text-zinc-300 mt-2">
                    <span>Rayck</span>
                    <span>•</span>
                    <span>15/12 - 14:20</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
