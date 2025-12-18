import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

export function CrmFeedback() {
  return (
    <div className="px-44">
      <Tabs defaultValue="pending" className="w-[420px]">
        <TabsList className="grid grid-cols-3 h-12 rounded-xl border border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/50 to-slate-950 p-1">
          <TabsTrigger
            value="pending"
            className="h-full flex items-center justify-center rounded-lg text-sm text-zinc-400 data-[state=active]:bg-violet-700/55 data-[state=active]:text-white data-[state=active]:shadow-md"
          >
            Pendentes (0)
          </TabsTrigger>

          <TabsTrigger
            value="progress"
            className="h-full flex items-center justify-center rounded-lg text-sm text-zinc-400 data-[state=active]:bg-violet-700/55 data-[state=active]:text-white data-[state=active]:shadow-md"
          >
            Em progresso (0)
          </TabsTrigger>

          <TabsTrigger
            value="completed"
            className="h-full flex items-center justify-center rounded-lg text-sm text-zinc-400 data-[state=active]:bg-violet-700/55 data-[state=active]:text-white data-[state=active]:shadow-md"
          >
            Concluídas (0)
          </TabsTrigger>
        </TabsList>
        <TabsContent value="pending" className="text-white">
          em progresso...
        </TabsContent>
        <TabsContent value="progress" className="text-white">
          em progresso...
        </TabsContent>
        <TabsContent value="completed" className="text-white">
          em progresso...
        </TabsContent>
      </Tabs>
    </div>
  );
}
