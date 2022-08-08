import './ItemDetail.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({data}) =>{
    const [quantitySelected, setQuantitySelected] = useState(0);


    return(
        <div>
            <div class="product-detail">
                 <img src={`/assets/icons/images/${data.image}`} alt=""/>
                 <div class="product-info">
                    <p>${data.price}</p>
                     <p>{data.title}</p>
                    <p>{data.description}</p>
                    <button class="primary-button add-to-cart-button">
                    Anadir al carrito
                    </button>
             </div>
         </div>
         {console.log("cantidadseleccionada",quantitySelected)}
    {quantitySelected> 0? <button><Link to="/cart">Terminar compra</Link></button> : <ItemCount setQuantitySelected={setQuantitySelected}/>}
        </div>
        )
}
export default ItemDetail;