import { useContext } from "react"
import LogoKenzieHub from "../../../assets/logo-KenzieHub.svg"
import styles from "../HeaderUser/style.module.scss"
import { UserContext } from "../../../providers/UserCointext"

export const HeaderUser = ()=>{

    const {userLogout} = useContext(UserContext)
    
    return(
        <header className={styles.header__container}>
            <img src={LogoKenzieHub} alt="logo KenzieHub" />
            <button onClick={userLogout} className="headline bold button back" >
                Sair
            </button>
        </header>
    )
}