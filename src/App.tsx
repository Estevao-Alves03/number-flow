// ---- Importaçoes da pagina de number manager
import { Navbar } from "./NumberManager/NavbarNumber";
import { Avaliable } from "./NumberManager/Avaliable";
import { LinkedWithSearch } from "./NumberManager/LinkedWithSearch";
import { AddNumbers } from "./NumberManager/AddNumbers";
// ---- importaçoes da pagina de gym managar
import { NavbarGym } from "./GymManager/NavbarGym";
// import { AddGym } from "./GymManager/AddGym";
import { CompletedGyms } from "./GymManager/CompletedGyms";
// ---- Componentes e outros
import { Login } from "./Pages/Login";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

function App() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen">
      <Tabs defaultValue="NumberManager" className="">
       <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 py-7 bg-slate-900/95 backdrop-blur border-b border-slate-700 shadow-lg">
          <TabsList className="gap-7 bg-slate-900/95">
            <TabsTrigger value="Dashboard" className="px-4 py-2 font-bold text-base">Dashboard</TabsTrigger>
            <TabsTrigger value="NumberManager" className="px-4 py-2 font-bold text-base">Number Manager</TabsTrigger>
            <TabsTrigger value="Implantation" className="px-4 py-2 font-bold text-base">Implantation</TabsTrigger>
            <TabsTrigger value="Feedback" className="px-4 py-2 font-bold text-base">Feedback - CS</TabsTrigger>
            <TabsTrigger value="GymManager" className="px-4 py-2 font-bold text-base">Gym Manager</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="Dashboard">
          {/* Dashboard */}
        </TabsContent>
        <TabsContent value="NumberManager">
          <Navbar />
          <AddNumbers />
          <LinkedWithSearch/>
          <Avaliable />
        </TabsContent>
        <TabsContent value="Implantation">
          {/* IMPLANTATIOS */}
        </TabsContent>
        <TabsContent value="Feedback">
          {/* FEEDBACK */}
        </TabsContent>
        <TabsContent value="GymManager">
          <NavbarGym/>
          {/* <AddGym/> */}
          <CompletedGyms/>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default App;

