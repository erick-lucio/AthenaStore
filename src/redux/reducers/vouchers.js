export const initialStateCart = {
    vouchers: [],
  }
const vouchers = (state = initialStateCart, action) => {
    switch(action.type){
        case "SET_VOUCHER":
            return {                
                vouchers: action.vouchers,
            };
        default:
            return state
    }
}

export default vouchers;