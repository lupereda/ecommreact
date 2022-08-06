import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import products from "../../utils/products.mock"
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [productData, setProductData] = useState({})

    const { id } = useParams()
    
    useEffect( () => {
        filterById()
    }, [id])

    const filterById = () => {
        products.some( (product) => {
            if(product.id == id) {
                setProductData(product) 
            }
        }
    )
    }
    return(
        <div className="container-item-detail">
            <ItemDetail data={productData}/>
        </div>
    )
}

export default ItemDetailContainer