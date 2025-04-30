import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  amount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart(state, action) {
        const item = action.payload;
        const existingitem = state.items.find((itemss) => itemss.id === item.id);
      
        if (!existingitem) {
          state.items.push({ ...item, quantity: 1 });
          state.amount += item.price; // ✅ Only increase amount when adding new item
        }
      },

    increment(state, action) {
      const item = state.items.find((itemss) => itemss.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.amount += item.price;
      }
    },

    decrement(state, action) {
      const item = state.items.find(
        (itemss) => itemss.id === action.payload
      );
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          state.amount -= item.price;
        } else {
          state.items = state.items.filter(
            (itemss) => itemss.id !== action.payload
          );
          state.amount -= item.price;
        }
      }
    },
  },
});

export const { addTocart, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
