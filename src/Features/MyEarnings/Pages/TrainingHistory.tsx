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
import { FaRegEdit } from "react-icons/fa";
import { Button } from "../../../components/ui/button";
import { IoSearch } from "react-icons/io5";
import { BiFilterAlt } from "react-icons/bi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

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

          <div className="grid grid-cols-4 gap-6">
            {/* pesquisa */}
            <section className="relative mt-6 mb-4 col-span-2">
              <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600" />
              <input
                placeholder="Buscar Empresa ou CNPJ"
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
                    Todas as categorias
                  </SelectItem>
                  <SelectItem
                    value="conversations"
                    className="cursor-pointer data-[highlighted]:bg-blue-600 data-[highlighted]:text-white font-bold text-base"
                  >
                    Conversas AI
                  </SelectItem>
                  <SelectItem
                    value="gymbot"
                    className="cursor-pointer data-[highlighted]:bg-blue-600 data-[highlighted]:text-white font-bold text-base"
                  >
                    Gymbot
                  </SelectItem>
                  <SelectItem
                    value="musicfit"
                    className="cursor-pointer data-[highlighted]:bg-blue-600 data-[highlighted]:text-white font-bold text-base"
                  >
                    Music fit
                  </SelectItem>
                </SelectContent>
              </Select>
            </section>
          </div>

          <div>
            <span className="text-white font-semibold text-lg">
              3 treinamento(s) encontrado(s)
            </span>
          </div>
        </CardHeader>

        <hr className="mb-4 border-blue-700/30" />

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
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-100 font-semibold rounded-xl px-3 py-2 bg-zinc-700/50">
                      Sem nota
                    </span>
                    <Button
                      className="rounded-xl px-4 py-5 bg-zinc-700/50"
                      title="editar a nota"
                    >
                      <FaRegEdit className="text-white" />
                    </Button>
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
                    <span className="text-amber-500 font-bold text-lg font-serif">
                      valor dobrado!
                    </span>
                  </div>

                  {/* parte 2 - avaliaçao */}
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-100 font-semibold rounded-xl px-3 py-2 bg-zinc-700/50 flex items-center gap-2">
                      <LiaStarSolid className="text-amber-500 text-lg" />
                      Nota 08/10
                    </span>
                    <Button
                      className="rounded-xl px-4 py-5 bg-zinc-700/50"
                      title="editar a nota"
                    >
                      <FaRegEdit className="text-white" />
                    </Button>
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
                    <span className="text-amber-500 font-bold text-lg font-serif">
                      valor dobrado!
                    </span>
                  </div>

                  {/* parte 2 - avaliaçao */}
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-100 font-semibold rounded-xl px-3 py-2 bg-zinc-700/50 flex items-center gap-2">
                      <LiaStarSolid className="text-amber-500 text-lg" />
                      Nota 09/10
                    </span>
                    <Button
                      className="rounded-xl px-4 py-5 bg-zinc-700/50"
                      title="editar a nota"
                    >
                      <FaRegEdit className="text-white" />
                    </Button>
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
