import Header from '../components/Header';
import Navbar from '../components/Navbar';

function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="w3-container w3-padding-32" id="about">
                <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
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
