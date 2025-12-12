import { Button } from "./components/ui/button";
import { IoIosAdd } from "react-icons/io";
import { BsTrash3 } from "react-icons/bs";
import { FaPen } from "react-icons/fa";



function App() {
  return (
    // div principal, colocando espaçamento lateral para todo o corpo
    <div className="px-28 py-7">
      {/* titulo e subtitulo */}
      <div className="pb-10">
        <h1 className="text-4xl font-extrabold font-serif">
          Gerenciador de Números
        </h1>
        <p className="text-base font-sans text-gray-800">
          Gerencie números de teste e suas vinculações com empresas.
        </p>
      </div>
      {/* Cards principais de controle em tempo real */}
      <div className="grid grid-cols-3 gap-4 ">
        <div className="p-4 border-2 border-gray-300 rounded-xl bg-white ">
          <h2 className="text-3xl font-bold pl-3 pt-6 text-blue-700">50</h2>
          <p className="ps-3 font-serif text-gray-600">Total de numeros</p>
        </div>
        <div className="p-4 border-2 border-gray-300 rounded-xl bg-white ">
          <h2 className="text-3xl font-bold pl-3 pt-6 text-green-700">2</h2>
          <p className="ps-3 font-serif text-gray-600">Numeros em uso</p>
        </div>
        <div className="p-4 border-2 border-gray-300 rounded-xl bg-white ">
          <h2 className="text-3xl font-bold pl-3 pt-6 text-gray-700">48</h2>
          <p className="ps-3 font-serif text-gray-600">Numeros Livres</p>
        </div>
      </div>
      {/* cards onde mostram os numeros vinculados onde vamos poder desvincular ou editar e com um botao para adicionar um numero ao sistema */}
      <div>
        <div className="flex justify-between gap-2 pt-6">
          <h1 className="text-2xl font-extrabold font-serif">
            Números Vinculados
          </h1>
          <Button
            size="sm"
            className="bg-white border border-gray-300 text-black hover:bg-zinc-100 gap-1"
          >
            {" "}
            <IoIosAdd /> Adicionar Números
          </Button>
        </div>
        <div className="grid grid-rows gap-4 pt-4">
          <div className="px-10 py-8 border border-gray-300 rounded-lg flex justify-between">
            <div>
              <h1 className="text-xl text-gray-700 flex items-center gap-2">(00) 00000-0000 <span className="text-xs text-gray-500 font-sans">Vinculado em 12/12/2025</span></h1>
              <p className="text-xs text-blue-600 font-bold pt-1">ACAD. REUNINDO OS CRIA</p>
            </div>
            <div className="gap-2 flex">
              <button><BsTrash3/></button>
              <button><FaPen/></button>
            </div>
          </div>
          
          <div className="px-10 py-8 border border-gray-300 rounded-lg flex justify-between">
            <div>
              <h1 className="text-xl text-gray-700 flex items-center gap-2">(00) 00000-0000 <span className="text-xs text-gray-500 font-sans">Vinculado em 12/12/2025</span></h1>
              <p className="text-xs text-blue-600 font-bold pt-1">ACAD. OS NEGÃO DA QUEBRADA</p>
            </div>
            <div className="gap-2 flex">
              <button><BsTrash3/></button>
              <button><FaPen/></button>
            </div>
          </div>
        </div>
      </div>

      {/* cards que vao mostrar os numeros disponiveis, basta clicar para vincular a uma empresa, colocando o nome e uma descriçao - ao salvar e voltar para numeros vinculados vamos ter a data da vinculaçao */}
      <div className="pt-6">
        <div>
          <h1 className="text-2xl font-extrabold font-serif">
            Números Disponíveis
          </h1>
          <p className="text-base font-sans text-gray-800">
            Clique em um número para vincular a uma empresa
          </p>
        </div>

        {/* cards dos numeros disponiveis -feitos com count */}
        <div className="grid grid-cols-3 gap-4 pt-4">
          <div className="px-10 py-8 border border-gray-300 text-center rounded-lg">
            <h1 className="text-xl text-gray-700">(00) 00000-0000</h1>
            <p className="text-xs text-gray-600">Clique para vincular</p>
          </div>
          <div className="px-10 py-8 border border-gray-300 text-center rounded-lg">
            <h1 className="text-xl text-gray-700">(00) 00000-0000</h1>
            <p className="text-xs text-gray-600">Clique para vincular</p>
          </div>
          <div className="px-10 py-8 border border-gray-300 text-center rounded-lg">
            <h1 className="text-xl text-gray-700">(00) 00000-0000</h1>
            <p className="text-xs text-gray-600">Clique para vincular</p>
          </div>
          <div className="px-10 py-8 border border-gray-300 text-center rounded-lg">
            <h1 className="text-xl text-gray-700">(00) 00000-0000</h1>
            <p className="text-xs text-gray-600">Clique para vincular</p>
          </div>
          <div className="px-10 py-8 border border-gray-300 text-center rounded-lg">
            <h1 className="text-xl text-gray-700">(00) 00000-0000</h1>
            <p className="text-xs text-gray-600">Clique para vincular</p>
          </div>
          <div className="px-10 py-8 border border-gray-300 text-center rounded-lg">
            <h1 className="text-xl text-gray-700">(00) 00000-0000</h1>
            <p className="text-xs text-gray-600">Clique para vincular</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
