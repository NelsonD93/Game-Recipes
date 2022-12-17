import React from 'react'
import 'w3-css/w3.css';
import '../assets/css/Game.css';

import GameRecipesComponent from '../components/GameRecipesComponent';


function GameTest() {

    return (
        <div>


            <div className="w3-container w3-padding-32" id="games">
                <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Games Test</h3>
            </div>

            <div className="w3-padding-15">
                <div className="w3-display-container">
                    <div className="w3-display-topleft w3-black w3-padding">Game Name Here</div>
                    <div className="w3-padding-48">
                        <div className="w3-col 26 m6 w3-margin-bottom">
                            <div className="w3-display-container w3-padding-large">
                            <div className="w3-container w3-card-4">
                                <p>Recipe</p>
                                <GameRecipesComponent/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div >
    );
}

export default GameTest;