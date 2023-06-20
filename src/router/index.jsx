import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Todo from "../temp/Todo";
import { GeneralLayout } from "../layouts/GeneralLayout";
import NotFound from "../pages/NotFound";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <GeneralLayout/>,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/todo",
                element: <Todo/>
            }
        ]
    }


]);