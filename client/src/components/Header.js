import React from 'react'
import 'w3-css/w3.css';
import image from '../../src/images/botwBG.jpg';

function Header() {

    return (

        <header className="w3-display-container w3-content w3-wide" style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
        }}>
            <div class="w3-display-middle w3-margin-top w3-center">
            <h1 className="w3-xxlarge w3-text-white">
                <span className="w3-padding w3-black w3-opacity-min ">
                    <b>Wikicraft</b></span>
                    <span className="w3-hide-small w3-text-light-grey"></span>
                    </h1>
            </div>
        </header>

    );
}


export default Header;
