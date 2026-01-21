import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import { default as PendingImplantion } from "./PendingImplantion";
import { default as CompletedImplantation } from "./CompletedImplatation";
import { default as NewDeployments } from "./NewDeployments";
import { default as StalledDeployments } from "./StalledDeployments";
import { IoSearch } from "react-icons/io5";

export default function Implantations() {

  return (
    <div className="px-44">
      <Tabs defaultValue="news" className="w-full">
        {/* BOTÕES */}
        <TabsList className="grid grid-cols-4 h-12 w-[630px] rounded-xl border border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/50 to-slate-950 p-1 gap-1">
          <TabsTrigger
            value="news"
            className="h-full flex items-center justify-center rounded-lg text-base text-zinc-400 data-[state=active]:bg-blue-700/55 data-[state=active]:text-white"
          >
            Novos (0)
          </TabsTrigger>

          <TabsTrigger
            value="progress"
            className="h-full flex items-center justify-center rounded-lg text-base text-zinc-400 data-[state=active]:bg-blue-700/55 data-[state=active]:text-white"
          >
            Em progresso (0)
          </TabsTrigger>

          <TabsTrigger
            value="stopped"
            className="h-full flex items-center justify-center rounded-lg text-base text-zinc-400 data-[state=active]:bg-blue-700/55 data-[state=active]:text-white"
          >
            Parados (0)
          </TabsTrigger>

          <TabsTrigger
            value="completed"
            className="h-full flex items-center justify-center rounded-lg text-base text-zinc-400 data-[state=active]:bg-blue-700/55 data-[state=active]:text-white"
          >
            Concluídas (0)
          </TabsTrigger>
        </TabsList>

        {/* SEARCH */}
        <section className="relative mt-6 mb-4 col-span-2">
          <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600" />
          <input
            placeholder="Buscar Empresa ou CNPJ"
            className="w-full rounded-lg py-4 pl-10 pr-3 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 border border-blue-700/40 text-zinc-100 placeholder:text-zinc-300 placeholder:text-base
                focus:outline-none focus:ring-0 focus:border-blue-700/40"
          />
        </section>

        {/* CONTEÚDO */}
        <TabsContent value="news" className="text-white">
          <NewDeployments />
        </TabsContent>

        <TabsContent value="progress" className="text-white">
          <PendingImplantion />
        </TabsContent>

        <TabsContent value="stopped" className="text-white">
          <StalledDeployments />
        </TabsContent>

        <TabsContent value="completed" className="text-white">
          <CompletedImplantation />
        </TabsContent>
      </Tabs>
    </div>
  );
}
