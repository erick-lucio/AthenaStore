export const initialStateProduct = {
  objects_products: [],
};
const products = (state = initialStateProduct, action) => {
  switch (action.type) {
    case "SET_PRODUCT":
      return {
        objects_products: action.products,
      };
    case "ADD_PRODUCT_BANANA":
      return {
        ...state,
        objects_products: {
          banana: {
            quantity: state.objects_products.banana.quantity + 1,
          },
        },
      };
    case "ADD_PRODUCT_ORANGE":
      return {
        ...state,
        objects_products: {
          orange: {
            quantity: state.objects_products.banana.quantity + 1,
          },
        },
      };
    case "ADD_PRODUCT_APPLE":
      return {
        ...state,
        objects_products: {
          apple: {
            quantity: state.objects_products.banana.quantity + 1,
          },
        },
      };
    case "ADD_PRODUCT_MANGO":
      return {
        ...state,
        objects_products: {
          mango: {
            quantity: state.objects_products.banana.quantity + 1,
          },
        },
      };
    ///
    case "REMOVE_PRODUCT_BANANA":
      return {
        ...state,
        objects_products: {
          banana: {
            quantity: state.objects_products.banana.quantity - 1,
          },
        },
      };
    case "REMOVE_PRODUCT_ORANGE":
      return {
        ...state,
        objects_products: {
          orange: {
            quantity: state.objects_products.banana.quantity - 1,
          },
        },
      };
    case "REMOVE_PRODUCT_APPLE":
      return {
        ...state,
        objects_products: {
          apple: {
            quantity: state.objects_products.banana.quantity - 1,
          },
        },
      };
    case "REMOVE_PRODUCT_MANGO":
      return {
        ...state,
        objects_products: {
          mango: {
            quantity: state.objects_products.banana.quantity - 1,
          },
        },
      };
    default:
      return state;
  }
};

export default products;
