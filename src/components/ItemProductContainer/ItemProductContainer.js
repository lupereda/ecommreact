import './ItemProductContainer.css'
import { useEffect, useState } from 'react'
import products from '../../utils/products.mock'
import ItemList from '../ItemList/ItemList'
import ItemDetail from '../ItemDetail/ItemDetail'



function ItemProductContainer ({section}) {
  
   const [listProducts,sentListProducts] = useState([])

    const getProducts= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(products)
        },2000)
   })
useEffect (()=>{
    getProducts
        .then((res)=>{
            console.log(res)
            sentListProducts(res)
        })
        .catch((error)=>{
    console.log(error)
        })
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[])
 

    return(
    <div className='main-container'>
       <h1 className='titulo-container'>
            {section}
        </h1>
         <div className='products-container'>
             <ItemList dataProducts={listProducts}/>
             <ItemDetail data={listProducts}/>
      </div>
    </div>
    )
}
export default ItemProductContainer