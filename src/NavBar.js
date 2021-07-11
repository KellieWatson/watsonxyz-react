import React from 'react';
import { Link } from 'react-router-dom';

const NavBar=()=>{
    return(
        <nav >
            <ul>
                <li><Link to="/" className="Topics">WatsonXYZ</Link></li>
                <li><Link to="/Finance" className="Topics">Finance</Link></li>
                <li><Link to="/Technology" className="Topics">Technology</Link></li>
                <li><Link to="/Tools" className="Topics">Tools</Link></li>
                <li><Link to="/AboutUs" className="Topics">About</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;