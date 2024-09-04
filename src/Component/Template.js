import React from "react"
import frameImage from "../assets/frame.png"
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import {FcGoogle} from "react-icons/fc"
 

function Template({title,desc1,desc2,image,formtype,setisloggedin}){

    return(
        <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-48 ">

            <div className="w-11/12 max-w-[450px] ">
             <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375]">{title}</h1>
             <p className="text-[1.25rem ] leading-[1.625rem] mt-4">
                <span className="text-richblack-100">{desc1}</span><br></br>
                <span className="text-blue-100 italic">{desc2}</span>
             </p>

             {formtype === "signup" ?
             (<SignupForm setIsLoggedIn={setisloggedin}></SignupForm>):(<LoginForm setIsLoggedIn={setisloggedin}></LoginForm>)
            }
            <div className="flex w-full items-center my-4 gap-x-2">
                <div className="h-[1px] w-full bg-richblack-700"></div>
                <p className="text-richblack-700 font-medium leading-[1.375]">OR</p>
                <div className="h-[1px] w-full bg-richblack-700"></div>

            </div>
                
                <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 ">
                <FcGoogle></FcGoogle>
                    <p>Sign Up with Google</p></button>
            </div>

            <div className="w-11/12 relative max-w-[450px]">
                <img src={frameImage}
                alt="Pattern"
                width={558}
                height={504}
                loading="lazy"></img>

                <img src={image}
                alt="Students"
                width={558}
                height={490}
                loading="lazy" 
                className="absolute -top-4 right-4"></img>
            </div>
        </div>
    )
}

export default Template;