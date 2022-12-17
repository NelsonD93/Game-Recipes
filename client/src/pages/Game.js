import React from 'react'
import 'w3-css/w3.css';
import mineLogo from '../../src/assets/images/minecraft.png';
import botwLogo from '../../src/assets/images/botw.png';
import mineBG from '../../src/assets/images/minecraftBG.jpg';

import Navbar from '../components/Navbar';

function Game() {

    return (

        <div>
            <Navbar />
            <div className="w3-display-container w3-content w3-wide">
                <img src={mineBG} alt='Minecraft background'/>
                <div className="w3-display-middle w3-margin-top w3-center">
                    <h1 className="w3-xxlarge w3-text-white">
                        <span className="w3-padding w3-black w3-opacity-min ">
                            <b>WIKICRAFT</b></span>
                        <span className="w3-hide-small w3-text-light-grey"></span>
                    </h1>
                </div>
            </div>

            <div className="w3-container w3-padding-32" id="games">
                <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Games</h3>
            </div>

            <div className="w3-row-padding">
                <div className="w3-col l3 m6 w3-margin-bottom">
                    <div className="w3-display-container">
                        <div className="w3-display-topleft w3-black w3-padding">Minecraft</div>
                        <img src={mineLogo} className="mineblock" alt="minecraft grass block" />
                    </div>
                </div>

                <div className="w3-col l3 m6 w3-margin-bottom">
                    <div className="w3-display-container">
                        <div className="w3-display-topleft w3-black w3-padding">Breath of the Wild</div>

                        <img src={botwLogo} className="zeldaLogo" alt="zelda breath of the wild logo"/>

                    </div>
                </div>

            </div>

        </div>
    );
}

export default Game;