import { useNumberStore } from "../Store/useNumberManagerStore";

export function Navbar() {
  const { activeNumbers } = useNumberStore();

  const totalNumbers = activeNumbers.length;

  const numbersInUse = activeNumbers.filter(
    (item) => item.nameGym && item.cnpj && item.deployer
  ).length;

  const freeNumbers = totalNumbers - numbersInUse;

  return (
    <div className="px-28 py-7">
      {/* Título e subtítulo */}
      <div className="pb-7 flex justify-between">
        <section>
          <h1 className="text-4xl font-extrabold font-serif text-zinc-100">
            Gerenciador de Números
          </h1>
          <p className="text-base font-sans text-zinc-400">
            Gerencie números de teste e suas vinculações com empresas.
          </p>
        </section>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-4 pb-2">
        <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 shadow-lg backdrop-blur">
          <h2 className="text-3xl font-bold pl-3 pt-6 text-blue-400">
            {totalNumbers}
          </h2>
          <p className="ps-3 font-serif text-zinc-400">
            Total de números
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 shadow-lg backdrop-blur">
          <h2 className="text-3xl font-bold pl-3 pt-6 text-green-400">
            {numbersInUse}
          </h2>
          <p className="ps-3 font-serif text-zinc-400">
            Números em uso
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 shadow-lg backdrop-blur">
          <h2 className="text-3xl font-bold pl-3 pt-6 text-zinc-300">
            {freeNumbers}
          </h2>
          <p className="ps-3 font-serif text-zinc-400">
            Números livres
          </p>
        </div>
      </div>
    </div>
  );
}
