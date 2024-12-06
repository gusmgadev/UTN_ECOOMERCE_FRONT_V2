import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import useProducts from '../../Hooks/useProducts'




const HomeScreen = () => {
	const user_info = JSON.parse(sessionStorage.getItem('user_info'))
	console.log("", user_info)
	const {products, isLoadingProducts} = useProducts()
	console.log("listo productos desde HOMESCREEN : " , products)

	return (
		<div>
			<h1>Bienvenido {user_info.name}</h1>
			<Link to={'/products/new'}>Crear producto</Link>
			{
				isLoadingProducts 
				? <span>Cargando....</span>
				: <ProductsList products={products}/>
			}
		</div>
	)
}

const ProductsList = ({products}) => {
	//console.log(products)
	return (
		products.map(product => {
			
			return <Product 
			
				key={product._id} 
				{...product}
			/>
		})
	)
}

const Product = ({title, price, stock, descripcion,  image_base_64, _id}) => {
	//console.log("IMAGEN : " ,  image_base_64)
	console.log(" estoy PRODUCT en HOME SCREEN ID : " ,  _id)
	return (
		<div>
			<h2>{title}</h2>
			<img 
                    src={image_base_64}
                    alt={title} 
                    width={'200'} 
                />
			<span>Precio: ${price}</span>
			
			<Link to={'/product/' + _id}>Ir a detalle</Link>
		</div>
	)
}

export default HomeScreen