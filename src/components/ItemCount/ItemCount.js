import { useState } from 'react';


const ItemCount = ({data,setQuantitySelected})=>{
    const [contador, setContador] = useState(1)
    const {stock} = data
   
    const addNumber = () =>{
        if(contador<stock)

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
        <div className='contador'>
        <button onClick={restNumber}>-</button>
        <p>{contador}</p>
        <button onClick={addNumber}>+</button>
        <button onClick={onAdd}>Agregar al carrito</button>
    </div> 
    )
}

export default ItemCount;