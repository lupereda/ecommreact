
import  './ItemProduct.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const ItemProduct = ({data,action}) =>{

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
                <Link to={`/productos/${id}`}></Link>
                <img src={`/assets/icons/images/${image}`}  alt=""  />
                <div className='product-info'>
                <p>{title}</p>
                <span>${price}</span>
                </div> 
                <div className='contador'>
                    <button onClick={restNumber}>-</button>
                    <p>{contador}</p>
                    <button onClick={addNumber}>+</button>
                </div>              
                 <button>Anadir al carrito</button>
        </div>
    )
}

export default ItemProduct;