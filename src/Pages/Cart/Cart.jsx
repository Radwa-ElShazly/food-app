import React, { useContext } from 'react'
import { storeContext } from '../../Context/StoreContext'
import cartCSS from './Cart.module.css';
import { useNavigate } from 'react-router-dom';
export default function Cart() {
    const {values , cartItems, removeFromCart, getTotalCartAmount} = useContext(storeContext)
    const navigate = useNavigate();
    const filteredList = values.food_list.filter(item => cartItems[item._id]> 0);
  return (
    <>


<div className="container mt-5">


        <div className="row align-items-center justify-content-center m-auto pe-5">
          <div className="col-4 col-md-2 text-center  mb-2 mb-md-0">
            <div className="imageContent p-2 rounded  fw-bold">
            Items
            </div>
          </div>
          <div className="col-4 col-md-2 text-center mb-2 mb-md-0">
            <p className="m-0 fw-bold"> Title </p>
          </div>
          <div className="col-4 col-md-2 text-center mb-2 mb-md-0">
            <p className="m-0 fw-bold">  Price </p>
          </div>
          <div className="col-4 col-md-2 text-center mb-2 mb-md-0">
            <p className="m-0 fw-bold">Quantity</p>
          </div>
          <div className="col-4 col-md-2 text-center mb-2 mb-md-0">
            <p className="m-0 fw-bold">Total</p>
          </div>
          <div className="col-4 col-md-2 text-center">
            <p className='fw-bold'> Remove</p>
          </div>
        </div>
    {filteredList.map((item, index) => (
      <div key={index} className="col-12  mb-4  border-bottom pe-4">
        <div className="row align-items-center justify-content-center m-auto pe-5">
          <div className="col-12 col-md-2 text-center mb-2 mb-md-0">
            <div className="imageContent p-2 rounded">
              <img className="w-100 rounded" src={item.image} alt="image" />
            </div>
          </div>
          <div className="col-12 col-md-2 text-center mb-2 mb-md-0">
            <p className="m-0">{item.name}</p>
          </div>
          <div className="col-12 col-md-2 text-center mb-2 mb-md-0">
            <p className="m-0">{item.price}</p>
          </div>
          <div className="col-12 col-md-2 text-center mb-2 mb-md-0">
            <p className="m-0">{cartItems[item._id]}</p>
          </div>
          <div className="col-12 col-md-2 text-center mb-2 mb-md-0">
            <p className="m-0">{item.price * cartItems[item._id]}</p>
          </div>
          <div className="col-12 col-md-2 text-center">
            <i onClick={() => removeFromCart(item._id)} className="fa-solid fa-xmark cursor-pointer"></i>
          </div>
        </div>
      </div>
    ))}

</div>


    <div className="contanier m-auto w-75 mt-5 pt-5">

        <div className="row gx-5">
          <div className="col-lg-6 col-md-12 pe-5"> 
          <div className="content pe-5">
                      <h2 className='mb-4 fs-3 fw-bold'>Cart Total</h2>
        <div className="cartDetails d-flex justify-content-between ps-1 my position-relative">
          <p>subtotal</p>
          <p>${getTotalCartAmount()}</p>
          <div className={cartCSS.line}></div>
        </div>
        <div className="cartDetails d-flex justify-content-between ps-1  position-relative">
          <p >Delivery Fee</p>
          <p>${getTotalCartAmount()===0?0:2}</p>
          <div className={cartCSS.line}></div>

        </div>
        <div className="cartDetails d-flex justify-content-between ps-1  position-relative mb-3">
          <p >Total</p>
          <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
    

        </div>
        <button onClick={()=>navigate('/placeorder')} className={cartCSS.btnCart}>PROCEED TO CHECKOUT</button>
          </div>

          </div>

          <div className="col-lg-6 col-md-12 ps-lg-5 ps-0  px-lg-0 px-5">
            <div className="content ps-lg-5 ps-4 pt-md-4 pt-4  px-lg-0 px-5">
                                <p className='mb-3'>If you have a promo code, Enter it here</p>
                  <div className="d-flex">
                    <input className='form-control rounded rounded-0 bg-secondary-subtle' type="text"  placeholder='promo Codo'/>
                    <button className='bg-black text-white border-0 px-5'>Submit</button>
                  </div>
            </div>

          </div>

        </div>
   </div> 
           
           
    </>

  )
}
