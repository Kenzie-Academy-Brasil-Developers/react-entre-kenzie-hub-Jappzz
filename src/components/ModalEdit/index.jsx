import { Input } from "../Inputs"
import { Options } from "../SelectOption"
import styles from "../ModalEdit/style.module.scss"
import { useForm } from "react-hook-form"
import { useContext } from "react"
import { TechnologiesContext } from "../../providers/UserTechnologies"

export const ModalEdit = ({ setIsVisible }) => {
    const { editTech, setEditingTech, editingTech } = useContext(TechnologiesContext)
    
    
    const submit = (formData) => {
        editTech(formData)
    }
    console.log(editingTech)
    const { register, handleSubmit } = useForm()

    return (
        <div className={styles.overlayBox}>
            <div className={styles.modal__header}>
                <h2 className="title">
                    Tecnologia Detalhes
                </h2>
                <button onClick={() => {
                    setEditingTech(null)
                    setIsVisible(false)
                }}className="title two">
                    X
                </button>
            </div>
            <div>
                <form onSubmit={handleSubmit(submit)} className={styles.modal__form}>
                    <Input
                        label="Nome"
                        type="text"
                        placeholder="Material UI"
                        register={register("title")} />

                    <div className={styles.modal__select}>

                        <label className="headline">
                            Status
                        </label>

                        <select className="input paragraph" {...register("status")}>
                            <Options value="Iniciante" className="paragraph" text="Iniciante" />

                            <Options value="Intermediário" className="paragraph" text="Intermediário" />

                            <Options value="Avançado" className="paragraph" text="Avançado" />
                        </select>

                    </div>

                    <button className="button color-primary paragraph"
                        type="submit">
                        Salvar alterações
                    </button>

                </form>
            </div>
        </div>
    )
}