import react from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { Home } from "./pages/home";
import { LogIn } from "./pages/signin";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LogIn />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
