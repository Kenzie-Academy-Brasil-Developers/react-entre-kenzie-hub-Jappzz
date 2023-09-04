import { useContext } from "react"
import { TechnologiesContext } from "../../providers/UserTechnologies"
import { TechCard } from "./TechCard"
import styles from "../TechList/style.module.scss"

export const TechList = ()=>{
    const {techList} = useContext(TechnologiesContext)
    console.log(techList)
    return(
        <ul className={techList.length > 0 ? styles.list : styles.paragraph}>
            <p className="title">
                {techList.length > 0 ? "": "Nenhuma tecnologia ainda... Clique em mais para adicionar"}
            </p>
        
        {techList.map(tech => (
          <TechCard key={tech.id} tech={tech} />
        ))}
      </ul>
      
    )
}