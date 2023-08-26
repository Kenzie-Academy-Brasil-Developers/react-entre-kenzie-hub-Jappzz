import { useContext } from "react"
import styles from "../SectionUser/style.module.scss"
import { UserContext } from "../../../providers/UserCointext"
export const SectionUser = () => {

    const {user} = useContext(UserContext)
    return (

        <section className={styles.section__container}>
            <div className={styles.div__user}>
                <h1 className="title">
                    Olá, {user?.name}
                </h1>
                <p className="headline">
                    {user?.course_module}
                </p>
            </div>
            <div className={styles.div__content}>
                <h2 className="title">
                    Que pena! Estamos em desenvolvimento :(
                </h2>
                <p className="paragraph">
                    Nossa aplicação está em desenvolvimento, em breve teremos novidades
                </p>
            </div>
        </section>


    )
}