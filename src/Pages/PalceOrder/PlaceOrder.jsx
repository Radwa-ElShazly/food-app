import React, { useContext } from 'react'
import { storeContext } from '../../Context/StoreContext';
import PlaceOrderCSS from './PalceOrder.module.css'

export default function PlaceOrder() { 

  const { getTotalCartAmount} = useContext(storeContext);
    return ( <div>
           <div className="container">

              <div className="row gy-5 mt-1 mb-5 ">
              <div className="col-lg-6 col-12 px-5">
                <div className="inputsForm pe-5">
                <div  className='mb-4 fs-3 fw-bold'>
                Delivery Information
              </div>
              <div className="row mt-5 mb-2  g-2">
                <div className="col-6">
                      <input type="text" placeholder='FirstName' className='form-control'/>
                </div>
                <div className="col-6">
                <input type="text" placeholder='LastName' className='form-control'/>  
                  </div>
              </div>
               
                      
                 <input type="email" placeholder='Email address' className='form-control mb-2'/>
                 <input type="City" placeholder='Street' className='form-control mb-2'/>

                 <div className="row  mb-2 g-2">
                  <div className="col-6">
                  <input type="City" placeholder='City' className='form-control'/>
                  </div>
                  <div className="col-6">
                  <input type="text" placeholder='State' className='form-control'/>
                    </div>
                 </div>
              


                 <div className="row  mb-2  g-2">
                  <div className="col-6">
                  <input type="text" placeholder='Zip code' className='form-control'/>
                  </div>
                  <div className="col-6">
                  <input type="text" placeholder='country' className='form-control'/>
                    </div>
                 </div>


              
              
            
                <input type="phone" placeholder='Phone' className='form-control mb-2'/>
           
              
                </div>
              </div>
              <div className="col-lg-6 col-12">
                              <div className="content ps-5  px-5 px-lg-0">
                                <h2 className='mb-4 fs-3 fw-bold'>Cart Total</h2>
                            <div className="cartDetails d-flex justify-content-between ps-1 my position-relative">
                                  <p>subtotal</p>
                               <p>${getTotalCartAmount()}</p>
                         <div className={PlaceOrderCSS.line}></div>
                               </div>
                              <div className="cartDetails d-flex justify-content-between ps-1  position-relative">
                              <p >Delivery Fee</p>
                            <p>${getTotalCartAmount()===0?0:2}</p>
                             <div className={PlaceOrderCSS.line}></div>
 
                          </div>
                            <div className="cartDetails d-flex justify-content-between ps-1  position-relative mb-3">
                         <p >Total</p>
                        <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>


                            </div>
                         <button className={PlaceOrderCSS.btnOrder}>PROCEED TO PAYMENT</button>
                         </div>
                          </div>

              </div>
           </div>
        </div>
    );
}


