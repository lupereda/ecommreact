import { useState } from 'react';
import './ItemCount.css';


const ItemCount = ({setQuantitySelected})=>{
    const [contador, setContador] = useState(1)
   
   
    const addNumber = () =>{

        setContador(contador + 1)
    }
    const restNumber = () =>{
        if(contador>0)
        setContador(contador - 1)
    }
    const onAdd=()=>{
        setQuantitySelected(contador)
    }
    return(
     <div className='counter'>
        <div className='contador'>
        <button onClick={restNumber}>-</button>
        <p>{contador}</p>
        <button onClick={addNumber}>+</button>
        </div>
        <button  className="primary-button"onClick={onAdd}>Agregar al carrito</button>
    </div> 
    )
}

export default ItemCount;