import React, { useContext, useState } from 'react';
import ExploreMenu from '../../Component/ExploreMenu/ExploreMenu';
import Header from '../../Component/Header/Header';
import FoodDisplay from '../../Component/FoodDisplay/FoodDisplay';
import AppDownloud from '../../Component/AppDownloud/AppDownloud';



export default function Home() {
   const [category, setCategory] =useState('All');
  return (<>
             <Header />
            <ExploreMenu category={category} setCategory={setCategory}/>
            <FoodDisplay  category={category}/>
            <AppDownloud/>


    </>
  )
}
