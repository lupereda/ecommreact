
import  './ItemProduct.css'
import { useState,useEffect } from 'react';


const ItemProduct = ({title,price,image,stock,action}) =>{
    const [contador, setContador] = useState(0)
   
    const addNumber = () =>{
        if(contador<stock)
        setContador(contador + 1)
    }
    const restNumber = () =>{
        setContador(contador - 1)
    }
    useEffect(()=>{
        // fetch().then(
            // setProduct()
        // )
 
     },[contador])
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