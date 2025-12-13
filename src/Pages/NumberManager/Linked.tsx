import { Button } from "../../components/ui/button";
import { TfiUnlink } from "react-icons/tfi";
import { FaPen } from "react-icons/fa";
// import { useState } from 'react'

export function Linked() {

  // const items_per_page = 6
  // const [page, setPage] = useState(1)
  // const start = (page - 1) * items_per_page
  // const end = start + items_per_page
  // const paginatedData = data.slice(start, end)


  return (
    <>
      <div className="grid grid-rows gap-4 pt-4 px-28">
        {[1, 2].map((_, i) => (
          <div
            key={i}
            className="px-10 py-8 border  rounded-lg bg-slate-800/50 border-slate-700 shadow-lg backdrop-blur flex justify-between hover:scale-105 transition-transform hover:border-blue-500"
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
              <p className="text-sm font-serif font-semibold text-zinc-200">
                <span className="text-blue-400">CNPJ: </span> 12.345.678/0001-95
              </p>
              <p className="font-serif font-semibold text-zinc-100">
                <span className="text-zinc-400">implantador: </span>Joao
              </p>
            </div>
            <div className="flex gap-2">
              <Button className="bg-zinc-800 text-zinc-100 border border-zinc-700 hover:bg-zinc-700">
                <FaPen />
              </Button>
              <Button className="bg-zinc-800 border border-zinc-700 text-zinc-100 hover:bg-zinc-700">
                <TfiUnlink />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
