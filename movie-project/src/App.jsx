import "./App.css";
import Favorites from "./pages/Favorites";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
function App() {
  return (
    <div>
      <NavBar></NavBar>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
