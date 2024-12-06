import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import Contactus from "./pages/Contactus";
import Home from "./pages/Home";
import AboutUs from "./pages/Aboutus";
import Joblist from "./pages/Joblist";
import Login from "./components/Login";
import ScrollToTop from "./components/ScrollToTop";


function App() {
    return (
        <Router>
            <ScrollToTop />
            <AppContent />
        </Router>
    );
}

function AppContent() {
    const location = useLocation();

    return (
        <>
            {location.pathname !== "/login" && <Navbar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                {/* <Route path="/announcement" element={<Jobs />} /> */}
                <Route path="/job-listing" element={<Joblist />} />
                <Route path="/contact-us" element={<Contactus />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            {location.pathname !== "/login" && <Footer />}
        </>
    );
}

export default App;
