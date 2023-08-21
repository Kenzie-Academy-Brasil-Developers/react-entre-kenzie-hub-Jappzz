import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { RegisterPage } from "../pages/RegisterPage"
import { LoginPage } from "../pages/LoginPage"
import { useState } from "react"
export const RoutesMain = () => {

    const [user, setUser] = useState(null)

    console.log(user)
    return (
        <Routes>
            <Route path="/"
                element={<LoginPage setUser={setUser} />} />
            <Route 
                path="/dashboard"
                element={
                    <HomePage
                        user={user}
                        setUser={setUser} />} 
                    />

            <Route path="/register"
                element={<RegisterPage />} />

        </Routes>
    )
}