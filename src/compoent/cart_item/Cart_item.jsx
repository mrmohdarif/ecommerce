import React from 'react'
import { MdClose } from 'react-icons/md'
import watch from '../../content/categrey images/watch.webp'
import '../../compoent/cart_item/cart_item.css'
function Cart_item() {
  return (
    <div className='cart_products'>
            <div className="card_product">
                <img src={watch} className='cart_item_img'/>  
            </div>
            <div className="product_details">
                <span>Product name</span>
                <MdClose className='close_btn'/>
                <div className="qty_btns">
                <span className='qty_btn qty_btn_color' >-</span>
                <span className='qty_btn'>5</span>
                <span className='qty_btn qty_btn_color' >+</span>
              </div>
              <div className="cart_item_text">
                 <span  >3</span>
                <span className='cross'>X</span>
                <span>&#8377;300</span>
              </div>
            </div>
    </div>
  )
}

export default Cart_item