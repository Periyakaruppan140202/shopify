import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.items.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (index === -1) {
        state.items = [...state.items, action.payload];
      } else {
        let newCart = [...state.items];
        if (newCart[index].qty >= 5) {
          alert("You have reached Maximum Quantity of your Order!");
        } else {
          newCart[index].qty = newCart[index].qty + 1;
          state.items = newCart;
        }
      }
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      let newCart = [...state.items];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(`Cant't remove product`);
      }
      state.items = newCart;
    },
    minusQuantity: (state, action) => {
      const index = state.items.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      let newCart = [...state.items];
      newCart[index].qty = newCart[index].qty - 1;
      state.items = newCart;
    },
    plusQuantity: (state, action) => {
      const index = state.items.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      let newCart = [...state.items];
      newCart[index].qty = newCart[index].qty + 1;
      state.items = newCart;
    },
  },
});

export const { addToCart, removeFromCart, minusQuantity, plusQuantity } =
  cartSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.cart.items;
export const selectTotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.qty, 0);
export const selectLength = (state) =>
  state.cart.items.reduce((length, item) => length + item.qty, 0);

export default cartSlice.reducer;
