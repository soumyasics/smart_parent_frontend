import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/Listener/HomePage";
import LandingNav from "./Components/Listener/LandingNav";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/landingnav" element={<LandingNav/>} />
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
