import { IoSearch } from "react-icons/io5";
import { useNumberStore } from "../Store/useNumberManagerStore";

export function Search() {
  const setSearchTerm = useNumberStore((state) => state.setSearchTerm);

  return (
    <div className="px-44">
      <section className="relative mt-6 mb-3">
        <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />

        <input
          type="text"
          placeholder="Busque pelo nome da empresa, implantador ou CNPJ"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-slate-800/50 border border-slate-700 rounded-lg py-2 pr-3 pl-10 w-full text-zinc-100 placeholder:text-zinc-500 focus:ring-blue-600 focus:ring-1 focus:outline-none"
        />
      </section>
    </div>
  );
}
