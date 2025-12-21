// ---- Importaçoes das paginas 
import  {NavbarNumber, AddNumbers, LinkedWithSearch, Avaliable} from "./Features/Number-Manager/Index"
import { NavbarDashboard, Graphics, Activities } from "./Features/Dashboard/Index";
import { NavbarImplantation, Implantations } from "./Features/Implantantion/Index";
import { NavbarFeedback, CrmFeedback } from "./Features/Feedback/Index";
import { NavbarGym, CompletedGyms } from "./Features/Gym-Manager/Index";
import { NavbarUsers, AllUsers, AddUser } from "./Features/Users/Index";

// ---- Componentes usados 
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

function App() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Tabs defaultValue="Dashboard" className="">
        {/* Navbar de botoes */}
       <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-44 py-7 bg-slate-900/95 backdrop-blur border-b border-slate-700 shadow-lg">
          <TabsList className="gap-7 bg-slate-900/95">
            <TabsTrigger value="Dashboard" className="px-4 py-2 text-base font-bold text-white data-[state=active]:bg-blue-700 data-[state=active]:text-white data-[state=inactive]:bg-slate-800">Dashboard</TabsTrigger>
            <TabsTrigger value="NumberManager" className="px-4 py-2 text-base font-bold text-white data-[state=active]:bg-blue-700 data-[state=active]:text-white data-[state=inactive]:bg-slate-800">Number Manager</TabsTrigger>
            <TabsTrigger value="Implantation" className="px-4 py-2 text-base font-bold text-white data-[state=active]:bg-blue-700 data-[state=active]:text-white data-[state=inactive]:bg-slate-800">Implantation</TabsTrigger>
            <TabsTrigger value="Feedback" className="px-4 py-2 text-base font-bold text-white data-[state=active]:bg-blue-700 data-[state=active]:text-white data-[state=inactive]:bg-slate-800">Feedback - CS</TabsTrigger>
            <TabsTrigger value="GymManager" className="px-4 py-2 text-base font-bold text-white data-[state=active]:bg-blue-700 data-[state=active]:text-white data-[state=inactive]:bg-slate-800">Gym Manager</TabsTrigger>
            <TabsTrigger value="Users" className="px-4 py-2 text-base font-bold text-white data-[state=active]:bg-blue-700 data-[state=active]:text-white data-[state=inactive]:bg-slate-800">Users</TabsTrigger>
          </TabsList>
        </div>
        {/* conteudo das paginas */}
        <TabsContent value="Dashboard">
          <NavbarDashboard/>
          <Graphics/>
          <Activities/>
        </TabsContent>
        <TabsContent value="NumberManager">
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
        <TabsContent value="GymManager">
          <NavbarGym/>
          <CompletedGyms/>
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

