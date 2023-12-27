import './App.css';
import Analytics from './components/Analytics';
import Brands from './components/Brands';
import Cardinfo from './components/Cardinfo';
import Cards from './components/Cards';
import Customercrsl from './components/Customercrsl';
import Customers from './components/Customers';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Infrastructure from './components/Infrastructure';
import Navbar from './components/Navbar';
import Petran from './components/Petran';
import Visual from './components/Visual';
import Watchvideo from './components/Watchvideo';

function App() {
  return (
    <>
    <div>
      <Navbar/>
     <Homepage/>
     <Watchvideo/>
     <Infrastructure/>
     <Visual/>
     <Analytics/>
     <Petran/>
     <Cards/>
     <Customers/>
     <Customercrsl/>
     <Brands/>
     <Cardinfo/>
     <Footer/>
    </div>
    </>
  );
}

export default App;
