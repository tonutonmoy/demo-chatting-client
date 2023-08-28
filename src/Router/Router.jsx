import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Chatting from "../Component/Chatting/Chatting";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import DashBoard from "../DashBoard/DashBoard";

import DashBoardProfile from "../DashBoard/DahsbordProfile/DashBoardProfile";
import DashBoardAllChats from "../DashBoard/DashBoardAllChats/DashBoardAllChats";
import DashboardSingleChat from "../DashBoard/DashboardSingleChat/DashboardSingleChat";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



export const router = createBrowserRouter([
   {
      path: "/",
      element: <App></App>,
      children: [
         {
            path: '/',
            element: <Home></Home>

         },
         {
            path: '/chatting',
            element: <PrivateRoute>
               <Chatting></Chatting>
            </PrivateRoute>


         }
         ,
         {
            path: '/login',
            element: <Login></Login>

         }
         ,
         {
            path: '/register',
            element: <Register></Register>

         }

      ]
   },
   {

      path: 'dashboard',
      element: <DashBoard></DashBoard>,
      children: [
         {

            path: 'profile',
            element:
               <PrivateRoute>
                  <DashBoardProfile></DashBoardProfile>
               </PrivateRoute>



         },

         {

            path: 'allChats',
            element: <DashBoardAllChats></DashBoardAllChats>
         },

         {

            path: 'allChats/singleChat/:id',
            element: <PrivateRoute>
               <DashboardSingleChat></DashboardSingleChat>

            </PrivateRoute>
         },

      ]
   }
]);

