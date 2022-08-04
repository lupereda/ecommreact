import { useState } from 'react';


const ItemCount = ({setQuantitySelected})=>{
    const [contador, setContador] = useState(1)
   
    const addNumber = () =>{
        setContador(contador + 1)
    }
    const restNumber = () =>{
        setContador(contador - 1)
    }
    const onAdd=()=>{
        setQuantitySelected(contador)
    }
    return(
        <div className='contador'>
        <button onClick={restNumber}>-</button>
        <p>{contador}</p>
        <button onClick={addNumber}>+</button>
        <button onClick={onAdd}>Agregar al carrito</button>
    </div> 
    )
}

export default ItemCount;