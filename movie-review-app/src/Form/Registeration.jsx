import React, { useState } from 'react'
import Logo from '../assets/images.jpg'
import './style.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Registeration() {

  const notifySuccess = () =>toast.success('Account created Successful! 😎', {
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

  const navigator=useNavigate();
  const [data,setData]=useState({name:'',email:'',password:''});
  const [pass,setPass]=useState('');

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

    const res=await axios.post("http://localhost:8080/register",data,config);
    console.log(res);
    notifySuccess();
    navigator('/login');
  }catch(err){
    console.log("Axios Error -> ",err.message);
    notifyError("Username or Email already exixt.");
  }

  }

  const validateData=()=>{

    if(!data.name || !data.email || !data.password || !pass){
     notifyError("Fill the requirements!");
    }
    else if(data.password!=pass){
      notifyError("Miss-match password!");
    }
    else if(data.password.length<6){
      notifyError("Password length size must be greater than 6")
    }
    else{
      display();

    }
  }

 
  return (
    <div>
    <div className='register-container'>
      <div className='login-item-img'> 
      <img className='login-img' src={Logo} alt='Logo'/>
      </div>
      <div className='login-item'>
      <h1>Register.</h1>
      <div className='login-main'>
        <div className='item'>
        <label>Username</label><br></br>
          <input type='text' placeholder='Username' className='login-input' name='name' value={data.name} onChange={handleChange} required/><br></br>
          <label>E-mail</label><br></br>
          <input type='email' placeholder='example@gmail.com' className='login-input' name='email' value={data.email} onChange={handleChange} required Validate /><br></br>
          <label>Password</label><br></br>
          <input type='password' placeholder='Password' className='login-input' name='password' value={data.password} onChange={handleChange} required/><br></br>
          <label>Confirm password</label><br></br>
          <input type='password' placeholder='Confirm password' className='login-input' name='password' value={pass} onChange={(e)=>setPass(e.target.value)} required /><br></br>
          <button className='login-btn' onClick={validateData}>Register</button>
          <center className='center-login'>
          <p>Already have an account? <u onClick={()=>navigator('/login')}>login</u></p></center>
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
  </div>
  )
}

export default Registeration