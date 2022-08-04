import ItemProduct from "../ItemProduct/ItemProduct"

const Item = ({dataProducts}) => {
    return(
        <>
            {dataProducts.map( (product) => {    
                return <ItemProduct key={product.id} data={product}/>
            })}
        </>
    )
}

export default Item