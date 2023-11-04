import React, {useState } from 'react'
import { MdClose } from 'react-icons/md'
import watch from '../../content/categrey images/watch.webp'
import '../../compoent/cart_item/cart_item.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Cart_item(props) {
  console.log(props)
  const [id,setId]=useState(null)
 const [count,setCount]=useState(1)
  console.log(props.data)
  const userId=localStorage.getItem('userId')

  const handleIncrese=(id)=>{
      console.log("elllo",id)
      axios.post("https://ecommercebackend-ehsf.onrender.com/cat/increseqty",{id,userId}).then((res)=>{
      console.log(res.data.quantity,res);
       setCount(res.data.quantity)
       props.countfun()
     }).catch((err)=>{
       console.log(err);
     })
   
  }

  const handleDecrese=(id)=>{
    axios.post("https://ecommercebackend-ehsf.onrender.com/cat/decreseqty",{id,userId}).then((res)=>{
     console.log(res);
     props.countfun()
    }).catch((err)=>{
      console. 
      log(err);
    })
  }
  const deleteCart=(id)=>{
    const userId=localStorage.getItem('userId')
    // console.log("hello delete cart")
    axios.post("https://ecommercebackend-ehsf.onrender.com/cat/deletecart",{id,userId}).then((res)=>{
      props.countfun()
      props.cartCount()
    console.log(res);
     }).catch((err)=>{
       console.log(err);
     })
  }
  return (
    <>
     {props.data.map((item,index)=>{
      console.log(item)
      return <div className='cart_products'>
      <div className="card_product">
          <img src={item.product.thumbnail} className='cart_item_img'/>  
      </div>
      <div className="product_details">
          <span>{item.product.title}</span>
          <MdClose className='close_btn' onClick={()=>deleteCart(item.product._id)}/>
          <div className="qty_btns">
          <span className='qty_btn qty_btn_color' onClick={()=>handleIncrese(item.product._id)}>+</span>
          <span className='qty_btn'>{item.quantity}</span>
         
          <span className='qty_btn qty_btn_color' onClick={()=>{handleDecrese(item.product._id)}}>-</span>
        </div>
        <div className="cart_item_text">
           <span>{item.quantity}</span>
          <span className='cross'>X</span>
          <span>&#8377;{item.product.price}=&#8377;{item.product.price*item.quantity}</span>
        </div>
      </div>
</div>
    })}
    </>
   
    
  )
}

export default Cart_item