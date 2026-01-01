import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { useNumberStore } from "../../../Store/useNumberManagerStore";
import { TbBuildingSkyscraper } from "react-icons/tb";

export default function AddNumbers() {
  const [open, setOpen] = useState(false);
  const [numbersText, setNumbersText] = useState("");

  const { addNumber } = useNumberStore();

  function formatNumber(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 11);

    if (digits.length <= 2) return `(${digits}`;
    if (digits.length <= 7)
      return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;

    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
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
      {/* HEADER */}
      <div className="flex justify-between items-center gap-2 px-44">
        <div className="flex items-center gap-3">
          <TbBuildingSkyscraper className="text-blue-400 w-7 h-7" />
          <h1 className="text-3xl font-extrabold font-serif text-zinc-100">
            Números Vinculados
          </h1>
        </div>

        <Button
          onClick={() => setOpen(!open)}
          className="
            bg-gradient-to-br from-blue-700 via-blue-600 to-blue-700
            text-white font-semibold text-base
            hover:from-blue-600 hover:to-blue-800
            shadow-lg
          "
        >
          {open ? "Fechar" : "Adicionar Números"}
        </Button>
      </div>

      {/* FORM */}
      {open && (
        <div
          className="
            mt-6 mx-44 p-6 rounded-xl
            bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950
            border border-blue-700/30
            shadow-xl
          "
        >
          <div className="flex flex-col gap-4">
            <label className="text-base font-bold text-blue-300">
              Cole os números (um por linha)
            </label>

            <textarea
              value={numbersText}
              onChange={(e) => handleChange(e.target.value)}
              placeholder={`(11) 99999-9999\n(21) 98888-8888`}
              rows={4}
              className="
                w-full resize-none rounded-lg
                bg-slate-950 border border-blue-700/30
                p-3 text-sm text-zinc-100
                placeholder:text-zinc-500
                focus:outline-none focus:ring-2 focus:ring-blue-600
              "
            />

            <Button
              onClick={handleAddNumbers}
              className="
                self-start rounded-lg
                bg-gradient-to-br from-blue-700 via-blue-600 to-blue-700
                px-5 py-2 text-sm font-semibold text-white
                hover:from-blue-600 hover:to-blue-800
                shadow-lg
              "
            >
              Adicionar Números
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
