import { createBrowserRouter } from "react-router-dom";
import Home from '../Pages/Home/Home/Home'
import MainLayOut from "../LayOut/MainLayOut/MainLayOut";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import About from "../Pages/About/About";
import Login from "../Pages/UserLogForm/Login/Login";
import Register from "../Pages/UserLogForm/Login/Register";
import UploadImage from "../Pages/sheared/UploadImage";

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
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/file-upload',
                element:<UploadImage></UploadImage>
            }
        ]
    }
])