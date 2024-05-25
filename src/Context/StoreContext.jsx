import React, { createContext, useEffect, useRef, useState } from 'react';
import { food_list } from "../assets/assets"
 export const storeContext =createContext();
export default function StoreContextProvider({children}) {
const [cartItems, setcartItems] = useState({});
const home=useRef(null);
const menu =  useRef(null);
const mobile =  useRef(null);
const contact =  useRef(null);

const scrollToSection = (elementRef) => {
  if (elementRef.current) {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  } 
};
const addToCart=(itemId)=>{
  if(!cartItems[itemId]){
     setcartItems((prev)=>({...prev,[itemId]:1}))
  }else{
    setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
  }
}
const removeFromCart=(itemId)=>{
    setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

}

useEffect(() => {
  return () => {
   console.log(cartItems);
  }
}, [cartItems])


const contextValue={
    food_list
}

const getTotalCartAmount=()=>{
let totalAmount =0;
for (const item in cartItems){
  if(cartItems[item]>0){
     let itemInfo =food_list.find((product)=>{
  return product._id ===item
 })
 totalAmount +=itemInfo.price * cartItems[item]
  }

}
return totalAmount
}

  return (
    <storeContext.Provider value={{values:contextValue, addToCart, removeFromCart, cartItems, setcartItems, scrollToSection, menu, mobile, contact,home, getTotalCartAmount}}>
        {children}
    </storeContext.Provider>
  )
}


