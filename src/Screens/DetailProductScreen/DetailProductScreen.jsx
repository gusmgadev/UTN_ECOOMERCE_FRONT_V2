import React from 'react'
import { useParams } from 'react-router-dom'
import useProductDetail from '../../Hooks/useProductDetail'

const DetailProductScreen = () => {
    const {product_id} = useParams()


    //Llamar al hook useProdu ctDetail
    console.log("estoy en detailProductScreen : id : " + product_id)
    const { product_detail_state, product_detail_loading, product_detail_error} = useProductDetail(product_id)

    //Ya con estos estados pueden renderizar la UI con errores, detalles o loading
  return (
    <div>
        <h2>Detalle del producto</h2>
        {
          product_detail_loading 
          ? <h2>Cargando...</h2>
          :(
            product_detail_error 
            ? <h2>{product_detail_error}</h2>
            //propagamos las propiedades del producto, que vienen en el estado product_detail_state
            : <ProductDetail {...product_detail_state}/>
          )
        }
    </div>
  )
}


const ProductDetail = ({title, price, stock, descripcion, image_base_64, id}) => {
  return (
    <div>
      <span> ID: {id}</span>
      <h2>{title}</h2>
      <img 
        src={image_base_64} 
        alt={title} 
        width={'200'} 
      />
      <span> Precio: ${price}</span>
      <span> Stock: {stock}</span>
      <span> Descripcion: {descripcion}</span>
    </div>
  )
}

export default DetailProductScreen