import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import cardSlice from "./cartSlice";


const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cardSlice.reducer
    }
})

export default store;