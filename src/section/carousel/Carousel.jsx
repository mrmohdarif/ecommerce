import React from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import headphone from '../../content/caursol/headphone.webp'

import phone from '../../content/caursol/phone.jpg'
import appalinces from '../../content/caursol/appalinces.jpg'
import blutooth from '../../content/caursol/blutooth.jpg'
import grocery from '../../content/caursol/grocery.webp'
import smartwatch from '../../content/caursol/smartwatch.jpg'
import wireless from '../../content/caursol/wireless.jpg'
import '../../section/carousel/carosel.css'
function slide() {
  return (
    <div className='cursol'>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 caursol"
          src={headphone}
          alt="First slide"
          
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

     
      <Carousel.Item>
        <img
          className="d-block w-100 caursol"
          src={phone}
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 caursol"
          src={appalinces}
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 caursol"
          src={blutooth}
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 caursol"
          src={grocery}
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 caursol"
          src={smartwatch}
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 caursol"
          src={wireless}
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      {/* Add more Carousel.Items for additional slides */}
    </Carousel>
    </div>
  )
}

export default slide