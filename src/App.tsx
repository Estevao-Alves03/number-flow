// ---- Importaçoes da pagina de number manager
import { Navbar } from "./NumberManager/NavbarNumber";
import { Avaliable } from "./NumberManager/Avaliable";
import { LinkedWithSearch } from "./NumberManager/LinkedWithSearch";
import { AddNumbers } from "./NumberManager/AddNumbers";
// ---- importaçoes da pagina de gym managar
import { NavbarGym } from "./GymManager/NavbarGym";
import { CompletedGyms } from "./GymManager/CompletedGyms";
// ---- importaçoes da pagina de users
import { NavbarUsers } from "./Users/NavbarUsers";
import { AddUser } from "./Users/AddUser";
import { AllUsers } from "./Users/AllUsers";
// ---- importaçoes da pagina de dashboard
import { NavbarDashboard } from "./Dashboard/NavbarDashboard";
import { Graphics } from "./Dashboard/Graphics";
// ---- Componentes e outros
// import { Login } from "./Pages/Login";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

function App() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Tabs defaultValue="NumberManager" className="">
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
        <TabsContent value="Dashboard">
          <NavbarDashboard/>
          <Graphics/>
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

