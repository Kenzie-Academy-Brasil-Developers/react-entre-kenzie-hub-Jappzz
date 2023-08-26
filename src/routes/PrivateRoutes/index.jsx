import { useContext } from "react"
import { UserContext } from "../../providers/UserCointext"
import { Navigate, Outlet } from "react-router-dom"

export const PrivateRoute = ()=>{
    const {user} = useContext(UserContext)

    return user ? <Outlet/> : <Navigate to="/" />
}