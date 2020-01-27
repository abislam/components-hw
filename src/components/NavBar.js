import React from 'react';
import './styles/NavBar.css';
function NavBar(){

    return(
        <div className="contentBox">
            <ul className="ulNav">
                <li className="liNav">Home</li>
                <li className="liNav">About</li>
                <li className="liNav">Products</li>
                <li className="liNav">Contact</li>
            </ul>
        </div>
    );
}

export default NavBar;