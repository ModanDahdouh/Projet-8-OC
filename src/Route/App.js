import { Routes, Route } from "react-router-dom";
import "../styles/App.scss";
import Page404 from "./Page404";
import Navbar from "../components/Navbar";
import Accueil from "./Accueil";
import APropos from "./APropos";
import Location from "./Location";
import Footer from "../components/Footer";

function App() {
    // Rendu du composant App avec les routes et les différents composants.
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/location/:id" element={<Location />} />
                <Route path="/Propos" element={<APropos />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
