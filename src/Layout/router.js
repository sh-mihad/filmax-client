import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Form/Login";
import Register from "../Components/Register";
import About from "../Pages/About/About";
import AllMovies from "../Pages/AllMovies/AllMovies";
import Home from "../Pages/Home/Home";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Main from "./Main";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {path:"/",element:<PrivetRoute><Home/></PrivetRoute>},
            {path:"/about",element:<PrivetRoute><About/></PrivetRoute>},
            {path:"/about",element:<PrivetRoute><AllMovies/></PrivetRoute>},
            {path:"/register",element:<Register/>},
            {path:"/login",element:<Login/>},
        ]
    }
])

export default router;