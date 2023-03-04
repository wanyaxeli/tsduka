import React from "react";
import { data } from "./Data";
import { useNavigate } from "react-router-dom";
import { Idata } from "./Data";
const Products=()=>{
    const navigate = useNavigate()
    const handleRedirect =(id:number):void=>{
    let itemData= data.find(item=>item.id === id)
    //    let newItem=Object.assign({},itemData?.items,{quantity:1})
      navigate('/:id',{state:{item:itemData}})
    }
    return(
        <div className="productsWrapper">
           {
            data.map(item=>{
                return(
                <div key={item.id} className="cardWrapper"onClick={()=>handleRedirect(item.id)}>
                    <div className="productPicwrapper">
                        <img src={item.imgUrl}/>
                    </div>
                    <div>
                        <p>{item.category} <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i></p>
                    </div>
                </div>
                )
            })
           }
        </div>
    )
}
export default Products