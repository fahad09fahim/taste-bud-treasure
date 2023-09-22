import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {user , loading}= useContext(AuthContext)
    const location = useLocation()
    
    if(loading){
       return <span className="loading loading-dots loading-lg text-center"></span>
    }
    if(user){
        return children
    }
    return <Navigate state={{from:location}} to="/login" replace></Navigate>
};

export default PrivetRoute;