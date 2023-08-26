import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { RegisterPage } from "../pages/RegisterPage"
import { LoginPage } from "../pages/LoginPage"
import { PrivateRoute } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"
export const RoutesMain = () => {

    return (
        <Routes>

            <Route element={<PublicRoutes/>}>
                <Route path="/"
                    element={<LoginPage />} />
                <Route path="/register"
                    element={<RegisterPage />} />
            </Route>
            
            <Route element={<PrivateRoute />}>
                <Route
                    path="/dashboard"
                    element={<HomePage />} />
            </Route>


        </Routes>
    )
}