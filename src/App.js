import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { SideBar } from "./components/SideBar";
import { Home } from "./pages/Home";
import Checkout from "./pages/Checkout";
import Items from "./pages/Items";

function App() {
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/items" element={<Items/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </Router>
  </>
}

export default App;
