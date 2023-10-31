import React, { useEffect, useState } from 'react'
import Nav from '../navSection/Nav'
import Category from '../categroy/Category'
import Carousel from '../../section/carousel/Carousel'
import HomeItem from '../homeitem/HomeItem'
import Newsletter from '../newsletter/Newsletter'
import Footer from '../footer/Footer'
import axios from 'axios'

function Home() {
  const [Data,setData]=useState([])
  useEffect(() => {
    getchData()
  }, [])

  const getchData=async()=>{
    const response=await axios.get('https://ecommercebackend-ehsf.onrender.com/')
    try{
      console.log(response.data);
      setData(response.data)
    }
    catch(err)
    {
      console.log(err);
    }
  }
  return (
    <div>
      <Nav/>
      <Category/>
      <Carousel/>
      <HomeItem props={Data} heading="Daily Items"/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home


// import Nav from '../navSection/Nav'
// import Category from '../categroy/Category'
// import Carousel from '../../section/carousel/Carousel'
// import HomeItem from '../homeitem/HomeItem'
// import Newsletter from '../newsletter/Newsletter'
// import Footer from '../footer/Footer'
// function Home() {
  
//   return (
//     <div>
//         <Nav/>
//          <Category/>
//           <Carousel/>
//           <HomeItem />
//           <Newsletter/>
//           <Footer/>
//     </div>
//   )
// }

// export default Home

