import React, { useState } from "react";
import toast from "react-hot-toast";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"

import { Link, useNavigate } from "react-router-dom";





function LoginForm({setIsLoggedIn}){

    const[formdata,setformdata]=useState({
        email:"",
        password:"",
    })

    const navigate=useNavigate();
    
    const[showpassword,setshowpassword]=useState(false);


    function changehandler(event){
        setformdata((prevdata)=>{
                  return{
                ...prevdata,
                [event.target.name]:event.target.value,
               };
                    
               
               
    });

        console.log("done");
   }
   console.log(formdata);

   function submithandler(event){
      event.preventDefault();
      console.log("Login done")
      setIsLoggedIn(true);
      toast.success("Logged In")
      navigate("/dashboard");

   }
    return(
      <form onSubmit={submithandler}
      className="flex flex-col w-full gap-y-4 mt-6">
        <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email Address <sup className="text-pink-700">*</sup>
            </p> 

            <input 
            required
            type="email"
            name="email"
            value={formdata.email}
            placeholder="Enter email address"
            onChange={changehandler}
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"></input>
            </label>

            <label className="w-full relative"><p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Password <sup className="text-pink-700">*</sup>
            </p> 

            <input 
            required
            type={showpassword?"text" :"password"}
            name="password"
            value={formdata.password}
            placeholder="Enter password"
            onChange={changehandler}
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"></input>


            <span 
            className="absolute right-3 top-[38px] cursor-pointer"
            onClick={()=>setshowpassword((prev)=>!prev)}>
                {showpassword?(<AiOutlineEye fontSize={24} fill="#AFB2BF"></AiOutlineEye>):(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"></AiOutlineEyeInvisible>)}
            </span>
            <Link to="#">
            <p className="text-xs text-blue-100 mt-1 max-w-max ml-auto ">
                Forgot Password</p></Link>
            </label>

            <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6" >
                Sign in
            </button>
      </form>
    )
}

export default LoginForm