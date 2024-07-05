import React, { useState } from 'react'
import Logo from '../assets/images.jpg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

  const notify = () =>toast.success('Login Successful! 😎', {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
    transition: Slide,
    });

    const notifyError=(msg)=>toast.error(msg, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      transition: Slide,
      });

  const navigate = useNavigate();
  const [data,setData]=useState({name:"",password:""});

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setData({...data,[name]:value});
  }




  const display=async(e)=>{

    e.preventDefault();
    console.log(data);
    try{
    const config={
      header:{
        'Coneten-Type':'application/json',
      },
    };

    const res=await axios.post("http://localhost:8080/login",data,config);
    notify(); 
    // navigator('/login');
  }catch(err){
    console.log("Axios Error -> ",err.message);
    notifyError("Invalid username or password!");
  }
  }

  const ValidateData=()=>{
    if(!data.name || !data.password){
      notifyError("Fill the requiremenst!");
    }
    else if(data.password.length<6){
      notifyError("Password length minimum 6");
    }
    else{
      display();
    }

  }


  return (
    <>    <div>
      <div className='lodin-container'>
        <div className='login-item-img'> 
        <img className='login-img' src={Logo} alt='Logo'/>
        </div>
        <div className='login-item'>
        <h1>Login.</h1>
        <div className='login-main'>
          <div className='item'>
          <label>Username</label><br></br>
            <input type='text' placeholder='Username' className='login-input' name='name' value={data.name} onChange={handleChange} required /><br></br>
            <label>Password</label><br></br>
            <input type='password' placeholder='Password' className='login-input' name='password' value={data.password} onChange={handleChange} required/><br></br>
            <button className='login-btn' onClick={ValidateData}>Login</button>
            <center className='center-login'>
            <p>Don't have an account? <u onClick={()=>navigate('/register')}>register</u></p></center>
          </div>
        </div>
        </div>
      </div>
    </div>
    <ToastContainer
position="top-right"
autoClose={4000}
limit={2}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </>


  )
}

export default Login