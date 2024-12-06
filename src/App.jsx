

import { Route, Routes } from 'react-router-dom'
import Login from './Screens/Login/Login'
import Register from './Screens/Register/Register'
import ForgotPassword from './Screens/ForgotPassword/ForgotPassword'
import ResetPassword from './Screens/ResetPassword/ResetPassword'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import CreateProductScreen from './Screens/CreateProductScreen/CreateProductScreen'
import DetailProductScreen from './Screens/DetailProductScreen/DetailProductScreen'
import ProtectedRoute from './Components/ProtectedRoute'




function App() {

  // <Route path='/' element = {<Login />}/> ROUTA PRINCIPAL ENTRA AL LOGIN
  return (
    <>
      <Routes>
          <Route path="/" element={<Login/>}/> 
          <Route path='/login' element = {<Login/>}/>
          <Route path="/Register" element = {<Register/>} /> 
          <Route path='/forgot-password' element = {<ForgotPassword/>}/>
          <Route path='/reset-password/:reset_token' element = {<ResetPassword/>}/>

        <Route element={<ProtectedRoute/>}>
          <Route path='/home' element={<HomeScreen/>}/>
          <Route path='/product/new' element={<CreateProductScreen/>}/>
          <Route path='/product/:product_id' element={<DetailProductScreen/>} />
        </Route>
          
      </Routes>

    </>
  )
}

export default App
