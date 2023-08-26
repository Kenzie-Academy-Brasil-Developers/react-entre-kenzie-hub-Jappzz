import LoadingIcon from "../../assets/loading.svg"
import styles from "../Loading/style.module.scss"
export const Loading = ()=>{
    return(
        <div className={styles.div__loading}>
            <img src={LoadingIcon} alt="Carregando" />
        </div>    
    )
}