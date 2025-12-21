import { Card, CardContent } from "../../../components/ui/card";
import { useNumberStore } from "../../../Store/useNumberManagerStore";
import { FaPhone } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { TbBuildingSkyscraper } from "react-icons/tb";


export default function NavbarNumber() {
  const { activeNumbers } = useNumberStore();

  const totalNumbers = activeNumbers.length;

  const numbersInUse = activeNumbers.filter(
    (item) => item.nameGym && item.cnpj && item.deployer
  ).length;

  const freeNumbers = totalNumbers - numbersInUse;

  return (
    <div className="px-44 py-7">
      {/* Título e subtítulo */}
      <div className="pb-7 flex justify-between">
        <section>
          <h1 className="text-5xl font-extrabold font-serif text-zinc-100 mb-4">
            Vincular Números
          </h1>
          <p className="text-lg font-sans text-zinc-200">
            Gerencie números de teste e suas vinculações com empresas.
          </p>
        </section>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-4 pb-2">
        <Card className="p-4 rounded-xl bg-gradient-to-br from-blue-700/55 to-blue-700/55 border-none backdrop-blur relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
          <CardContent className="pt-6 relative z-10">
            <div className="flex items-center justify-between mb-4">
              <FaPhone className="w-10 h-10 text-blue-50" />
              <div className="text-5xl font-bold text-white">
               {totalNumbers}
              </div>
            </div>
            <div className="text-2xl text-blue-50 font-bold mb-0.5">
              Total de Números
            </div>
          </CardContent>
        </Card>
        <Card className="p-4 rounded-xl bg-gradient-to-br from-orange-700/55 to-orange-700/55 border-none backdrop-blur relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
          <CardContent className="pt-6 relative z-10">
            <div className="flex items-center justify-between mb-4">
              <TbBuildingSkyscraper className="w-10 h-10 text-orange-50" />
              <div className="text-5xl font-bold text-white">
               {numbersInUse}
              </div>
            </div>
            <div className="text-2xl text-orange-50 font-bold mb-0.5">
              Em Implantação
            </div>
          </CardContent>
        </Card>
        <Card className="p-4 rounded-xl bg-gradient-to-br from-green-700/55 to-green-700/55  border-none backdrop-blur relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
          <CardContent className="pt-6 relative z-10">
            <div className="flex items-center justify-between mb-4">
              <FaCheck className="w-10 h-10 text-green-50" />
              <div className="text-5xl font-bold text-white">
               {freeNumbers}
              </div>
            </div>
            <div className="text-2xl text-green-50 font-bold mb-0.5">
              Disponíveis
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
