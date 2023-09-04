import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { RegisterPage } from "../pages/RegisterPage"
import { LoginPage } from "../pages/LoginPage"
import { PrivateRoute } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"
import { TechnologiesProvider } from "../providers/UserTechnologies"
export const RoutesMain = () => {

    return (
        <Routes>

            <Route element={<PublicRoutes />}>
                <Route path="/"
                    element={<LoginPage />} />
                <Route path="/register"
                    element={<RegisterPage />} />
            </Route>

            <Route element={<PrivateRoute />}>
                <Route
                    path="/dashboard"
                    element={
                        <TechnologiesProvider>
                            <HomePage /> 
                        </TechnologiesProvider>} />
            </Route>


        </Routes>
    )
}