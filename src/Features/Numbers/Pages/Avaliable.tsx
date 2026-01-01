import { IoCloseOutline, IoCheckmarkSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { useState, useEffect } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Button } from "../../../components/ui/button";
import { useNumberStore } from "../../../Store/useNumberManagerStore";

export default function Avaliable() {
  const [openCard, setOpenCard] = useState<number | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);

  const [nameGym, setNameGym] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [deployer, setDeployer] = useState("");

  const ITEMS_PER_PAGE = 6;
  const [page, setPage] = useState(1);

  const { activeNumbers, editInfo, deleteNumber } = useNumberStore();

  const availableNumbers = activeNumbers.filter((item) => !item.nameGym);

  const totalPages = Math.ceil(availableNumbers.length / ITEMS_PER_PAGE);

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
    <div className="px-44 py-14">
      <h1 className="text-3xl font-extrabold text-zinc-100 mb-2">
        Números Disponíveis
      </h1>
      <p className="text-zinc-200 font-sans text-base">
        Clique em um número para vincular
      </p>

      {availableNumbers.length === 0 ? (
        <div className="pt-8">
          <div className="border border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 rounded-xl py-16 text-center text-zinc-400 ">
            <h2 className="text-xl font-semibold mb-2">
              Nenhum número disponível
            </h2>
            <p className="text-sm">
              Todos os números já estão vinculados.
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-6 pt-6">
            {paginatedNumbers.map((item) => (
              <div
                key={item.id}
                onClick={() => setOpenCard(item.id)}
                className="
                  relative px-8 py-7 rounded-xl cursor-pointer
                  bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950
                  border border-blue-700/30
                  hover:border-blue-500 hover:shadow-xl hover:scale-[1.02]
                  transition
                "
              >
                {openCard === item.id ? (
                  <div onClick={(e) => e.stopPropagation()}>
                    <h1 className="text-xl text-blue-400 font-bold">
                      {item.number}
                    </h1>

                    <form className="flex flex-col gap-2 mt-4">
                      <label className="text-zinc-400">Empresa</label>
                      <input
                        value={nameGym}
                        onChange={(e) => setNameGym(e.target.value)}
                        placeholder="Nome da empresa"
                        className="px-3 py-2 rounded-lg bg-slate-900/50 border border-blue-700/40 text-zinc-100 focus:ring-2 focus:ring-blue-600"
                      />

                      <label className="text-zinc-400">CNPJ</label>
                      <input
                        value={cnpj}
                        onChange={(e) =>
                          setCnpj(formatCnpj(e.target.value))
                        }
                        placeholder="00.000.000/0000-00"
                        className="px-3 py-2 rounded-lg bg-slate-900/50 border border-blue-700/40 text-zinc-100 focus:ring-2 focus:ring-blue-600"
                      />

                      <label className="text-zinc-400">Implantador</label>
                      <Select onValueChange={setDeployer}>
                        <SelectTrigger className="bg-slate-900/50 border border-blue-700/40 text-zinc-100">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent className="bg-white text-zinc-950">
                          <SelectGroup>
                            <SelectItem value="João" className="cursor-pointer data-[highlighted]:bg-blue-600 data-[highlighted]:text-white">João</SelectItem>
                            <SelectItem value="Rayck" className="cursor-pointer data-[highlighted]:bg-blue-600 data-[highlighted]:text-white">Rayck</SelectItem>
                            <SelectItem value="Ellias" className="cursor-pointer data-[highlighted]:bg-blue-600 data-[highlighted]:text-white">Ellias</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </form>

                    <div className="grid grid-cols-2 gap-3 mt-5">
                      <Button
                        disabled={!isValidForm()}
                        onClick={() => handleLink(item.id)}
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        <IoCheckmarkSharp /> Vincular
                      </Button>

                      <Button
                        variant="outline"
                        onClick={() => setOpenCard(null)}
                        className="border-slate-600 text-black bg-white hover:bg-slate-300"
                      >
                        <IoCloseOutline /> Cancelar
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center relative">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setConfirmDeleteId(item.id);
                      }}
                      className="absolute right-2 top-2 text-zinc-400 hover:text-red-500"
                    >
                      <IoCloseOutline size={18} />
                    </button>

                    <h1 className="text-xl text-zinc-100 flex items-center justify-center gap-2">
                      <FaPhone className="text-blue-400 bg-blue-500/10 rounded-lg p-1.5" />
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

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 pt-10">
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
        </>
      )}

      {confirmDeleteId && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="w-[520px] rounded-2xl bg-slate-900 border border-slate-700 p-8 space-y-6">
            <h2 className="text-xl font-semibold text-zinc-100">
              Confirmar exclusão
            </h2>

            <p className="text-zinc-400">
              Este número será removido permanentemente.
            </p>

            <div className="flex justify-end gap-3">
              <Button
                variant="outline"
                onClick={() => setConfirmDeleteId(null)}
                className="text-black"
              >
                Cancelar
              </Button>

              <Button
                onClick={confirmDelete}
                className="bg-red-600 hover:bg-red-500 text-white"
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
