import React from "react";
import {Routes,Route} from 'react-router-dom'
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Items from "../pages/Items";
const Links =()=>{
    return(
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element ={<Items/>}/>
        <Route path="cart" element={<Cart/>}/>
       </Routes>
    )
}
export default Links