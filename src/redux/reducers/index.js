import {combineReducers} from 'redux';

import Cart from './cart';
import Products from './products';
import Vouchers from './vouchers'

export default combineReducers({
    Cart: Cart,
    Products: Products,
    Vouchers: Vouchers
})