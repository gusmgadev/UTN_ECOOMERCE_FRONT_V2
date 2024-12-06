import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { extractFormData } from '../../utils/extractFormData'
const ResetPassword = () => {
    const { reset_token } = useParams()
    const handleSubmitResetForm = (e) => {
        e.preventDefault()
        const form_HTML = e.target
        const form_Values = new FormData(form_HTML)
        const form_fields = {
            'password': ''
        }
        const form_values_object = extractFormData(form_fields, form_Values)
        fetch('http://localhost:3000/api/auth/reset-password/' + reset_token, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json' //Aca le indicamos al back que lo que enviamos es un JSON
            },
            body: JSON.stringify(form_values_object)
        })
            .then(
                (responseHttp) => { console.log({ responseHttp }) 
                return responseHttp.json()}
            )
            .then((body) => 
                {//si hubiera algun error se maneja y se toma el valor del body
                    //se podria modificar el estado para que aparezca un mensaje de error
                    if (!body.ok) {
                            //seteamos el error
                    }
                    console.log({body})
                })
            .catch((error) => console.log({error}))
            
    }


    return (
        <div>
            <h1>Restablecer contraseña</h1>
            <p>Completa el formulario con la nueva contraseña para restablecer</p>
            <form onSubmit={handleSubmitResetForm}>
                <div>
                    <label htmlFor='password'>ingrese su nueva contraseña:</label>
                    <input name='password' id='password' placeholder='contraseña' />
                </div>
                <button type='submit'>Restablecer Contraseña</button>
            </form>
            <span>Si recuerdas tu contraseña<Link to='/Login'>Iniciar Sesion</Link></span>
            <br/>
            <span>Si aun no tienes cuentas puedes  <Link to='/Register'>Registrate</Link></span>
            
        </div>
    )
}

export default ResetPassword