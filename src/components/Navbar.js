import './navbar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
    return (
        <div>
            <nav>
                <img src="" alt="menu" className="menu" />

                <div className="navbar-left">
                    <img src="" alt="logo" className="logo" />

                    <ul>
                        <li>
                            <a href="/">Frutas</a>
                        </li>
                        <li>
                            <a href="/">Vegetales</a>
                        </li>
                        <li>
                            <a href="/">Bolsones</a>
                        </li>
                        <li>
                            <a href="/">Almacen</a>
                        </li>
                        <li>
                            <a href="/">Dietetica</a>
                        </li>
                        <li>
                            <a href="/">Otros</a>
                        </li>
                    </ul>
                </div>

                <div className="navbar-right">
                    <ul>
                        <input type='search' className='global-search' placeholder=' Buscar'></input>
                        <li className="navbar-shopping-cart">
                            <ShoppingCartIcon></ShoppingCartIcon>
                            <div>2</div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    );
}
  
  export default Navbar;