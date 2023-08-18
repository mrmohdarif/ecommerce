import React from 'react'
import "../../section/categroy/categroy.css"
import phone from "../../content/categrey images/phone.webp"
import laptop from '../../content/categrey images/laptop.png'
import watch from '../../content/categrey images/watch.webp'
import headphone from '../../content/categrey images/headphone.webp'
import groceries from '../../content/categrey images/grocery.webp'
import applinces from '../../content/categrey images/applinces.png'
import { RiArrowDropDownLine } from "react-icons/ri"

function Category() {
  return (
    <section>
                <div className='cat_item_image'>
                      <div className="category">
                         <img src={groceries} alt="phone_image" className='cat_image' />
                         <div className='drop_down'>
                             <button className="subnavbtn">Grocery </button>
                             <RiArrowDropDownLine className="drop_down_aroow" />
                         </div>
                     </div>
                     <div className="category">
                         <img src={phone} alt="phone_image" className='cat_image' />
                         <div className='drop_down'>
                             <button className="subnavbtn">Mobile </button>
                             <RiArrowDropDownLine className="drop_down_aroow" />
                         </div>
                     </div>
                     <div className="category">
                         <img src={laptop} alt="" className='cat_image' />
                         <div className='drop_down'>
                             <button className="subnavbtn">Laptop </button>
                             <RiArrowDropDownLine className="drop_down_aroow" />
                         </div>
                     </div>
                     <div className="category">
                         <img src={watch} alt="" className='cat_image' />
                         <div className='drop_down'>
                             <button className="subnavbtn">Watch</button>
                             <RiArrowDropDownLine className="drop_down_aroow" />
                         </div>
                     </div>
                     <div className="category">
                         <img src={headphone} alt="" className='cat_image' />
                         <div className='drop_down'>
                             <button className="subnavbtn">Headphones </button>
                       <RiArrowDropDownLine className="drop_down_aroow" />
                         </div>
                     </div>
                     <div className="category">
                         <img src={applinces} alt="" className='cat_image' />
                        <div className='drop_down'>
                             <button className="subnavbtn">Appliances </button>
                             <RiArrowDropDownLine className="drop_down_aroow" />
                     </div>
                 </div> 
                    
      
    
                </div>
            </section>







  )
}

export default Category




