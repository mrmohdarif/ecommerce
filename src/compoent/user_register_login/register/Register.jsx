import React, { useState } from "react";
import mainstreet from '../../../content/register_login/side1.png'
import '../register/register.css'
import{AiOutlineMail,AiFillLinkedin} from 'react-icons/ai'
import {AiFillLock} from 'react-icons/ai'
import {FaMobileScreen} from 'react-icons/fa6'
import {ImProfile} from 'react-icons/im'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsWhatsapp,BsFacebook} from 'react-icons/bs'
import Footer from "../../../section/footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Nav from "../../../section/navSection/Nav";
function Register(){
  const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [number,setNumber]=useState('')
const [password,setPassword]=useState('')
const navigate=useNavigate()
const nameInput=(e)=>{
setName(e.target.value)
}

const emailInput=(e)=>{
  setEmail(e.target.value)
}
const numberInput=(e)=>{
  setNumber(e.target.value)
}
const passInput=(e)=>{
  setPassword(e.target.value)
}
const userRegisterData={
  name:name,
  email:email,
  phone:number,
  password:password
}
const handleRegister=(e)=>{
e.preventDefault()
axios.post("https://ecommercebackend-ehsf.onrender.com/api/register",userRegisterData).then((res)=>{
console.log(res)
alert(res.data+"go to login")
setName('')
setEmail('')
setNumber('')
setPassword('')
if(res.status==200)
{
  navigate('/login')
}
}).catch((err)=>{
  console.log(err)
  alert("this user"+err.config.data+"allready register")
  setName('')
setEmail('')
setNumber('')
setPassword('')
})
}
    return(
        <> 
        <Nav/>
          <div className="main_container">
            <div className="container">
                <div className="img_container" >
                  <img src={mainstreet} alt="registration page image" className="register_image"/>
                </div>
                <div className="user_form">
                    <h1>Sign Up</h1>
                    <form action="" className="">
                      <div className="details_icon">
                      <label htmlFor="name"><ImProfile className="form_icons"/></label>
                      <input type="text" name="" id="name" placeholder="Enter your name" className="register_input_element" onChange={nameInput} value={name} />
                      </div>
                        
                         <div className="details_icon">
                         <label htmlFor="email"><AiOutlineMail className="form_icons"/></label>
                         <input type="email" name="" id="email" placeholder="Enter your email" className="register_input_element" onChange={emailInput} value={email} required/>
                         </div>
                         
                         <div className="details_icon">
                         <label htmlFor="phone"><FaMobileScreen className="form_icons"/></label>
                         <input type="number" name="" id="phone" placeholder="Phone number" className="register_input_element" onChange={numberInput} value={number} required/>
                         </div>
                         
                         <div className="details_icon">
                         <label htmlFor="password"><AiFillLock className="form_icons"/></label>
                         <input type="password" name="" id="password" placeholder="Enter password" className="register_input_element" onChange={passInput} value={password} required/>
                         </div>
                         
                     
                          <button className="register_btn" onClick={handleRegister}>Register</button>
                    </form>
                    <Link to={'/login'}>I  have an account</Link>
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
export default  Register