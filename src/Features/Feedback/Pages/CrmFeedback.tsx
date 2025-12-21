import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import {default as PendingFeedback } from "./PendingFeedback";
import {default as ProgressFeedback } from "./ProgressFeedback";
import {default as CompletedFeedback } from "./CompletedFeedback";
import {default as NewsFeedback} from "./NewsFeedback"
import { IoSearch } from "react-icons/io5"
import { useState } from "react";

export default function CrmFeedback() {

  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="px-44 pb-16">
      <Tabs defaultValue="news" className="w-full">
        {/* Tabs (largura controlada) */}
        <TabsList className="grid !w-[630px] grid-cols-4 !h-12 rounded-xl border border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/50 to-slate-950 p-1">
          <TabsTrigger
            value="news"
            className="h-full rounded-lg text-sm text-zinc-400 data-[state=active]:bg-violet-700/55 data-[state=active]:text-white"
          >
            Novos (0)
          </TabsTrigger>

          <TabsTrigger
            value="pending"
            className="h-full rounded-lg text-sm text-zinc-400 data-[state=active]:bg-violet-700/55 data-[state=active]:text-white"
          >
            Pendentes (0)
          </TabsTrigger>

          <TabsTrigger
            value="progress"
            className="h-full rounded-lg text-sm text-zinc-400 data-[state=active]:bg-violet-700/55 data-[state=active]:text-white"
          >
            Em progresso (0)
          </TabsTrigger>

          <TabsTrigger
            value="completed"
            className="h-full rounded-lg text-sm text-zinc-400 data-[state=active]:bg-violet-700/55 data-[state=active]:text-white"
          >
            Concluídas (0)
          </TabsTrigger>
        </TabsList>

        {/* SEARCH */}
        <section className="relative mt-6 mb-4 w-full">
          <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-violet-600" />
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar Empresa, Implantador ou CNPJ"
            className="w-full rounded-lg py-4 pl-10 pr-3 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 border border-violet-700/40 text-zinc-100 placeholder:text-zinc-300 focus:ring-2 focus:ring-blue-600"
          />
        </section>

        {/* Conteúdo em largura total */}
        <TabsContent value="news" className="mt-8 w-full">
          <NewsFeedback />
        </TabsContent>

        <TabsContent value="pending" className="mt-8 w-full">
          <PendingFeedback />
        </TabsContent>

        <TabsContent value="progress" className="mt-8 w-full text-white">
          <ProgressFeedback />
        </TabsContent>

        <TabsContent value="completed" className="mt-8 w-full text-white">
          <CompletedFeedback />
        </TabsContent>
      </Tabs>
    </div>
  );
}
