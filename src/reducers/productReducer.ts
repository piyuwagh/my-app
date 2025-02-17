import { ProductContextValueType } from "../config/context";

export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const ADD_PRODUCTS_SUCCESS = "ADD_PRODUCTS_SUCCESS";
export const UPDATE_PRODUCTS_SUCCESS = "UPDATE_PRODUCTS_SUCCESS";
export const DELETE_PRODUCTS_SUCCESS = "DELETE_PRODUCTS_SUCCESS";
export const RESET_PRODUCTS_SUCCESS = "RESET_PRODUCTS_SUCCESS";

export const initialProducts: ProductContextValueType = {
  products: [],
  currentProductID: NaN,
};

export function productReducer(
  state: ProductContextValueType = initialProducts,
  { type, payload }: { type: string; payload: any }
) {
  switch (type) {
    case GET_PRODUCTS_SUCCESS:
      return { ...state, products: payload };
    case ADD_PRODUCTS_SUCCESS:
      return { ...state };
    case UPDATE_PRODUCTS_SUCCESS:
      return { ...state };
    case DELETE_PRODUCTS_SUCCESS:
      return { ...state };
    case RESET_PRODUCTS_SUCCESS:
      return initialProducts;
    default:
      return state;
  }
}
