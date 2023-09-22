import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Chefs from '../pages/Home/Chef/Chefs';
import ChefDetails from '../pages/Home/ChefDetails/ChefDetails';
import ChefLayout from '../layout/ChefLayout';
import Login from '../pages/Login/Login';
import AuthLayout from '../layout/AuthLayout';
import SignUp from '../pages/signup/SignUp';


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
    },
    {
        path:"/",
        element:<AuthLayout/>,
        children:[
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/signup",
                element:<SignUp/>
            }
        ]
        
    }
])

export default router;