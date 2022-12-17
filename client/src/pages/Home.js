import Header from '../components/Header';
// import Navbar from '../components/Navbar';
import botwBG from '../../src/assets/images/botwBG.jpg';

function Home() {
    return (
        // pass props to navbar
        <div>
            <Header />
            
                    <img src={botwBG} class="homeBG"alt="breath of the wild scenery"/>
                    <div className="w3-display-middle w3-margin-top w3-center">
                    <h1 className="w3-xxlarge w3-text-white">
                        <span className="w3-padding w3-black w3-opacity-min ">
                            <b>WIKICRAFT</b></span>
                        <span className="w3-hide-small w3-text-light-grey"></span>
                    </h1>
                </div>
                
            <div className="w3-container w3-padding-32" id="about">
                <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
                <p>

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
