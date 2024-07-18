import React from 'react'
import "./myStyle.css"
import Fav from '../assets/fav-bef.png'
import Books from './book-img/bookList'

function Explore() {


  return (
    <div className='explore-container'>
        <h1 className='heading'><span>Explore new books</span></h1>
        <div className="slider">
          <div className="wrapper">
        
            {Books.map((item,index)=><div className="box">
              <div className="icons">
              </div>
              <div className="image" key={index}>
                <img src={item.path} alt=''/>
              </div>
              <div className="content">
                <h3>{item.title}</h3>
                <div className="price">{item.cost}  <strike>{item.strike}</strike></div>
                <button>Add to fav
                <img src={Fav} alt=''/>
                </button>
              </div>
            </div>)}
            
          </div>
        </div>
    </div>
  )
}

export default Explore