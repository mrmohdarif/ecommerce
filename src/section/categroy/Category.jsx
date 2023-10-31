import React, { useState } from 'react'
import "../../section/categroy/categroy.css"
import phone from "../../content/categrey images/phone.webp"
import laptop from '../../content/categrey images/laptop.png'
import watch from '../../content/categrey images/watch.webp'
import headphone from '../../content/categrey images/headphone.webp'
import groceries from '../../content/categrey images/grocery.webp'
import applinces from '../../content/categrey images/applinces.png'
import { RiArrowDropDownLine } from "react-icons/ri"
import { submenu } from '../navSection/submenu'
import { filter_data } from '../navSection/submenu'
import { Link, useNavigate } from 'react-router-dom'
import { cat_item } from './categoryitem'

function Category() {
    const [show_grocery, setgrocery] = useState(false)
    const [show_phone, setphone] = useState(false)
    const [show_laptop, setlaptop] = useState(false)
    const [show_watch, setwatch] = useState(false)
    const [show_headphone, setheadphone] = useState(false)
    const [show_appliances, setappliances] = useState(false)


    const menu_show_grocery = () => {
        setgrocery(true)
    }
    const menu_show_phone = () => {
        setphone(true)
    }
    const menu_show_laptop = () => {
        setlaptop(true)
    }
    const menu_show_watch = () => {
        setwatch(true)
    }
    const menu_show_headphone = () => {
        setheadphone(true)
    }
    const menu_show_appliances = () => {
        setappliances(true)
    }
    const hide_menu_grocery = () => {
        setgrocery(false)
    }
    const hide_menu_phone = () => {
        setphone(false)
    }
    const hide_menu_laptop = () => {
        setlaptop(false)
    }
    const hide_menu_watch = () => {
        setwatch(false)
    }
    const hide_menu_headphone = () => {
        setheadphone(false)
    }
    const hide_menu_appliances = () => {
        setappliances(false)
    }
     



//     // /cat/grocery
//     // /auth/register
//     // /auth/login
//     // /cat/watch
//     // /cat/phone
//     // /cat/laptop
//     // /cat/headphone
//     // /cat/homeappliancess
//     // /cat/insertData



    return (
        <section>
            <div className='cat_item_image'>
               
                <div className="category" onMouseOver={menu_show_grocery} onMouseLeave={hide_menu_grocery}>
                    <Link to={'/'}><img src={groceries} alt="phone_image" className='cat_image' /></Link>
                  
                    <div className='drop_down' >
                        <div>
                            <button className="subnavbtn">Grocery </button>
                            {/* <RiArrowDropDownLine className="drop_down_aroow" /> */}
                        </div>
                        {/* {show_grocery && <div>
                            <ul className='grocery_ul'>
                                {submenu.map((item, index) => {
                                    if (item.type == "grocery") {

                                        return <li className='grocery_list' key={item.id}>{item.companey}</li>
                                    }


                                })}
                            </ul>
                        </div>} */}
                    </div>
                </div>
                <div className="category" onMouseOver={menu_show_phone} onMouseLeave={hide_menu_phone}>
                    <Link to={'/category/smartphones'}><img src={phone} alt="phone_image" className='cat_image' /></Link>
                    <div className='drop_down'>
                        <div>
                            <button className="subnavbtn">Mobile </button>
                            <RiArrowDropDownLine className="drop_down_aroow" />
                        </div>
                        {/* {show_phone && <div>
                            <ul className='grocery_ul'>
                                {submenu.map((item, index) => {
                                    if (item.type == "phone") {

                                        return <li className='grocery_list' key={item.id}>{item.companey}</li>
                                    }


                                })}


                            </ul>
                        </div>} */}

                    </div>
                </div>
                <div className="category" onMouseOver={menu_show_laptop} onMouseLeave={hide_menu_laptop}>
                    <Link to={'/category/laptops'}><img src={laptop} alt="" className='cat_image' /></Link>
                    <div className='drop_down'>
                        <div>
                            <button className="subnavbtn">Laptop </button>
                            <RiArrowDropDownLine className="drop_down_aroow" />
                        </div>
                        {/* {show_laptop && <div>
                            <ul className='grocery_ul'>


                                {submenu.map((item, index) => {
                                    if (item.type == "laptop") {

                                        return <li className='grocery_list' key={item.id}>{item.companey}</li>
                                    }

                                })}
                            </ul>
                        </div>} */}
                    </div>
                </div>
                <div className="category" onMouseOver={menu_show_watch} onMouseLeave={hide_menu_watch}>
                    <Link to={`/category/watch`}><img src={watch} alt="" className='cat_image' /></Link>
                    <div className='drop_down'>
                        <div>
                            <button className="subnavbtn">Watch</button>
                            <RiArrowDropDownLine className="drop_down_aroow" onMouseOver={menu_show_watch} onMouseLeave={hide_menu_watch} />
                        </div>
                        {/* {show_watch && <div>
                            <ul className='grocery_ul'>

                                {

                                    submenu.map((item, index, array) => {

                                        if (item.type == "watch") {

                                            return <li className='grocery_list' key={item.id}>{item.companey}</li>
                                        }
                                    })

                                }
                            </ul>
                        </div>} */}

                    </div>
                </div>
                <div className="category" onMouseOver={menu_show_headphone} onMouseLeave={hide_menu_headphone}>
                    <Link to={`/category/headphone`}><img src={headphone} alt="" className='cat_image' /></Link>
                    <div className='drop_down'>
                        <div>
                            <button className="subnavbtn">Headphones </button>
                            <RiArrowDropDownLine className="drop_down_aroow" onMouseOver={menu_show_headphone} onMouseLeave={hide_menu_headphone} />
                        </div>

                        {/* {show_headphone && <div>
                            <ul className='grocery_ul'>

                                {

                                    submenu.map((item, index, array) => {

                                        if (item.type == "headphone") {

                                            return <li className='grocery_list' key={item.id}>{item.companey}</li>
                                        }
                                    })

                                }

                            </ul>
                        </div>} */}

                    </div>
                </div>
                <div className="category" onMouseOver={menu_show_appliances} onMouseLeave={hide_menu_appliances}>
                     <Link to={`/category/homeappliances`}><img src={applinces} alt="" className='cat_image' /></Link>
                    <div className='drop_down'>
                        <div>
                            <button className="subnavbtn">Appliances </button>
                            <RiArrowDropDownLine className="drop_down_aroow" />
                        </div>
                        {/* {show_appliances && <div>
                            <ul className='grocery_ul'>
                                {

                                    submenu.map((item, index, array) => {

                                        if (item.type == "appliances") {

                                            return <li className='grocery_list' key={item.id}>{item.companey}</li>
                                        }
                                    })

                                }



                            </ul>
                        </div>} */}

                    </div>
                </div>
            </div>
        </section>







    )
}

export default Category




