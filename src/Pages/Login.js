
import React from "react";
import Template from "../Component/Template";
import login from "../assets/login.png"

function Login({setisLoggedIn}){
    return(
         <Template
         title="Welcome Back"
         desc1="Build skills for today, tomorrow, and beyond."
         desc2="Education to future-proof your carrer."
         image={login}
         formtype="login"
         setisloggedin={setisLoggedIn}></Template>
    )
}

export default Login