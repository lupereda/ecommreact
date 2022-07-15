import './ItemProductContainer.css'
import ItemProduct from '../ItemProduct/ItemProduct'
function ItemProductContainer ({section}) {
    return(
    <div className='main-container'>
       <h1 className='titulo-container'>
            {section}
        </h1>
         <div className='products-container'>
             <ItemProduct title="Bananas" price="420" image={'banabas.jpg'}></ItemProduct>
             <ItemProduct title="Peras" price="500" image={'peras.jpg'}></ItemProduct>
             <ItemProduct title="Uvas" price="340" image={'uvas.jpg'}></ItemProduct>
             <ItemProduct title="Manzanas" price ="470" image={'manzanas.jpg'} />
             <ItemProduct title="Peras" price="500" image={'peras.jpg'}></ItemProduct>

      </div>
    </div>
    )
}
export default ItemProductContainer