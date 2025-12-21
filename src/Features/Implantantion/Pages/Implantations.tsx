import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import {default as PendingImplantion } from "./PendingImplantion";
import {default as CompletedImplantation } from "./CompletedImplatation";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";

export default function Implantations() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="px-44">
      <Tabs defaultValue="active" className="w-full">
        {/* BOTÕES */}
        <TabsList className="grid grid-cols-2 h-12 w-[420px] rounded-xl border border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/50 to-slate-950 p-1">
          <TabsTrigger
            value="active"
            className="h-full flex items-center justify-center rounded-lg text-sm text-zinc-400 data-[state=active]:bg-blue-700/55 data-[state=active]:text-white"
          >
            Ativas (0)
          </TabsTrigger>

          <TabsTrigger
            value="completed"
            className="h-full flex items-center justify-center rounded-lg text-sm text-zinc-400 data-[state=active]:bg-blue-700/55 data-[state=active]:text-white"
          >
            Concluídas (0)
          </TabsTrigger>
        </TabsList>

        {/* SEARCH */}
        <section className="relative mt-6 mb-4 w-full">
          <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600" />
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar Empresa ou CNPJ"
            className="w-full rounded-lg py-4 pl-10 pr-3 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 border border-blue-700/40 text-zinc-100 placeholder:text-zinc-300 focus:ring-2 focus:ring-blue-600"
          />
        </section>

        {/* CONTEÚDO */}
        <TabsContent value="active" className="text-white">
          <PendingImplantion />
        </TabsContent>

        <TabsContent value="completed" className="text-white">
          <CompletedImplantation />
        </TabsContent>
      </Tabs>
    </div>
  );
}

