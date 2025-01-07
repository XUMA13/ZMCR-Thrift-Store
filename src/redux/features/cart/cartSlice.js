import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  selectedItems: 0,
  totalPrice: 0,
  tax: 0,
  taxRate: 0.1, // Example tax rate of 10%
  grandTotal: 0,
  message: '', // Add a message field to the state
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.products.find(item => item.id === product.id);

      if (existingProduct) {
        // If the product is already in the cart, set a message
        state.message = 'Item already added to the cart';
      } else {
        // If the product is not in the cart, add it
        state.products.push({ ...product, quantity: 1 });
        state.message = ''; // Clear the message
      }

      // Update cart totals
      state.selectedItems = setSelectedItems(state);
      state.totalPrice = setTotalPrice(state);
      state.tax = setTax(state);
      state.grandTotal = setGrandTotal(state);
    },
    updateQuantity: (state, action) => {
      const { type, id } = action.payload;
      const product = state.products.find(item => item.id === id);

      if (product) {
        if (type === 'increment') {
          product.quantity += 1;
        } else if (type === 'decrement' && product.quantity > 1) {
          product.quantity -= 1;
        }
      }

      // Update cart totals
      state.selectedItems = setSelectedItems(state);
      state.totalPrice = setTotalPrice(state);
      state.tax = setTax(state);
      state.grandTotal = setGrandTotal(state);
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.products = state.products.filter(item => item.id !== id);

      // Update cart totals
      state.selectedItems = setSelectedItems(state);
      state.totalPrice = setTotalPrice(state);
      state.tax = setTax(state);
      state.grandTotal = setGrandTotal(state);
    },
    clearCart:(state) => {
        state.products = [];
        state.selectedItems = 0;
        state.totalPrice = 0;
        state.tax = 0;
        state.grandTotal = 0;
    }
    // Other reducers like clearCart, etc.
  },
});

// Utility functions
export const setSelectedItems = (state) => state.products.reduce((total, product) => {
  return total + product.quantity;
}, 0);

export const setTotalPrice = (state) => state.products.reduce((total, product) => {
  return total + product.price * product.quantity;
}, 0);

export const setTax = (state) => {
  return state.totalPrice * state.taxRate;
};

export const setGrandTotal = (state) => {
  return state.totalPrice + state.tax;
};

export const { addToCart, updateQuantity, removeFromCart,clearCart } = cartSlice.actions;
export default cartSlice.reducer;