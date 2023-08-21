import { RoutesMain } from "./routes"
import "./styles/index.scss"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./styles/toast.scss"

function App() {
    return(
        <>
            <RoutesMain />
            <ToastContainer autoClose={1.5 * 1000} progressClassName={"custom-toast-progress"} />
        </>
    )
}

export default App
