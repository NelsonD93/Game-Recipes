import Header from '../components/Header';
import Navbar from '../components/Navbar';

function Home() {
    return (
        // pass props to navbar
        <div>
            <Navbar />
            <Header />
        </div>
    );
};

export default Home;
