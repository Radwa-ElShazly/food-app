import React, { useContext } from "react";
import { storeContext } from '../../Context/StoreContext';
import { menu_list } from '../../assets/assets';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import exploreCSS from './Explore.module.css';

function ExploreMenu({ category, setCategory }) {
  const { menu } = useContext(storeContext);
  
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
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
                      className={exploreCSS.img}
                      onClick={() => setCategory(item.menu_name)} 
                      src={item.menu_image} 
                      alt={item.menu_name} 
                    />
                    <div  id={category === item.menu_name ? exploreCSS.active : ""} className={`position-absolute`}></div>
                  </div>
                  <div className="text-center pe-5">
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
