import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import navStyles from'../Navbar/navbar.module.css'
import { assets } from '../../assets/assets';
import { storeContext } from '../../Context/StoreContext';
import Login from '../Login/Login';

export default function Navbar() {
  const [Menu, setMenu] = useState("home");
  const {scrollToSection, home, menu, mobile, contact,  getTotalCartAmount} = useContext(storeContext);           
  return ( <>
      <nav ref={home} className="navbar navbar-expand-lg ">
      <div className="container">
        <Link className="navbar-brand" to="home">
         <img className='w-100' src={assets.logo} alt="LOGO" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarText">
          <ul className="navbar-nav mb-2 mb-lg-0 m-auto ps-5">
            <li  onClick={()=> scrollToSection(home)} className="nav-item">
            <Link onClick={() => setMenu("home")} id={navStyles.link} className={Menu === "home" ? navStyles.active : ""} aria-current="page" to="home">Home</Link>
            </li>
            <li onClick={()=> scrollToSection(menu)} className="nav-item">
              <Link onClick={()=>setMenu("menu")}  id={navStyles.link} className= {Menu==="menu"?navStyles.active:''} to="menu" >Menu</Link>
            </li>
            <li  onClick={()=> scrollToSection(mobile)} className="nav-item">
              <Link onClick={()=>setMenu("mobile-app")}  id={navStyles.link} className={Menu==="mobile-app"?navStyles.active:''} to="mobile">Mobile-app</Link>
            </li>
            <li  onClick={()=> scrollToSection(contact)} className="nav-item">
              <Link onClick={()=>setMenu("contact-us")}  id={navStyles.link} className={Menu==="contact-us"?navStyles.active:''} to="contact" >Contact Us</Link>
            </li>
          </ul>
          <span className="navbar-text">
            <div className="navbar-right">
          <ul className="nav">
                   <li className="nav-item pt-3">
                  <Link className="nav-link" aria-current="page" to="home">
                   <img src={assets.search_icon} alt="searchIcon" />
                  </Link>
                  </li>
                 <li className={navStyles.navbarSearch +" nav-item"}>
                  <Link className="nav-link" to='cart'>
                   <img src={assets.basket_icon} alt="basketIcon" />  
                  </Link>
                  <div className={ getTotalCartAmount()===0? " ":navStyles.dot}></div>
                  </li>
                 <li className="nav-item">  
                 <Link className="nav-link" to=''>
                  <button  type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className={navStyles.navButton}>sign in</button>
                 </Link>
                 </li>
    
             </ul>              
            </div>

          </span>
        </div>
      </div>

<Login/>

    </nav>

    
      </>
  )
}

