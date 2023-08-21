import { useNavigate } from "react-router-dom"
import LogoKenzieHub from "../../../assets/logo-KenzieHub.svg"
import styles from "../HeaderUser/style.module.scss"
export const HeaderUser = ({setUser})=>{
    const navigate = useNavigate()

    const userLogout = ()=>{
        setUser(null)
        navigate("/")
        localStorage.removeItem("@TOKEN")
    }
    return(
        <header className={styles.header__container}>
            <img src={LogoKenzieHub} alt="logo KenzieHub" />
            <button onClick={userLogout} className="headline bold button back" >
                Sair
            </button>
        </header>
    )
}