import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav>
            <Link to='/'>Admin Home</Link>
            <Link to='/about'>Security Token</Link>
        </nav>
    )
}

export default Navigation
