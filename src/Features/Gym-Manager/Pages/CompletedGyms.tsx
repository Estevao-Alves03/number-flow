import { useNumberStore } from "../../../Store/useNumberManagerStore";
import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { TbBuildingSkyscraper } from "react-icons/tb";

/* ================== HELPERS ================== */
function formatDate(date: Date) {
  return new Date(date).toLocaleDateString("pt-BR", { timeZone: "UTC" });
}

function getMonthLabel(date: Date) {
  return new Date(date).toLocaleDateString("pt-BR", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

function getMonthKey(date: Date) {
  const d = new Date(date);
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(
    2,
    "0"
  )}`;
}

function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function onlyNumbers(text: string) {
  return text.replace(/\D/g, "");
}

/* ================== COMPONENT ================== */
export function CompletedGyms() {
  const completedGyms = useNumberStore((s) => s.completedGyms);
  const searchTerm = useNumberStore((s) => s.searchTerm);
  const setSearchTerm = useNumberStore((s) => s.setSearchTerm);

  const [selectedMonth, setSelectedMonth] = useState(() =>
    getMonthKey(new Date())
  );
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 3;

  /* ===== FILTRO ===== */
  const gymsByMonth = completedGyms.filter((gym) => {
    const monthMatch = getMonthKey(gym.unlinkedAt) === selectedMonth;
    if (!monthMatch) return false;

    if (!searchTerm.trim()) return true;

    const term = normalize(searchTerm);
    const numbers = onlyNumbers(searchTerm);

    return (
      normalize(gym.nameGym).includes(term) ||
      normalize(gym.deployer).includes(term) ||
      formatDate(gym.unlinkedAt).includes(term) ||
      (numbers && onlyNumbers(gym.cnpj).includes(numbers))
    );
  });

  /* ===== PAGINAÇÃO ===== */
  const totalPages = Math.ceil(gymsByMonth.length / ITEMS_PER_PAGE);
  const paginatedGyms = gymsByMonth.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const totalValue = gymsByMonth.length * 20;

  useEffect(() => {
    setPage(1);
  }, [selectedMonth, searchTerm]);

  if (completedGyms.length === 0) {
    return (
      <div className="px-44 py-7">
        <div className="rounded-xl border border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 p-20 text-center text-zinc-400">
          <h1 className="text-xl font-semibold">Nenhuma academia cadastrada</h1>
          <p className="text-sm">As academias concluídas aparecerão aqui.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-44 py-6 space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-extrabold text-zinc-100 capitalize">
          {getMonthLabel(new Date(`${selectedMonth}-01T12:00:00Z`))}
        </h2>

        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="bg-slate-900 border border-blue-700/40 rounded-lg px-4 py-2 text-zinc-100 focus:ring-2 focus:ring-blue-600"
        >
          {[...new Set(completedGyms.map((g) => getMonthKey(g.unlinkedAt)))]
            .sort()
            .map((month) => (
              <option key={month} value={month}>
                {getMonthLabel(new Date(`${month}-01T12:00:00Z`))}
              </option>
            ))}
        </select>
      </div>

      {/* RESUMO */}
      <div className="flex items-center gap-6 text-zinc-300">
        <span>{gymsByMonth.length} academias concluídas</span>
        <span className="px-4 py-1 rounded-full bg-green-900/40 text-green-400 font-semibold">
          R$ {totalValue},00
        </span>
      </div>

      {/* PESQUISA */}
      <div className="relative">
        <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
        <input
          type="text"
          placeholder="Nome, implantador, CNPJ ou data"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 border border-blue-700/30 rounded-lg py-4 pl-10 pr-3 text-zinc-100 placeholder:text-zinc-500 focus:ring-2 focus:ring-blue-600"
        />
      </div>

      {/* LISTA */}
      <div className="rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950  border border-blue-700/20 divide-y divide-slate-700">
        {paginatedGyms.map((gym) => (
          <div
            key={gym.id}
            className="flex items-center justify-between px-6 py-7 transition"
          >
            {/* ESQUERDA */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center">
                <TbBuildingSkyscraper className="text-blue-400 text-xl" />
              </div>

              <div>
                <h3 className="text-blue-500 font-semibold leading-tight text-xl mb-2">
                  {gym.nameGym}
                </h3>
                <div className="flex gap-3 text-lg  mt-1">
                  <p className="text-white font-bold">CNPJ: <span className="text-zinc-400 font-sans">{gym.cnpj}</span></p>
                  <span className="text-white text-xl" >•</span>
                  <span className="text-zinc-400 font-sans">{gym.deployer}</span>
                  <span className="text-white text-xl">•</span>
                  <span className="text-zinc-400 font-sans">{formatDate(gym.unlinkedAt)}</span>
                </div>
              </div>
            </div>

            {/* DIREITA */}
            <div className="text-green-400 font-semibold text-xl">R$ 20,00</div>
          </div>
        ))}

        {gymsByMonth.length === 0 && (
          <p className="text-zinc-400 text-sm p-6">
            Nenhuma academia encontrada.
          </p>
        )}
      </div>

      {/* PAGINAÇÃO */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 pt-4">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="px-4 py-1 rounded-lg bg-slate-800 border border-blue-700/30 text-zinc-100 hover:bg-slate-700 disabled:opacity-40"
          >
            Anterior
          </button>

          <span className="text-zinc-400 text-sm">
            Página {page} de {totalPages}
          </span>

          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className="px-4 py-1 rounded-lg bg-slate-800 border border-blue-700/30 text-zinc-100 hover:bg-slate-700 disabled:opacity-40"
          >
            Próxima
          </button>
        </div>
      )}
    </div>
  );
}
