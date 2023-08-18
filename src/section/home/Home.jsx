import React from 'react'
import Nav from '../navSection/Nav'
import Category from '../categroy/Category'
import Carousel from '../../section/carousel/Carousel'
import HomeItem from '../homeitem/HomeItem'
import Newsletter from '../newsletter/Newsletter'
import Footer from '../footer/Footer'
function Home() {
  return (
    <div>
        <Nav/>
         <Category/>
          <Carousel/>
          <HomeItem/>
          <Newsletter/>
          <Footer/>
    </div>
  )
}

export default Home

