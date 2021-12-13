import { useState } from 'react';
import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom';
import { StaticRouter } from "react-router-dom/server";

import Navigation from "./components/Navigation.js";
import NavSide from "./components/NavSide.js";
import Footer from "./components/Footer.js";
import NoMatchRoute from "./components/NoMatchRoute.js";

import Home from "./components/Home.js";
import Login from "./components/Login.js";

import ActiveUsers from "./components/ActiveUsers.js";
import RoleAssigments from "./components/RoleAssigments.js";
import ActiveClients from "./components/ActiveClients.js";

import IdentityResources from "./components/IdentityResources.js";
import ApiResources from "./components/ApiResources.js";
import PersistedGrants from "./components/PersistedGrants.js";
import ApiScopes from "./components/ApiScopes.js";
import AuditLogs from "./components/AuditLogs.js";

const App = (props) => {
    const [isLogin, setIsLogin] = useState(false);
    const login = () => {
        setIsLogin(true);
    }

    const logout = () => {
        setIsLogin(false);
    }

    const app = (
        
        <div className="h-100">           
            {!isLogin ? <Login login={login} /> :
             <>
             <Navigation login={login} logout={logout} />
             <div className="d-flex">
                <NavSide/>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/active-users" element={<ActiveUsers />} />
                    <Route path="/roles-assignments" element={<RoleAssigments />} />
                    <Route path="/active-clients" element={<ActiveClients />} />
                    <Route path="/identity-resources" element={<IdentityResources />} />
                    <Route path="/persisted-grants" element={<PersistedGrants />} />
                    <Route path="/api-resources" element={<ApiResources />} />
                    <Route path="/api-scopes" element={<ApiScopes />} />
                    <Route path="/audit-logs" element={<AuditLogs />} />

                    <Route path="*" element={<NoMatchRoute />} />
                </Routes>
             </div>
             </>
            }
            <Outlet />
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
