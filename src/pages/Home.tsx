import React from "react";
import Banner from "../components/Banner";
import Comments from "../components/Comments";
import NavBar from "../components/NavBar";
import Products from "../components/Products";
const  Home =()=>{
    return(
        <>
         <Banner/>
         <div className='iconDisplayer'></div>
         <Products/>
         <div className='iconDisplayer customer'>
        <h4> What Our Customers Say</h4>
         </div>
         <Comments/>
        </>
    )
}
export default Home