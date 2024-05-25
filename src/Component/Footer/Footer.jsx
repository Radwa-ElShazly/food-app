import React, { useContext } from 'react'
import { assets } from '../../assets/assets';
import footerCss from'./Footer.module.css'
import { storeContext } from '../../Context/StoreContext';

export default function Footer() {
  const {contact} = useContext(storeContext);   

    return <>
    <div ref={contact} className={footerCss.footer} id='footer'>
      <div className="footer-content container">
      <div className="row">

        <div className="col-lg-5 col-md-12 mb-md-5 mb-sm-5 mb-4">                      
        <div className="footerContentLeft">

         <img className='mb-4' src={assets.logo} alt="logo" />

         <p>Lorem ipsum dolor sit amet consectetur adipisicing eos elit. Veniam tempora  et eveniet 
            quam obcaecati eaque hic ipsa distinctio. Face, reprehenderit quidem voluptates
             enim iste, nulla, expedita aliquid culpa tempore quasi dicta maiores. Sunt veniam  
             non,
               adipisci quidem debitis ipsam facilis.</p>


          <div className={footerCss.footerSocialIconsImg}>
            <img className='ps-0 pe-2' src={assets.facebook_icon} alt="facebookIcon" />
            <img  className=' px-2' src={assets.twitter_icon} alt="twitterIcon" />
            <img  className='px-2' src={assets.linkedin_icon} alt="linkedinIcon" />
          </div>


      </div>
            
        </div>




        <div className="col-lg-7 col-md-12  d-flex justify-content-around">
        <div className="footerContentCenter">
        <h2 className='text-white'>COMPANY</h2>

    
        <ul className="nav d-flex flex-column text-decoration-none ms-2">
                 <li className="nav-item">
                      Home
                  </li>
                 <li className="nav-item">
                      About
                  </li>
                 <li className="nav-item">
                    Delivery
                  </li>
                 <li className="nav-item">
                      Privacy Policy
                  </li>
        </ul>
      </div>
                    
                     <div className="footerContentRight">
       <h2 className='text-white'>Get IN TOUCH</h2>
       <ul className='list-unstyled ms-2'>
        <li>+1-212-456-7890</li>
        <li className='ms-1'>contact@tomato.com</li>
       </ul>
      </div>

            </div>





            </div>







   <div className={footerCss.line}> </div>
   <p className='text-center pb-2 pt-5'>coypright 2024 © RadwaElshazly.com - All Right Reserver</p>
      </div>



    
    </div>
    </>
  
}
