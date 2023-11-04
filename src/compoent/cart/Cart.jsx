import React, { useEffect, useState } from 'react'
import '../cart/cart.css'
import { MdClose } from 'react-icons/md'
import Cart_item from '../cart_item/Cart_item'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Cart({setshowcart,counterApp}) {
    console.log(counterApp)
    const navigate=useNavigate()
    const [cartData,setcartData]=useState([])
    const [totel,setTotal]=useState(0)
    const [count,setcount]=useState(0)
    const userId=localStorage.getItem('userId')
    let myamount=0;
    let amount=[]
    const increseCount=()=>{
        setcount(count+1)
    }
    useEffect(()=>{
        console.log("useEffect cart.js")
        counterApp()
     axios.post('https://ecommercebackend-ehsf.onrender.com/cat/getcartData',{userId}).then((res)=>{
      console.log(res.data.insertData)
      setcartData(res.data.insertData)
       res.data.insertData.find((value,index)=>{
           let  total_amount=value.quantity * value.product.price
             myamount=myamount+total_amount;
           amount.push(total_amount)
           const reduced=amount.reduce((acc,item)=>acc+item)
           console.log(reduced);
           setTotal(reduced/2)
           console.log(amount)
       })
     }).catch((err)=>{
       console.log(err);
     })
    },[count])
    const handleCheckout=(amount)=>{
        console.log(amount);   
       navigate('/address',{state:{Data:cartData,amount:totel}})
       console.log(amount);
       axios.post('https://ecommercebackend-ehsf.onrender.com/api/order',{'amount':amount}).then((res)=>{
        console.log(res)
       }).catch((err)=>{
           console.log(err)
       })
    }
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
                  
                   
                       <div className="cart_data_div">
                       <Cart_item data={cartData} countfun={increseCount} setshow={setshowcart } cartCount={counterApp}/>
                       </div>
                        
                    <div className="cart_footer">
                          <div className="subtotal">
                            <span className="text_subtotal">Subtotal</span>
                            <span className="number_total">&#8377;{totel}</span>
                          </div>
                          <div className="button">
                            <button className='checkput_cta' onClick={()=>handleCheckout(totel)}>Checkout</button>
                          </div>
                    </div>





                </div>

            </div>
            </div>
            )
}

            export default Cart


