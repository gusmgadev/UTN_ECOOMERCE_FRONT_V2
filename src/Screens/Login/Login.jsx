import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { extractFormData } from '../../utils/extractFormData'
import {getUnAuthenticatedHeaders, getAuthenticatedHeaders, POST } from '../../fetching/http.fetching'

const Login = () => {
    const navigate = useNavigate()

    const handleSubmitLoginForm = async (e) => {
       try 
       {
        e.preventDefault()
        const form_HTML = e.target
        const form_Values = new FormData(form_HTML)
        const form_fields = {
            'email': '',
            'password': ''
        }
        const form_values_object = extractFormData(form_fields, form_Values)
        const response = await POST('http://localhost:3000/api/auth/login', {
            headers:getAuthenticatedHeaders(),
            body: JSON.stringify(form_values_object),
        })
        
        console.log("response", response)
        const access_token = response.payload.token
        console.log(access_token)
        sessionStorage.setItem("access_token", access_token)
        sessionStorage.setItem("user_info", JSON.stringify(response.payload.user))
        navigate('/home')
    }
        catch (error) {//manejar error}
        }
    }
    return (
        <div>
            <h1>Iniciar Sesion</h1>
            <form onSubmit={handleSubmitLoginForm}>
                <div>
                    <label htmlFor='email'>ingresar Email:</label>
                    <input name='email' id='email' placeholder='pepe@gmail.com' />
                </div>
                <div>
                    <label htmlFor='password'>ingresar password:</label>
                    <input name='password' id='password' placeholder='pepe@gmail.com' />
                </div>
                <button type='submit'>Iniciar Sesion</button>
            </form>
            <span>Si aun no tienes cuentas puedes  <Link to='/Register'>Registrate</Link></span>
            <br/>
            <span> has olvidado la contraseña ? <Link to='/forgot-password'>Reestablecer</Link></span>
        </div>
    )
}

export default Login