import {isAuth} from './authentication'
import { Route, Navigate , Outlet } from 'react-router-dom'

const PrivateRoute = () => {

    console.log(isAuth())
    return (
      isAuth() 
          ? <Outlet /> 
          :<> 
              <Navigate to='/login' />
          </> 
    )
  }
  export default PrivateRoute


export const UserRoute = () => {
  return (
    isAuth() ?  <> <Navigate to='/dashboard' />  </> : <Outlet />
  )
}