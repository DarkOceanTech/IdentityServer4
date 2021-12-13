import React from 'react'
import { Link } from 'react-router-dom';

const NoMatchRoute = () => {
    return (
        <div>
            <h1>Nothing to see here!</h1>
            <p>
                Support has been notified about this unexpected redirect.
                
                Add notes and links to support and list details about cyber security threats related to redirects.
                
                Add this to a pipeline of monitoring systems for Dark Ocean Cloud and its web apps and hosting services.
            </p>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    )
}

export default NoMatchRoute