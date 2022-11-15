import { createBrowserRouter } from "react-router-dom";
import Home from '../Pages/Home/Home/Home'
import MainLayOut from "../LayOut/MainLayOut/MainLayOut";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import About from "../Pages/About/About";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut></MainLayOut>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/appointment',
                element:<Appointment></Appointment>
            },
            {
                path:'/about',
                element:<About></About>
            }
        ]
    }
])