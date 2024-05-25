import React, { Component } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Pages/Layout/Layout';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/PalceOrder/PlaceOrder';
import StoreContextProvider from './Context/StoreContext';
import NotFounded from './Component/NotFounded/NotFounded';


const myRouter=createBrowserRouter([
  {path:'/',element:<Layout/>,children:[
    {index:true, element:<Home/>},
    {path:'food-app', element:<Home/>},
    {path:'home',element:<Home/>},
    {path:'menu',element:<Home/>},
    {path:'mobile',element:<Home/>},
    {path:'contact',element:<Home/>},
    {path:'cart',element:<Cart/>},
    {path:'placeorder',element:<PlaceOrder/>},
    {path:'*',element:<NotFounded/>},
    
  ]}
])
class App extends Component {


  render() {
    return <>
     <StoreContextProvider>
       <RouterProvider router={myRouter}/>
     </StoreContextProvider>
        
    </>


  }
}

export default App;

