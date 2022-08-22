import './ItemProductContainer.css'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import db from '../../firebaseConfig'
import {collection , getDocs } from 'firebase/firestore'



function ItemProductContainer ({section}) {
  
   const [listProducts,setListProducts] = useState([])

  const getProducts = async ()=>{
    const productCollection = collection(db, 'productos')
    const productSnapshot =await getDocs(productCollection)
    const productList = productSnapshot.docs.map((doc)=>{
        let product = doc.data()
        product.id=doc.id

        return product
    })
    return productList
  }
useEffect (()=>{
    getProducts()
     .then(
        (res)=>{
            setListProducts(res)
        }
     )
},[])
 

    return(
    <div className='main-container'>
       <h1 className='titulo-container'>
            {section}
        </h1>
         <div className='products-container'>
             <ItemList dataProducts={listProducts}/>
      </div>
    </div>
    )
}
export default ItemProductContainer