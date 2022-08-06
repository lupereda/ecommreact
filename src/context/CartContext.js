import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children})=>{
    const [name,setName]= useState('Hola')
    return(
        <CartContext.Provider value={name}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;