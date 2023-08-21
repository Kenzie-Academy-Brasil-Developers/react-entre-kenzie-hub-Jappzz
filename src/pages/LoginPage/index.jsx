import { HeaderLogin } from "../../components/Headers/HeaderLogin"
import { SectionLogin } from "../../components/Sections/SectionLogin"

export const LoginPage = ({setUser})=>{
    return(
        <>
        <main>
            <HeaderLogin/>
            <SectionLogin setUser={setUser}/>
        </main>
        </>   
    )
}