import './App.css';
import ItemProductContainer from './components/ItemProductContainer/ItemProductContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <ItemProductContainer section="Frutas"/>
      <ItemProductContainer section="Verduras"/>
      <ItemProductContainer section="Dietetica"/>
    </div>
  );
}

export default App;
 