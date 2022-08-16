
import  './ItemProduct.css'
import { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'

const ItemProduct = ({data}) =>{
    const { AddProductToCart } = useContext(CartContext)


    const [contador, setContador] = useState(1)

    const {title, image , price , stock,id} = data

    const addNumber = () =>{
        if(contador<stock)
        setContador(contador + 1)
    }
    const restNumber = () =>{
        if(contador>0)
        setContador(contador - 1)
    }
   
    return (
        <div className="product-card">
                <Link to={`/productos/${id}`}>
                <img src={`/assets/icons/images/${image}`}  alt=""  />
                <div className='product-info'>
                <p>{title}</p>
                <span>${price}</span>
                </div> 
                </Link>
                <div className='contador'>
                    <button onClick={restNumber}>-</button>
                    <p>{contador}</p>
                    <button onClick={addNumber}>+</button>
                </div> 
                <Link to={`/cart`}>             
                 <button onClick={AddProductToCart}>Añadir al carrito</button> 
                </Link>
        </div>
    )
}

export default ItemProduct;