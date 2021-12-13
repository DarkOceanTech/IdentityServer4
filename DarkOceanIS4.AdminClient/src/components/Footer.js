import React from 'react'
import { useLocation } from 'react-router-dom';

const Footer = () => {
    let location = useLocation();

    return (
        //<footer className={`py-3 app-bg-dark ${location.pathname === "/" || location.pathname === "/security-token-service" ? "fixed-bottom" : ""}`}>
            <footer className="py-3 app-bg-dark fixed-bottom">
            <div className="container">
                <p className="m-0 text-center text-white">
                    Copyright &copy; Dark Moon 2021
                </p>
                <p className="m-0 text-center text-secondary">
                    Powered by the Dark Ocean Cloud
                </p>
            </div>
        </footer>
    );
}

export default Footer