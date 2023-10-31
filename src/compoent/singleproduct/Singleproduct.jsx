import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import { useLocation, useParams } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { increment } from '../../store/counterSlice'
import axios from 'axios'
function Singleproduct() {
  const dispatch=useDispatch()
   let [Qty, setQty] = useState(1)
  const [Card, setCard] = useState([])
  const location = useLocation()
  const param = useParams()
  const Data = location.state.cardData
  const DataCategorey = location.state.relatedCard
  const id = param.id
  console.log(Data, id,location,DataCategorey);
  //  console.log(location.state.cardData)
  //  console.log(param);
  const handleDec = () => {
    if (Qty <= 1) {
      return Qty
    }
    setQty(Qty - 1)
  }
  const handlIec = () => {
    setQty(Qty + 1)
  }
  //  const items={
  //    productId:id,
  //    itemqty:`${Qty}`
  //  }
   const cartData=(id)=>{
    console.log(id);
    const userId=localStorage.getItem('userId')
    const items={
      productId:id,
      userId:userId,
      itemqty:`${Qty}`
    }
     axios.post(`http://localhost:8000/cart/cartData`,items).then((res)=>{
          
     console.log(res)
     if(res.status==200)
     {
      alert(res.data)
      setQty(1)
      toast(res.data);
     }
     }).catch((err)=>{
        console.log("something wrong in cart axios",err)
     })
   }
  return (
    <div>
      <Nav />
      {Data.filter((item, index) =>item._id===id).map((item,index)=>{
        console.log(item)
        return <div className="singleproduct_main_content">
           <div className='left'>
             <img src={item.thumbnail} alt="" className='single_product_img' />
           </div>
           <div className='right'>
             <div className="product_name">{item.title}</div>
             <div className="single_price"><BsCurrencyRupee />{item.price}</div>
             <div className="description">
               {item.description}
             </div>
             <div className="card_btn">
               <div className="qty_btn_add_btn">
                 <div className="qty_btns">
                   <span className='qty_btn qty_btn_color' onClick={handleDec}>-</span>
                   <span className='qty_btn'>{Qty}</span>
                   <span className='qty_btn qty_btn_color' onClick={handlIec}>+</span>
                 </div>
                 <div className="add_to_card_button">
                   <button className='add_to_cart'  onClick={()=>cartData(item._id,Qty)}> <AiOutlineShoppingCart />ADD TO CART</button>
                   <ToastContainer />
                 </div>
               </div>


               <div className="product_info">
                 <span><span className="text_info1">Category:</span><span>{item.category}</span></span>
                 <span><span className="text_info2">Share:</span><span className='social_icons_single_product'>
                   <span><TiSocialLinkedin className='single_page_icon1' /></span>
                   <span><SlSocialInstagram className='single_page_icon2' /></span>
                   <span><TiSocialYoutube className='single_page_icon3' /></span>
                 </span></span>
               </div>
             </div>
           </div>
         </div>
      })}
      <Relatedproduct relatedCard={Data} categorey={`${DataCategorey}`}/>
      <Footer />
    </div>
  )
}

export default Singleproduct