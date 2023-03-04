import React from "react";
import click from '../assets/click.png'
import { useNavigate } from "react-router-dom";
const NavBar =()=>{
    const navigate= useNavigate()
    const handlRedirectCart=():void=>{
        navigate('cart')
    }
    const handleRedirect=()=>{
        navigate('/')
    }
    return(
        <div className="navbarWrapper">
           <header>
            <div className="logoInputWrapper">
                <div className="logoWrapper">
                    <img onClick={handleRedirect} src={click}/>
                </div>
                <div>
                    <input type='search' placeholder="Search for products" />
                    <button><i className="fa fa-search" aria-hidden="true"></i></button>
                </div>
            </div>
            <div className="NavIconWrapper">
            <p>Login   <i className="fa fa-user-circle-o" aria-hidden="true"></i></p>
            <p>Cart <i onClick={handlRedirectCart} className="fa fa-shopping-cart" aria-hidden="true"></i></p>
            </div>
           </header>
        </div>
    )
}
export default NavBar