import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/ThemeSlice';
import cartReducer from '../features/CartSlice';
import authReducer from '../features/AuthSlice';

const combinedStore = configureStore({
    reducer: {
        theme: themeReducer,
        cart: cartReducer,
        auth: authReducer
    }
});

export default combinedStore;