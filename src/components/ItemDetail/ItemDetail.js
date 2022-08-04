import './ItemDetail.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({data}) =>{
    const [image,title,price,description]= data
    const [quantitySelected, setQuantitySelected] = useState(0)

    return(
        <div>
            <div class="product-detail">
        <div class="product-detail-close">
            <img src="./Icons/icon_close.png"/>
        </div>
        <img src={`/../public/assets/icons/${image}`}/>
        <div class="product-info">
            <p>${price}</p>
            <p>{title}</p>
            <p>{description}</p>
            <button class="primary-button add-to-cart-button">
                <img src="./Icons/bt_add_to_cart.svg"/>
                Add to cart
            </button>
        </div>
    </div>
    {quantitySelected> 0? <button><Link to="/cart">Terminar compra</Link></button> : <ItemCount setQuantitySelected={setQuantitySelected}/>}
        </div>
        )
}
export default ItemDetail;