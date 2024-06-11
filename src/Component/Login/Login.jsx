import React from 'react'
import LoginCSS from "./Login.module.css";
export default function Login() {
  return  <>
<div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">

    
    <div className="modal-content">



      <div className="header  d-flex justify-content-between m-3 mx-4">
        <h5 className="modal-title= fs-3" id="exampleModalLabel">Login</h5>
        <button type="button" className="btn-close mt-2" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>



      <div className={LoginCSS.body}>
      <input type="email" className="form-control mb-3" id="exampleFormControlInput2" placeholder="Your email"/>
      <input type="password" className="form-control mb-3" id="exampleFormControlInput3" placeholder="Your password"/>
      <button type="button" className={LoginCSS.btn} >Login</button>
   

   <div className="d-flex">
          <input className="form-check-input me-3" type="checkbox" value="" id="flexCheckDefault"></input>
       <p className={LoginCSS.bodyP}>By countinuing, iagree to the terms of use & privacy policy</p>
      
   </div>
    <div className={LoginCSS.bodyLogin}>Already have an account? <span  type="button" data-bs-toggle="modal" data-bs-target="#LoginModel"  className={LoginCSS.link}> Click here</span></div>
      </div>



    </div>
  </div>
</div>






<div className="modal fade" id="LoginModel" tabIndex="-1" aria-labelledby="LoginModelLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="header  d-flex justify-content-between m-3 mx-4">
        <h5 className="modal-title= fs-3" id="LoginModelLabel">Sign Up</h5>
        <button type="button" className="btn-close mt-2" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>



      <div className={LoginCSS.body}>
      <input type="text" className="form-control mb-3" id="exampleFormControlInput1" placeholder="Your Name"/>
      <input type="email" className="form-control mb-3" id="exampleFormControlInput2" placeholder="Your email"/>
      <input type="password" className="form-control mb-3" id="exampleFormControlInput3" placeholder="Your password"/>
      <button type="button" className={LoginCSS.btn} >Create account</button>
   

   <div className="d-flex">
          <input className="form-check-input me-3" type="checkbox" value="" id="flexCheckDefault"></input>
       <p className={LoginCSS.bodyP}>By countinuing, iagree to the terms of use & privacy policy</p>
      
   </div>
    <div className={LoginCSS.bodyLogin}>Create a new account? <span type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"  className={LoginCSS.link}> Login here</span></div>



      </div>






    </div>
  </div>
</div>
  </> 


}
