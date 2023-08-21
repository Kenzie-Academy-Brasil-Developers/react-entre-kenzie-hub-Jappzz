import styles from "../HeaderLogin/style.module.scss"
import LogoKenzieHub from "../../../assets/logo-KenzieHub.svg"
export const HeaderLogin = ()=>{

    return(
        <header className={styles.header}>
            <img src={LogoKenzieHub} alt="Logo KenzieHub" />
        </header>
    )
}