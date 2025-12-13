import { Button } from "./components/ui/button";
import { IoIosAdd } from "react-icons/io";
import { BsTrash3 } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";

function App() {
  return (
    <div className="px-28 py-7 bg-zinc-950 text-zinc-100">
      {/* titulo e subtitulo */}
      <div className="pb-10">
        <h1 className="text-4xl font-extrabold font-serif text-zinc-100">
          Gerenciador de Números
        </h1>
        <p className="text-base font-sans text-zinc-400">
          Gerencie números de teste e suas vinculações com empresas.
        </p>
      </div>

      {/* Cards principais */}
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 border border-zinc-800 rounded-xl bg-zinc-900">
          <h2 className="text-3xl font-bold pl-3 pt-6 text-blue-400">50</h2>
          <p className="ps-3 font-serif text-zinc-400">Total de numeros</p>
        </div>

        <div className="p-4 border border-zinc-800 rounded-xl bg-zinc-900">
          <h2 className="text-3xl font-bold pl-3 pt-6 text-green-400">2</h2>
          <p className="ps-3 font-serif text-zinc-400">Numeros em uso</p>
        </div>

        <div className="p-4 border border-zinc-800 rounded-xl bg-zinc-900">
          <h2 className="text-3xl font-bold pl-3 pt-6 text-zinc-300">48</h2>
          <p className="ps-3 font-serif text-zinc-400">Numeros Livres</p>
        </div>
      </div>

      {/* botão */}
      <div>
        <div className="flex justify-between gap-2 pt-6">
          <h1 className="text-2xl font-extrabold font-serif text-zinc-100">
            Números Vinculados
          </h1>
          <Button className="bg-zinc-900 border border-zinc-700 text-zinc-100 hover:bg-zinc-800 px-4 text-lg font-semibold">
            <IoIosAdd /> Adicionar Números
          </Button>
        </div>

        {/* textarea */}
        <div className="border border-zinc-800 rounded-lg bg-zinc-900 px-6 mt-6">
          <div className="flex flex-col gap-3 mt-6">
            <label className="text-base font-bold text-zinc-300">
              Cole os números (um por linha)
            </label>

            <textarea
              placeholder={`(11) 99999-9999 
(21) 98888-8888
...`}
              rows={4}
              className="w-full resize-none rounded-lg bg-zinc-950 border border-zinc-700 p-3 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-600"
            />

            <button className="self-start rounded-lg bg-zinc-700 px-4 py-2 text-sm text-white mb-4 hover:bg-zinc-600">
              Adicionar
            </button>
          </div>
        </div>

        {/* busca */}
        <section className="relative mt-4">
          <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            placeholder="Busque pelo nome da empresa ou implantador"
            className="bg-zinc-900 border border-zinc-700 rounded-lg py-2 pr-3 pl-10 w-full text-zinc-100 placeholder:text-zinc-500 focus:ring-zinc-600 focus:ring-1 focus:outline-none"
          />
        </section>

        {/* cards vinculados */}
        <div className="grid grid-rows gap-4 pt-4">
          {[1, 2].map((_, i) => (
            <div
              key={i}
              className="px-10 py-8 border border-zinc-800 rounded-lg bg-zinc-900 flex justify-between shadow-lg hover:scale-105 transition-transform hover:border-blue-500"
            >
              <div>
                <h1 className="text-xl text-zinc-100 flex items-center gap-2">
                  (00) 00000-0000
                  <span className="text-xs text-zinc-500">
                    Vinculado em 09/12/2025
                  </span>
                </h1>
                <p className="text-sm text-blue-400 font-bold pt-5 pb-1">
                  ACAD. TOMANDO NA STRONGER
                </p>
                <p className="font-serif font-semibold text-zinc-300">
                  <span className="text-zinc-500">implantador: </span>Joao
                </p>
              </div>
              <div className="flex gap-2">
                <Button className="bg-zinc-800 text-zinc-100 border border-zinc-700 hover:bg-zinc-700">
                  <FaPen />
                </Button>
                <Button className="bg-red-600 text-white hover:bg-red-700">
                  <BsTrash3 />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* números disponíveis */}
      <div className="pt-6">
        <h1 className="text-2xl font-extrabold font-serif text-zinc-100">
          Números Disponíveis
        </h1>
        <p className="text-base text-zinc-400">
          Clique em um número para vincular a uma empresa
        </p>

        <div className="grid grid-cols-3 gap-4 pt-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="relative px-10 py-8 border border-zinc-800 bg-zinc-900 rounded-lg shadow-md hover:scale-105 transition-transform hover:border-blue-500"
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
    </div>
  );
}

export default App;
