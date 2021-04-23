import React, { useState, useEffect } from "react";

import appleImg from '../assets/imgs/apple_img.jpg'
import mangoImg from '../assets/imgs/mango_img.jpg'
import orangeImg from '../assets/imgs/orange_img.jpg'
import bananaImg from '../assets/imgs/banana_img.jpg'

const ProductCart = (props) => {
  return (
  <>
    <div className="product_cart_div_container">
      <img src={appleImg} className="product_cart_img"></img>
      <div className="product_cart_descriptions">
        <div className="product_cart_product_name">
          Product Name
        </div>
        <div className="product_cart_qtd_price">              
          <p>Quantity</p>
          <p>$ price</p>
        </div>
      </div>
      <div className="product_cart_button">
        <input type="submit" value="+" className="product_cart_button_plus"></input>
        <input type="submit" value="-" className="product_cart_button_minus"></input>
      </div>
    </div>
  </>
  );
};

export default ProductCart;