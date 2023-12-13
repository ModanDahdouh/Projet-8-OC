import { Routes, Route } from "react-router-dom";
import "../styles/App.scss";
import Page404 from "./Route/Page404";
import Navbar from "./Navbar";
import Accueil from "./Route/Accueil";
import APropos from "./Route/APropos";
import Location from "./Route/Location";
import Footer from "./Footer";

function App() {
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
