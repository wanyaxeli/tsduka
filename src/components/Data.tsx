import React from "react";
import pic from '../assets/pic.jpg'
import pic1 from '../assets/pic8.jpg'
import pic2 from '../assets/pic1.jpg'
import pic3 from '../assets/pic2.jpg'
import pic4 from '../assets/pic3.jpg'
import pic5 from '../assets/pic4.jpg'
import pic6 from '../assets/pic5.jpg'
import pic7 from '../assets/pic6.jpg'
import pic8 from '../assets/pic7.jpg'
import pic11 from '../assets/pic11.jpg'
import pic9 from '../assets/pic9.jpg'
import pic10 from '../assets/pic10.jpg'
import pic12 from '../assets/seat.jpg'
import pic13 from '../assets/seat1.jpg'
import pic15 from '../assets/seat3.jpg'
import c1 from '../assets/c1.jpg'
import c2 from '../assets/c2.jpg'
type item = {
    id:number
    name:string
    price:number
    url:string
    description:string
    stock:number
}
interface Icomment{
    name:string
    url:string
    id:number
    comment:string
}
export interface Idata {
    id:number
    category:string
    items:item[]
    imgUrl:string
}
interface banner{
 id:number
 description:string
 url:string
}
export const data:Idata[] =[{id:1,category:'electronics',items:[{id:1,name:'desk top copmuter',stock:20,price:200000,url:pic,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
{id:2,name:'laptop',stock:230,price:100000,url:pic,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}],imgUrl:pic11},
{id:2,category:'food',items:[{id:1,name:'Fruit and vegetables',stock:10,price:2000,url:pic7,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
{id:2,name:'Protein',stock:2,price:100000,url:pic5,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}],imgUrl:pic5},
{id:3,category:'furniture',items:[{id:1,stock:40,name:'Farmhouse Furniture',price:2000,url:pic13,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
{id:2,stock:5,name:'French Style',price:30000,url:pic15,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
{id:3,stock:15,name:'Art Deco Style',price:2000,url:pic12,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}],imgUrl:pic13},
{id:5,category:'cars',items:[{id:1,name:'audi',price:2000000,url:pic10,stock:5,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
{id:2,name:'dorge',price:300000,stock:12,url:pic1,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},{id:3,name:'lamboguini',price:5000000,stock:4,url:pic8,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
{id:4,name:'pargani',price:200000,stock:2,url:pic1,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
{id:5,name:'burgatti',price:1000000,stock:4,url:pic3,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}],imgUrl:pic1},
{id:4,category:'smartphones',items:[{id:1,name:'samsung edge',stock:4,price:50000,url:pic9,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
{id:2,name:'Iphone 13 pro',stock:8,price:100000,url:pic4,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}],imgUrl:pic2}
]

export const banner:banner[] =[{id:1,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',url:pic},
{id:2,description:'get latest designs on the market',url:c2},
{id:3,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',url:pic3},
{id:4,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',url:pic4},]

export const Comment:Icomment[]=[{name:'everlyn wood',id:1,url:c2,comment:'You get what you order'},
{name:'eli warts',id:2,url:c1,comment:'delivery is on time'},
{name:'sharon wayne',id:3,url:c2,comment:'the app is user friendly'},
{name:'edu were',id:4,url:c1,comment:'the prices are friendly'}]