import { useState } from "react";
import { Button } from "../components/ui/button";
import { useNumberStore } from "../Store/useNumberManagerStore";

export function AddNumbers() {
  const [open, setOpen] = useState(false);
  const [numbersText, setNumbersText] = useState("");

  const { addNumber } = useNumberStore();

  function formatNumber(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 11);

    if (digits.length <= 2) return `(${digits}`;
    if (digits.length <= 7)
      return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;

    return `(${digits.slice(0, 2)}) ${digits.slice(
      2,
      7
    )}-${digits.slice(7)}`;
  }

  function handleChange(value: string) {
    const lines = value.split("\n");
    const formatted = lines.map((line) => formatNumber(line));
    setNumbersText(formatted.join("\n"));
  }

  function isValidNumber(value: string) {
    return value.replace(/\D/g, "").length === 11;
  }

  function handleAddNumbers() {
    const lines = numbersText
      .split("\n")
      .map((n) => n.trim())
      .filter(Boolean)
      .filter(isValidNumber);

    if (lines.length === 0) return;

    lines.forEach((num, index) => {
      addNumber({
        id: Date.now() + index,
        number: num,

        // ⬇️ NÃO VINCULADO
        nameGym: "",
        cnpj: "",
        deployer: "",
      });
    });

    setNumbersText("");
    setOpen(false);
  }

  return (
    <>
      <div className="flex justify-between gap-2 px-28">
        <h1 className="text-2xl font-extrabold font-serif text-zinc-100 mt-1">
          Números Vinculados
        </h1>

        <Button
          className="bg-white border-2 border-slate-700 text-zinc-900 hover:bg-zinc-400 px-4 text-lg font-semibold"
          onClick={() => setOpen(!open)}
        >
          {open ? "Fechar" : "Adicionar Números"}
        </Button>
      </div>

      {open && (
        <div className="rounded-lg bg-slate-800/50 border border-slate-500 shadow-lg backdrop-blur px-6 mt-6 mx-28">
          <div className="flex flex-col gap-3 mt-6">
            <label className="text-base font-bold text-zinc-300">
              Cole os números (um por linha)
            </label>

            <textarea
              value={numbersText}
              onChange={(e) => handleChange(e.target.value)}
              placeholder={`(11) 99999-9999
(21) 98888-8888`}
              rows={4}
              className="w-full resize-none rounded-lg bg-zinc-950 border border-zinc-700 p-3 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-600"
            />

            <Button
              onClick={handleAddNumbers}
              className="self-start rounded-lg bg-zinc-950 px-4 py-2 text-sm text-white mb-4 hover:bg-zinc-900"
            >
              Adicionar
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
