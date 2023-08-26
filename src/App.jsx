import { RoutesMain } from "./routes"
import "./styles/index.scss"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./styles/toast.scss"
import { useContext } from "react"
import { UserContext } from "./providers/UserCointext"
import { Loading } from "./components/Loading"

function App() {
    const {loading} = useContext(UserContext)

    return(
        <>
            {loading ? <Loading/> : <RoutesMain/>}
            <ToastContainer autoClose={1.5 * 1000} progressClassName={"custom-toast-progress"} />
        </>
    )
}

export default App
