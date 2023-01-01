import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Form/Login";
import Register from "../Components/Register";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import Main from "./Main";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {path:"/",element:<Home/>},
            {path:"/about",element:<About/>},
            {path:"/register",element:<Register/>},
            {path:"/login",element:<Login/>},
        ]
    }
])

export default router;