import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isLoggedIn: false
    },
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        setUserInfo: (state, action) => {
            state.user = {...state.user, ...action.payload};
        }
    }
});

export const { login, logout, setUserInfo } = authSlice.actions;

export default authSlice.reducer;