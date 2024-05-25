import React, { useContext, useState } from 'react';
import { storeContext } from '../../Context/StoreContext';
import FoodDisplayCSS from './FoodDisplay.module.css';
import FoodItem from '../FoodItem/FoodItem';

export default function FoodDisplay({ category}) {
console.log(category);
  const { values ,mobile} = useContext(storeContext);
  console.log(values);

  
  const filteredFoodList = values.food_list.filter(item => category === 'All' || category === item.category);

  return (
    <div ref={mobile} className="container m-auto my-5 position-relative  px-sm-3 px-md-2 px-lg-1 p-md-2 p-sm-2 px-5 " id='foodDisplay'>
      <h3 className={FoodDisplayCSS.foodDisplayh2}>Top dish near you</h3>
      <div className="row  gy-4">
        {filteredFoodList.map((item, index) => (
          <FoodItem
            key={item._id} // Unique key for each item
            id={item._id}
            name={item.name}
            des={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
      <div className={FoodDisplayCSS.line}></div>
    </div>
  );
}



