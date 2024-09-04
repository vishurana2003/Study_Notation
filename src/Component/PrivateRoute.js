
import React from "react";
import { Navigate } from "react-router-dom";


function PrivateRoute({isLoggedIn,childern}){

    
    if(isLoggedIn){
        
        return childern;
    }
       
    else{
        return <Navigate to="/login"></Navigate>
    }
}

export default PrivateRoute;