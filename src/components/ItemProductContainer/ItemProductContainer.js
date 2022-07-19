import './ItemProductContainer.css'
import ItemProduct from '../ItemProduct/ItemProduct'
import { useEffect } from 'react'
function ItemProductContainer ({section}) {
    useEffect(()=>{
       // fetch().then(
           // setProduct()
       // )

    },[])
    // si dejo el array del useeffect vacio se va a ejecutar solo al montar el componente y si no le paso el array se va a ejecutar en una actualizacion
    return(
    <div className='main-container'>
       <h1 className='titulo-container'>
            {section}
        </h1>
         <div className='products-container'>
             <ItemProduct title="Bananas" price="420" image={'banabas.jpg'} stock={10}></ItemProduct>
             <ItemProduct title="Peras" price="500" image={'peras.jpg'} stock={15}></ItemProduct>
             <ItemProduct title="Uvas" price="340" image={'uvas.jpg'} stock={2}></ItemProduct>
             <ItemProduct title="Manzanas" price ="470" image={'manzanas.jpg'} stock={6} />
             <ItemProduct title="Peras" price="500" image={'peras.jpg'} stock={20}></ItemProduct>

      </div>
    </div>
    )
}
export default ItemProductContainer