import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Array of cart items
        totalQuantity: 0,
        totalAmount: 0
    },
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            
            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.price * existingItem.quantity;
            } else {
                state.items.push({
                    ...newItem,
                    quantity: 1,
                    totalPrice: newItem.price
                });
            }
            
            // Recalculate totals
            state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
            state.totalAmount = state.items.reduce((total, item) => total + item.totalPrice, 0);
        },
        removeItem: (state, action) => {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            
            if (existingItem) {
                state.items = state.items.filter(item => item.id !== id);
                
                // Recalculate totals
                state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
                state.totalAmount = state.items.reduce((total, item) => total + item.totalPrice, 0);
            }
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            
            if (existingItem) {
                existingItem.quantity = quantity;
                existingItem.totalPrice = existingItem.price * quantity;
                
                // Recalculate totals
                state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
                state.totalAmount = state.items.reduce((total, item) => total + item.totalPrice, 0);
            }
        }
    }
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;