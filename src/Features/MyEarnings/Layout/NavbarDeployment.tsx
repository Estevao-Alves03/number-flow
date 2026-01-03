import { Card, CardContent } from "../../../components/ui/card";
import { FiTrendingUp } from "react-icons/fi";
import { LiaStarSolid } from "react-icons/lia";
import { MdAttachMoney } from "react-icons/md";
import { TbActivityHeartbeat } from "react-icons/tb";

export default function NavbarDeployment() {
  return (
    <div className="px-44 py-7">
      <div className="pb-7 flex justify-between">
        <section>
          <h1 className="text-5xl font-extrabold font-serif text-zinc-100 mb-4">
            Ganhos por Implantações
          </h1>
          <p className="text-lg font-sans text-zinc-200">
            Controle de bonificações por treinamento e avaliação.
          </p>
        </section>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {/* CARD 1 */}
        <Card className="p-5 rounded-xl border-none bg-gradient-to-br from-blue-700/55 to-blue-700/55 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
          <CardContent className="pt-6 relative z-10">
            <div className="flex items-center justify-between mb-4">
              <FiTrendingUp className="w-10 h-10 text-blue-50" />
              <span className="text-4xl font-bold text-white">R$ 00,00</span>
            </div>
            <p className="text-2xl text-blue-50 font-bold">
              Ganho Total
            </p>
            <p className="text-lg text-blue-100">valor acumulado</p>
          </CardContent>
        </Card>

        {/* CARD 2 */}
        <Card className="p-5 rounded-xl border-none bg-gradient-to-br from-green-700/55 to-green-700/55 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <MdAttachMoney className="w-10 h-10 text-green-50" />
              <span className="text-4xl font-bold text-white">R$ 00,00</span>
            </div>
            <p className="text-2xl text-green-50 font-bold">Mẽs Atual</p>
            <p className="text-lg text-green-100">0 Implantações</p>
          </CardContent>
        </Card>

        {/* CARD 3 */}
        <Card className="p-5 rounded-xl border-none bg-gradient-to-br from-violet-700/55 to-violet-700/55  relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <LiaStarSolid className="w-10 h-10 text-violet-50" />
              <span className="text-4xl font-bold text-white">0</span>
            </div>
            <p className="text-2xl text-violet-50 font-bold">Alta Avaliação</p>
            <p className="text-lg text-violet-100">nota ≥ 8(dobro do valor)</p>
          </CardContent>
        </Card>

        {/* CARD 4 */}
        <Card className="p-5 rounded-xl border-none bg-gradient-to-br from-orange-700/55 to-orange-700/55  relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <TbActivityHeartbeat className="w-10 h-10 text-orange-50" />
              <span className="text-4xl font-bold text-white">0</span>
            </div>
            <p className="text-2xl text-orange-50 font-bold">
              Implantações
            </p>
            <p className="text-lg text-orange-100">total realizados</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
