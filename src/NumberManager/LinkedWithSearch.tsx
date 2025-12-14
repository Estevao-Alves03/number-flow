import { IoSearch } from "react-icons/io5";
import { Button } from "../components/ui/button";
import { TfiUnlink } from "react-icons/tfi";
import { FaPen } from "react-icons/fa";
import { useNumberStore } from "../Store/useNumberManagerStore";
import type { NumberItem } from "../Store/useNumberManagerStore";
import { useState, useEffect } from "react";

/* ===== HELPERS ===== */
function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function LinkedWithSearch() {
  const activeNumbers = useNumberStore((state) => state.activeNumbers);
  const unlinkNumber = useNumberStore((state) => state.unlinkNumber);
  const editInfo = useNumberStore((state) => state.editInfo);
  const searchTerm = useNumberStore((state) => state.searchTerm);
  const setSearchTerm = useNumberStore((state) => state.setSearchTerm);

  const [editingItem, setEditingItem] = useState<NumberItem | null>(null);
  const [confirmUnlinkId, setConfirmUnlinkId] = useState<number | null>(null);

  /* ===== PAGINAÇÃO ===== */
  const ITEMS_PER_PAGE = 3;
  const [page, setPage] = useState(1);

  /* ===== FILTRO ===== */
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

      const matchText =
        normalize(item.nameGym).includes(term) ||
        normalize(item.deployer).includes(term);

      const matchCnpj =
        numericTerm.length > 0 &&
        item.cnpj.replace(/\D/g, "").includes(numericTerm);

      return matchText || matchCnpj;
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
      <div className="px-28">
        <section className="relative mt-6 mb-3">
          <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Busque pelo nome da empresa, implantador ou CNPJ"
            className="bg-slate-800/50 border border-slate-700 rounded-lg py-2 pr-3 pl-10 w-full text-zinc-100"
          />
        </section>
      </div>

      {/* EMPTY STATE */}
      {linkedNumbers.length === 0 && (
        <div className="px-28 pt-8">
          <div className="border border-slate-700 rounded-lg py-16 text-center text-zinc-400 bg-slate-800/30">
            <h2 className="text-xl font-semibold mb-2">
              Nenhum número vinculado
            </h2>
            <p className="text-sm">
              Ainda não existe nenhum número vinculado a uma empresa.
            </p>
          </div>
        </div>
      )}

      {/* LISTAGEM */}
      <div className="grid gap-4 pt-4 px-28">
        {paginatedNumbers.map((item) => (
          <div
            key={item.id}
            className="px-10 py-8 rounded-lg bg-slate-800/50 border border-slate-700 flex justify-between"
          >
            <div>
              <h1 className="text-xl text-zinc-200 mb-4 font-semibold">
                {item.number}
              </h1>
              <p className="text-blue-400 font-bold">
                {item.nameGym.toUpperCase()}
              </p>
              <p className="text-zinc-400 font-semibold">
                CNPJ: <span className="text-zinc-100">{item.cnpj}</span>
              </p>
              <p className="text-zinc-400 font-semibold">
                Implantador:{" "}
                <span className="text-zinc-100">{item.deployer}</span>
              </p>
            </div>

            <div className="flex gap-2">
              <Button onClick={() => setEditingItem(item)}>
                <FaPen />
              </Button>

              <Button onClick={() => setConfirmUnlinkId(item.id)}>
                <TfiUnlink />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINAÇÃO */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 pt-6 pb-20">
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

      {/* MODAL CONFIRMAR DESVINCULAÇÃO */}
      {confirmUnlinkId && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="w-[520px] rounded-2xl bg-slate-900 border border-slate-700 p-8 space-y-6">
            <h2 className="text-xl font-semibold text-zinc-100">
              Confirmar Desvinculação
            </h2>

            <p className="text-zinc-400">
              Tem certeza que deseja desvincular este número? A empresa será dada como concluida e o número ficará disponível novamente. <br />
              Dados como: <strong>Nome da empresa, CNPJ e Data de conclusao</strong> ficaram disponíveis no gerenciador de academias
            </p>

            <div className="flex justify-end gap-3">
              <Button
                variant="outline"
                onClick={() => setConfirmUnlinkId(null)}
              >
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

      {/* MODAL EDIÇÃO */}
      {editingItem && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="w-[600px] rounded-2xl bg-slate-900 border border-slate-700 p-8 space-y-4">
            <p className="text-xl font-bold text-zinc-100">
              {editingItem.number}
            </p>

            <input
              className="w-full rounded-lg bg-slate-800 border border-slate-700 p-3 text-zinc-100"
              value={editingItem.nameGym}
              onChange={(e) =>
                setEditingItem({ ...editingItem, nameGym: e.target.value })
              }
            />

            <input
              className="w-full rounded-lg bg-slate-800 border border-slate-700 p-3 text-zinc-100"
              value={editingItem.cnpj}
              onChange={(e) =>
                setEditingItem({
                  ...editingItem,
                  cnpj: formatCnpj(e.target.value),
                })
              }
            />

            <select
              className="w-full rounded-lg bg-slate-800 border border-slate-700 p-3 text-zinc-100"
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
              <Button onClick={handleSave} className="bg-blue-600">
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
