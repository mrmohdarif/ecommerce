import React from 'react'
import '../cart/cart.css'
import { MdClose } from 'react-icons/md'
import { BsCartX } from 'react-icons/bs'
import Cart_item from '../cart_item/Cart_item'
function Cart({ setshowcart }) {
    return (
        <div className='cart_panel'>
            <div className="opac_layer">

                <div className="cart_content">
                    
                        <div className='card_header'>
                            <span className='heading_cart'>Shopping Cart</span>
                            <span className="close_btn" onClick={() => setshowcart(false)}>
                                <MdClose className='svg' />
                                <span className="close_text">Close</span>
                            </span>
                        </div>
                  
                    {/* <div className="empty_cart">
                        <BsCartX className='Bs_cart'/>
                        <span>No product in cart</span>
                        <button className="return_cart" onClick={}>RETURN TO SHOP</button>
                    </div> */}
                         <Cart_item/>
                    <div className="cart_footer">
                          <div className="subtotal">
                            <span className="text_subtotal">Subtotal</span>
                            <span className="number_total">&#8377;127</span>
                          </div>
                          <div className="button">
                            <button className='checkput_cta'>Checkout</button>
                          </div>
                    </div>





                </div>

            </div>
            </div>
            )
}

            export default Cart


