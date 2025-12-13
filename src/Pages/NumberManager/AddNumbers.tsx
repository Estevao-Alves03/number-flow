import { Button } from "../../components/ui/button";
import { IoIosAdd } from "react-icons/io";

export function AddNumbers() {
  return (
    <>
      <div className="flex justify-between gap-2 pt-6">
        <h1 className="text-2xl font-extrabold font-serif text-zinc-100 mt-1">
          Números Vinculados
        </h1>
        <Button className="bg-white border-2 border-slate-700 text-zinc-900 hover:bg-zinc-400 px-4 text-lg font-semibold">
          <IoIosAdd /> Adicionar Números
        </Button>
      </div>
    </>
  );
}

// {
//   /* exemplo de como eu quero quando mudar o cliente for adicionar um botao */
// }
// <div className="border border-zinc-800 rounded-lg bg-zinc-900 px-6 mt-6">
//   <div className="flex flex-col gap-3 mt-6">
//     <label className="text-base font-bold text-zinc-300">
//       Cole os números (um por linha)
//     </label>

//     <textarea
//       placeholder={`(11) 99999-9999 
// (21) 98888-8888
// ...`}
//       rows={4}
//       className="w-full resize-none rounded-lg bg-zinc-950 border border-zinc-700 p-3 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-600"
//     />

//     <button className="self-start rounded-lg bg-zinc-700 px-4 py-2 text-sm text-white mb-4 hover:bg-zinc-600">
//       Adicionar
//     </button>
//   </div>
// </div>;
