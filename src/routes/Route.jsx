import React, { Children } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Chefs from '../pages/Home/Chef/Chefs';
import ChefDetails from '../pages/Home/ChefDetails/ChefDetails';
import ChefLayout from '../layout/ChefLayout';


const router  = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                loader: ()=>{
                  return  fetch("https://taste-bud-server-mg7kjan6x-fahad09fahim.vercel.app/chef")
                },
                element:<Chefs/>
            }
        ]
    },
    {
        path:"/",
        element:<ChefLayout/>,
        children:[
            {
                path:"/chef/:id",
                loader:({params})=>fetch(`https://taste-bud-server-mg7kjan6x-fahad09fahim.vercel.app/chef/${params.id}`),
                element:<ChefDetails/>
            }
        ]
    }
])

export default router;