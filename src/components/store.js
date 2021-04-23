import React, { useState, useEffect } from "react";
import Product from './product'

import appleImg from '../assets/imgs/apple_img.jpg'
import mangoImg from '../assets/imgs/mango_img.jpg'
import orangeImg from '../assets/imgs/orange_img.jpg'
import bananaImg from '../assets/imgs/banana_img.jpg'

import { useSelector ,useDispatch,useStore} from "react-redux";

const Store = (props) => {
  const store = useSelector(state => state.Products.objects_products)


  var objTeste = [{
    name: props.name || "product",
    price: props.price || 55.48,
    quantity: props.quantity || 6,
    img: appleImg
  },{
    name: props.name || "product",
    price: props.price || 55.48,
    quantity: props.quantity || 6,
    img: mangoImg
  },{
    name: props.name || "product",
    price: props.price || 55.48,
    quantity: props.quantity || 6,
    img: orangeImg
  },{
    name: props.name || "product",
    price: props.price || 55.48,
    quantity: props.quantity || 6,
    img: bananaImg
  }]
  console.log(store)
  return (
  <>
    <div className="store_div_container">
      {objTeste.map((element,index) => {
        return <Product product={element} key={index}/>
      })}
    </div>
    
  </>
  );
};

export default Store;