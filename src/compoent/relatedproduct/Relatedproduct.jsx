import React from 'react'
import earbud1 from '../../content/products/earbuds-prod-1.webp'
import { BsCurrencyRupee } from 'react-icons/bs'
function Relatedproduct() {
  return (
    <div>
          <div className="related_item_single">
        <h2 className='singlepage_related'>Related item</h2>
        <div className="singlepage_related_item">
          <div className='Item'>
            <div>
              <img src={earbud1} alt="earbud1" className='earbud' />
            </div>
            <div className="product_des">
              <span>TRebel Airdopes 141</span>
              <div className='price_section'>
                <div className='price_discount'>
                  <p className='price'><BsCurrencyRupee />1,399</p>
                  <span className='discount'><BsCurrencyRupee />4,449</span>
                </div>
                <button className='add_btn'>ADD</button>
              </div>
            </div>
          </div>
          <div className='Item'>
            <div>
              <img src={earbud1} alt="earbud1" className='earbud' />
            </div>
            <div className="product_des">
              <span>TRebel Airdopes 141</span>
              <div className='price_section'>
                <div className='price_discount'>
                  <p className='price'><BsCurrencyRupee />1,399</p>
                  <span className='discount'><BsCurrencyRupee />4,449</span>
                </div>
                <button className='add_btn'>ADD</button>
              </div>
            </div>
          </div>
          <div className='Item'>
            <div>
              <img src={earbud1} alt="earbud1" className='earbud' />
            </div>
            <div className="product_des">
              <span>TRebel Airdopes 141</span>
              <div className='price_section'>
                <div className='price_discount'>
                  <p className='price'><BsCurrencyRupee />1,399</p>
                  <span className='discount'><BsCurrencyRupee />4,449</span>
                </div>
                <button className='add_btn'>ADD</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Relatedproduct