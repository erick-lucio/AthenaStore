import React, { useState, useEffect } from "react";
import ProductCart from './product_cart'
import { useSelector ,useDispatch,useStore} from "react-redux";


const Cart = (props) => {
  const courses = useSelector(state => state)
  const store = useStore()
  function showState(){
    console.log(store.getState())
  }
  return (
  <>
    <div className="cart_div_container">
        <div className="cart_menu">
          <div className="cart_menu_tittle">
              <p>Shopping Cart</p>
          </div>
          <ProductCart/>
          <div className="cart_discount_div">
            <input type="text" placeholder="Discount Code" className="cart_discount_text"></input>
            <input type="submit" value="APPLY" className="cart_discount_input"></input>
          </div>
          <div className="cart_price_numbers">
            <p>Subtotal</p>
            <p>1</p>
          </div>
          <div className="cart_price_numbers">
            <p>Shipping</p>
            <p>1</p>
          </div>
          <div className="cart_price_numbers">
            <p>Discount</p>
            <p>1</p>
          </div>
          <div className="cart_price_numbers cart_price_bold">
            <p>Total</p>
            <p>1</p>
          </div>

        </div>
        <input 
          type="submit" 
          value="Checkout" 
          className="cart_discount_checkout_input"
          onClick={()=>showState()}></input>
    </div>
  </>
  );
};

export default Cart;