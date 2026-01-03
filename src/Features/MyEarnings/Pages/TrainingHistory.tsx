import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { GrNotes } from "react-icons/gr";
import { LiaStarSolid } from "react-icons/lia";
import { RiRobot2Line } from "react-icons/ri";
import { TbMessageCircle, TbMusic } from "react-icons/tb";

export default function TrainingHistory() {
  return (
    <div className="px-44 pb-24">
      <Card className="border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950">
        <CardHeader>
          <CardTitle className="text-3xl text-white flex items-center gap-3">
            <GrNotes className="text-zinc-500 text-4xl" />
            Histórico de Implantações
          </CardTitle>
          <CardDescription className="text-xl text-zinc-100">
            Monitore suas Implantações concluídas e atribua notas para melhorar
            sua bonificação
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="max-h-[450px] overflow-y-auto">
            <Card className="px-4 py-5 mt-4 border-blue-700/30 bg-gradient-to-br from-slate-950/20 via-slate-900/500 to-slate-950/20 mr-4">
              <div className="flex items-center gap-4 mx-2">
                {/* Ícone */}
                <div className="inline-flex items-center justify-center p-3 rounded-xl bg-green-900/40">
                  <TbMessageCircle className="w-6 h-6 text-green-400" />
                </div>

                {/* titulos */}
                <div className="flex flex-col text-white w-full">
                  {/* Nome e conclusao */}
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">
                      Acad Cross Experience{" "}
                      <span className="font-semibold text-xl text-zinc-300">
                        – Concluído em 18/12
                      </span>
                    </h1>
                  </div>
                  {/* Cnpj */}
                  <div className="flex items-center gap-2 text-base text-zinc-300 mt-2">
                    <span>CNPJ: 00.000.000/0000-00</span>
                  </div>
                </div>
              </div>

              {/* valores e avaliaçao */}
              <Card className="border-blue-700/40 bg-gradient-to-br from-slate-950/20 via-slate-900/500 to-slate-950/20 mx-2 mt-4 px-5 py-4">
                <div className="flex justify-between">
                  {/* parte 1 - valores */}
                  <div className="flex items-center justify-start gap-6 text-white">
                    {/* valor base */}
                    <div className="text-center">
                      <h1 className="text-sm text-zinc-400">Valor Base</h1>
                      <span className="text-lg font-bold">R$ 50,00</span>
                    </div>
                    {/* divisor */}
                    <div className="w-px h-10 bg-zinc-600" />
                    {/* valor fianl */}
                    <div className="text-center">
                      <h1 className="text-sm text-zinc-400">Valor Final</h1>
                      <span className="text-lg font-bold text-green-500">
                        R$ 50,00
                      </span>
                    </div>
                  </div>

                  {/* parte 2 - avaliaçao */}
                  <div className="flex items-center">
                    <span className="text-zinc-100 font-semibold rounded-full px-3 py-2 bg-zinc-800/50 border-zinc-700 border">
                      Sem nota
                    </span>
                  </div>
                </div>
              </Card>
            </Card>

            <Card className="px-4 py-5 mt-4 border-blue-700/30 bg-gradient-to-br from-slate-950/20 via-slate-900/500 to-slate-950/20 mr-4">
              <div className="flex items-center gap-4 mx-2">
                {/* Ícone */}
                <div className="inline-flex items-center justify-center p-3 rounded-xl bg-blue-900/40">
                  <RiRobot2Line className="w-6 h-6 text-blue-400" />
                </div>

                {/* titulos */}
                <div className="flex flex-col text-white w-full">
                  {/* Nome e conclusao */}
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">
                      Acad Cross Experience{" "}
                      <span className="font-semibold text-xl text-zinc-300">
                        – Concluído em 18/12
                      </span>
                    </h1>
                  </div>
                  {/* Cnpj */}
                  <div className="flex items-center gap-2 text-base text-zinc-300 mt-2">
                    <span>CNPJ: 00.000.000/0000-00</span>
                  </div>
                </div>
              </div>

              {/* valores e avaliaçao */}
              <Card className="border-blue-700/40 bg-gradient-to-br from-slate-950/20 via-slate-900/500 to-slate-950/20 mx-2 mt-4 px-5 py-4">
                <div className="flex justify-between">
                  {/* parte 1 - valores */}
                  <div className="flex items-center justify-start gap-6 text-white">
                    {/* valor base */}
                    <div className="text-center">
                      <h1 className="text-sm text-zinc-400">Valor Base</h1>
                      <span className="text-lg font-bold">R$ 40,00</span>
                    </div>
                    {/* divisor */}
                    <div className="w-px h-10 bg-zinc-600" />
                    {/* valor fianl */}
                    <div className="text-center">
                      <h1 className="text-sm text-zinc-400">Valor Final</h1>
                      <span className="text-lg font-bold text-green-500">
                        R$ 80,00
                      </span>
                    </div>
                  </div>

                  {/* parte 2 - avaliaçao */}
                  <div className="flex items-center">
                    <span className="text-zinc-100 font-semibold rounded-full px-3 py-2 bg-zinc-800/50 border-zinc-700 border flex items-center gap-2">
                      <LiaStarSolid className="text-amber-500 text-lg"/>
                      Nota 08/10
                    </span>
                  </div>
                </div>
              </Card>
            </Card>

            <Card className="px-4 py-5 mt-4 border-blue-700/30 bg-gradient-to-br from-slate-950/20 via-slate-900/500 to-slate-950/20 mr-4">
              <div className="flex items-center gap-4 mx-2">
                {/* Ícone */}
                <div className="inline-flex items-center justify-center p-3 rounded-xl bg-violet-900/40">
                  <TbMusic className="w-6 h-6 text-violet-400" />
                </div>

                {/* titulos */}
                <div className="flex flex-col text-white w-full">
                  {/* Nome e conclusao */}
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">
                      Acad Cross Experience{" "}
                      <span className="font-semibold text-xl text-zinc-300">
                        – Concluído em 18/12
                      </span>
                    </h1>
                  </div>
                  {/* Cnpj */}
                  <div className="flex items-center gap-2 text-base text-zinc-300 mt-2">
                    <span>CNPJ: 00.000.000/0000-00</span>
                  </div>
                </div>
              </div>

              {/* valores e avaliaçao */}
              <Card className="border-blue-700/40 bg-gradient-to-br from-slate-950/20 via-slate-900/500 to-slate-950/20 mx-2 mt-4 px-5 py-4">
                <div className="flex justify-between">
                  {/* parte 1 - valores */}
                  <div className="flex items-center justify-start gap-6 text-white">
                    {/* valor base */}
                    <div className="text-center">
                      <h1 className="text-sm text-zinc-400">Valor Base</h1>
                      <span className="text-lg font-bold">R$ 15,00</span>
                    </div>
                    {/* divisor */}
                    <div className="w-px h-10 bg-zinc-600" />
                    {/* valor fianl */}
                    <div className="text-center">
                      <h1 className="text-sm text-zinc-400">Valor Final</h1>
                      <span className="text-lg font-bold text-green-500">
                        R$ 30,00
                      </span>
                    </div>
                  </div>

                  {/* parte 2 - avaliaçao */}
                  <div className="flex items-center">
                    <span className="text-zinc-100 font-semibold rounded-full px-3 py-2 bg-zinc-800/50 border-zinc-700 border flex items-center gap-2">
                      <LiaStarSolid className="text-amber-500 text-lg"/>
                      Nota 09/10
                    </span>
                  </div>
                </div>
              </Card>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
