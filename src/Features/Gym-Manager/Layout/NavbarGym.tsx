import { TbBuildingSkyscraper } from "react-icons/tb";
import { MdAttachMoney } from "react-icons/md";
import { FiTrendingUp } from "react-icons/fi";
import { useNumberStore } from "../../../Store/useNumberManagerStore";
import {
  Card,
  CardContent,
} from "../../../components/ui/card";

/* helpers */
function getMonthKey(date: Date) {
  const d = new Date(date);
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(
    2,
    "0"
  )}`;
}

export default function NavbarGym() {
  const completedGyms = useNumberStore((s) => s.completedGyms);

  const mesAtualKey = getMonthKey(new Date());

  const academiasMes = completedGyms.filter(
    (item) => getMonthKey(item.unlinkedAt) === mesAtualKey
  ).length;

  const valorMes = academiasMes * 20;
  const valorTotal = completedGyms.length * 20;

  return (
    <div className="px-44 py-7">
      <div className="pb-7 flex justify-between">
        <section>
          <h1 className="text-5xl font-extrabold font-serif text-zinc-100 mb-4">
            Gerenciador de Academias
          </h1>
          <p className="text-lg font-sans text-zinc-200">
            Gerenciando academias que foram conectadas e configuradas.
          </p>
        </section>
      </div>

      <div className="grid grid-cols-3 gap-6 pb-2">
        {/* MÊS ATUAL */}
        <Card className="p-5 rounded-xl bg-gradient-to-br from-blue-700/55 to-blue-700/55 border-none backdrop-blur relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
          <CardContent className="pt-6 relative z-10">
            <div className="flex items-center justify-between mb-4">
              <TbBuildingSkyscraper className="w-10 h-10 text-blue-50" />
              <div className="text-4xl font-bold text-white">
                {academiasMes}
              </div>
            </div>
            <div className="text-2xl text-blue-50 font-bold mb-0.5">
              Mês atual
            </div>
            <div className="text-lg font-sans text-blue-100">
              Academias concluídas
            </div>
          </CardContent>
        </Card>

        {/* VALOR DO MÊS */}
        <Card className="p-5 rounded-xl bg-gradient-to-br from-green-700/55 to-green-700/55 border-none backdrop-blur relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
          <CardContent className="pt-6 relative z-10">
            <div className="flex items-center justify-between mb-4">
              <MdAttachMoney className="w-10 h-10 text-green-50" />
              <div className="text-4xl font-bold text-white">
                {" "}
                R$ {valorMes},00
              </div>
            </div>
            <div className="text-2xl text-green-50 font-bold mb-0.5">
              Valor Do Mês
            </div>
            <div className="text-lg font-sans text-green-100">
              {academiasMes} x R$20,00
            </div>
          </CardContent>
        </Card>

        {/* TOTAL GERAL */}
        <Card className="p-5 rounded-xl bg-gradient-to-br from-violet-700/55 to-violet-700/55  border-none backdrop-blur relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
          <CardContent className="pt-6 relative z-10">
            <div className="flex items-center justify-between mb-4">
              <FiTrendingUp className="w-10 h-10 text-purple-50" />
              <div className="text-4xl font-bold text-white">
                {" "}
                R$ {valorTotal},00
              </div>
            </div>
            <div className="text-2xl text-purple-50 font-bold mb-0.5">
              Total Geral
            </div>
            <div className="text-lg font-sans text-purple-100">
              {completedGyms.length} academias
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
