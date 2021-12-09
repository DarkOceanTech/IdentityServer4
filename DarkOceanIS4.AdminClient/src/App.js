import { useState, useEffect } from 'react';
import ReactDOMServer from "react-dom/server";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StaticRouter } from "react-router-dom/server";
import Navigation from "./components/Navigation.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import SecurityToken from "./components/SecurityToken.js";
import NoMatchRoute from "./components/NoMatchRoute.js";
import Login from "./components/Login.js";

const App = (props) => {
    const [isLogin, setIsLogin] = useState(false);
    const login = () => {
        setIsLogin(isLogin => !isLogin);
    }
    const app = (
        
        <div>           
            {!isLogin ? <Login login={login} /> :
                <>
                <Navigation login={login}/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/security-token-service" element={<SecurityToken />} />
                    <Route path="*" element={<NoMatchRoute />} />
                </Routes>
                </>
            }
            <Footer />
          </div>
        );

    if (typeof window === 'undefined') {
        return (
            <React.StrictMode>
                <StaticRouter location={props.location}>
                    {app}
                </StaticRouter>
             </React.StrictMode>
            );
        }
    return <BrowserRouter>{app}</BrowserRouter>;
    }

export default App;
