import React from 'react'
import { Link } from 'react-router-dom'
import { extractFormData } from '../../utils/extractFormData'
import useForm from '../../Hooks/useForm'
import { getAuthenticatedHeaders, POST } from '../../fetching/http.fetching'



const Register = () => {
    const form_fields = {
        'name': '',
        'email': '',
        'password': '',
    }
    const {form_values_state, handleChangeInputValue} = useForm(form_fields)
    console.log(form_values_state)
    const handleSubmitRegisterForm = async (event) => {
        event.preventDefault()

        // PASO LOS VALORES DE LOS CAMPOS DEL FORMULARIO A UN OBJETO PARA LUEGO PODER UTILIZARLO EN FETCH, VALIDADIONES , POST...
        const form_HTML = event.target
        const form_values = new FormData(form_HTML)

        const form_values_object = extractFormData(form_fields,form_values)
        
        const body = await POST('http://localhost:3000/api/auth/register', {
            headers:getAuthenticatedHeaders(),
            body: JSON.stringify(form_values_object),
        })
        console.log(body)   
    }
    return (
    <div>
        <h1>Registarse</h1>
        <form onSubmit={handleSubmitRegisterForm}>
            <div>
                <label htmlFor='name'>ingresar Nombre:</label>
                <input name='name' id='name' placeholder='Pepe' onChange={handleChangeInputValue}/>
            </div>
            <div>
                <label htmlFor='email'>ingresar Email:</label>
                <input name='email' id='email' placeholder='pepe@gmail.com' onChange={handleChangeInputValue}/>
            </div>
            <div>
                <label htmlFor='password'>ingresar password:</label>
                <input name='password' id='password' placeholder='pepe@gmail.com' onChange={handleChangeInputValue}/>
            </div>
            <button type='submit'>Registrar</button>
        </form>
        <span>Si ya tienes cuentas, ir a Login <Link to='/login'>Logueate</Link></span>
    </div>
  )
}

export default Register