import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "./components/Navigation.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import SecurityToken from "./components/SecurityToken.js";
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
                <>Initializing...</>
            );
        }
        return <Router>{appMain}</Router>;
    }

export default App;
