import React, { useState } from 'react';
import toast from 'react-hot-toast';
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { useNavigate } from 'react-router-dom';


function SignupForm({setIsLoggedIn}){
    const[formdata,setformdata]=useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "",

    });
    const[showpasswor,setshowpasswor]=useState(false);

    const[showpassword,setshowpassword]=useState(false);
    const navigate=useNavigate();
    const[accountype ,setaccoutype]=useState("student")

    
function changehandler(event){
    setformdata(
        (prev) => {
             
            return{
               ...prev,
               [event.target.name]: event.target.value,
           }
    
});


}



function submithandler(event)
{
    event.preventDefault();
    
    
    
    
    if(formdata.password!=formdata.confirmpassword)
    {
        
        toast.error("password do not match");
        
        return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    navigate("/dashboard");


}
    return(

        <div>
            <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
       { /*student Instructor tab*/}
       <button 
       className={`${accountype==="student"
        ?"bg-richblack-900 text-richblack-200" :"bg-transparent text-richblack-200"  }
        py-2 px-5 rounded-full transition-all duration-200}`}
       onClick={()=>
        setaccoutype("student")
       }>Student</button>
       <button 
        className={`${accountype==="instructor"
            ?"bg-richblack-900 text-richblack-200" :"bg-transparent text-richblack-200"  }
            py-2 px-5 rounded-full transition-all duration-200}`}
       onClick={()=>
        setaccoutype("instructor")
       }>Instructor</button>
       </div>


       <form onSubmit={submithandler}>

        <div className='flex gap-x-4 mt-4'>
        <label className='w-full'>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">First Name <sup className="text-pink-700">*</sup></p>
            <input
             required
            type='text'
            
            onChange={changehandler}
            placeholder='Enter First Name'
            value={formdata.firstname}
            name="firstname"
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"></input>
        </label>

        <label className='w-full'>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Last Name <sup className="text-pink-700">*</sup></p>
            <input required
            type='text'
            
            onChange={changehandler}
            placeholder='Enter Last Name'
            value={formdata.lastname}
            name="lastname"
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"></input>
        </label>
        </div>

        <div className='mt-[20px]'>
        <label>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email Address <sup className="text-pink-700">*</sup>
            </p> 

            <input 
            required
            type="email"
            
            value={formdata.email}
            name="email"
            placeholder="Enter email id"
            onChange={changehandler}
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"></input>
            </label>
        </div>

            <div className='flex gap-4 mt-4'>
                {/*password*/}
            <label className='w-full relative'>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Create Password <sup className="text-pink-700">*</sup></p>
            <input 
            required
            type={showpasswor?('text'):('password')}
           
            onChange={changehandler}
            placeholder='Enter Password'
            value={formdata.password}
             name="password"
             className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            ></input>
             <span onClick={()=>setshowpasswor((prev)=>!prev)}
                className='absolute right-3 top-[38px] cursor-pointer '>
                {showpasswor?(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"></AiOutlineEyeInvisible>):(<AiOutlineEye fontSize={24} fill="#AFB2BF"></AiOutlineEye>)}
            </span>
        </label>

             {/* Confirm password*/}
        <label className='w-full relative'>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Confirm Password <sup className="text-pink-700">*</sup></p>
            <input required
            type={showpassword?('text'):('password')}
           
            onChange={changehandler}
            placeholder='Confirm Password'
            value={formdata.confirmpassword}
            name="confirmpassword"
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"></input>
             <span className='absolute right-3 top-[37px] cursor-pointer' onClick={()=>setshowpassword((prev)=>!prev)}>
                {showpassword?(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"></AiOutlineEyeInvisible>):(<AiOutlineEye fontSize={24} fill="#AFB2BF"></AiOutlineEye>)}
            </span>
        </label>

       
            </div>
        
       <button className=" w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
        Create Account
       </button>
       </form>
        </div>
       
    )

}

export default SignupForm