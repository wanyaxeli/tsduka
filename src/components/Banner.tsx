import React,{useState} from "react";
import seat from '../assets/seat.jpg'
 import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { banner } from "./Data";
const Banner=()=>{
    const [sliderRef, setSliderRef] = useState(null)
    const sliderSetting={
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 1000, // ms
        autoplay:true,
        autoplaySpeed: 4000,
        dots:true
    }
 
    return(
        <div className="bannerWrapper">
            <div className="bannerContainer">
                <Slider ref={sliderRef} {...sliderSetting}  className="slider">
                          {
                            banner.map(item=>{
                                return(
                                    <div key={item.id} className="sliderContainer">
                                        <div className="sliderTextWrapper">
                                            <p>{item.description}</p>
                                        </div>
                                        <div className="sliderImageWrapper">
                                            <img className="sliderImg" src={item.url}/>
                                        </div>
                                    </div>
                                )
                            })
                          }
                </Slider>
                <div className="bannerBar"></div>
            </div>
            <aside>
                <div className="asideItemWrapper"></div>
                <div className="asideItemWrapper"></div>
            </aside>
        </div>
    )
}
export default Banner