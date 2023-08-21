import styles from "../SectionLogin/style.module.scss"
import { Form, Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { MdVisibility, MdVisibilityOff } from "react-icons/md"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginFormSchema } from "./loginFormSchema.js"
import { api } from "../../../services/api.js"
import { Input } from "../../Inputs"
import {toast} from "react-toastify"
import "../../../styles/toast.scss"


export const SectionLogin = ({ setUser }) => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginFormSchema)
    })

    const navigate = useNavigate()

    const [isHidden, setIsHidden] = useState(true)

    const [loading, setLoading] = useState(false)

    const userLogin = async (formData) => {
        try {
            setLoading(true)
            const { data } = await api.post("/sessions", formData)
            console.log(data.user)
            setUser(data.user)
            localStorage.setItem("@TOKEN", data.token)
            toast.success("Login realizado", {
                className: "toast__success"
            })
            
            setTimeout(() => {
                navigate("/dashboard")
            }, 3000)
        } catch (error) {
            toast.error("Email ou senha inválidos", {
                className: "toast__error"
            })
        } finally {
            setLoading(false)
        }
    }
    

    const submit = (formData) => {
        userLogin(formData)
    }
    return (
        <section className={styles.section}>
            <form className={styles.form} onSubmit={handleSubmit(submit)}>
                <h1 className="title color-0">
                    Login
                </h1>

                <div className={styles.div__input}>
                    <Input label="Email"
                        type="email"
                        placeholder="Digite aqui seu email" register={register("email")}
                    />

                    {<p className="headline">
                        {errors.email?.message}
                    </p>}
                </div>

                <div className={styles.div__inputPassword}>
                    <div className={styles.input}>
                        <Input label="Senha"
                            type={isHidden ? "password" : "text"}
                            placeholder="Digite aqui sua senha"
                            register={register("password")}
                        />
                        <button type="button"
                            onClick={() => setIsHidden(!isHidden)}>
                            {isHidden ? <MdVisibility /> : <MdVisibilityOff />}
                        </button>
                    </div>
                    {<p className="headline">
                        {errors.password?.message}
                    </p>}
                </div>

                <button className={loading ? "button disable title two" : "button color-primary title two"}>
                    Entrar
                </button>

                <div className={styles.div__register}>

                    <p className="headline bold">
                        Ainda não possui uma conta?
                    </p>
                    <Link to="/register">
                        <button className="button color-grey-0 title two">
                            Cadastre-se
                        </button>
                    </Link>
                </div>
            </form>
        </section>
    )
}