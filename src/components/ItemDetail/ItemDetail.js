import './ItemDetail.css';

const ItemDetail = ({data}) =>{
    const [image,title,price,stock,description]= data
    return(
        <div>
            <aside class="product-detail">
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
    </aside>
        </div>
    )
}
export default ItemDetail;