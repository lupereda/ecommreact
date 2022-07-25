
import  './ItemProduct.css'
import { useState } from 'react';


const ItemProduct = ({data}) =>{

    const [contador, setContador] = useState(0)

    const {title, image , price , stock} = data

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
                 <button>Comprar</button>
        </div>
    )
}

export default ItemProduct;