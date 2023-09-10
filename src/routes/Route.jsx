import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Chefs from '../pages/Home/Chef/Chefs';


const router  = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                loader: ()=>{
                  return  fetch("http://localhost:5000/chef")
                },
                element:<Chefs/>
            }
        ]
    }
])

export default router;