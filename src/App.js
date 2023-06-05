import "./index.css";
import { SideBar } from "./components/SideBar";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-grow">
        <Home />
      </div>
    </div>
  );
}

export default App;
