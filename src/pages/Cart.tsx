import React,{useState,useEffect} from "react";
import pic from '../assets/pic1.jpg'
import { Icart } from "./Items";
import { useNavigate } from "react-router-dom";
interface Iarr{
    price:number
}
const Cart=()=>{
    const [cart,setCart]=useState<Icart[]>([])
    const [price,setPrice]=useState<number>()
    const [arrPrice,setArrPrice]=useState<number[]>()
    const [total,setTotal]=useState<number>()
    const [ttl,setTtl]=useState()
    let newCart:Icart[]=cart.flat()
    const navagate=useNavigate()
    const [priceArray,setPriceArray]=useState<number>()
    const handleDelete =(id:number)=>{
        let removeItem:Icart[]= newCart.filter(item=>item.id !== id)
        console.log(removeItem)
        setCart( removeItem)
     }
    useEffect(()=>{
    let item= window.localStorage.getItem('cart')
    if (item){
        let paredItem:Icart=JSON.parse(item)
        setCart([paredItem])
    }
    },[])
    useEffect(()=>{
   getPrice()
  },[price])
    const handleDecrement=(id:number)=>{
      let decreQuantity=newCart.find(item=>item.id === id)
       if(decreQuantity?.quantity === 1){
        return false
       }else {
        if(decreQuantity?.quantity !== undefined){
            decreQuantity.quantity --
            getPrice()
            getAllTotal ()
        }
       }
    }
    const handleIncrement = (id:number)=>{
        let decreQuantity=newCart.find(item=>item.id === id)
        if(decreQuantity?.quantity !== undefined){
            if (decreQuantity?.quantity<= decreQuantity?.stock){
                decreQuantity.quantity ++
                getPrice()
                getAllTotal ()
            }  
        }
    }
    function getTotal():void{
     let initialTotal= newCart.reduce((accu,cur)=>{
            return  accu + cur.price 
        },0)
        setTotal(initialTotal)
    }
    const handleGoHome=()=>{
        navagate('/')
    }
    function getPrice():void{
       newCart.forEach(item=>{
        let price = item.price * item.quantity
        setPrice(price)  
       }) 
    //    let initprice = newCart.map(item=>item.price * item.quantity) 
    //    setArrPrice(initprice) 
    }
    function getAllTotal (){
      let t=arrPrice?.reduce((acu,cur)=>{
           if(acu!==undefined){
            return acu + cur
           }
        },total)
        console.log(t)
    }
    console.log(price)
    useEffect(()=>{
        getPrice()
        getTotal()
        
    })
    if(newCart.length===0){
        return(
            <div className="emptyCart">
                 <p>Your cart is empty </p>
                 <button onClick={handleGoHome}>start shopping</button>
            </div>
        )
    }
    else {
    return(
        <div className="cartWrapper">
           <div className="cartItemWrapper">
            {
          newCart.map(item=>{
            return(
            <div key={item.id} className="cart">
                <div className="cartImage">
                    <img src={item.url}/>
                </div>
                <div className="cartContentWrapper">
                    <div className="cartNameWrapper">
                        <h3>{item.name}</h3>
                        <span onClick={()=>handleDelete(item.id)}>&times;</span>
                    </div>
                    <div className="cartBtnWrapper">
                        <div className="btn-wrapper">
                            <button onClick={()=>handleDecrement(item.id)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={()=>handleIncrement(item.id)}>+</button>
                        </div>
                        <div>
                            <p>{price}</p>
                        </div>
                    </div>
                </div>
            </div>
            )
          })
            }
           </div>
           <aside>
            <div className="totalWrapper">
                <p>Total </p>
                <p>$ {total}</p>
            </div>
            <div className="checkoutBanner">
                <button>Checkout</button>
            </div>
           </aside>
        </div>
    )
} }
export default Cart