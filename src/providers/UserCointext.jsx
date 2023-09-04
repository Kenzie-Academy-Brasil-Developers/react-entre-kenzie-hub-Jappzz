import { createContext, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { api } from "../services/api.js"

export const UserContext = createContext({})

export const UserProvider = ({children}) =>{
    const [user, setUser] = useState(null)
    
    const [loading, setLoading] = useState(null)
    
    const navigate = useNavigate()

    const pathName = window.location.pathname
    
    useEffect(()=>{
        const userToken = localStorage.getItem("@TOKEN")
        const getUser = async ()=>{
    
            try {
                setLoading(true)
                const {data} = await api.get(`/profile`, {
                    headers:{
                        Authorization: `Bearer ${userToken}`
                    }
                })
                setUser(data)
                navigate(pathName)
            } catch (error) {
                toast.error("Algo deu errado...", {
                    className: "toast__error"
                })
            }finally{
                setLoading(false)
            }
        }
        if(userToken){
            getUser()
        }
    }, [])


    const userLogin = async (formData, setLoading, reset) => {
        try {
            setLoading(true)
            const { data } = await api.post("/sessions", formData)
            setUser(data.user)
            localStorage.setItem("@TOKEN", data.token)
            reset()
            toast.success("Login realizado", {
                className: "toast__sucess"
            })
            
            setTimeout(() => {
                navigate("/dashboard")
            }, 3000)
        } catch (error) {
            toast.error("Email ou senha inválidos", {
                className: "toast__error"
            })
        } finally {
            setLoading(false)
        }
    }

    const userRegister = async (formData, setLoading) => {
        try {
            setLoading(true)
            await api.post("/users", formData)
            toast.success("Conta criada com sucesso!", {
                className:"toast__sucess"
            })
            setTimeout(() => {
                navigate("/")
            }, 3000)
        } catch (error) {
            console.log(error)
            if(error.response.data.message == "Email already exists"){
                toast.error("Este email já existe")
            }else{
                toast.error("Ops! Algo deu errado", {
                    className:"toast__error"
                })
            }
        } finally {
            setLoading(false)
        }
    }

    const userLogout = ()=>{
        setUser(null)
        navigate("/")
        localStorage.removeItem("@TOKEN")
    }
    return(
        <UserContext.Provider value={{loading ,user, userLogin, userRegister, userLogout}}>
            {children}
        </UserContext.Provider>    
    )

}