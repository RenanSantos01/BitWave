import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login/login";
import Home from "./pages/home/home";
import LandingPage from "./pages/lading/LandingPage"; 

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} /> 
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/landing" element={<LandingPage />} /> {/* Adicione esta linha */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
