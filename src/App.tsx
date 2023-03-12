import react from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";
import { Home } from "./pages/home";
import { LogIn } from "./pages/signin";
import { GoogleLoginSuccess, GoogleLoginFailure } from "./components/GoogleLoginCallback";
import { NotFound } from "./pages/NotFound";

import { store } from "./store";
import { Profile } from "./pages/profile";

function App() {
    return (
        <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/login" element={<LogIn />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/" element={<Home />} />
                <Route path="/login/success" element={<GoogleLoginSuccess />} />
                <Route path="/login/failure" element={<GoogleLoginFailure />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
        </Provider>
    );
}

export default App;
