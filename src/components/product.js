import React, { useState, useEffect } from "react";

import appleImg from '../assets/imgs/apple_img.jpg'
import mangoImg from '../assets/imgs/mango_img.jpg'
import orangeImg from '../assets/imgs/orange_img.jpg'
import bananaImg from '../assets/imgs/banana_img.jpg'

import { useSelector ,useDispatch,useStore} from "react-redux";

const Product = (props) => {   
    const store = useStore() 
    const dispatch = useDispatch()
    function addItemToCart(){
        console.log(store.getState())
    }

    return (
    <>
        <div className="product_div_container">
            <div className="product_div_item">
                <img className="product_item_img" src={props.product.img}></img>                
                <div className="product_item_set_bottom">
                    <p className="product_item_name">{props.product.name}</p>
                    <div className="product_div_align">
                        <p className="product_item_price">${props.product.price}</p>
                        <p className="product_item_qtdleft">{props.product.quantity} Left</p>
                    </div>
                    <input 
                        type="submit" 
                        value="BUY" 
                        className="product_item_button"
                        onClick={()=>addItemToCart()}></input>
                </div>

            </div>
        </div>
    </>
  );
};

export default Product;