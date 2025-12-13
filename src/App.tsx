import { Navbar } from "./Pages/NumberManager/Navbar";
import { Search } from "./Pages/NumberManager/Search";
import { Avaliable } from "./Pages/NumberManager/Avaliable";
import { Linked } from "./Pages/NumberManager/Linked";
import { AddNumbers } from "./Pages/NumberManager/AddNumbers";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

function App() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Tabs defaultValue="NumberManager" className="">
        <div className="px-28 py-7 bg-slate-900/95 backdrop-blur border-b border-slate-700 shadow-lg">
          <TabsList className="gap-7 bg-slate-900/95">
            <TabsTrigger value="NumberManager" className="px-4 py-2 font-bold text-base">Number Manager</TabsTrigger>
            <TabsTrigger value="GymManager" className="px-4 py-2 font-bold text-base">Gym Manager</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="NumberManager">
          <Navbar />
          <AddNumbers />
          <Search />
          <Linked />
          <Avaliable />
        </TabsContent>
        <TabsContent value="GymManager"></TabsContent>
      </Tabs>
    </div>
  );
}

export default App;
