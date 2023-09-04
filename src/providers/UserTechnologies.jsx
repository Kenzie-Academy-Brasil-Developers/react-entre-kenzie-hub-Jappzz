import { createContext, useEffect, useState } from "react"
import { api } from "../services/api"
import { toast } from "react-toastify"

export const TechnologiesContext = createContext({})

export const TechnologiesProvider = ({ children }) => {

    const [ techList, setTechList ] = useState([])
    const [ editingTech, setEditingTech] = useState(null)

    useEffect(() => {
        const userToken = localStorage.getItem("@TOKEN")
        const getTech = async () => {
            try {
                const { data } = await api.get("/profile", {
                    headers: {
                        Authorization: `Bearer ${userToken}`
                    }
                })
                setTechList(data.techs)

            } catch (error) {
                console.log(error)
            }
        }
        getTech()
    }, [])
    
    const createTech = async (formData)=>{
        const userToken = localStorage.getItem("@TOKEN")
        
        try {
            const {data} = await api.post("/users/techs",formData,{
                headers:{
                    Authorization: `Bearer ${userToken}`
                }
            })
            setTechList([...techList, data])
            toast.success("Tecnologia adicionada com sucesso!", {
                className:"toast__sucess"
            })
        } catch (error) {
            if(error.response.data.message == "User Already have this technology created you can only update it"){
                toast.error("Tecnologia já existente", {
                    className: "toast__error"
                })
            }
        }
    }
    
   const editTech = async(formData)=>{
    console.log("tech")
       const userToken = localStorage.getItem("@TOKEN")
       try {
            const {data} = await api.put(`/users/techs/${editingTech.id}`,formData, {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            })
            const newTechList = techList.map(tech=>{
                if(tech.id === editingTech.id){
                    return data
                }else{
                    return tech
                }
            })

            setTechList(newTechList)
            setEditingTech(null)
            toast.success("Tecnologia editada com sucesso!", {
                className:"toast__sucess"
            })
       } catch (error) {
            console.log(error.response.data)   
       }

    }
    const deleteTech = async (deleteId) =>{

        const userToken = localStorage.getItem("@TOKEN")

        try {
           await api.delete(`/users/techs/${deleteId}`,{
            headers:{
                Authorization: `Bearer ${userToken}`
            }
        })
            const newTechList = techList.filter(tech => tech.id !== deleteId)
            setTechList(newTechList)  
            toast.success("Tecnologia deletada com sucesso!", {
                className:"toast__sucess"
            })          

        } catch (error) {
            console.log(error)
        }


    }
    
    
    return (
        <TechnologiesContext.Provider value={{ techList, createTech, deleteTech, editTech, setEditingTech }}>
            {children}
        </TechnologiesContext.Provider>
    )
}