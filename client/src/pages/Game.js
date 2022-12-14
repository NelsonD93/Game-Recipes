import React from 'react'
import 'w3-css/w3.css';
import '../assets/css/Game.css';
// import mineLogo from '../../src/assets/images/minecraft.png';
// import botwLogo from '../../src/assets/images/botw.png';
import mineBG from '../../src/assets/images/minecraftBG.jpg';
import GameRecipeComponent from '../components/GameRecipesComponent';
// import ListComponent from '../components/ListComponent';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_GAME } from '../utils/queries';


function Game() {
    const location = useLocation();
    const { gameId } = location.state;

    const { loading, data } = useQuery(GET_GAME, {
        // variables: { gameId: "639dd2e46f67310e54634f80" }
        variables: { gameId: gameId }
    });

    let gameData;

    if (loading) {
        return <h2>LOADING...</h2>;
    } else {
        gameData = data.getGame;
    }

    return (
        <div>
            <img src={mineBG} alt="minecraft scenery" style={{
                maxHeight: '600px',
                minWidth: '1600px'
            }} />


            <div className="w3-display-middle w3-margin-top w3-center">
                <h1 className="w3-xxlarge w3-text-white">
                    <span className="w3-padding w3-black w3-opacity-min alex-test">
                        <b>WIKICRAFT</b></span>
                    <span className="w3-hide-small w3-text-light-grey"></span>
                </h1>
            </div>
            <div class="w3-container w3-padding-32" id="game">
                <h1 className="w3-border-bottom w3-border-light-grey w3-padding-16 text">{gameData.name}</h1>
                <div class="w3-col l3 m6 w3-margin-bottom w3-center" style={{
                    width: '80%',
                    display: "inline-block"
                }}>
                    <div class="w3-display-container ">
                        <GameRecipeComponent gameId={gameId} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Game;