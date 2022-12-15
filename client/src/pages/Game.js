import React from 'react'
import 'w3-css/w3.css';
// import image from '../../src/images/botwBG.jpg';
import Navbar from '../components/Navbar'

function Game() {

    return (

        <div>
            <Navbar />
            <div className="w3-display-container w3-content w3-wide" style={{
                backgroundImage: `url('/images/minecraftBG.jpg')`,
                backgroundRepeat: 'no-repeat',
                height: '75vh',
                width: '100%',
            }}>
                <div className="w3-display-middle w3-margin-top w3-center">
                    <h1 className="w3-xxlarge w3-text-white">
                        <span className="w3-padding w3-black w3-opacity-min ">
                            <b>WIKICRAFT</b></span>
                        <span className="w3-hide-small w3-text-light-grey"></span>
                    </h1>
                </div>
            </div>

            <div class="w3-container w3-padding-32" id="games">
                <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Games</h3>
            </div>

            <div class="w3-row-padding">
                <div class="w3-col l3 m6 w3-margin-bottom">
                    <div class="w3-display-container">
                        <div class="w3-display-topleft w3-black w3-padding" style={{
                backgroundImage: `url('/images/minecraft.png')`,
                backgroundRepeat: 'no-repeat',
                height: '60vh',
                width: '100%',
            }}>Minecraft</div>
                    </div>
                </div>

            </div>

</div>
            );
}

            export default Game;