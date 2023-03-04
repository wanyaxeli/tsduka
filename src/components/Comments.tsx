import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { Comment } from "./Data";
const Comments=()=>{
    const sliderSetting={
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        speed: 500, 
        autoplay:true,
        autoplaySpeed: 5000,
        dots:true
    }
    return(
        <Slider {...sliderSetting} className="commentWrapper">
            {Comment.map(item=>{
                return(
               <div key={item.id} className="commentContainer">
                <div className="sliderImageWrapper">
                <div className="personImage">
                 <img src={item.url}/>
                </div>
                </div>
                <div className="personName">
                    <h4>{item.name}</h4>
                </div>
                <div className="personComment">
                    <p>{item.comment}</p>
                </div>
               </div>
                )
            })}
        </Slider>
    )
}
export default Comments 