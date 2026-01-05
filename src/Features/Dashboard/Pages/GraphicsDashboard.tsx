import { FiTrendingUp } from "react-icons/fi";
import { FaUserGroup } from "react-icons/fa6";
import { VscGraph } from "react-icons/vsc";
import { IoFlashSharp } from "react-icons/io5";
import { GiSportMedal } from "react-icons/gi";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";

export default function GraphicsDashboard() {
  return (
    <div className="px-44 pb-10">
      <div className="grid grid-cols-3 gap-8">
        {/* satisfação geral */}
        <Card className="border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <FiTrendingUp className="text-green-500 text-3xl" />
              <span className="text-2xl">Satisfação Geral</span>
            </CardTitle>
          </CardHeader>

          <hr className="my-4 border-blue-700/30" />

          <CardContent className="pt-11">
            <div className="mb-6">
              <div className="flex justify-between gap-2 text-sm mb-2">
                <span className="text-white text-xl mb-4 font-semibold">
                  Produto
                </span>
                <span className="text-3xl font-bold text-white">
                  3.0<span className="text-base text-zinc-300">/5</span>
                </span>
              </div>
              <div className="h-4 w-full rounded-full bg-slate-700">
                <div className="h-4 w-[60%] rounded-full bg-gradient-to-r from-green-400/80 to-green-500/55" />
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-white text-xl mb-4 font-semibold">
                  Implementação
                </span>
                <span className="text-3xl font-bold text-white">
                  4.0<span className="text-base text-zinc-300">/5</span>
                </span>
              </div>

              <div className="h-4 w-full rounded-full bg-slate-700">
                <div className="h-4 w-[80%] rounded-full bg-gradient-to-r from-blue-400/80 to-blue-500/55" />
              </div>
            </div>

            {/* Footer */}
            <div className="pt-20 border-t border-white/20 flex justify-between items-center">
              <span className="text-white text-xl font-semibold">
                Taxa de Recomendação
              </span>
              <span className="text-3xl font-bold bg-purple-500 bg-clip-text text-transparent">
                100%
              </span>
            </div>
          </CardContent>
        </Card>

        {/* status de feedback */}
        <Card className="border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <VscGraph className="text-blue-600 text-3xl" />
              <span className="text-2xl">Status de Feedback</span>
            </CardTitle>
          </CardHeader>

          <hr className="my-4 border-blue-700/30" />

          <CardContent className="pt-10 flex flex-col gap-4">
            <div className="px-4 py-6 text-xl font-bold text-zinc-100 bg-slate-800/40 rounded-lg flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-blue-500" />
              Em Implantação
              <span className="ml-auto text-2xl">2</span>
            </div>

            <div className="px-4 py-6 text-xl font-bold text-zinc-100 bg-slate-800/40 rounded-lg flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-violet-500" />
              Coletando Feedback
              <span className="ml-auto text-2xl">3</span>
            </div>

            <div className="px-4 py-6 text-xl font-bold text-zinc-100 bg-slate-800/40 rounded-lg flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-500" />
              Concluídos
              <span className="ml-auto text-2xl">7</span>
            </div>
          </CardContent>
        </Card>

        {/* performance implantadores */}
        <Card className="border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <FaUserGroup className="text-purple-600 text-3xl" />
              <span className="text-2xl">Performance por implantador</span>
            </CardTitle>
          </CardHeader>

          <hr className="my-4 border-blue-700/30" />
          <CardContent className="pt-10 flex flex-col gap-4">
            <div className="max-h-[320px] overflow-y-auto flex flex-col gap-4">
              <div className="px-4 py-4 mr-4 text-xl font-bold text-zinc-100 bg-slate-800/40 rounded-lg">
                <div className="flex items-center justify-between w-full">
                  <h3 className="">Ellias</h3>
                  <span className="px-3 py-1 rounded-xl bg-slate-700">
                    9 Total
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <IoFlashSharp className="text-yellow-500" />
                  3 ativas
                  <GiSportMedal className="text-green-500" />6 concluidos
                </div>
              </div>

              <div className="px-4 py-4 mr-4 text-xl font-bold text-zinc-100 bg-slate-800/40 rounded-lg">
                <div className="flex items-center justify-between w-full">
                  <h3 className="">João</h3>
                  <span className="px-3 py-1 rounded-xl bg-slate-700">
                    6 Total
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <IoFlashSharp className="text-yellow-500" />
                  3 ativas
                  <GiSportMedal className="text-green-500" />3 concluidos
                </div>
              </div>

              <div className="px-4 py-4 mr-4 text-xl font-bold text-zinc-100 bg-slate-800/40 rounded-lg">
                <div className="flex items-center justify-between w-full">
                  <h3 className="">Rayck</h3>
                  <span className="px-3 py-1 rounded-xl bg-slate-700">
                    7 Total
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <IoFlashSharp className="text-yellow-500" />
                  4 ativas
                  <GiSportMedal className="text-green-500" />3 concluidos
                </div>
              </div>

              <div className="px-4 py-4 mr-4 text-xl font-bold text-zinc-100 bg-slate-800/40 rounded-lg">
                <div className="flex items-center justify-between w-full">
                  <h3 className="">Cassia</h3>
                  <span className="px-3 py-1 rounded-xl bg-slate-700">
                    7 Total
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <IoFlashSharp className="text-yellow-500" />
                  4 ativas
                  <GiSportMedal className="text-green-500" />3 concluidos
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
