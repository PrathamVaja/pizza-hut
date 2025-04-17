import { createSlice } from "@reduxjs/toolkit";
import productData from "../product";

const initialState = {
  cart: [],
  items: productData,
  totalQuentity: 0,
  totalPrice: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const find = state.cart.findIndex(
        (item) => item.name === action.payload.name
      );
     
      
      if (find >= 0) {
        state.cart[find].quentity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },

    getCartTotal: (state) => {
      let { totalPrice, totalQuentity } = state.cart.reduce(
        (totalValue, item) => {
         
          let itemValue = item.price * item.quentity;
          
          totalValue.totalPrice += itemValue;
          totalValue.totalQuentity += item.quentity;

          return totalValue;
        },
        { totalPrice: 0, totalQuentity: 0 }
      );

      state.totalPrice = parseFloat(totalPrice.toFixed(2));
      state.totalQuentity = totalQuentity;
    },

    // when click on - then decrease quentity
    reduceItem: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.name === action.payload.name && item.quentity > 1) {
          return { ...item, quentity: item.quentity - 1 };
        }
        return item;
      });
    },

    addItemQuentity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.name === action.payload.name) {
          return { ...item, quentity: item.quentity + 1 };
        }
        return item;
      });
    },

    // when click on deletebtn then remove item
    deleteItem: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.name !== action.payload.name
      );
    },
  },
});

export const {
  addToCart,
  getCartTotal,
  reduceItem,
  addItemQuentity,
  deleteItem,
} = cartSlice.actions;

export default cartSlice.reducer;
