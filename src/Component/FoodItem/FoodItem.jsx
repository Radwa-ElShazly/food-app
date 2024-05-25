import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets';
import footItemStyles from  "./FoodItem.module.css";
import { storeContext } from '../../Context/StoreContext';


export default function FoodItem({id, name, des, price, image}) {

 const {addToCart, removeFromCart, cartItems, setcartItems} =useContext(storeContext);


  return (
    <div className=" col-lg-3 col-md-6">
              <div className={footItemStyles.foodItem}>
           <div className="card p-0">
      <div className={footItemStyles.foodItemImgContainter}> 
      <img className={footItemStyles.foodItemImage} src={image} alt={name} /> 
      {!cartItems[id]?<img onClick={()=>addToCart(id)} className={footItemStyles.foodItemImgContainterAdd} src={assets.add_icon_white} alt={name}/>:
      <div className={footItemStyles.foodItemCounter}>
        <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="add" />
        <p className='pt-2'>{cartItems[id]}</p>
        <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="remove"/>
        </div>}

    </div>
  <div className="card-body">
  <div className="p-0">
      <div className={footItemStyles.footItemNameRating}>
        <p className={footItemStyles.foodItemNameRatingP}>{name}</p>
        <img className={footItemStyles.foodItemNameRatingImg} src={assets.rating_starts} alt={name} />
      </div>
    </div>


    <p className={footItemStyles.foodItemDesc}>{des}</p>
    <p className={footItemStyles.foodItemPrice}>${price}</p>
  </div>

</div>
      </div>
    </div>






  )
}
