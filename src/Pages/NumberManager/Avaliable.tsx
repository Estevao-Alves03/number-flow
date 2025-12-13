import { IoCloseOutline } from "react-icons/io5";

export function Avaliable() {
  return (
    <>
      <div className="pt-6">
        <h1 className="text-2xl font-extrabold font-serif text-zinc-100">
          Números Disponíveis
        </h1>
        <p className="text-base font-sans text-zinc-400">
          Clique em um número para vincular a uma empresa
        </p>

        <div className="grid grid-cols-3 gap-4 pt-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="relative px-10 py-8 p-4 bg-slate-800/50 border-slate-700 shadow-lg backdrop-blur rounded-lg hover:scale-105 transition-transform border hover:border-blue-500"
            >
              <div className="text-center">
                <h1 className="text-xl text-zinc-100">(00) 00000-0000</h1>
                <p className="text-xs text-zinc-400">Clique para vincular</p>
              </div>
              <button className="absolute right-7 top-1/2 -translate-y-1/2 text-zinc-300 hover:bg-zinc-700 rounded-lg px-1 py-1">
                <IoCloseOutline size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
