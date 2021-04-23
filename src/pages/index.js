import React, { useState, useEffect } from "react";
import {createStore} from "redux"
import Header from '../components/header'
import Cart from '../components/cart'
import Store from '../components/store'
import { useSelector ,useDispatch,useStore} from "react-redux";

const api = require('../services/api')


const MainPage = () => {
  const [vouchers, setVouchers] = useState(0)
  const [products, setProducts] = useState(0)
  const dispatch = useDispatch()
  const store = useStore()
  var productsList = 0
  var vouchersList = 0

  const getVouchers = async () => {
    try {
      if(vouchers == 0){
        while(vouchersList == 0){
          vouchersList = await api.default.getVouchers()
        }    
  
        dispatch({
          type:"SET_VOUCHER",
          vouchers: vouchersList.data
        })
        setVouchers(vouchersList)
      }
    } catch (error) {
      console.log(error)
    }
  
  }
  const getProducts = async () => {
    try {
      if(products == 0){
        
          productsList = await api.default.getProducts()
        
          dispatch({
            type:"SET_PRODUCT",
            products: productsList.data
          })
        setProducts(productsList)
      }
        
   
    } catch (error) {
      console.log(error)
    }
  
  }
    if(vouchers == 0 || products == 0){
      getVouchers()
      getProducts()
    }

  

  return (
  <>
    <Header/>
    <div className="main_div_content">
      <Store/>
      <Cart/>
    </div>

  </>
  );
};

export default MainPage;