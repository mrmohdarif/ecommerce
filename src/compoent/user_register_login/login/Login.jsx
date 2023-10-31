import React, { useState } from 'react'
import '../login/login.css'
import register from '../../../content/register_login/images.jpg'
import mainstreet from '../../../content/register_login/side1.png'
import{AiOutlineMail,AiFillLinkedin} from 'react-icons/ai'
import {AiFillLock} from 'react-icons/ai'
import {FaMobileScreen} from 'react-icons/fa6'
import {ImProfile} from 'react-icons/im'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsWhatsapp,BsFacebook} from 'react-icons/bs'
import Footer from '../../../section/footer/Footer'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const navigate=useNavigate()
  const handle_email=(e)=>{
    setEmail(e.target.value)
  }
  const handle_password=(e)=>{
    setPassword(e.target.value)
  }
  const login_data={
    email:email,
    password:password
  }
  const handle_login=(e)=>{
    e.preventDefault()
    const response=axios.post('https://ecommercebackend-ehsf.onrender.com/auth/login',login_data).then((res)=>{
     console.log(res.data);
     localStorage.setItem('token',res.data.token)
     localStorage.setItem('userName',res.data.userName)
     localStorage.setItem('userId',res.data.userId)
     

     alert("login sucessfully")
     navigate('/')
    }).catch((err)=>{
       console.log(err)
    })
  }
  
  return (
    <>
    <div className="main_container">
            <div className="container">
                <div className="img_container" >
                  <img src={mainstreet} alt="registration page image" className="register_image"/>
                </div>
                <div className="user_form">
                    <h1>Sign In</h1>
                    <form action="" className="">
                      
                         <label htmlFor="email"><AiOutlineMail className="form_icons"/></label>
                         <input type="email" name="" id="email" placeholder="Enter your email" className="register_input_element" onChange={handle_email}/>
                         <br />
                        
                         <label htmlFor="password"><AiFillLock className="form_icons"/></label>
                         <input type="password" name="" id="password" placeholder="Enter password" className="register_input_element" onChange={handle_password}/>
                         <br />
                          <button className="register_btn" onClick={handle_login}>Login</button>
                    </form>
                     <Link to={'/register'}>I dont't have an account</Link>
                   <div className="register_social_icons">
                   <AiOutlineInstagram className="social_icons"/>
                    <BsWhatsapp className="social_icons"/>
                    <BsFacebook className="social_icons"/>
                    <AiFillLinkedin className="social_icons"/>
                   </div>
                </div>
              
            </div>
          </div>
          <Footer/>
    </>
  )
}

export default Login