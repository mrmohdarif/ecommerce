import React, { useState } from 'react'
import '../../compoent/singleproduct/singleproduct.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { TiSocialLinkedin } from 'react-icons/ti'
import { SlSocialInstagram } from 'react-icons/sl'
import { TiSocialYoutube } from 'react-icons/ti'
import img from '../../content/products/earbuds-prod-2.webp'
import { BsCurrencyRupee } from 'react-icons/bs'
import Nav from '../../section/navSection/Nav'
import Footer from '../../section/footer/Footer'
import earbud1 from '../../content/products/earbuds-prod-1.webp'
import Relatedproduct from '../relatedproduct/Relatedproduct'
function Singleproduct() {
  const [Qty, setQty] = useState(1)
  const handleDec = () => {
    if (Qty <= 1) {
      return Qty
    }
    setQty(Qty - 1)
  }
  const handlIec = () => {
    setQty(Qty + 1)
  }
  return (
    <div>
      <Nav/>
      <div className="singleproduct_main_content">
        <div className='left'>
          <img src={img} alt="" className='single_product_img' />
        </div>
        <div className='right'>
          <div className="product_name">Rockerz 550 Over Ear Bluetooth Headphone</div>
          <div className="single_price"><BsCurrencyRupee />1799</div>
          <div className="description">
            boAt Rockerz 550 is an over-ear wireless headset
            that has been ergonomically designed to meet the needs
            of music lovers. The headphones come equipped with the
            latest Bluetooth v5.0 for instant wireless
          </div>
          <div className="card_btn">
            <div className="qty_btn_add_btn">
              <div className="qty_btns">
                <span className='qty_btn qty_btn_color' onClick={handleDec}>-</span>
                <span className='qty_btn'>{Qty}</span>
                <span className='qty_btn qty_btn_color' onClick={handlIec}>+</span>
              </div>
              <div className="add_to_card_button">
                <button className='add_to_cart'> <AiOutlineShoppingCart />ADD TO CART</button>
              </div>
            </div>


            <div className="product_info">
              <span><span className="text_info1">Category:</span><span>Headphone</span></span>
              <span><span className="text_info2">Share:</span><span className='social_icons_single_product'>
                <span><TiSocialLinkedin className='single_page_icon1' /></span>
                <span><SlSocialInstagram className='single_page_icon2' /></span>
                <span><TiSocialYoutube className='single_page_icon3' /></span>
              </span></span>
            </div>
          </div>
        </div>
      </div>
     
    <Relatedproduct/>
      <Footer />
    </div>
  )
}

export default Singleproduct