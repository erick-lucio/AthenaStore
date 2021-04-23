export const initialStateCart = {
    cartProductsBanana: [],
    cartProductsApple: [],
    cartProductsMango: [],
    cartProductsOrange: [],
  }
const cart = (state = initialStateCart, action) => {
    switch(action.type){
        case "SET_PRODUCT":
            return {                
                cartProducts: [
                {
                    name: action.name,
                    price: action.price,
                    img_path: action.quantity,
                    ref_id: action.img,
                },
                
                ],
            };
        case "ADD_PRODUCT":
            return {                
                cartProducts: [
                {
                    name: action.name,
                    price: action.price,
                    img_path: action.quantity,
                    ref_id: action.img,
                },
                ...state.cartProducts
                ],
            };
        case "REMOVE_PRODUCT":
            return {
                ...state,
                user: {},
                loggedIn: false
            }
        default:
            return state
    }
}

export default cart;