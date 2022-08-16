import './ItemDetail.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({data}) =>{
    const [quantitySelected, setQuantitySelected] = useState(0);


    return(
        <div className='contenedor-detalle-poducto'>
            <div className='detalle-producto'>
                 <img src={`/assets/icons/images/${data.image}`} alt=""/>
                 <div className='product-infor'>
                    <div className='der'>
                    <p>{data.title}</p>
                    <p>${data.price}</p>
                    </div>
                    <p>{data.description}</p>
             </div>
         </div>
         {console.log("cantidadseleccionada",quantitySelected)}
    {quantitySelected> 0? <button className='terminar-button'><Link to="/cart">Terminar compra</Link></button> : <ItemCount setQuantitySelected={setQuantitySelected} productData={data}/>}
        </div>
        )
}
export default ItemDetail;