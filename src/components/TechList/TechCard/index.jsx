import editLogo from "../../../assets/edit-logo.svg"
import deleteLogo from "../../../assets/delete-logo.svg"
import styles from "../TechCard/style.module.scss"
import { useContext, useState } from "react"
import { TechnologiesContext } from "../../../providers/UserTechnologies.jsx"
import { ModalEdit } from "../../ModalEdit"



export const TechCard = ({ tech }) => {
    const { deleteTech, setEditingTech } = useContext(TechnologiesContext)
console.log("card")
    const [ isVisible, setIsVisible ] = useState(false)
    
    return (
        <li className={styles.li}>
            <div className={styles.div__title}>
                <h3 className="title">
                    {tech.title}
                </h3>
            </div>

            <div className={styles.div__content}>
                <p className="headline">
                    {tech.status}
                </p>
                <button
                    title="Editar Nota"
                    aria-label="edit"
                    onClick={() => {
                        
                        setEditingTech(tech)
                        setIsVisible(true)
                    }}>

                    <img src={editLogo} alt="Logo de Edição" />

                </button>

                <button title="Excluir Nota" aria-label="delete"
                    onClick={() => deleteTech(tech.id)}
                >
                    <img src={deleteLogo} alt="Logo de Deletar" />

                </button>

                <div>
                    {isVisible ? <ModalEdit setIsVisible={setIsVisible} /> : false}
                </div>
            </div>
        </li>


    )
}