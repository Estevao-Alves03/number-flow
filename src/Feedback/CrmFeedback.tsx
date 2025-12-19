import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { SlCalender } from "react-icons/sl";


export function CrmFeedback() {
  return (
    <div className="w-full px-44">
      <Tabs defaultValue="pending">
        {/* Tabs (largura controlada) */}
        <TabsList className="grid w-[420px] grid-cols-3 h-12 rounded-xl border border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/50 to-slate-950 p-1">
          <TabsTrigger value="pending" className="h-full rounded-lg text-sm text-zinc-400 data-[state=active]:bg-violet-700/55 data-[state=active]:text-white">
            Pendentes (0)
          </TabsTrigger>

          <TabsTrigger value="progress" className="h-full rounded-lg text-sm text-zinc-400 data-[state=active]:bg-violet-700/55 data-[state=active]:text-white">
            Em progresso (0)
          </TabsTrigger>

          <TabsTrigger value="completed" className="h-full rounded-lg text-sm text-zinc-400 data-[state=active]:bg-violet-700/55 data-[state=active]:text-white">
            Concluídas (0)
          </TabsTrigger>
        </TabsList>

        {/* Conteúdo em largura total */}
        <TabsContent value="pending" className="mt-6 w-full">
          {/* academia que deve mandar mensagem no dia*/}
          <div className="w-full mb-4 rounded-xl bg-white p-6 border-4 border-violet-600/90 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 shadow-md">
            {/* nome da academia e botao de interaçao */}
            <div className="text-white flex items-center justify-between px-4 pb-2">
              <h1 className="text-3xl font-bold flex gap-3">
                Acad Acuas Fit
                <span className="rounded-xl bg-blue-900/70 px-2.5 text-lg flex items-center">3º dia</span>
              </h1>
              <Button className="bg-violet-700 hover:bg-violet-800/50 text-xl px-6 py-5">
                Coletar feedback
              </Button>
            </div>
            {/* Informaçoes sobre o crm */}
            <div className="text-white px-4 grid grid-rows-3 gap-1">
               <section className="flex items-center gap-2">
                  <h2 className="font-semibold text-lg flex items-center gap-2">
                    <SlCalender/>
                    Proximo contato:
                </h2>
                  <span className="text-zinc-300 mt-1">22/12/2025</span>
               </section>
                 <section className="flex items-center gap-2">
                  <h2 className="font-semibold text-lg">Implantador:</h2>
                  <span className="text-zinc-300 mt-1">Rayck</span>
               </section>
                 <section className="flex items-center gap-2">
                  <h2 className="font-semibold text-lg">Concluído em:</h2>
                  <span className="text-zinc-300 mt-1">19/12/2025</span>
               </section> 
            </div>
          </div>
          
          {/* academia que deve entrar em contato mais a frente */}
          <div className="w-full rounded-xl bg-white p-6 border-2 border-zinc-600 bg-gradient-to-br from-slate-950 via-slate-900/500 to-slate-950 shadow-md">
            {/* nome da academia e botao de interaçao */}
            <div className="text-white flex items-center justify-between px-4 pb-2">
              <h1 className="text-3xl font-bold flex gap-3">
                Acad Strongert
                <span className="rounded-xl bg-blue-900/70 px-2.5 text-lg flex items-center">7º dia</span>
              </h1>
              <Button className="bg-zinc-700 text-xl px-6 py-5">
                Coletar feedback
              </Button>
            </div>
            {/* Informaçoes sobre o crm */}
            <div className="text-white px-4 grid grid-rows-3 gap-1">
               <section className="flex items-center gap-2">
                  <h2 className="font-semibold text-lg flex items-center gap-2">
                    <SlCalender/>
                    Proximo contato:
                </h2>
                  <span className="text-zinc-300 mt-1">26/12/2025</span>
               </section>
                 <section className="flex items-center gap-2">
                  <h2 className="font-semibold text-lg">Implantador:</h2>
                  <span className="text-zinc-300 mt-1">João</span>
               </section>
                 <section className="flex items-center gap-2">
                  <h2 className="font-semibold text-lg">Concluído em:</h2>
                  <span className="text-zinc-300 mt-1">17/12/2025</span>
               </section> 
            </div>
          </div>
        </TabsContent>

        <TabsContent value="progress" className="mt-6 w-full text-white">
          em progresso...
        </TabsContent>

        <TabsContent value="completed" className="mt-6 w-full text-white">
          concluídas...
        </TabsContent>
      </Tabs>
    </div>
  );
}
