import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./pages/layout";
import Home from "./pages/Home"; 
import FindADermatologist from "./pages/FindADermatologist";
import AboutSkinCancer from "./pages/AboutSkinCancer";
import HowItWorks from "./pages/HowItWorks";


function App() {
    return (
        <Router>
            <Routes>
            <Route element={<MainLayout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/how-it-works" element={<HowItWorks />} />
                  <Route path="/about-skin-cancer" element={<AboutSkinCancer />} />
                  <Route path="/find-a-dermatologist" element={<FindADermatologist />} />
            </Route>
            </Routes>
        </Router>
    );
}

export default App;