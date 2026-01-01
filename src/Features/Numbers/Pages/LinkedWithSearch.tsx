import { IoSearch } from "react-icons/io5";
import { Button } from "../../../components/ui/button";
import { TfiUnlink } from "react-icons/tfi";
import { FaPen } from "react-icons/fa";
import { useNumberStore } from "../../../Store/useNumberManagerStore";
import type { NumberItem } from "../../../Store/useNumberManagerStore";
import { useState, useEffect } from "react";

/* ===== HELPERS ===== */
function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export default function LinkedWithSearch() {
  const activeNumbers = useNumberStore((state) => state.activeNumbers);
  const unlinkNumber = useNumberStore((state) => state.unlinkNumber);
  const editInfo = useNumberStore((state) => state.editInfo);
  const searchTerm = useNumberStore((state) => state.searchTerm);
  const setSearchTerm = useNumberStore((state) => state.setSearchTerm);

  const [editingItem, setEditingItem] = useState<NumberItem | null>(null);
  const [confirmUnlinkId, setConfirmUnlinkId] = useState<number | null>(null);

  const ITEMS_PER_PAGE = 3;
  const [page, setPage] = useState(1);

  const linkedNumbers = activeNumbers
    .filter(
      (item) =>
        item.nameGym?.trim() &&
        item.cnpj?.trim() &&
        item.deployer?.trim()
    )
    .filter((item) => {
      if (!searchTerm.trim()) return true;

      const term = normalize(searchTerm);
      const numericTerm = searchTerm.replace(/\D/g, "");

      return (
        normalize(item.nameGym).includes(term) ||
        normalize(item.deployer).includes(term) ||
        (numericTerm &&
          item.cnpj.replace(/\D/g, "").includes(numericTerm))
      );
    });

  const totalPages = Math.ceil(linkedNumbers.length / ITEMS_PER_PAGE);

  const paginatedNumbers = linkedNumbers.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  useEffect(() => {
    setPage(1);
  }, [searchTerm]);

  function handleSave() {
    if (!editingItem) return;

    editInfo(editingItem.id, {
      number: editingItem.number,
      nameGym: editingItem.nameGym,
      cnpj: editingItem.cnpj,
      deployer: editingItem.deployer,
    });

    setEditingItem(null);
  }

  function formatCnpj(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 14);

    return digits
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  }

  function confirmUnlink() {
    if (!confirmUnlinkId) return;
    unlinkNumber(confirmUnlinkId);
    setConfirmUnlinkId(null);
  }

  return (
    <>
      {/* SEARCH */}
      <div className="px-44">
        <section className="relative mt-6 mb-4">
          <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400" />
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar empresa, implantador ou CNPJ"
            className="
              w-full rounded-lg py-4 pl-10 pr-3
              bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 border border-blue-700/40
              text-zinc-100 placeholder:text-zinc-500
              focus:ring-2 focus:ring-blue-600
            "
          />
        </section>
      </div>

      {/* EMPTY */}
      {linkedNumbers.length === 0 && (
        <div className="px-44 pt-10">
          <div className="rounded-xl border border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 py-16 text-center text-zinc-400">
            <h2 className="text-xl font-semibold mb-2">
              Nenhum número vinculado
            </h2>
            <p className="text-sm">
              Ainda não existe nenhum número vinculado a uma empresa.
            </p>
          </div>
        </div>
      )}

      {/* LISTA */}
      <div className="grid gap-4 px-44 pt-4">
        {paginatedNumbers.map((item) => (
          <div
            key={item.id}
            className="
              flex justify-between items-start
              rounded-xl p-6
              bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950
              border border-blue-700/30
              hover:border-blue-500 hover:shadow-xl hover:scale-[1.02]
              transition
            "
          >
            <div>
              <h1 className="text-xl font-bold text-zinc-100 mb-3">
                {item.number}
              </h1>

              <p className="text-blue-400 font-bold text-lg">
                {item.nameGym.toUpperCase()}
              </p>

              <p className="text-zinc-400">
                CNPJ: <span className="text-zinc-100">{item.cnpj}</span>
              </p>

              <p className="text-zinc-400">
                Implantador:{" "}
                <span className="text-zinc-100">{item.deployer}</span>
              </p>
            </div>

            <div className="flex gap-2">
              <Button
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => setEditingItem(item)}
              >
                <FaPen />
              </Button>

              <Button
                className="bg-purple-600 hover:bg-purple-700"
                onClick={() => setConfirmUnlinkId(item.id)}
              >
                <TfiUnlink />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINAÇÃO */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 pt-8">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="px-4 py-1 rounded-lg bg-slate-800 border border-blue-700/30 text-zinc-100 disabled:opacity-40"
          >
            Anterior
          </button>

          <span className="text-zinc-400 text-sm">
            Página {page} de {totalPages}
          </span>

          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className="px-4 py-1 rounded-lg bg-slate-800 border border-blue-700/30 text-zinc-100 disabled:opacity-40"
          >
            Próxima
          </button>
        </div>
      )}

      {/* MODAL DESVINCULAR */}
      {confirmUnlinkId && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="w-[520px] rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950  p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-zinc-100">
              Confirmar Desvinculação
            </h2>

            <p className="text-zinc-400 text-lg">
              Tem certeza que deseja desvincular este número? A empresa será data como concluida e o número ficará disponível novamente. <br /><br />
              Dados como: <strong>nome da empresa, CNPJ e data de conclusao</strong> ficaram disponiveis no gerenciador de academias
            </p>

            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setConfirmUnlinkId(null)}>
                Cancelar
              </Button>

              <Button
                onClick={confirmUnlink}
                className="bg-red-600 hover:bg-red-500"
              >
                Confirmar
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL EDITAR */}
      {editingItem && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="w-[600px] rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 border border-blue-700/30 p-8 space-y-4">
            <h2 className="text-xl font-bold text-zinc-100">
              {editingItem.number}
            </h2>

            <input
              className="w-full rounded-lg bg-slate-900 border border-blue-700/30 p-3 text-zinc-100"
              value={editingItem.nameGym}
              onChange={(e) =>
                setEditingItem({ ...editingItem, nameGym: e.target.value })
              }
            />

            <input
              className="w-full rounded-lg bg-slate-900 border border-blue-700/30 p-3 text-zinc-100"
              value={editingItem.cnpj}
              onChange={(e) =>
                setEditingItem({
                  ...editingItem,
                  cnpj: formatCnpj(e.target.value),
                })
              }
            />

            <select
              className="w-full rounded-lg bg-slate-900 border border-blue-700/30 p-3 text-zinc-100"
              value={editingItem.deployer}
              onChange={(e) =>
                setEditingItem({ ...editingItem, deployer: e.target.value })
              }
            >
              <option value="Elias">Elias</option>
              <option value="João">João</option>
              <option value="Rayck">Rayck</option>
            </select>

            <div className="flex gap-3 pt-4">
              <Button
                onClick={handleSave}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Salvar
              </Button>
              <Button variant="outline" onClick={() => setEditingItem(null)}>
                Cancelar
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
