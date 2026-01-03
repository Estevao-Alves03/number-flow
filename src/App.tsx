// ---- Importaçoes das paginas 
import  {NavbarNumber, AddNumbers, LinkedWithSearch, Avaliable} from "./Features/Numbers/Index"
import { NavbarDashboard, GraphicsDashboard, Activities } from "./Features/Dashboard/Index";
import { NavbarImplantation, Implantations } from "./Features/Implantantion/Index";
import { NavbarFeedback, CrmFeedback } from "./Features/Feedback/Index";
// import { NavbarGym, CompletedGyms } from "./Features/ConnectionGains/Index";
import { NavbarUsers, AllUsers, AddUser } from "./Features/Users/Index";
import { NavbarDeployment, GraphicsDeployment, AddGym, TrainingHistory } from "./Features/MyEarnings/Index";

// ---- Componentes usados 
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { FaBell, FaRegBell } from "react-icons/fa";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./components/ui/popover"


function App() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Tabs defaultValue="Dashboard" className="">
        {/* Navbar de botoes */}
       <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-44 py-7 bg-slate-900/95 backdrop-blur border-b border-slate-700 shadow-lg">
         <div className="flex items-center justify-between">
           <TabsList className="gap-7 bg-slate-900/95">
            <TabsTrigger value="Dashboard" className="px-4 py-2 text-base font-bold text-white data-[state=active]:bg-blue-700 data-[state=active]:text-white data-[state=inactive]:bg-slate-800">Dashboard</TabsTrigger>
            <TabsTrigger value="Numbers" className="px-4 py-2 text-base font-bold text-white data-[state=active]:bg-blue-700 data-[state=active]:text-white data-[state=inactive]:bg-slate-800">Numbers</TabsTrigger>
            <TabsTrigger value="Implantation" className="px-4 py-2 text-base font-bold text-white data-[state=active]:bg-blue-700 data-[state=active]:text-white data-[state=inactive]:bg-slate-800">Implantation</TabsTrigger>
            <TabsTrigger value="Feedback" className="px-4 py-2 text-base font-bold text-white data-[state=active]:bg-blue-700 data-[state=active]:text-white data-[state=inactive]:bg-slate-800">Feedback - CS</TabsTrigger>
            {/* <TabsTrigger value="ConnectionGains" className="px-4 py-2 text-base font-bold text-white data-[state=active]:bg-blue-700 data-[state=active]:text-white data-[state=inactive]:bg-slate-800">Connection Gains</TabsTrigger> */}
            <TabsTrigger value="MyEarnings" className="px-4 py-2 text-base font-bold text-white data-[state=active]:bg-blue-700 data-[state=active]:text-white data-[state=inactive]:bg-slate-800">My Earnings</TabsTrigger>
            <TabsTrigger value="Users" className="px-4 py-2 text-base font-bold text-white data-[state=active]:bg-blue-700 data-[state=active]:text-white data-[state=inactive]:bg-slate-800">Users</TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-6">
            {/* perfil */}
            <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 via-violet-600 items-center flex justify-center text-white font-bold" > E</div>
                <div>
                  <h1 className="flex items-center justify-end gap-2 text-base font-bold text-white">
                    Estevão
                  </h1>
                  <p className="text-sm text-zinc-400">Administrador</p>
                </div>
            </div>

            <div className="border border-slate-800 rounded-lg bg-slate-800">
              <Popover>
                <PopoverTrigger className="p-3"> <FaBell className="text-white"/></PopoverTrigger>
                <PopoverContent className="w-96 p-4 mr-44 mt-4 bg-slate-800 text-white border-slate-700">
                  <h2 className="font-bold ml-1.5 text-lg">Notificações</h2>
                  <div className="flex flex-col items-center justify-center py-14 texto-zinc-400">
                    <FaRegBell className="text-5xl mb-2 opacity-40 text-zinc-500"/>
                    <span className="text-sm text-zinc-500">Nenhuma Notificação</span>
                  </div>
                </PopoverContent>
              </Popover>          
            </div>
          </div>          

         </div>
        </div>
        {/* conteudo das paginas */}
        <TabsContent value="Dashboard">
          <NavbarDashboard/>
          <GraphicsDashboard/>
          <Activities/>
        </TabsContent>
        <TabsContent value="Numbers">
          <NavbarNumber />
          <AddNumbers />
          <LinkedWithSearch/>
          <Avaliable />
        </TabsContent>
        <TabsContent value="Implantation">
          <NavbarImplantation/>
          <Implantations/>
        </TabsContent>
        <TabsContent value="Feedback">
         <NavbarFeedback/>
         <CrmFeedback/>
        </TabsContent>
        {/* <TabsContent value="ConnectionGains">
          <NavbarGym/>
          <CompletedGyms/>
        </TabsContent> */}
        <TabsContent value="MyEarnings">
          <NavbarDeployment/>
          <GraphicsDeployment/>
          <AddGym/>
          <TrainingHistory/>
        </TabsContent>
        <TabsContent value="Users">
          <NavbarUsers/>
          <AddUser/>
          <AllUsers/>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default App;

