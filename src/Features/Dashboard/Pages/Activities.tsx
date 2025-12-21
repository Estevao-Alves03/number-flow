import { TbActivityHeartbeat } from "react-icons/tb";
import { FiCheckCircle } from "react-icons/fi";
import { TfiTime } from "react-icons/tfi";
import { IoAlertCircleOutline } from "react-icons/io5";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";

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
        </CardHeader>

        <CardContent className="">
          <div className="max-h-[450px] overflow-y-auto">
            <Card className="px-4 py-5 border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/50 to-slate-950 ">
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
            <Card className="px-4 py-5 mt-4 border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/50 to-slate-950">
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
            <Card className="px-4 py-5 mt-4 border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/50 to-slate-950">
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
            <Card className="px-4 py-5 mt-4 border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/50 to-slate-950">
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
            <Card className="px-4 py-5 mt-4 border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/50 to-slate-950">
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
            <Card className="px-4 py-5 mt-4 border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/50 to-slate-950">
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
            <Card className="px-4 py-5 mt-4 border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/50 to-slate-950">
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
            <Card className="px-4 py-5 mt-4 border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/50 to-slate-950">
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
