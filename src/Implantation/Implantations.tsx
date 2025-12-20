import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { PendingImplantion } from "./PendingImplantion";
import { CompletedImplantation } from "./CompletedImplatation";

export function Implantations() {
  return (
    <div className="px-44">
      <Tabs defaultValue="active" className="w-full">
        <TabsList className="grid grid-cols-2 h-12 w-[420px] rounded-xl border border-blue-700/30 bg-gradient-to-br from-slate-950 via-slate-900/50 to-slate-950 p-1">
          <TabsTrigger
            value="active"
            className="h-full flex items-center justify-center rounded-lg text-sm text-zinc-400 data-[state=active]:bg-blue-700/55 data-[state=active]:text-white data-[state=active]:shadow-md"
          >
            Ativas (0)
          </TabsTrigger>

          <TabsTrigger
            value="completed"
            className="h-full flex items-center justify-center rounded-lg text-sm text-zinc-400 data-[state=active]:bg-blue-700/55 data-[state=active]:text-white data-[state=active]:shadow-md"
          >
            Concluídas (0)
          </TabsTrigger>
        </TabsList>
            <TabsContent value="active" className="text-white"><PendingImplantion/></TabsContent>
            <TabsContent value="completed" className="text-white"><CompletedImplantation/></TabsContent>
      </Tabs>
    </div>
  );
}
