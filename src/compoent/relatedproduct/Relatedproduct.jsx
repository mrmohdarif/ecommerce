import React from 'react'
import earbud1 from '../../content/products/earbuds-prod-1.webp'
import { BsCurrencyRupee } from 'react-icons/bs'
import { useLocation, useNavigate } from 'react-router-dom';



function Relatedproduct(props) {
  const location=useLocation()
  const navigate=useNavigate()
  console.log(location)
  const relatedCard=props.relatedCard

  const relatedCategory=location.state.relatedCard
  console.log(relatedCard);
  console.log(relatedCategory);
  const handleRelatedCard=(id)=>{
    navigate(`/product/${id}`,{state:{cardData:relatedCard}})
  }

  return (
    <div>
      <div className="related_item_single">
        <h2 className='singlepage_related'>Related item</h2>
        <div className="singlepage_related_item">
             {props.relatedCard.filter((item,index)=>item.category===`${relatedCategory}`).map((value,index)=>{
              console.log(value._id)
            if(index<=2)
            {
              return <div className='Item' onClick={()=>handleRelatedCard(`${value._id}`)}>
            <div>
              <img src={value.thumbnail} alt="earbud1" className='earbud' />
            </div>
            <div className="product_des">
              <span>{value.title}</span>
              <div className='price_section'>
                <div className='price_discount'>
                  <p className='price'><BsCurrencyRupee />{value.price}</p>
                  <span className='discount'><BsCurrencyRupee />{value.price}</span>
                </div>
                <button className='add_btn'>ADD</button>
              </div>
            </div>
          </div>  
            }
                              
             })}
        </div>
      </div>
    </div>
  )
}

export default Relatedproduct