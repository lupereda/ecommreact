import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = ()=>{
    const {cartProducts}= useContext(CartContext)

    return(
        <div className="carrito-de-compras">
            {console.log("",cartProducts)}
        </div>
    )
}
export default Cart;