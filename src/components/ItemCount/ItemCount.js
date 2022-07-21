import { useState } from 'react';


const ItemCount = (stock)=>{
    const [contador, setContador] = useState(0)
   
    const addNumber = () =>{
        if(contador<stock)
        setContador(contador + 1)
    }
    const restNumber = () =>{
        setContador(contador - 1)
    }
    return(
        <div className='contador'>
        <button onClick={restNumber}>-</button>
        <p>{contador}</p>
        <button onClick={addNumber}>+</button>
    </div> 
    )
}

export default ItemCount;