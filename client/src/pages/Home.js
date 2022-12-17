import Header from '../components/Header';
// import Navbar from '../components/Navbar';
import botwBG from '../../src/assets/images/botwBG.jpg';
import 'w3-css/w3.css';

function Home() {
    return (
        // pass props to navbar
        <div>
            <Header />
            
                    <img src={botwBG} className="homeBG" alt="breath of the wild scenery" style={{
                        maxHeight: '600px',
                        minWidth: '1600px'
                    }}/>
                    <div className="w3-display-middle w3-margin-top w3-center">
                    <h1 className="w3-xxlarge w3-text-white">
                        <span className="w3-padding w3-black w3-opacity-min ">
                            <b>WIKICRAFT</b></span>
                        <span className="w3-hide-small w3-text-light-grey"></span>
                    </h1>
                </div>
                
            <div className="w3-container w3-padding-32" id="about">
                <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
                <p style={{whiteSpace: 'pre-line'}}>
            Welcome to Wikicraft, your new favorite crafting game helper!<br/>
            This application came from the minds of Wikidev, a team of like-minded web developers made up of Alex Bellamy, Liz RZ, Nelson Drozd, and Graham Johnson.<br/>
            This site was created as a way to consolidate crafting recipes for different video games as an easier way to keep track of items you may already have, and those you still need to collect.<br/>
            Wikicraft allows you to browse the recipes for your favorite games, and tells you what necessary items you're still missing from your inventory.<br/>
            We hope you enjoy our site, and remember to check back regularly for new updates.<br/>
            Happy crafting!
            

                </p>
            </div>
            {/* <div className="w3-container w3-padding-32" id="contact">
            <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Contact</h3>
            <p>Looking for a game, but don't see it here? Let us know what we can add!</p>
                
            </div> */}
        </div>
    );
};

export default Home;
