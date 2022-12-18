import React from 'react'
import 'w3-css/w3.css';
import '../assets/css/Game.css';
// import mineLogo from '../../src/assets/images/minecraft.png';
// import botwLogo from '../../src/assets/images/botw.png';
// import mineBG from '../../src/assets/images/minecraftBG.jpg';
// import GameRecipeComponent from '../components/GameRecipesComponent';
import ListComponent from '../components/ListComponent';
import { useLocation } from 'react-router-dom';




function Gather() {
    const location = useLocation();
    const { listId } = location.state;
    console.log(listId)


    return (
        <div className='subBG'>
        <div className='w3-padding-48 main'>
            <div className='w3-padding-48 main'>
            <ListComponent listId={listId}/>
        </div>
        </div>
        </div>
    );
}

export default Gather;