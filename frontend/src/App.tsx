import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function Home() {
    return <h1>Home Page</h1>;
}

function HowItWorks() {
    return <h1>How It Works</h1>;
}

function AboutSkinCancer() {
    return <h1>About Skin Cancer</h1>;
}

function FindADermatologist() {
    return <h1>Find a Dermatologist</h1>;
}

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/about-skin-cancer" element={<AboutSkinCancer />} />
                <Route path="/find-a-dermatologist" element={<FindADermatologist />} />
            </Routes>
        </Router>
    );
}

export default App;