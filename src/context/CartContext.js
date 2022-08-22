
import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    const [totalProducts, setTotalProducts]=useState(0)
    const [totalPrice, setTotalPrice] = useState(0)


    const addProductToCart = (product) => {
        let isInCart = cartProducts.find(cartItem => cartItem.id === product.id)
        if(!isInCart) {
            console.log("se agrego el producto:", product)
            setTotalProducts(totalProducts + 1)
            setTotalPrice(totalPrice + product.price)
            return setCartProducts(cartProducts => [...cartProducts, product])
        }
    }

    const clear = () => {
        setCartProducts([])
    }
    const deleteProduct = (product)=>{
        setCartProducts(cartProducts.filter((cartProduct)=> cartProduct.id !== product.id))
    }

    const data = {
        cartProducts,
        setCartProducts,
        clear,
        addProductToCart,
        deleteProduct,
        setTotalProducts,
        totalProducts,
        totalPrice
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

export { CartContext }