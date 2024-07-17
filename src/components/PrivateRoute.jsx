import { useSelector } from "react-redux"
import {isLogged, isRefresh } from "../redux/auth/selectors"
import { Navigate } from "react-router-dom"

export const PrivateRoute = ({redirect, component:Component}) => {
    const logged = useSelector(isLogged)
    const refreshed = useSelector(isRefresh)
    return logged && refreshed ? <Component /> : <Navigate to={redirect}/>
}