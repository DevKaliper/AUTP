import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

export const  GeneralLayout = () => {
    return (
        <>
        <NavBar/>
        <Outlet/>
        <footer>footer</footer>
        
        
        </>
    )
    
}