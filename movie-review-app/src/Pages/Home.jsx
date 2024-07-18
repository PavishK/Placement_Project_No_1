import React from 'react';
import './myStyle.css';
import Logo from '../assets/main-logo.png';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import Explore from './Explore';
import ExploreImg from '../assets/explore.gif'
import SearchImg from '../assets/search.gif'


function Home() {
    const explore=useRef(null);
    const help=useRef(null);

    const navigate=useNavigate();
   
  return (
    <>    <div className='nav-container'>
        <div className='Logo-nav'>
            <img className='logo' src={Logo} alt='Bookesea'/>
        </div>
        <div className='nave-item'>
            <nav>
                <ul>
                    <li className='Home'>Home</li>
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
        <center>
        <h2>Your personal book<br></br>recommendations</h2> 
        </center>   
        <div className='btn-item'>
        <button className='btn-1' onClick={()=>explore.current.scrollIntoView({behavior:'smooth'})}>Explore
      <img src={ExploreImg} alt=''/>
         </button>
        <button className='btn-2'>Search
        <img src={SearchImg} alt=''/>
        </button>
    </div>
    </div>
    </div>
    <div ref={explore}>
    <Explore/>

    </div>
    </>

  )
}

export default Home