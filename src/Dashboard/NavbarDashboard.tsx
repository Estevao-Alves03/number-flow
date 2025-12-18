import { Card, CardContent } from "../components/ui/card";
import { FaPhone } from "react-icons/fa6";
import { FiCheckCircle } from "react-icons/fi";
import { FiTarget } from "react-icons/fi";
import { TfiTime } from "react-icons/tfi";
import { IoAlertCircleOutline } from "react-icons/io5";

export function NavbarDashboard() {
  return (
    <div className="px-44 py-7">
      {/* Título */}
      <section className="pb-7">
        <h1 className="text-5xl font-extrabold text-zinc-100 mb-4">
          Dashboard Geral
        </h1>
        <p className="text-lg text-zinc-200">
          Visão completa e métricas em tempo real do sistema
        </p>
      </section>

      <Card className="p-5 mb-10 rounded-xl border-none bg-gradient-to-br from-violet-700/55 to-violet-700/55  relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-44 h-44 bg-white/10 rounded-full -mr-20 -mt-20" />
        <CardContent className="pt-6 mt-3 relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <IoAlertCircleOutline className="w-14 h-14 text-purple-50 bg-purple-400/40 rounded-md" />

            <div className="flex flex-col leading-tight">
              <p className="text-3xl text-purple-50 font-bold">
                Ação Necessária Hoje
              </p>

              <p className="text-xl text-purple-100">
                1 feedback agendado para contato hoje
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* GRID DE CARDS */}
      <div className="grid grid-cols-4 gap-6">
        {/* CARD 1 */}
        <Card className="p-5 rounded-xl border-none bg-gradient-to-br from-blue-700/55 to-blue-700/55 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
          <CardContent className="pt-6 relative z-10">
            <div className="flex items-center justify-between mb-4">
              <FaPhone className="w-10 h-10 text-blue-50" />
              <span className="text-4xl font-bold text-white">0</span>
            </div>
            <p className="text-2xl text-blue-50 font-bold">
              Números Disponíveis
            </p>
            <p className="text-lg text-blue-100">De 0 totais</p>
          </CardContent>
        </Card>

        {/* CARD 2 */}
        <Card className="p-5 rounded-xl border-none bg-gradient-to-br from-orange-700/55 to-orange-700/55 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <TfiTime className="w-10 h-10 text-orange-50" />
              <span className="text-4xl font-bold text-white">0</span>
            </div>
            <p className="text-2xl text-orange-50 font-bold">Em Implantação</p>
            <p className="text-lg text-orange-100">Em andamento agora</p>
          </CardContent>
        </Card>

        {/* CARD 3 */}
        <Card className="p-5 rounded-xl border-none bg-gradient-to-br from-green-700/55 to-green-700/55  relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <FiCheckCircle className="w-10 h-10 text-green-50" />
              <span className="text-4xl font-bold text-white">0</span>
            </div>
            <p className="text-2xl text-green-50 font-bold">Concluídas</p>
            <p className="text-lg text-green-100">Implantações finalizadas</p>
          </CardContent>
        </Card>

        {/* CARD 4 */}
        <Card className="p-5 rounded-xl border-none bg-gradient-to-br from-violet-700/55 to-violet-700/55  relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <FiTarget className="w-10 h-10 text-purple-50" />
              <span className="text-4xl font-bold text-white">0</span>
            </div>
            <p className="text-2xl text-purple-50 font-bold">
              Feedbacks ativos
            </p>
            <p className="text-lg text-purple-100">0 já concluídos</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
