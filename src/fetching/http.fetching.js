

const POSTVIEJA = async (URL_API, body) => {

	try {
		const response = await fetch(URL_API, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',//Aca le indicamos al back que lo que enviamos es un JSON
				'x-api-key': '14b8adfd-d2c2-422d-9bce-9d159d3e4d0e'
			},
			body: JSON.stringify(body)
		})
		return response.json()
	}
	catch (error) {
		throw error
	}
}




export const POST = async (URL_API, params) => {
	try {
		const response = await fetch(URL_API, {
			method: 'POST',
			...params //ACA LO QUE SE HACE CON LOS ... ES PROPAGAR...ESTO SIGNIFICA QUE LAS PROPIEDADES DEL OBJETO PARAMETROS SE VAN A EXPARCIR EN EL OBJETO 
		})
		return response.json()
	}
	catch (error) {
		console.log(error)
		throw error

	}

}

export const GET = async (URL_API, params) => {
	try {
		const response = await fetch(URL_API, {
			method: 'GET',
			...params
		})
		return response.json()
	}
	catch (error) {
		console.log(error)
		throw error

	}
}

export const getUnAuthenticatedHeaders = () => {
	const unnauthenticatedHeaders = new Headers()
	unnauthenticatedHeaders.set('Content-Type', 'application/json')
	unnauthenticatedHeaders.set('x-api-key', '8e849ec1-2977-404c-88c0-c8d2246d498f')
	return unnauthenticatedHeaders
}


export const getAuthenticatedHeaders = () => {

	const authenticatedHeaders = new Headers()
	authenticatedHeaders.set('Content-Type', 'application/json')
	authenticatedHeaders.set('x-api-key', '14b8adfd-d2c2-422d-9bce-9d159d3e4d0e')
	authenticatedHeaders.set('Authorization', 'Bearer ' + sessionStorage.getItem('access_token'))
	return authenticatedHeaders
}


//Crear GET, PUT, DELETE