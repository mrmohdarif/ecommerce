import React, { useEffect, useState } from 'react'
import Nav from '../../section/navSection/Nav'
import Footer from '../../section/footer/Footer'
import Homeitem from '../../section/homeitem/HomeItem'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Category from '../../section/categroy/Category'
import { BsCurrencyRupee } from 'react-icons/bs'
import '../catitem/catitem.css'
import { Link } from 'react-router-dom'

function Catitem() {

  const [Data, setData] = useState([])
  const navigate=useNavigate()
  const location = useLocation()
  console.log(location);
  const id = useParams()
  const categ = id.id
  console.log(categ);
  useEffect(() => {
    fetchData()
  },[categ])
  

  const fetchData = async () => {
    const response = await axios.get(`https://ecommercebackend-ehsf.onrender.com/cat/${categ}`)
    try {
      console.log(response);
      setData(response.data)
    }
    catch (err) {
      console.log(err);
    }
  }
  const product_full_details_handle=(id)=>{
    navigate(`/product/${id}`,{state:{cardData:Data,relatedCard:`${categ}`}})
  }


  return (
    <div>
      <Nav />
      <Category />
      <h1>Latest,Products</h1>
      {/* <Homeitem/> */}
      <div className="cardItem">
        {Data.map((item, index) => {
          if (item.category === `${categ}`) 
          {
            return <div className='Item' key={item._id} >
              <div onClick={()=>product_full_details_handle(`${item._id}`)}>
                <img src={item.thumbnail} alt="earbud1" className='earbud' />
              </div>
              <div className="product_des">
                <span>{item.title}</span>
                <div cla 
                ssName='price_section'>
                  <div className='price_discount'>
                    <p className='price'><BsCurrencyRupee />{item.price}</p>
                    <span className='discount'><BsCurrencyRupee />{item.discountPercentage}</span>
                  </div>
                  <button className='add_btn'>ADD</button>
                </div>
              </div>
            </div>
          }


        })}
      </div>
      <Footer />
    </div>
  )
}

export default Catitem