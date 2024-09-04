import { Routes,Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";
import Login from "./Pages/Login"
import Home from "./Pages/Home"
import Signup from "./Pages/Signup"
import Dashboard from "./Pages/Dashboard"
import { useState } from "react";
import PrivateRoute from "./Component/PrivateRoute";



function App() {

  const[isLggedIn,setisLoggedIn]=useState(false)
  
  return (
    
    <div className="w-screen h-full min-h-screen bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn={isLggedIn} setisLoggedIn={setisLoggedIn}>

      </Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login setisLoggedIn={setisLoggedIn}></Login>}></Route>
        <Route path="/signup" element={<Signup setisLoggedIn={setisLoggedIn}></Signup>}></Route>
        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLggedIn}>
            <Dashboard></Dashboard>
            </PrivateRoute>
        
        }
          
          ></Route>
      </Routes>
    </div>
  )
}

export default App;
