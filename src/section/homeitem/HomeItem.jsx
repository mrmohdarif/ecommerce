import React from 'react'
import '../../section/homeitem/homeitem.css'
import earbud1 from '../../content/products/earbuds-prod-1.webp'
import { BsCurrencyRupee } from 'react-icons/bs'
import '../../section/homeitem/homeitem.css'
import { useNavigate } from 'react-router-dom'


function HomeItem(props) {
    console.log(props)
    const navigate = useNavigate()
    const groceriesCard = (id) => {
        navigate(`/product/${id}`, { state: { cardData: props.props, relatedCard: "groceries" } })
    }
    return (
        <main>
            <div className="cardItem">
            </div>
            <h1 className='product_heading'>{props.heading}</h1>
            <div className="cardItem">
                {props.props.map((item, index) => {

                    if (item.category === "groceries") {
                        console.log(item._id);
                        return <div className='Item' onClick={() => groceriesCard(`${item._id}`)}>
                            <div>
                                <img src={item.thumbnail} alt="earbud1" className='earbud' />
                            </div>
                            <div className="product_des">
                                <span>{item.title}</span>
                                <div className='price_section'>
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
        </main>
    )
}

export default HomeItem