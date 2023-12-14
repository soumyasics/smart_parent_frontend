import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/Listener/HomePage";
import LandingNav from "./Components/Listener/LandingNav";
import ListenerLogin from "./Components/Listener/ListenerLogin";
import LandingPage from "./Pages/Listener/LandingPage";
import Footer from "./Pages/Listener/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/landingnav" element={<LandingNav/>} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/Listenerlogin" element={<ListenerLogin />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
