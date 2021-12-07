import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SecurityToken from "./components/SecurityToken";
//import './App.css';

const App = () => {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/security-token-service" element={<SecurityToken />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
