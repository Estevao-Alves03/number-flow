import { useNumberStore } from "../Store/useNumberManagerStore";
import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";

/* ================== HELPERS ================== */
function formatDate(date: Date) {
  return new Date(date).toLocaleDateString("pt-BR", {
    timeZone: "UTC",
  });
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
  const year = d.getUTCFullYear();
  const month = String(d.getUTCMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

/* remove acentos */
function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

/* somente números (CNPJ) */
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

    if (!searchTerm.trim()) return monthMatch;

    const term = normalize(searchTerm);
    const termNumbers = onlyNumbers(searchTerm);

    const nameMatch = normalize(gym.nameGym).includes(term);
    const deployerMatch = normalize(gym.deployer).includes(term);
    const dateMatch = formatDate(gym.unlinkedAt).includes(term);

    const cnpjMatch = termNumbers
      ? onlyNumbers(gym.cnpj).includes(termNumbers)
      : false;


    return (
      monthMatch &&
      (nameMatch || deployerMatch || dateMatch || cnpjMatch)
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
      <div className="px-28 py-7">
        <div className="border border-slate-500 rounded-lg px-7 py-24 text-zinc-400 text-center">
          <h1 className="text-xl">Nenhuma academia cadastrada ainda</h1>
          <p className="text-sm">
            As academias desvinculadas aparecerão aqui.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-28 py-4 space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-zinc-100 capitalize">
          {getMonthLabel(new Date(`${selectedMonth}-01T12:00:00Z`))}
        </h2>

        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-zinc-100"
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
      <div className="text-zinc-300 text-sm">
        {gymsByMonth.length} academias concluídas • Total:{" "}
        <span className="font-semibold text-green-400">
          R$ {totalValue},00
        </span>
      </div>

      {/* PESQUISA */}
      <div className="relative">
        <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
        <input
          type="text"
          placeholder="Nome, implantador, CNPJ ou data de conclusão"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-slate-800/50 border border-slate-700 rounded-lg py-2 pr-3 pl-10 w-full text-zinc-100 placeholder:text-zinc-500 focus:ring-1 focus:ring-blue-600 focus:outline-none"
        />
      </div>

      {/* LISTA */}
      <div className="space-y-4">
        {paginatedGyms.map((gym) => (
          <div
            key={gym.id}
            className="rounded-xl border border-slate-700 bg-slate-800/60 p-6 space-y-4"
          >
            <h3 className="text-lg font-bold text-blue-400 tracking-wide">
              {gym.nameGym.toUpperCase()}
            </h3>

            <div className="grid grid-cols-3 gap-8 text-sm">
              <div>
                <p className="text-zinc-400">CNPJ</p>
                <span className="text-zinc-100 font-medium">
                  {gym.cnpj}
                </span>
              </div>

              <div className="text-center">
                <p className="text-zinc-400">Implantador</p>
                <span className="text-zinc-100 font-medium">
                  {gym.deployer}
                </span>
              </div>

              <div className="text-right">
                <p className="text-zinc-400">Concluído em</p>
                <span className="text-zinc-100 font-medium">
                  {formatDate(gym.unlinkedAt)}
                </span>
              </div>
            </div>
          </div>
        ))}

        {gymsByMonth.length === 0 && (
          <p className="text-zinc-400 text-sm">
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
            className="px-3 py-1 rounded bg-slate-700 text-zinc-100 disabled:opacity-40"
          >
            Anterior
          </button>

          <span className="text-zinc-400 text-sm">
            Página {page} de {totalPages}
          </span>

          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className="px-3 py-1 rounded bg-slate-700 text-zinc-100 disabled:opacity-40"
          >
            Próxima
          </button>
        </div>
      )}
    </div>
  );
}
