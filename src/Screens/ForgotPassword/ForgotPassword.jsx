import React from 'react'
import { Link } from 'react-router-dom'
import { extractFormData } from '../../utils/extractFormData'
import {getUnAuthenticatedHeaders, getAuthenticatedHeaders, POST } from '../../fetching/http.fetching'
const ForgotPassword = () => {

    const handleSubmitLoginForm = async(e) => {
        e.preventDefault()
        const form_HTML = e.target
        const form_Values = new FormData(form_HTML)
        const form_fields = {
            'email': ''
        }
        const form_values_object = extractFormData(form_fields, form_Values)


        const response = await POST('http://localhost:3000/api/auth/forgot-password', {
            headers:getUnAuthenticatedHeaders(),
            body: JSON.stringify(form_values_object),
        })
        
            
    }


    return (
        <div>
            <h1>Olvide mi contraseña</h1>
            <p>Enviaremos un mail a tu mail de usuario para restablecer la contraseña</p>
            <form onSubmit={handleSubmitLoginForm}>
                <div>
                    <label htmlFor='email'>ingresar Email:</label>
                    <input name='email' id='email' placeholder='pepe@gmail.com' />
                </div>
                <button type='submit'>Enviar mail</button>
            </form>
            <span>Si tienes cuentas puedes <Link to='/Login'>Iniciar Sesion</Link></span>
            <br/>
            <span>Si aun no tienes cuentas puedes  <Link to='/Register'>Registrate</Link></span>
            
        </div>
    )
}

export default ForgotPassword