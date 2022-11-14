import { createBrowserRouter } from "react-router-dom";
import Home from '../Pages/Home/Home/Home'
import MainLayOut from "../LayOut/MainLayOut/MainLayOut";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut></MainLayOut>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])