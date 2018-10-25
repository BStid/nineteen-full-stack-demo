import axios from "axios";

const GET_PRODUCTS = "GET_PRODUCTS";

const initialState = {
  products: []
};

export function getProducts() {
  return {
    type: GET_PRODUCTS,
    payload: axios.get("/api/products").then(res => {
      return res.data;
    })
  };
}

export default function reducer(state = initialState, action) {
  // console.log("action: ", action);
  switch (action.type) {
    case GET_PRODUCTS + "_FULFILLED":
      return { ...state, products: action.payload };
    default:
      return state;
  }
}
