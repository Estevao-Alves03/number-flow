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
        <div className="">
          <TabsList className="">
            <TabsTrigger value="NumberManager">Number Manager</TabsTrigger>
            <TabsTrigger value="GymManager">Gym Manager</TabsTrigger>
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
