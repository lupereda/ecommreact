import './navbar.css'
import{Link} from 'react-router-dom';
import CartWidget from './CartWIdget';


function Navbar() {
    return (
        <div>
            <nav>
                <img src="" alt="menu" className="menu" />
                <div className="navbar-left">
                    <img src='/assets/icons/images/Pistacho.png' alt="logo" className="logo" />
                    <ul>
                        <li>
                            <Link   to="/">Frutas</Link>
                        </li>
                        <li>
                            <Link to="/">Vegetales</Link>
                        </li>
                        <li>
                            <Link to="/">Bolsones</Link>
                        </li>
                        <li>
                            <Link to="/">Almacen</Link>
                        </li>
                        <li>
                            <Link to="/">Dietetica</Link>
                        </li>
                        <li>
                            <Link to="/contacto">Contacto</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <ul>
                        <input type='search' className='global-search' placeholder=' Buscar'></input>
                        <li className="navbar-shopping-cart">
                           <CartWidget />
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    );
}
  
  export default Navbar;