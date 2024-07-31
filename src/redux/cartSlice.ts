import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Plant {
  _id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  imageUrl: string;
  quantity: number;
}

interface CartState {
  items: Plant[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action ) => {
      const plant = action.payload;
      const existingItem = state.items.find((item) => item._id === plant._id);

      if (existingItem) {
        existingItem.quantity += 1;
        console.log("Updated existing item:", existingItem); // Log the updated existing item
      } else {
        state.items.push({ ...plant, quantity: 1 });
        console.log("Added new item:", state.items[state.items.length - 1]); // Log the newly added item
      }

      console.log("Updated cart items:", state.items); // Log the entire cart state
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },

    increaseQuantity: (state, action: PayloadAction<string>) => {
      const existingItem = state.items.find((item) => item._id === action.payload);
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },

    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const existingItem = state.items.find((item) => item._id === action.payload);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
