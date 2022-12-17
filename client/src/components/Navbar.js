import React from 'react'
// eslint-disable-next-line no-unused-vars
import { NavLink } from 'react-router-dom';
import 'w3-css/w3.css';



function Navbar({ currentPage, handlePageChange }) {

    return (
        <div className="w3-top">
            <div className="w3-bar w3-white w3-wide w3-padding w3-card">
                <NavLink
                    to='/'
                    className="w3-bar-item w3-button"

                >
                    WIKICRAFT
                </NavLink>

                <div className="w3-right w3-hide-small">
                    <NavLink
                        to='/Profile'
                        className="w3-bar-item w3-button"

                    >
                        Profile
                    </NavLink>


                    <NavLink
                        to='/Login'
                        className="w3-bar-item w3-button"
                    >
                        Login
                    </NavLink>

                    <NavLink
                        to='/Signup'
                        className="w3-bar-item w3-button"
                    >
                        Signup
                    </NavLink>

                    <NavLink
                        to='/Game'
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