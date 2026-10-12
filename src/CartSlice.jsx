import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Array of items: { name, image, cost, quantity }
  },
  reducers: {
    // Reducer 1: addItem
    // Adds an item to the shopping cart. If already present, increments its quantity.
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          name,
          image,
          cost,
          quantity: 1,
        });
      }
    },

    // Reducer 2: removeItem
    // Removes an item from the shopping cart by matching plant name.
    removeItem: (state, action) => {
      const itemNameToRemove =
        typeof action.payload === 'object' && action.payload !== null
          ? action.payload.name
          : action.payload;

      state.items = state.items.filter((item) => item.name !== itemNameToRemove);
    },

    // Reducer 3: updateQuantity
    // Updates the quantity of a specific item in the cart.
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.name === name);

      if (itemToUpdate) {
        if (quantity > 0) {
          itemToUpdate.quantity = quantity;
        } else {
          // If quantity is reduced to 0 or below, remove the item
          state.items = state.items.filter((item) => item.name !== name);
        }
      }
    },
  },
});

// Export action creators for use in components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export default reducer for configuring the Redux store
export default CartSlice.reducer;
