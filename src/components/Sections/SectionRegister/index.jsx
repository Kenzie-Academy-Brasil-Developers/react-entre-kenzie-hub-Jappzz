import styles from "../SectionRegister/style.module.scss"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerFormSchema } from "./registerFormSchema.js"
import { useState } from "react"
import { Input } from "../../Inputs"
import "../../../styles/toast.scss"
import { Options } from "../../SelectOption"
import { useContext } from "react"
import { UserContext } from "../../../providers/UserCointext"
export const SectionRegister = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerFormSchema)
    })

    const [loading, setLoading] = useState(false)

    const {userRegister} = useContext(UserContext)

    const submit = (formData) => {
        userRegister(formData, setLoading)
    }

    return (
        <section className={styles.section__container}>
            <div className={styles.div__header}>
                <h1 className="title">
                    Crie sua conta
                </h1>
                <p className="headline">
                    Rápido e grátis, vamos nessa
                </p>
            </div>
            <form className={styles.form__container} onSubmit={handleSubmit(submit)}>
                <div className={styles.input__container}>
                    <Input
                        label="Nome"
                        type="text"
                        placeholder="Digite aqui seu nome"
                        register={register("name")}
                    />
                    {<p className="headline">
                        {errors.name?.message}
                    </p>
                    }
                </div>
                <div className={styles.input__container}>
                    <Input
                        label="Email"
                        type="email"
                        placeholder="Digite aqui seu email"
                        register={register("email")}
                    />
                    {<p className="headline">
                        {errors.email?.message}
                    </p>}
                </div>

                <div className={styles.input__container}>
                    <Input
                        label="Senha"
                        type="password"
                        placeholder="Digite aqui sua senha"
                        register={register("password")}
                    />
                    {<p className="headline">
                        {errors.password?.message}
                    </p>}
                </div>

                <div className={styles.input__container}>
                    <Input
                        label="Confimar Senha"
                        type="password"
                        placeholder="Digite novamente a sua senha"
                        register={register("confirmPassword")}
                    />
                    {<p className="headline">
                        {errors.confirmPassword?.message}
                    </p>
                    }
                </div>

                <div className={styles.input__container}>
                    <Input
                        label="Bio"
                        type="text"
                        placeholder="Fale sobre você"
                        register={register("bio")}
                    />
                    {<p className="headline">
                        {errors.bio?.message}
                    </p>
                    }
                </div>

                <div className={styles.input__container}>

                <Input
                        label="Contato"
                        type="text"
                        placeholder="Opção de contato"
                        register={register("contact")}
                    />
                    {<p className="headline">
                        {errors.contact?.message}
                    </p>
                    }
                </div>

                <div className={styles.input__container}>
                    <label className="headline">Selecionar módulo</label>
                    <select
                        className="input paragraph"
                        {...register("course_module")}>
                        <Options value="Primeiro módulo (Introdução ao Frontend)" text={"Primeiro Módulo"} className="paragraph"/>

                        <Options value="Segundo módulo (Frontend Avançado)" text={"Segundo Módulo"} className="paragraph"/>

                        <Options value="Terceiro Módulo (Frontend Avançado e Práticas)" text={"Terceiro Módulo"} className="paragraph"
                        />

                        <Options value=">Quarto Módulo (Introdução ao Backend" text={"Quarto Módulo"} className="paragraph"/>

                        <Options value="Quinto módulo (Backend Avançado)" text={"Quinto Módulo"} className="paragraph"/>

                        <Options value="Sexto Módulo (Backend avançado e Práticas)" text={"Sexto Módulo"} className="paragraph"/>

                    </select>
                    {<p className="headline">
                        {errors.course_module?.message}
                    </p>
                    }
                </div>
                <div className={styles.div__button}>
                    <button
                        className={loading ? "button disable title two" : "button color-primary title two"}
                        type="submit"
                        disabled={loading} >
                        Cadastrar
                    </button>
                </div>
            </form>

        </section>
    )
}