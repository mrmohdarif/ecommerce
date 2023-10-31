import React, { useState } from "react";
import Logo from "../../content/logo/logo1.png";
import "../../section/navSection/nav.css";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Cart from "../../compoent/cart/Cart";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios";

function Nav() {
  const counter=useSelector((state)=>state.counter.value)

  const [scroll,setScrool]=useState(false)
  const [show,setShow]=useState(false)
  // const [user,setUser]=useState('Welcome')
  let  userName=localStorage.getItem('userName')
    // const firstName=userName.split(' ')[0]
    // setUser(userName)
    // console.log(firstName);
  console.log(userName);
  const navigate=useNavigate()
  const logoHandle=()=>{
   navigate('/')
  }
  const handleLogout=(e)=>{
    e.preventDefault()
    localStorage.removeItem('token')
    localStorage.removeItem('userName')
    localStorage.removeItem('userId')
    navigate('/')
    
  }
  return (
    <>
    <header>
      <div className="main_nav_section">
        <nav>
          <div className="nav_section">
            <div className="nav_logo" onClick={()=>logoHandle()}>
              <img src={Logo} alt="logo" className="logo"/>
            </div>
            <div className="search_cart_profile">
              <div className="search_box">
                <input type="search" placeholder="search here" className="input_search" />
              </div>
              <div>
                <span  className="cart_icon" onClick={()=>setShow(true)}>
                <AiOutlineShoppingCart className="cart"/>
                <span className="cart_count">{counter}</span>
                </span>  
              </div>
              <div className="profile">
                <div className="profile_icon">
                  <div className="login_register">
                  <span>{userName==null?"":userName}</span>
                  { userName==null && <div className="login_register_link">
                  <Link to={'/login'} className="auth_login_register">Login</Link>
                  <Link to={'/register'} className="auth_login_register">Register</Link>
                  </div>}
                  {userName && <button className="logout" onClick={handleLogout}>Logout</button>}
                  </div>            
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="svg_profile_icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
               
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
    {show && <Cart setshowcart={setShow}/>}
    </>
  );
}

export default Nav;