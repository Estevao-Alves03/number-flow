import { IoCloseOutline, IoCheckmarkSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Button } from "../components/ui/button";
import { useNumberStore } from "../Store/useNumberManagerStore";

export function Avaliable() {
  const [openCard, setOpenCard] = useState<number | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);

  const [nameGym, setNameGym] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [deployer, setDeployer] = useState("");

  /* ===== PAGINAÇÃO ===== */
  const ITEMS_PER_PAGE = 6;
  const [page, setPage] = useState(1);

  const { activeNumbers, editInfo, deleteNumber } = useNumberStore();

  const availableNumbers = activeNumbers.filter(
    (item) => !item.nameGym
  );

  const totalPages = Math.ceil(
    availableNumbers.length / ITEMS_PER_PAGE
  );

  const paginatedNumbers = availableNumbers.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  useEffect(() => {
    setPage(1);
  }, [availableNumbers.length]);

  function formatCnpj(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 14);

    return digits
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  }

  function isValidForm() {
    return (
      nameGym.trim() !== "" &&
      deployer.trim() !== "" &&
      cnpj.replace(/\D/g, "").length === 14
    );
  }

  function resetForm() {
    setNameGym("");
    setCnpj("");
    setDeployer("");
  }

  function handleLink(id: number) {
    if (!isValidForm()) return;

    editInfo(id, {
      nameGym,
      cnpj,
      deployer,
      linkedAt: new Date(),
    });

    setOpenCard(null);
    resetForm();
  }

  function confirmDelete() {
    if (!confirmDeleteId) return;
    deleteNumber(confirmDeleteId);
    setConfirmDeleteId(null);
  }

  return (
    <div className="pt-6 px-28 py-14">
      <h1 className="text-2xl font-extrabold text-zinc-100">
        Números Disponíveis
      </h1>

      <p className="text-zinc-400">
        Clique em um número para vincular
      </p>

      {/* ===== LISTA ===== */}
      <div className="grid grid-cols-3 gap-4 pt-4">
        {paginatedNumbers.map((item) => (
          <div
            key={item.id}
            className="relative px-10 py-8 bg-slate-800/50 border border-slate-700 rounded-lg hover:scale-105 transition"
            onClick={() => setOpenCard(item.id)}
          >
            {openCard === item.id ? (
              <div onClick={(e) => e.stopPropagation()}>
                <h1 className="text-xl text-zinc-100">
                  {item.number}
                </h1>

                <form className="flex flex-col gap-2 mt-4">
                  <label className="text-zinc-400">Empresa</label>
                  <input
                    value={nameGym}
                    placeholder="Digite o nome da empresa"
                    onChange={(e) => setNameGym(e.target.value)}
                    className="px-2 py-1 rounded bg-slate-800 border border-slate-500 text-zinc-100"
                  />

                  <label className="text-zinc-400">CNPJ</label>
                  <input
                    value={cnpj}
                    placeholder="00.000.000/0000-00"
                    onChange={(e) =>
                      setCnpj(formatCnpj(e.target.value))
                    }
                    className="px-2 py-1 rounded bg-slate-800 border border-slate-500 text-zinc-100"
                  />

                  <label className="text-zinc-400">Implantador</label>
                  <Select onValueChange={setDeployer}>
                    <SelectTrigger className="bg-slate-800 border border-slate-500">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="João">João</SelectItem>
                        <SelectItem value="Rayck">Rayck</SelectItem>
                        <SelectItem value="Ellias">Ellias</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </form>

                <div className="grid grid-cols-2 gap-2 mt-4">
                  <Button
                    disabled={!isValidForm()}
                    onClick={() => handleLink(item.id)}
                  >
                    <IoCheckmarkSharp /> Vincular
                  </Button>

                  <Button
                    variant="secondary"
                    onClick={() => setOpenCard(null)}
                  >
                    <IoCloseOutline /> Cancelar
                  </Button>
                </div>
              </div>
            ) : (
              <div className="relative text-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setConfirmDeleteId(item.id);
                  }}
                  className="absolute right-2 top-2 text-zinc-400 hover:text-red-500"
                >
                  <IoCloseOutline size={18} />
                </button>

                <h1 className="text-xl text-zinc-100">
                  {item.number}
                </h1>
                <p className="text-xs text-zinc-400">
                  Clique para vincular
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ===== PAGINAÇÃO ===== */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 pt-8">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="px-4 py-1 rounded bg-slate-700 text-zinc-100 disabled:opacity-40"
          >
            Anterior
          </button>

          <span className="text-sm text-zinc-400">
            Página {page} de {totalPages}
          </span>

          <button
            onClick={() =>
              setPage((p) => Math.min(p + 1, totalPages))
            }
            disabled={page === totalPages}
            className="px-4 py-1 rounded bg-slate-700 text-zinc-100 disabled:opacity-40"
          >
            Próxima
          </button>
        </div>
      )}

      {/* ===== MODAL CONFIRMAR EXCLUSÃO ===== */}
      {confirmDeleteId && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="w-[520px] rounded-2xl bg-slate-900 border border-slate-700 p-8 space-y-6">
            <h2 className="text-xl font-semibold text-zinc-100">
              Confirmar exclusão
            </h2>

            <p className="text-zinc-400">
              Tem certeza que deseja excluir este número?
              <br />
              <strong className="text-red-500">
                Este procedimento apaga o número completamente e não
                poderá ser desfeito.
              </strong>
            </p>

            <div className="flex justify-end gap-3">
              <Button
                variant="outline"
                onClick={() => setConfirmDeleteId(null)}
              >
                Cancelar
              </Button>

              <Button
                onClick={confirmDelete}
                className="bg-red-600 hover:bg-red-500"
              >
                Confirmar
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
