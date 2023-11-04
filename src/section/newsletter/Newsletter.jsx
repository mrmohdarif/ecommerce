import React, { useState } from 'react'
import '../../section/newsletter/newsletter.css'
import {TiSocialLinkedin} from 'react-icons/ti'
import {SlSocialInstagram} from 'react-icons/sl'
import {TiSocialYoutube} from 'react-icons/ti'
import axios from 'axios'
function Newsletter() {
const [email,setEmail]=useState()
  const handleEmail=(e)=>{
    setEmail(e.target.value)
  }
  const handleNewslatter=(e)=>{
    e.preventDefault()
    axios.post('https://ecommercebackend-ehsf.onrender.com/api/subscribe',{email}).then((res)=>{
      console.log(res);
      alert(res.data)
      setEmail('')
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
   <div className="newsletter_section">
    <div className='newsletter'>
          <span className='newaletter_heading'>NEWSLETTER</span>
          <span className='newsletter_info'>SIGN UP FOR LATEST UPDATES AND OFFERS</span>
           <div>
            <form action="" className='form'>
            <input type="email" name="" id="" placeholder='Email Address' onChange={handleEmail} required/>
             <button className='subscribe_btn' onClick={handleNewslatter}>Subscribe</button>
            </form>
            <div className="text">will be used accordance with our privacy policy</div>
           <div className="social_icon">
            <TiSocialLinkedin  fontSize={30} className='social_icons'/>
            <SlSocialInstagram fontSize={30} className='social_icons'/>
            <TiSocialYoutube fontSize={30} className='social_icons'/>
           </div>
           </div>
          </div>
          </div>
  )
}

export default Newsletter