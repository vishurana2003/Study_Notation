import React from "react";
import Template from "../Component/Template";
import signup from "../assets/signup.png"

function Signup({setisLoggedIn}){
    return(
   <Template
   title="Join the millions learning to code with StudyNotion for free"
   desc1="Build skills for today, tomorrow, and beyond."
   desc2="Education to future-proof your career."
   image={signup}
   formtype="signup"
   setisloggedin={setisLoggedIn}
   >

    </Template>
    )
}

export default Signup