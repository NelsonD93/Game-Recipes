import { Link } from 'react-router-dom';
import Header from '../components/Header';
// import Navbar from '../components/Navbar';
import botwBG from '../../src/assets/images/botwBG.jpg';
import mineLogo from '../../src/assets/images/minecraft.png';
import botwLogo from '../../src/assets/images/botw.png';
import subnautica from '../../src/assets/images/subnautica.png';
import stardew from '../../src/assets/images/stardewAlt.png';
import 'w3-css/w3.css';
import '../assets/css/Game.css';

function Home() {
    return (
        // pass props to navbar
        <div>
            <Header />

            <img src={botwBG} className="homeBG" alt="breath of the wild scenery" style={{
                maxHeight: '600px',
                minWidth: '1600px'
            }} />
            <div className="w3-display-middle w3-margin-top w3-center">
                <h1 className="w3-xxlarge w3-text-white">
                    <span className="w3-padding w3-black w3-opacity-min ">
                        <b>WIKICRAFT</b></span>
                    <span className="w3-hide-small w3-text-light-grey"></span>
                </h1>
            </div>

            <div className="w3-container w3-padding-32" id="about">
                <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16 text">About</h3>
                <p className="text" style={{ whiteSpace: 'pre-line', }}>
                    Welcome to Wikicraft, your new favorite crafting game helper!<br />
                    This application came from the minds of Wikidev, a team of like-minded web developers made up of Alex Bellamy, Liz RZ, Nelson Drozd, Graham Johnson, and Kerri Sosinski.<br />
                    This site was created as a way to consolidate crafting recipes for different video games as an easier way to keep track of items you may already have, and those you still need to collect.<br />
                    Wikicraft allows you to browse the recipes for your favorite games, and tells you what necessary items you're still missing from your inventory.<br />
                    We hope you enjoy our site, and remember to check back regularly for new updates.<br />
                    Happy crafting!


                </p>
            </div>

            <div className="w3-container w3-padding-32" id="games">
                <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16 text">Games</h3>
            </div>

            <div className="w3-row-padding">
                <div className="w3-col l3 m6 w3-margin-bottom">
                    <div className="w3-display-container">
                        <div className="w3-display-topleft w3-black w3-padding">Minecraft</div>
                        <Link
                            to="/Game"
                            state={{ gameId: "639f156a67e877420868ea71" }}
                        >
                        <img src={mineLogo} className="mineblock" alt="minecraft grass block" /></Link>
                    </div>
                </div>
                

                <div className="w3-col l3 m6 w3-margin-bottom">
                    <div className="w3-display-container">
                        <div className="w3-display-topleft w3-black w3-padding">Breath of the Wild</div>

                        <Link
                            to="/Game"
                            state={{ gameId: "639f0ff2edc1374dc8fae86b" }}
                        >
                            <img src={botwLogo} className="zeldaLogo" alt="zelda breath of the wild logo" /></Link>

                    </div>
                </div>


                <div className="w3-col l3 m6 w3-margin-bottom">
                    <div className="w3-display-container">
                        <div className="w3-display-topleft w3-black w3-padding">Subnautica</div>

                        <Link
                            to="/Game"
                            state={{ gameId: "639dd2e46f67310e54634f80" }}
                        >
                            <img src={subnautica} className="subLogo" alt="Subnautica logo" /> </Link>

                    </div>
                </div>

                <div className="w3-col l3 m6 w3-margin-bottom">
                    <div className="w3-display-container">
                        <div className="w3-display-topleft w3-black w3-padding">Stardew Valley</div>

                        <Link
                            to="/Game"
                            state={{ gameId: "639f144867e877420868ea69" }}
                        >
                            <img src={stardew} className="starLogo" alt="stardew valley logo" /> </Link>


                    </div>
                </div>
                
            </div>

            <footer className="w3-center w3-black w3-padding-16">
                <p>WIKICRAFT by WIKIDEV</p>
            </footer>

        </div>
    );
};

export default Home;
