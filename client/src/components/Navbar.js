import React from 'react'
import 'w3-css/w3.css';


function Navbar({ currentPage, handlePageChange }) {
    return (
        <div className="w3-top">
            <div className="w3-bar w3-white w3-wide w3-padding w3-card">
                <a
                    href="#Home"
                    onClick={() => handlePageChange('Home')}
                    className="w3-bar-item w3-button"

                >
                    Wikicraft
                </a>
            
                <div class="w3-right w3-hide-small">
                <a
                    href="#Profile"
                    onClick={() => handlePageChange('Profile')}
                    className="w3-bar-item w3-button"
                >
                    Profile
                </a>
            
            
                <a
                    href="#Bag"
                    onClick={() => handlePageChange('Bag')}
                    className="w3-bar-item w3-button"
                >
                    Bag
                </a>

                <a
                    href="#Games"
                    onClick={() => handlePageChange('Games')}
                    className="w3-bar-item w3-button"
                >
                    Games
                </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
