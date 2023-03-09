import React ,{useState,useEffect}from "react";
import {useLocation} from "react-router-dom";
import pic from '../assets/pic.jpg'
import { Idata } from "../components/Data";
export interface Icart{
    id:number
    name:string
    quantity:number
    price:number
    description:string
    stock:number
    url:string
}
const Items =()=>{
    const location = useLocation()
    const[product,setProduct]=useState<Idata[]>()
    const [cart,setCart]=useState<Icart[]>([])
    const itemData= location.state.item
    let pro=product?.map(item=>item.items).flat()
    useEffect(()=>{
     if(itemData){
        setProduct([itemData])
     }
    },[])
    const handleCart=(id:number)=>{
    let carItem = pro?.find(item=>item.id === id)
    let newCart=Object.assign({},carItem,{quantity:1})
    setCart(pre=>[...pre,newCart])
    }
    useEffect(()=>{
      window.localStorage.setItem('cart',JSON.stringify(cart))
    },[cart])
    return(
        <div className="productWrapper">
          {pro!==undefined?pro.map(item=>{
            return(
                <div key={item.id} className="productCard">
                <div className="itemCardImage">
                    <img src={item.url}/>
                </div>
                <div className="cardIconWrapper">
                   <div className="iconContainer">
                   <i className="fa fa-heart" aria-hidden="true"/>
                   </div>
                </div>
                <div className="ItemcardWrapper">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <h5>{item.price}</h5>
                   <div>
                   <button  onClick={()=>handleCart(item.id)}>buy now</button>
                   </div>
                </div>
            </div>
            )
          }):<p className="loadingtext">loading ....</p>}
        </div>
    )
}
export default Items