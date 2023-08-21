import LogoKenzieHub from "../../../assets/logo-KenzieHub.svg"
import { Link } from "react-router-dom"
import styles from "../HeaderRegister/style.module.scss"
export const HeaderRegister = () => {
    return (
        <header className={styles.header}>
            <img src={LogoKenzieHub} alt="Logo KenzieHub" />

            <Link to={"/login"}>
                <button className={"button back headline bold "}>
                    voltar
                </button>
            </Link>
        </header>
    )
}