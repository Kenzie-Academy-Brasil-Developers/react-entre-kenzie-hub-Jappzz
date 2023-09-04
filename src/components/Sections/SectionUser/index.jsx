import { useContext, useState } from "react"
import styles from "../SectionUser/style.module.scss"
import { UserContext } from "../../../providers/UserCointext"
import buttonPlus from "../../../assets/button-plus.svg"
import { TechList } from "../../TechList"
import { CartModal } from "../../ModalRegister"

export const SectionUser = () => {

    const { user } = useContext(UserContext)

    const [ isVisible, setIsVisible ] = useState(false)

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
                    Tecnologias
                </h2>
                <button onClick={() => setIsVisible(true)}>
                    <img src={buttonPlus} alt="Adicionar" />
                </button>
            </div>
            <div className={styles.div__list}>
                <TechList />
            </div>

            <div>
                {isVisible ? <CartModal setIsVisible={setIsVisible} /> : false}               

            </div>
        </section>


    )
}