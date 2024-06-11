import React, { useContext } from "react";
import { storeContext } from '../../Context/StoreContext';
import { menu_list } from '../../assets/assets';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import exploreCSS from './Explore.module.css';
import { useMediaQuery } from "react-responsive";

function ExploreMenu({ category, setCategory }) {
  const smallDevices = useMediaQuery({ maxWidth: 768 }); 
  const mediumDevices = useMediaQuery({ maxWidth: 991.98 }); 
  const largeDevices = useMediaQuery({ maxWidth: 1199.98 }); 
  const XLargeDevices = useMediaQuery({ maxWidth: 1299.98 }); 
  const xxLargeDevices = useMediaQuery({ maxWidth: 1350.98 }); 

  const { menu } = useContext(storeContext);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: smallDevices?2: mediumDevices?3:largeDevices?4: XLargeDevices?5:xxLargeDevices? 6:7,
    slidesToScroll: 3
  };
  

  return (
    <div className="slider-container py-3">
      <div  ref={menu} className={exploreCSS.container}>
       <div className="categoryContent mt-5">
                <h1>Explore Our Menu</h1>
                 <p className='exploreMenuText mb-5'>                    
                  Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your
                     cravings and elevate your dining experience, one delicious meal at a time.
                </p>
           </div>
        <div className="">
          <Slider {...settings}>
            {menu_list.map((item, indx) => (
                <div key={indx} className="contentExplore py-3">
                  <div className={`${exploreCSS.contentItem} position-relative text-center`}>
                    <img 
                      // className={exploreCSS.img}
                      onClick={() => setCategory(item.menu_name)} 
                      src={item.menu_image} 
                      alt={item.menu_name} 
                    />
                    <div  id={category === item.menu_name ? exploreCSS.active : ""} className={`position-absolute`}></div>
                  </div>
                  <div className="text-center pe-xxl-5 me-xxl-2 pe-xl-2 me-xl-0 pe-md-5 me-md-5  pe-5 me-5">
                        <p className="mt-2">{item.menu_name}</p>   
                  </div>
              
                </div>
            ))}
          </Slider>  
        </div>
      </div>
    </div>
  );
}

export default ExploreMenu;
