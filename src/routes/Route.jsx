import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Authenticate/Login";
import Register from "../pages/Authenticate/Register";
import RoomsDetails from "../pages/Rooms/RoomsDetails";
import PrivateRoute from "./PrivateRoute";


 const router= createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/room/:id',
                element: <PrivateRoute>  <RoomsDetails></RoomsDetails> </PrivateRoute>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/signup',
        element: <Register></Register>
    }
 ])

 export default router;