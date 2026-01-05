import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select";
import { Card, CardContent } from "../../../components/ui/card";
import { FaBell } from "react-icons/fa";
import { Button } from "../../../components/ui/button";
import { PiDownloadSimpleBold } from "react-icons/pi";

export default function NavbarFeedback() {
  return (
    <div className="px-44 py-7">
      <div className="pb-7 flex justify-between">
        <section>
          <h1 className="text-5xl font-extrabold font-serif text-zinc-100 mb-4">
            CRM de Feedback
          </h1>
          <p className="text-lg font-sans text-zinc-200">
            Gerencie contatos em 3, 7, 15 e 30 dias com histórico completo
          </p>
        </section>
        <section className="flex gap-3">
          <Select>
            <SelectTrigger className="w-[180px] h-[47px] bg-slate-900/500 border !border-zinc-100/40 !text-white rounded-lg text-base">
              <SelectValue placeholder="Mẽs" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="janeiro" className="cursor-pointer data-[highlighted]:bg-blue-600 data-[highlighted]:text-white font-bold text-base">janeiro</SelectItem>
              <SelectItem value="fevereiro"className="cursor-pointer data-[highlighted]:bg-blue-600 data-[highlighted]:text-white font-bold text-base">fevereiro</SelectItem>
              <SelectItem value="março"className="cursor-pointer data-[highlighted]:bg-blue-600 data-[highlighted]:text-white font-bold text-base">março</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px] h-[47px] bg-slate-900/500 border !border-zinc-100/40 !text-white rounded-lg text-base">
              <SelectValue placeholder="Ano" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024"className="cursor-pointer data-[highlighted]:bg-blue-600 data-[highlighted]:text-white font-bold text-base">2024</SelectItem>
              <SelectItem value="2025"className="cursor-pointer data-[highlighted]:bg-blue-600 data-[highlighted]:text-white font-bold text-base">2025</SelectItem>
              <SelectItem value="2026"className="cursor-pointer data-[highlighted]:bg-blue-600 data-[highlighted]:text-white font-bold text-base">2026</SelectItem>
            </SelectContent>
          </Select>
          <Button className="h-[47px] bg-green-600 font-bold text-base hover:bg-green-700">
            <PiDownloadSimpleBold />
            Exportar CSV
          </Button>
        </section>
      </div>

      <Card className="p-7 rounded-xl border-none bg-gradient-to-br from-violet-700/55 to-violet-700/55  relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-44 h-44 bg-white/10 rounded-full -mr-20 -mt-20" />
        <CardContent className="pt-6 mt-3 mb-4 relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-purple-400/40">
              <FaBell className="w-7 h-7 text-purple-50" />
            </div>

            <div className="flex flex-col leading-tight">
              <p className="text-3xl text-purple-50 font-bold">
                Contatos Agendados para Hoje
              </p>

              <p className="text-xl text-purple-100">
                Você tem 0 feedback para coletar hoje
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
