//Guardar globalmente un estado que dice  si estamos o no autentificados
//Decimos authentificado a cualquier usuario que tenga access-token cargado en el local/sessionStorage

import { useContext, createContext, useState, useEffect } from "react";

export const AuthContext  = createContext()

//{children es el contenido html que el contexto va a encerrar}
export const AuthContextProvider = ({children}) =>{
    const access_token = sessionStorage.getItem('access_token')
    //Estado booleano
    const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(
        Boolean(access_token) // genera un valor true o false si hay o no access token
    )

    useEffect(
        () => {
            const access_token = sessionStorage.getItem('access_token')
            if(access_token) {
                setIsAuthenticatedUser(true)
            }
        }, 
        []
    )
    const logout = () =>{
        sessionStorage.removeItem('access_token')
        setIsAuthenticatedUser(false)
    }
    console.log("isAuthenticatedUser : ", isAuthenticatedUser)
    return (
        <AuthContext.Provider value={{
            logout,
            isAuthenticatedUser
        }} >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(AuthContext) // devuelve un objeto con  {logout, isAuthenticatedUser}
}