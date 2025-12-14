import { SlCalender } from "react-icons/sl";
import { TbPigMoney, TbMoneybag } from "react-icons/tb";
import { useNumberStore } from "../Store/useNumberManagerStore";

/* helpers */
function getMonthKey(date: Date) {
  const d = new Date(date);
  return `${d.getUTCFullYear()}-${String(
    d.getUTCMonth() + 1
  ).padStart(2, "0")}`;
}

export function NavbarGym() {
  const completedGyms = useNumberStore((s) => s.completedGyms);

  const mesAtualKey = getMonthKey(new Date());

  const academiasMes = completedGyms.filter(
    (item) => getMonthKey(item.unlinkedAt) === mesAtualKey
  ).length;

  const valorMes = academiasMes * 20;
  const valorTotal = completedGyms.length * 20;

  return (
    <div className="px-28 py-7">
      <div className="pb-7 flex justify-between">
        <section>
          <h1 className="text-4xl font-extrabold font-serif text-zinc-100">
            Gerenciador de Academias
          </h1>
          <p className="text-base font-sans text-zinc-400">
            Gerenciando academias que foram conectadas e configuradas.
          </p>
        </section>
      </div>

      <div className="grid grid-cols-3 gap-4 pb-2">
        {/* MÊS ATUAL */}
        <div className="p-5 rounded-xl bg-gradient-to-tr from-blue-700 to-blue-950 border shadow-lg backdrop-blur">
          <section className="flex gap-2 text-white pl-4 pt-8">
            <SlCalender className="mt-1" /> Mês atual
          </section>
          <section>
            <h2 className="text-3xl font-bold pl-3 text-white pt-2">
              {academiasMes}
            </h2>
            <p className="ps-3 font-serif text-white">
              Academias concluídas
            </p>
          </section>
        </div>

        {/* VALOR DO MÊS */}
        <div className="p-5 rounded-xl bg-gradient-to-tr from-green-700 to-green-900 border shadow-lg backdrop-blur">
          <section className="flex gap-2 text-white pl-4 pt-8">
            <TbPigMoney className="text-xl" />
            Valor do mês
          </section>
          <section>
            <h2 className="text-3xl font-bold pl-3 text-white pt-2">
              R$ {valorMes},00
            </h2>
            <p className="ps-3 font-serif text-white">
              {academiasMes} x R$20,00
            </p>
          </section>
        </div>

        {/* TOTAL GERAL */}
        <div className="p-5 rounded-xl bg-gradient-to-tr from-purple-700 to-purple-900 border shadow-lg backdrop-blur">
          <section className="flex gap-2 text-white pl-4 pt-8">
            <TbMoneybag className="text-xl" />
            Valor total ganho
          </section>
          <section>
            <h2 className="text-3xl font-bold pl-3 text-white pt-2">
              R$ {valorTotal},00
            </h2>
            <p className="ps-3 font-serif text-white">
              {completedGyms.length} academias
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
