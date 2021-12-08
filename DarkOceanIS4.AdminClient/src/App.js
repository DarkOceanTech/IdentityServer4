import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "./components/Navigation.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import SecurityToken from "./components/SecurityToken.js";

const App = () => {
      const app = (
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
        return <Router>{app}</Router>;
    }

export default App;
