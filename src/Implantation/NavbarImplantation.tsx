import { FiCheckCircle } from "react-icons/fi";
import { Card, CardContent } from "../components/ui/card";
import { TfiTime } from "react-icons/tfi";


export function NavbarImplantation() {
  return (
    <div className="px-44 py-7">
      <div className="pb-7 flex justify-between">
        <section>
          <h1 className="text-5xl font-extrabold font-serif text-zinc-100 mb-4">
            Minhas Implantações
          </h1>
          <p className="text-lg font-sans text-zinc-200">
            Gerencie suas implantações com histórico completo de anotações.
          </p>
        </section>
      </div>

      <div className="grid grid-cols-2 gap-4 pb-2">
        <Card className="p-4 rounded-xl bg-gradient-to-br from-blue-700/55 to-blue-700  border-none backdrop-blur relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-44 h-44 bg-white/10 rounded-full -mr-20 -mt-20" />
          <CardContent className="pt-14 relative z-10">
            <div className="flex items-center justify-between mb-4">
              <TfiTime className="w-10 h-10 text-blue-50" />
              <div className="text-5xl font-bold text-white">
                {/* {totalNumbers} */}
              </div>
            </div>
            <div className="text-2xl text-blue-50 font-bold mb-0.5">
              Implantações Ativas
            </div>
          </CardContent>
        </Card>
        <Card className="p-4 rounded-xl bg-gradient-to-br from-green-700/55 to-green-700  border-none backdrop-blur relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-44 h-44 bg-white/10 rounded-full -mr-20 -mt-20" />
          <CardContent className="pt-14 relative z-10">
            <div className="flex items-center justify-between mb-4">
              <FiCheckCircle className="w-10 h-10 text-green-50" />
              <div className="text-5xl font-bold text-white">
                {/* {numbersInUse} */}
              </div>
            </div>
            <div className="text-2xl text-green-50 font-bold mb-0.5">
              Implantações Concluídas
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
