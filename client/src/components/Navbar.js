import React from 'react'
// eslint-disable-next-line no-unused-vars
import { NavLink } from 'react-router-dom';
import 'w3-css/w3.css';



function Navbar({ currentPage, handlePageChange }) {

    return (
        <div className="w3-top">
            <div className="w3-bar w3-white w3-wide w3-padding w3-card">
                <NavLink
                    href="#Home"
                    onClick={() => handlePageChange('Home')}
                    className="w3-bar-item w3-button"

                >
                    WIKICRAFT
                </NavLink>

                <div className="w3-right w3-hide-small">
                    <NavLink
                        to='/Profile'
                        href="#Profile"
                        onClick={() => handlePageChange('Profile')}
                        className="w3-bar-item w3-button"

                    >
                        Profile
                    </NavLink>


                    <NavLink
                        href="#Bag"
                        onClick={() => handlePageChange('Bag')}
                        className="w3-bar-item w3-button"
                    >
                        Bag
                    </NavLink>

                    <NavLink
                        href='#Game'
                        onClick={() => handlePageChange('Game')}
                        className="w3-bar-item w3-button"
                    >
                        Games
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;