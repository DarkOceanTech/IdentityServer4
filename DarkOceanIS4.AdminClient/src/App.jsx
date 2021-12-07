import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "./components/Navigation.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import SecurityToken from "./components/SecurityToken.jsx";
//import './App.css';

const App = () => {

      const appMain = (
            <div>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/security-token-service" element={<SecurityToken />} />
                </Routes>
                <Footer />
            </div>
        );

        if (typeof window === 'undefined') {
            return (
                <>error</>
            );
        }
        return <Router>{appMain}</Router>;
    }

export default App;
