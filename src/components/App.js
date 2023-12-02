import { Routes, Route } from "react-router-dom";
import "../styles/App.scss";
import Page404 from "./Route/Page404";

import Accueil from "./Route/Accueil";
import APropos from "./Route/APropos";

import Navbar from "./Navbar";

import Footer from "./Footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="Propos" element={<APropos />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
