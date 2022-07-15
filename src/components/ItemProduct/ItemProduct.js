
import  './ItemProduct.css'


const ItemProduct = ({title,price,image}) =>{
    return (
        <div className="product-card">
                <img src={`/assets/icons/images/${image}`}  alt=""  />
                <div className='product-info'>
                <p>{title}</p>
                <span>${price}</span>
                </div>               
                 <button>Comprar</button>
        </div>
    )
}

export default ItemProduct;