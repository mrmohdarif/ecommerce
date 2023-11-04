import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'
import { BsPhone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import '../footer/footer.css'
import payment from '../../content/payment/payments.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Footer() {
    const navigate=useNavigate()
    return (
        <footer>
            <div className='footer_content'>
                <div className='col1 col'>
                    <div className='title_about'>About</div>
                    <div className='text_something'>Welcome to our e-commerce website! We are thrilled to present you with an online shopping experience like no other. Our website is designed to provide you with a seamless and convenient way to explore a wide range of products from the comfort of your own home.</div>
                </div>

                <div className='address col'>
                    <div className="col2 ">
                        <div className="text_contatc">Contact</div>
                        <div className='col2_sub'>
                            <FaLocationArrow />
                            <div className="text_address">
                                Luconow road ,faizabad, pune, 50207, india
                            </div>
                        </div>

                    </div>

                    <div className="col3 ">
                        <div className='col3_sub'>
                        <BsPhone />
                        <div className="text_phone">
                            Phone:087-247-2998
                        </div>
                        </div>
                        
                    </div>
                    <div className="col4 ">
                        <div className='col4_sub'>
                        <AiOutlineMail />
                        <div className="text_email ">
                            Email:mainstreet_shopping@gmail.com
                        </div>
                        </div>
                        
                    </div>

                </div>
                <div className='col5 col'>
                    <div className="categories">Categories</div>
                    <div className='cat_content'>
                    <span className='text_cat' onClick={()=>navigate('/')}>Groceries</span>
                    <span className='text_cat' onClick={()=>navigate('/category/laptops')}>Laptop</span>
                    <span className='text_cat' onClick={()=>navigate('/category/smartphones')}>Phone</span>
                    <span className='text_cat' onClick={()=>navigate('/category/watch')}>Watch</span>
                    <span className='text_cat' onClick={()=>navigate('/category/headphone')}>Headphone</span>
                    <span className='text_cat' onClick={()=>navigate('/category/homeappliances')}>Appliances</span>
                    </div>
                    
                </div>

            </div>
            <div className="bottom_bar">
                <div className="bottom_bar_content">Mainstreet created by Mohd arif, premium e-commerce solution</div>
                <img src={payment} alt="payment"/>
            </div>
        </footer>
    )
}

export default Footer