import React from 'react';
import './myStyle.css';
import Logo from '../assets/main-logo.png';
import { useNavigate } from 'react-router-dom';



function Home() {

    const navigate=useNavigate();
   
  return (
    <>    <div className='nav-container'>
        <div className='Logo-nav'>
            <img className='logo' src={Logo} alt='Bookesea'/>
        </div>
        <div className='nave-item'>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Search</li>
                    <li>Favourite</li>
                    <li>Help</li>
                    <li><button className='btn-sign' onClick={()=>navigate("/login")}>Sign in</button></li>
                    <li><button className='btn-regi' onClick={()=>navigate("/register")}>Register</button></li>
                </ul>
            </nav>
            </div>
    </div>

    <div className='home-body'>
    <div className='home-item'>
        <h1>Book Sea</h1>
        <p>Door way of the knowledge.</p>
    </div>
    </div>
    </>

  )
}

export default Home