import { set } from "react-hook-form"
import { HeaderUser } from "../../components/Headers/HeaderUser"
import { SectionUser } from "../../components/Sections/SectionUser"

export const HomePage = ({user, setUser})=>{
    return(
        <>
            <HeaderUser setUser={setUser}/>
            <main>
                <SectionUser user={user} />
            </main>
        </>
    )
}