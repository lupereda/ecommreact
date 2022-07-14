import './navbar.css'
import image from '../assets/icons/icon_shopping_cart.svg'
function Navbar() {
    return (
      <div>
        <nav>
        <img src="" alt="menu" className="menu"/>

        <div className="navbar-left">
            <img src="" alt="logo" className="logo"/>

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
                    <img src={image} alt="shopping cart"/>
                    <div>2</div>
                </li>
            </ul>
        </div>
    </nav>
      </div>
  
    );
  }
  
  export default Navbar;