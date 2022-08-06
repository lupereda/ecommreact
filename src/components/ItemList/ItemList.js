import ItemProduct from "../ItemProduct/ItemProduct"
import { useContext } from "react";
import {CartContext} from "../ItemProduct/ItemProduct";

const ItemList = ({dataProducts}) => {
    return(
        <>
            {dataProducts.map( (product) => {    
                return <ItemProduct key={product.id} data={product}/>
            })}
        </>
    )
}

export default ItemList