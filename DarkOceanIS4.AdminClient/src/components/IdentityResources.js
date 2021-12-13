import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';


const Security = () => {
    const isActiveCss = "border-bottom border-3 border-danger text-white mx-2 my-3 text-decoration-none";
    const notActiveCss = "text-white mx-2 my-3 text-decoration-none";
    return (
        <div className='text-white d-flex h-100 align-items-stretch'>
            <div className='flex-grow-1 h-100 border border-3 border-white text-white p-3'>
                Security Home
            </div>
            <Outlet />
        </div>
    )
}

export default Security;