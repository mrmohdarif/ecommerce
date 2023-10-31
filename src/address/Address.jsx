import React, { useState } from 'react'
import Nav from '../section/navSection/Nav'
import '../address/address.css'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'





function Address() {
  // const [data,setdata]=useState([])
  const [Pincodefound, Pincodesetfound] = useState([])
  const [postoffice, setpostoffice] = useState()
  const [office, setoffice] = useState('')
  const [officemsg, setofficemsg] = useState()
  const location = useLocation()
  const navigate = useNavigate()
  // console.log(location.state.Data);
  // console.log(location.state.amount);
  // setdata(location.state.Data)
  // console.log(location)
  const handlepincode = (e) => {
    console.log(e.target.value);
    axios.get(`https://api.postalpincode.in/pincode/${e.target.value}`).then((res) => {
      console.log(res)
      console.log("this is", res.data[0].PostOffice)
      Pincodesetfound(res.data[0].Message)
      if (res.data[0].PostOffice == null) {
        setpostoffice(null)
      }
      else {
        setpostoffice(res.data[0].PostOffice)
      }
    }).catch((err) => {
      console.log('something went wrongs');
    })
  }
  const handlepostOffice = (e) => {
    setoffice(e.target.value)
    // axios.get(`https://api.postalpincode.in/postoffice/${e.target.value}`).then((res) => {
    //   // console.log(res.data[0].PostOffice[0])
    //   console.log(res)

    //     setoffice(res.data[0].PostOffice[0])


    //   setofficemsg(res.data[0].Message)
    // }).catch((err) => {
    //   console.log('something went wrongs');
    // })
  }
  const handleAddress = (e) => {
    e.preventDefault()
    axios.get(`https://api.postalpincode.in/postoffice/${office}`).then((res) => {
      console.log(res.data[0])
      console.log(res.data[0].PostOffice[0].Name === `${office}`)
      // console.log(res.data[0].PostOffice[0])
      console.log("hello")
      if (res.data[0].PostOffice[0].Name === `${office}`) {

        console.log(res.data[0].Status)
        setoffice(res.data[0])
      }

      // setoffice(res.data[0].PostOffice[0])


      // setofficemsg(res.data[0].Message)
    }).catch((err) => {
      console.log('something went wrongs');
    })
  }
  // console.log("postoffice",postoffice);
  // console.log("this is post office",office.Status);

  // const HandleSave=(e)=>{
  //   e.preventDefault()
  //   const userId=localStorage.getItem('userId')
  //   const address={
  //     postoffice:office.PostOffice[0].Name,
  //     district:office.PostOffice[0].District,
  //     pincode:office.PostOffice[0].Pincode,
  //     region:office.PostOffice[0].Region,
  //     state:office.PostOffice[0].State,
  //     country:office.PostOffice[0].Country
  //   }
  //   console.log(address);
  //   axios.post('http://localhost:8000/api/order/userAddress',{'address':address,'userId':userId}).then((res)=>{
  //      console.log(res)
  //   }).catch((err)=>{
  //     console.log(err);
  //   })
  // }
 
  const handleOpenRozerpay = (data) => {
    var options = {
      "key": 'rzp_test_wS7cfi9XTJF4ua', // Enter the Key ID generated from the Dashboard
      "amount": data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Mainstreet Shopping",
      "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response) {
        console.log(response)
       
        // axios.post('http://localhost:8000/api/order/payment/verify', { response }).then((res) => {
        //   console.log(res)
        // }).catch((err) => {
        //   console.log(err)


        // })
      },
      "theme": {
        "color": "#E11546"
      }
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response) {
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.order_id);
      console.log(response.error.metadata.payment_id);
    });
    rzp1.open()
  }
  const handlePayment = (paidamount, amount) => {
    console.log(paidamount, amount)
    const userId = localStorage.getItem('userId')
    const address = {
      postoffice: office.PostOffice[0].Name,
      district: office.PostOffice[0].District,
      pincode: office.PostOffice[0].Pincode,
      region: office.PostOffice[0].Region,
      state: office.PostOffice[0].State,
      country: office.PostOffice[0].Country
    }
    const data = {
      'address': address,
      'userId': userId,
      'cart': location.state.Data,
      'payment': { 'paidAmount': paidamount, 'amount': amount },
    }
    console.log(address);
    axios.post('https://ecommercebackend-ehsf.onrender.com/api/order/userAddress', data).then((res) => {
      console.log(res.data)
      handleOpenRozerpay(res.data)
      if (res.status == 200) {
        alert("Your order place sucessfully")
        // navigate('/')
      }
    }).catch((err) => {
      console.log(err);
    })

  }
  return (
    <div>
      <div className="address">
        <Nav />
        <div className="main">
          <div>
            <h2>Enter Your Delevery Address</h2>
            <span>{Pincodefound}</span>
            {postoffice == null ? <span></span> : postoffice.map((postofficeName, index) => {
              return <div>
                <li>{postofficeName.Name}</li>
              </div>
              {/* console.log(postofficeName); */ }
            })}
            <form action="">

              <input type="number" name="" id="" className="address_box" placeholder='Enter Your Delevery Pincode' onChange={handlepincode} />
              <input type="text" name="" id="" className="address_box" placeholder='Enter Your Post Office' onChange={handlepostOffice} />
              <span>{officemsg}</span>
              <button className='address_btn get_addresss_btn' onClick={handleAddress}>Get Address</button>
              {/* // <input type="text" name="" id="" className="address_box get_addresss" placeholder='Enter your full address with pin code' /> */}
              <div>
                {office.Status == 'Success' ? <h3>Delevery Address</h3> : ""}
                {office.Status == 'Success' ? <table border='1'>
                  <tr>
                    <th>Post Office</th>
                    <td>{office.PostOffice[0].Name}</td>
                  </tr>
                  <tr>
                    <th>District</th>
                    <td>{office.PostOffice[0].District}</td>
                  </tr>
                  <tr>
                    <th>Pincode</th>
                    <td>{office.PostOffice[0].Pincode}</td>
                  </tr>
                  <tr>
                    <th>Region</th>
                    <td>{office.PostOffice[0].Region}</td>
                  </tr>
                  <tr>
                    <th>State</th>
                    <td>{office.PostOffice[0].State}</td>
                  </tr>
                  <tr>
                    <th>Country</th>
                    <td>{office.PostOffice[0].Country}</td>
                  </tr>
                </table> : ""}
              </div>
              {/* {office.Status=='Success'?<button className='address_btn' onClick={HandleSave}>Save</button>:""} */}
            </form>
            <h3>Order Details</h3>
          </div>


          <div className="payment_product">

            <div className='product'>
              {location.state.Data.map((item, index) => {
                // console.log(item)
                return <div className='products_main_div'>
                  <div className="image">
                    <img src={item.product.thumbnail} alt="product_image" srcset="" />
                  </div>
                  <div className="name_amount">
                    <p>{item.product.title}</p>
                    <h6>Price:{item.quantity}*{item.product.price}={item.quantity * item.product.price}</h6>
                  </div>
                </div>
              })}
            </div>
            <div className="payment_details">

              <div className="payment_details">
                <h4>Payment Details</h4>
                <p>Special offer 10% discount</p>
                <table border='1'>
                  <tr>
                    <th>Price (Item {location.state.Data.length})</th>
                    <td>{location.state.amount}</td>
                  </tr>
                  <tr>
                    <th>Discount</th>
                    <td>&#8377;{location.state.amount * 10 / 100}</td>
                  </tr>
                  <tr>
                    <th className='paid'>Paid amount</th>
                    <td>&#8377;{location.state.amount - location.state.amount * 10 / 100}</td>
                  </tr>
                </table>
              </div>
              <div className='payment_div'>
                <button className='payment_btn' onClick={() => { navigate(-1) }}>Back</button>
                <button className='payment_btn' onClick={() => { handlePayment(`${location.state.amount - location.state.amount * 10 / 100}`, location.state.amount) }}>Payment</button>
              </div>
            </div>
          </div>
          <br />
        </div>


      </div>
      {/* <button>Back</button> */}
    </div>
  )
}

export default Address